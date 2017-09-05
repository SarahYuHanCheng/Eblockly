import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.util.Scanner;

import com.cycling74.max.Atom;
import com.cycling74.max.Callback;
import com.cycling74.max.MaxSystem;

public class TcpFileIO {

	// private Socket socket;
	// private String host="127.0.0.1";
	private int port = 17784;

	private InetAddress iAddress = null;
	private String address = null;
	private boolean goodParams = false;
	private String debugString = "TcpSender";
	private Callback successCallback = null;
	private Callback failureCallback = null;
	private int activePackets = 0;

	class TcpFileIOThread extends Thread {
		private String msg;
		private boolean isConnect = false;
		private boolean isFileTransferComplete = true;
		private String tcpInputStream;
		private final String fileTransfer = "file##";
		private final String msgTransfer = "msg###";
		private Socket socket;
		private final static String maxmsp_cmdStart="maxmsp#########";
		private final static String maxmsp_cmdEnd=  "maxmspend######";
		private String get_msg;
				

		TcpFileIOThread(String msg) {
			this.msg = msg;

		}

		public void recvMsg() {

			// not a file transfer, so doesn't need to open file buffer
			// just print it.
			BufferedReader in;
			PrintWriter out;
			try {
				
				System.out.println(socket);
				out = new PrintWriter(socket.getOutputStream(), true);
				in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
				
				out.println(maxmsp_cmdStart+"@"+msg);	
				System.out.println("Send:"+maxmsp_cmdStart+"@"+msg);

		        for (;;)
		        {
		          get_msg = in.readLine();
		     
		          System.out.println(get_msg);
		          break;
		        }
				
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}

		}

		public void run() {
			try {
				socket = new Socket(iAddress, port);		
				recvMsg();
		        if (TcpFileIO.this.successCallback != null)
		        {
		        	System.out.println("Success call back!");
		        	TcpFileIO.this.successCallback.setArgs(new Object[] { Atom.parse(get_msg) });
		        	TcpFileIO.this.successCallback.execute();
		        }
			} catch (SocketException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				if (TcpFileIO.this.failureCallback != null) {
					TcpFileIO.this.failureCallback.setArgs(new Object[] { Atom.parse(get_msg) });
					TcpFileIO.this.failureCallback.execute();
				} else {
					MaxSystem.error(TcpFileIO.this.debugString + ": socket exception: " + e);
					MaxSystem.post("not sent: " + this.msg);
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				if (TcpFileIO.this.failureCallback != null) {
					TcpFileIO.this.failureCallback.setArgs(new Object[] { Atom.parse(get_msg) });
					TcpFileIO.this.failureCallback.execute();
				} else {
					MaxSystem.error(TcpFileIO.this.debugString + ": io exception: " + e);
					MaxSystem.post("not sent: " + this.msg);
				}
			}
		}

	}

	public TcpFileIO(String address, int port) {
		setAddress(address);
		setPort(port);
	}

	public TcpFileIO() {
	}

	private void initSendSocket(String addrarg, int portarg) {
		if ((addrarg != null) && (portarg != 0)) {
			try {
				this.goodParams = false;
				this.iAddress = InetAddress.getByName(addrarg);
				this.port = portarg;
				this.goodParams = true;
			} catch (UnknownHostException uhe) {
				MaxSystem.error(this.debugString + ": unknown host: " + addrarg);
			}
		}
	}

	public void setSuccessCallback(Object toCallIn, String methodName) {
		if ((toCallIn != null) && (methodName != null)) {
			this.successCallback = new Callback(toCallIn, methodName, new Object[] { Atom.emptyArray });
		}
	}

	public void setFailureCallback(Object toCallIn, String methodName) {
		if ((toCallIn != null) && (methodName != null)) {
			this.failureCallback = new Callback(toCallIn, methodName, new Object[] { Atom.emptyArray });
		}
	}

	public void setAddress(String address) {
		if (!address.equals(this.address)) {
			this.address = address;
			initSendSocket(address, this.port);
		}
	}

	public String getAddress() {
		return this.address;
	}

	public void setPort(int port) {
		if (port != this.port) {
			this.port = port;
			initSendSocket(this.address, port);
		}
	}

	public void setDebugString(String debugString) {
		this.debugString = debugString;
	}

	public int getPort() {
		return this.port;
	}

	public int getActivePackets() {
		return this.activePackets;
	}

	public void send(int i) {
		send(new Integer(i).toString());
	}

	public void send(float f) {
		send(new Float(f).toString());
	}

	public void send(String msg, Atom[] a) {
		send(msg + " " + Atom.toOneString(a));
	}

	public void send(Atom[] a) {
		send(Atom.toOneString(a));
	}

	private void send(String s) {
		if (this.goodParams) {
			TcpFileIOThread sd = new TcpFileIOThread(s);
			sd.start();
		}
	}
	// private void connect() {
	// if (this.goodParams) {
	// TcpFileIOThread sd = new TcpFileIOThread("connect est.");
	// sd.start();
	// }
	// }

	public void close() {
		this.successCallback = null;
		this.failureCallback = null;
	}
}
