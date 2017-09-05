'use strict';

goog.provide('Blockly.JavaScript.socketcomm');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['gene_tcp'] = function(block) {

   var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
	      Blockly.JavaScript.ORDER_NONE) || '\'\'';
   var functionName = Blockly.JavaScript.provideFunction_(
   'sendToTCP',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(cmd){',
   'var ws = new WebSotcket(\'ws://localhost:9998/echo\');',
   'ws.onopen = function(){',
	  'ws.send(\'tcp@\'+cmd);',
   '};',
   'ws.onmessage = function (evt){',
	  'var received_msg = evt.data;',
	  'alert(evt.data);',
   '};',
   'ws.onclose = function(){',
	  'alert(\'Connection close\');',

	'};',
	   'return \'123\'',
	'}']);
  var code = functionName + '(' + msg + ');';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};
Blockly.JavaScript['gene_udp'] = function(block) {

   var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
	      Blockly.JavaScript.ORDER_NONE) || '\'\'';
   var functionName = Blockly.JavaScript.provideFunction_(
   'sendToUDP',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(cmd){',
   'var ws = new WebSotcket(\'ws://localhost:9998/echo\');',
   'ws.onopen = function(){',
	  'ws.send(\'udp@\'+cmd);',
   '};',
   'ws.onmessage = function (evt){',
	  'var received_msg = evt.data;',
	  'alert(evt.data);',
   '};',
   'ws.onclose = function(){',
	  'alert(\'Connection close\');',

	'};',
	   'return \'123\'',
	'}']);
  var code = functionName + '(' + msg + ');';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};
Blockly.JavaScript['gene_uds'] = function(block) {
   //uds = unix socket domain
   var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
	      Blockly.JavaScript.ORDER_NONE) || '\'\'';
   var functionName = Blockly.JavaScript.provideFunction_(
   'sendToUDS',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(cmd){',
   'var ws = new WebSotcket(\'ws://localhost:9998/echo\');',
   'ws.onopen = function(){',
	  'ws.send(\'uds@\'+cmd);',
   '};',
   'ws.onmessage = function (evt){',
	  'var received_msg = evt.data;',
	  'alert(evt.data);',
   '};',
   'ws.onclose = function(){',
	  'alert(\'Connection close\');',

	'};',
	   'return \'123\'',
	'}']);
  var code = functionName + '(' + msg + ');';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};
Blockly.JavaScript['gene_rpi'] = function(block) {
   //uds = unix socket domain
   var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
	      Blockly.JavaScript.ORDER_NONE) || '\'\'';
   var functionName = Blockly.JavaScript.provideFunction_(
   'sendToRpi',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(cmd){',
   'var ws = new WebSotcket(\'ws://localhost:9998/echo\');',
   'var rpi_cmdStart= \'raspberrypi####\';',
   'ws.onopen = function(){',
	  'ws.send(rpi_cmdStart+\'@\'+cmd);',
   '};',
   'ws.onmessage = function (evt){',
	  'var received_msg = evt.data;',
	  'alert(evt.data);',
   '};',
   'ws.onclose = function(){',
	  'alert(\'Connection close\');',

	'};',
	   'return \'123\'',
	'}']);
  var code = functionName + '(' + msg + ');';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};
Blockly.JavaScript['gene_arduino'] = function(block) {
   //uds = unix socket domain
   var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
	      Blockly.JavaScript.ORDER_NONE) || '\'\'';
   var functionName = Blockly.JavaScript.provideFunction_(
   'sendToArduino',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(cmd){',
   'var ws = new WebSotcket(\'ws://localhost:9998/echo\');',
   'var arduino_uno_cmdStart= \'arduinouno#####\';',
   'var arduino_uno_cmdEnd= \'arduinounoend##\';',
   'ws.onopen = function(){',
	  'ws.send(arduino_uno_cmdStart+\'@\'+cmd+\'@\'+arduino_uno_cmdEnd);',
   '};',
   'ws.onmessage = function (evt){',
	  'var received_msg = evt.data;',
	  'alert(evt.data);',
   '};',
   'ws.onclose = function(){',
	  'alert(\'Connection close\');',

	'};',
	   'return \'123\'',
	'}']);
  var code = functionName + '(' + msg + ');';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};
