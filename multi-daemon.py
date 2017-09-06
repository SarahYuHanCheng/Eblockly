from websocket_server import WebsocketServer
import time
import threading
import socket
import os

#global variable
tcp_server_bind_ip = ""
tcp_server_bind_port = 17784
tcp_server_maxclientnum = 5

tcp_client_destination_ip = "127.0.0.1"
tcp_client_destination_port = 16673

websocket_server_port=9998

blockly_cmd=""
led_on_time=0
daemon_websocket_server = WebsocketServer(websocket_server_port)
tcpClient_list_connect=[]
tcpClient_list_name=[]


who_is_client=""

arduino_uno=             "arduinouno#####"
raspberry_pi=            "reaspberrypi###"
maxmsp=                  "maxmsp#########"
puredata=                "puredata#######"
tensorflow_img_recognize="tensorflowimg##"

selectedImg = 'noimage'

i = 0
                    
        
def tcpclient_thread(tcp_server_connect,clientIp,clientPort,wrapper_fileIsSend):
    print("[+] New server socket thread started for " + clientIp + ":" + str(clientPort))
    tcp_server_recv = (tcp_server_connect.recv(1024)).strip().decode('ISO-8859-1')
    global tcpClient_list_connect
    global tcpClient_list_name
    clientName = tcp_server_recv[0:15]
    print('client is ' + clientName)
    if clientName in tcpClient_list_name:
        tcpClient_list_connect[tcpClient_list_name.index(clientName)]=tcp_server_connect
        print("replace the connect info")

    else:
        tcpClient_list_connect.append(tcp_server_connect)
        tcpClient_list_name.append(clientName)
        print("append")

    daemon_websocket_server.send_message_to_all(clientName)#tcp_server_recv
    if clientName.find(tensorflow_img_recognize)!=-1:
        print('fileIsSend' + str(wrapper_fileIsSend[0]))
        if wrapper_fileIsSend[0]==True:            
            daemon_websocket_server.send_message_to_all(tcp_server_recv)
            print(tcp_server_recv)  # tensorflowimg##tensorflowPrediction#[5 5]


                
        else :
            clientIsTensorflow(wrapper_fileIsSend,tcp_server_connect)

    global threads
    global i
    while True:
        try:
            tcp_server_recv = (tcp_server_connect.recv(1024)).strip().decode('ISO-8859-1')
            print("client(" + clientIp + ":" + str(clientPort) + ")said: " + tcp_server_recv)
            daemon_websocket_server.send_message_to_all(tcp_server_recv)
            if tcp_server_recv.find('saveToDbSuccessful') !=-1 :
                wrapper_fileIsSend[0]=False
                print('reset fileIsSend state to '+str(wrapper_fileIsSend))
                tcp_server_connect.close() 
        except:
            print("client disconnect!") 
            break
def clientIsTensorflow(wrapper_fileIsSend,tcp_server_connect):
    
    print('fileIsSend' +  str(wrapper_fileIsSend[0]))
    while not  wrapper_fileIsSend[0]:
         
        tcp_server_recv = (tcp_server_connect.recv(1024)).strip().decode('utf-8')
        print("not wait")# sarah
        print(tcp_server_recv)
        if tcp_server_recv.find('fileBufferIsReady')!=-1:
            img_size = os.stat(selectedImg).st_size
            print('file size=' + str(img_size))

            mb = float(img_size) / 1024
            mb = mb + 1
            print(mb)
            while True:
                filename=selectedImg
                f = open(filename,'rb')
                l = f.read(1024)

                while (l and mb>0):
                       mb = mb-1         
                       print(mb)
                       tcp_server_connect.send(l)
                       #print('Sent ',repr(l))  
                       l = f.read(1024)
                       if mb<0:
                            f.close()
                            print('Done sending')                     
                            tcp_server_connect.close()
                            tcp_server_recv=None
                if tcp_server_recv==None:
                        wrapper_fileIsSend[0]=True
                        
                        break        

# task: tcp server
def tcp_server():

        tcp_server_socket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        # tcp_server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1) #for udp
        tcp_server_socket.bind((tcp_server_bind_ip,tcp_server_bind_port))
        threads = []
        fileIsSend=False
        wrapper_fileIsSend=[fileIsSend]
        while True:
            tcp_server_socket.listen(tcp_server_maxclientnum)
            print("Multithreaded Python server : Waiting for connections from TCP clients...")
            (tcp_server_connect, (clientIp,clientPort)) = tcp_server_socket.accept()

            childThread_tcpclient_thread = threading.Thread(target=tcpclient_thread, args=(tcp_server_connect,clientIp,clientPort,wrapper_fileIsSend))
            childThread_tcpclient_thread.start()
            threads.append(childThread_tcpclient_thread)

        for t in threads:
            t.join()


def new_client(client, server):
        print("-----------------------")
        print("blockly in!")

def client_left(client, server):
        print("")


def message_received(client, server, message):
        if len(message) > 200:
                message = message[:200]+'..'
        global blockly_cmd
        blockly_cmd = message

        print("blockly said: %s" % (blockly_cmd))
        cmdToWho = blockly_cmd[0:15]
        print('cmd to who? ' + cmdToWho)
        print(str(tcpClient_list_connect[tcpClient_list_name.index(cmdToWho)]))
        if cmdToWho == maxmsp:
            tcpClient_list_connect.remove(tcpClient_list_connect[tcpClient_list_name.index(cmdToWho)])
            tcpClient_list_name.remove(cmdToWho)
            tcpClient_list_connect[tcpClient_list_name.index(cmdToWho)].send((str(blockly_cmd)+'\n').encode('utf-8'))
        elif cmdToWho.find(tensorflow_img_recognize)!= -1:
            if blockly_cmd.find('sendImgToTensorflow')!=-1:
                    tcpClient_list_connect[tcpClient_list_name.index(cmdToWho)].send((tensorflow_img_recognize+'readyTheFileBuffer').encode('utf-8'))
                    global selectedImg
                    selectedImg = blockly_cmd[blockly_cmd.index('file://')+6:len(blockly_cmd)]
                    print('select image: ' + selectedImg)
                    print('daemon send to client: readyTheFileBuffer')
            else:
                tcpClient_list_connect[tcpClient_list_name.index(cmdToWho)].send(blockly_cmd.encode('utf-8'))
                print("send to client: " + blockly_cmd)
        else:    
            print("send to client: " + blockly_cmd)
            tcpClient_list_connect[tcpClient_list_name.index(cmdToWho)].send((str(blockly_cmd)+'\n').encode('utf-8'))


# task: websocket server
def my_websocket_server():
        daemon_websocket_server.set_fn_new_client(new_client)
        print("daemon is ready!")
        print("wait for blockly")

        daemon_websocket_server.set_fn_client_left(client_left)
        daemon_websocket_server.set_fn_message_received(message_received)
        daemon_websocket_server.run_forever()




mainThread_websocket_server = threading.Thread(target=my_websocket_server, args=())
mainThread_websocket_server.start()
mainThread_tcp_server = threading.Thread(target=tcp_server, args=())
mainThread_tcp_server.start()

mainThread_tcp_server.join()
mainThread_websocket_server.join()