Blockly.JavaScript['tone_arduino'] = function(block) {

  var tonePin = Blockly.JavaScript.valueToCode(block, 'PIN',
      Blockly.JavaScript.ORDER_ATOMIC);
  var music = Blockly.JavaScript.valueToCode(block, 'MUSIC',
      Blockly.JavaScript.ORDER_ATOMIC);
  var duration = Blockly.JavaScript.valueToCode(block, 'DURATION',
      Blockly.JavaScript.ORDER_ATOMIC);

   var functionName = Blockly.JavaScript.provideFunction_(
   'buzzer',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(tonePin,music,duration){',
   'var ws = new WebSocket(\'ws://localhost:9998/echo\');',
   'var arduino_uno_cmdStart= \'arduinouno#####\';',
   'var arduino_uno_cmdEnd= \'arduinounoend##\';',
   'var feature_tone= \'tone\'',

   'ws.onopen = function(){',
   '//ws.send(arduino_uno);',
	  'ws.send(arduino_uno_cmdStart+\'@\'+feature_tone+\'@\'+tonePin+\'@\'+music+\'@\'+duration+\'@\'+arduino_uno_cmdEnd);',
	  '//alert(arg0);',
   '};',
   'ws.onmessage = function (evt){',
	  'var received_msg = evt.data;',
	   'alert(evt.data);',
   '};',
   'ws.onclose = function(){',
	  'alert(\'Connection close\');',

	'};',
	   'return \'123\'',
	'}']);
  var code = functionName + '('+ String(tonePin)+','+String(music)+','+String(duration) + ');';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};

Blockly.JavaScript['ultrasonic_arduino'] = function(block) {
  var echo = Blockly.JavaScript.valueToCode(block, 'ECHO', Blockly.JavaScript.ORDER_ATOMIC);
  var trig = Blockly.JavaScript.valueToCode(block, 'TRIG', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
  'websocketServer',[
  'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
  '(echo,trig){',
  'var ws = new WebSocket(\'ws://localhost:9998/echo\');',
  'var arduino_uno_cmdStart= \'arduinouno#####\';',
  'var arduino_uno_cmdEnd= \'arduinounoend##\';',
  'var feature_ultrasonic= \'ultrasonic\'',
  'var received_msg=10',
  'ws.onopen = function(){',
  '//ws.send(arduino_uno);',
   'ws.send(arduino_uno_cmdStart+\'@\'+feature_ultrasonic+\'@\'+echo+\'@\'+trig+\'@\'+arduino_uno_cmdEnd);',
   '//alert(arg0);',
  '};',
  'ws.onmessage = function (evt){',
    'received_msg = evt.data;',
    'return \'received_msg\'',
    'alert(evt.data);',
  '};',
  'ws.onclose = function(){',
   'alert(\'Connection close\');',

 '};',
    'return \'received_msg\'',
 '}']);
  var code = functionName + '('+ String(echo)+','+String(trig) + ');';
  //return [code, Blockly.JavaScript.ORDER_NONE];
  //return code;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['send_to_puredata'] = function(block) {

   var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
	      Blockly.JavaScript.ORDER_NONE) || '\'\'';
   var functionName = Blockly.JavaScript.provideFunction_(
   'sendToPd',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(arg0){',
   'var ws = new WebSocket(\'ws://localhost:9998/echo\');',
   'ws.onopen = function(){',

	  'ws.send(\'puredata####### \'+arg0+\';\');',
    'ws.close();',
   '};',
   'ws.onmessage = function (evt){',
   '};',
   'ws.onclose = function(){',
	  //'alert(\'Connection close\');',

	'};',
	   'return \'123\'',
	'}']);
  var code = functionName + '(' + msg + ');';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};
Blockly.JavaScript['delay_time'] = function(block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var functionName = Blockly.JavaScript.provideFunction_(
  'delayTime',[
  'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
  '(arg_time){',
'var PastDate=new Date();',
'var past_h=PastDate.getHours();',
'var past_m=PastDate.getMinutes();',
'var past_s=PastDate.getSeconds();',
       'while (true){',
         'var NowDate=new Date();',
         'var now_m=NowDate.getMinutes();',
         'var now_h=NowDate.getHours();',
         'var now_s=NowDate.getSeconds();',
         'if(now_h==past_h){',
           'if(now_m==past_m){',
             'total_sec = now_s - past_s;',
           '}else{',
              'if(now_s>=past_s)',
                'total_sec = (now_m-past_m)*60+now_s-past_s;',
              'else ',
                'total_sec = (now_m-past_m)*60+past_s-now_s;',
           '}',
           'if(Number(total_sec)>=Number(arg_time)){',
           //'if(Number(total_sec)>=10){',
            //  'alert(String(total_sec));',
             'return total_sec;',
             //break;
           '}',
         '}',

       '}',
       'alert(\'gg\');',
 '}']);
 var code = functionName + '(' + value_time + ');';
// return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};
Blockly.JavaScript['digitalpin_input'] = function(block) {
  var value_digital_pin = Blockly.JavaScript.valueToCode(block, 'DIGITAL_PIN', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var functionName = Blockly.JavaScript.provideFunction_(
  'requestPinValue',[
  'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
  '(digital_pin){',
  'var ws = new WebSocket(\'ws://localhost:9998/echo\');',
  'var arduino_uno_cmdStart= \'arduinouno#####\';',
  'var arduino_uno_cmdEnd= \'arduinounoend##\';',
  'var feature_digitalread= \'digitalread\'',
  'var received_msg="notyet";',
  'document.cookie = digital_pin+\'pinValue=null\';',
  'ws.onopen = function(){',
  '//ws.send(arduino_uno);',
   'ws.send(arduino_uno_cmdStart+\'@\'+feature_digitalread+\'@\'+digital_pin+\'@\'+arduino_uno_cmdEnd);',
   'document.cookie = digital_pin+\'pinValue=null\';',

  '};',
  'ws.onmessage = function (evt){',
   'received_msg = evt.data;',
    'var pinValue;',
    'if(received_msg.indexOf(\'HIGH\')!=-1)  pinValue=\'HIGH\';',
    'else if(received_msg.indexOf(\'LOW\')!=-1)  pinValue=\'LOW\';',
    'document.cookie = digital_pin+\'pinValue=\'+pinValue;',
   //'alert(evt.data);',
  '};',
  'ws.onclose = function(){',
   'alert(\'Connection close\');',

  '};',
  'alert(\'wait..\');',

 '}']);

  var code = functionName + '(' + value_digital_pin + ');';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['pin_value'] = function(block) {
  var value_pin_value = Blockly.JavaScript.valueToCode(block, 'PIN_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
  'getPinValue',[
  'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
  '(value_pin_value){',
  // 'delayfunc();',
  'return getCookieByName(value_pin_value+\'pinValue\');',
  'function getCookieByName(name) {',
    'var arg = escape(name) + "=";',
    'var i = 0;',
    'while (i < document.cookie.length) {',
      'var j = i + arg.length;',
      'if (document.cookie.substring(i, j) == arg){',
           'return getCookieByIndex(j);',
      '}',
      'i = document.cookie.indexOf(" ", i) + 1;',
      'if (i == 0) break;',
    '}',
    'return null;',
  '}',
  'function getCookieByIndex(index) {',
    'var endIndex = document.cookie.indexOf(";", index);',
    'if (endIndex == -1) endIndex = document.cookie.length;',
    'return unescape(document.cookie.substring(index, endIndex));',
  '}',
  'function delayfunc(){',
  'var PastDate=new Date();',
  'var past_h=PastDate.getHours();',
  'var past_m=PastDate.getMinutes();',
  'var past_s=PastDate.getSeconds();',
   'while (true){',
     'var NowDate=new Date();',
     'var now_m=NowDate.getMinutes();',
     'var now_h=NowDate.getHours();',
     'var now_s=NowDate.getSeconds();',
     'if(now_h==past_h){',
       'if(now_m==past_m){',
         'total_sec = now_s - past_s;',
       '}else{',
          'if(now_s>=past_s)',
            'total_sec = (now_m-past_m)*60+now_s-past_s;',
          'else ',
            'total_sec = (now_m-past_m)*60+past_s-now_s;',
       '}',
       'if(Number(total_sec)>=3){',
       //'if(Number(total_sec)>=10){',
        //  'alert(String(total_sec));',
         'return total_sec;',
         //break;
       '}',
     '}',
   '}',
  '}',
 '}']);

  var code = functionName + '(' + value_pin_value + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['rpi_camera_photo'] = function(block) {
  var statements_take_photo = Blockly.JavaScript.statementToCode(block, 'TAKE_PHOTO');
  // TODO: Assemble JavaScript into code variable.
  var functionName = Blockly.JavaScript.provideFunction_(
  'takePhoto',[
  'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
  '(){',
  'var ws = new WebSocket(\'ws://192.168.0.103:9998/echo\');',
  'var rpi_cmdStart= \'raspberrypi####\';',
  'var feature_takephoto= \'takephoto\'',
  'ws.onopen = function(){',
   'ws.send(rpi_cmdStart+\'@\'+feature_takephoto);',
   'alert(\'recving...\');',
  '};',
  'ws.onmessage = function (evt){',
  // 'document.cookie = \'selectImgPath=file:\\\\D:\\\\rpiphoto\\\\rpi\'+ str(evt.data);',
  'document.cookie = \'selectImgPath=file:\\\\D:\\\\rpiphoto\\\\rpi\'+ String(evt.data);',
  'alert(evt.data);',

  '};',
  'ws.onclose = function(){',
   'alert(\'Connection close\');',

  '};',
  'alert(\'wait..\');',

 '}']);

  var code = functionName + '();';
  return code;
};
Blockly.JavaScript['camera_width'] = function(block) {
  var value_camera_width = Blockly.JavaScript.valueToCode(block, 'CAMERA_WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.JavaScript['camera_height'] = function(block) {
  var value_camera_height = Blockly.JavaScript.valueToCode(block, 'CAMERA_HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};
