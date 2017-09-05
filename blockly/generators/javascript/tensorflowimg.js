'use strict';

goog.provide('Blockly.JavaScript.tensorflowimg');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['send_to_tensorflow_image_recognition'] = function(block) {
   var functionName = Blockly.JavaScript.provideFunction_(
   'tensorflow_img_recognize',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(){',
   'var ws = new WebSocket(\'ws://localhost:9998/echo\');',
   'ws.onopen = function(){',
    'var cookieName = \'selectImgPath\';',
    'var cmdActivateTensorflow=\'sendImgToTensorflow\';',
    'var sendMsg=\'tensorflowimg##\'+ cmdActivateTensorflow + \'#\' + getCookieByName(cookieName);',
	  'ws.send(sendMsg);',
	  //'alert(sendMsg);',
   '};',
   'ws.onmessage = function (evt){',
	   'var received_msg = evt.data;',
     'var prefix_tensorflow_prediction=\'tensorflowPrediction#\';',
     'var isPrediction = received_msg.indexOf(prefix_tensorflow_prediction);',
     //'alert(\'isPrediction:\'+isPrediction);',
     'var expires = new Date();',
     'expires.setTime(expires.getTime() + 172800000);',
     'if(isPrediction!=-1){',
       'var tensorflow_prediction=received_msg.substring(received_msg.indexOf(\'[\')+1,received_msg.indexOf(\']\'));',
       'document.cookie = \'tensorflow_prediction=\'+ tensorflow_prediction + \';expires=\' + expires.toGMTString();',
       //'alert(document.cookie);',
       'alert(\'辨識成功! 辨識結果：\'+tensorflow_prediction);',
       'window.setTimeout(getSelection,10000);',
       //'window.setTimeout(getSelection,25000);',
     '}else{',
        'if(received_msg.indexOf(\'saveToDbSuccessful\')!=-1){',
          'alert(\'成功存入資料庫!\');',
          'document.cookie = "predictionTorF=null";',
          'document.cookie = "ifFasleAnswerIs=null";',
          'document.cookie = "selectImgPath=null";',
          'document.cookie = "tensorflow_prediction=null";',

        '}',
      '}',

	   //'alert(evt.data);',
   '};',
   'ws.onclose = function(){',
	  'alert(\'Connection close\');',

	 '};',
  'function getSelection(){',
    'var feedbackMsg=\'no feedback\';',
    'var prefix_tensorflow_prediction=\'tensorflowPrediction#\';',
    'if(getCookieByName(\'predictionTorF\')!=\'null\'){',
      //'alert(\'predictnull\');',
      'if(getCookieByName(\'predictionTorF\')==\'true\'){',
        'feedbackMsg = getCookieByName(\'predictionTorF\');',
        'ws.send(feedbackMsg);',
      '}else if(getCookieByName(\'predictionTorF\')==\'false\'){',
        'feedbackMsg = getCookieByName(\'predictionTorF\')+\'#\'+getCookieByName(\'ifFasleAnswerIs\');',
        'ws.send(prefix_tensorflow_prediction+feedbackMsg);',
      '}',
      'alert(\'已傳送校正結果：\'+feedbackMsg);',
    '}',
  '}',
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
	 'return 0;',
	'}']);
  var code = functionName + '();';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};

Blockly.JavaScript['get_recognition_result'] = function(block) {

    var functionName = Blockly.JavaScript.provideFunction_(
    'getPrediction',[
    'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
    '(){',
    'if(getCookieByName(\'tensorflow_prediction\')!=\'null\'){',
      'return getCookieByName(\'tensorflow_prediction\');}',
    'else{',
      'return 999;',
    '}',
    //   'window.setTimeout(checkTheCookie,5000);',
    //   'window.setTimeout(checkTheCookie,5000);',
    //   'window.setTimeout(checkTheCookie,5000);',
    //   'window.setTimeout(checkTheCookie,5000);',
    //   'window.setTimeout(checkTheCookie,5000);',
    //   'window.setTimeout(checkTheCookie,5000);',
    // '}',
    // 'function checkTheCookie(){',
    //   'if(getCookieByName(\'tensorflow_prediction\')!=\'null\'){',
    //     'return getCookieByName(\'tensorflow_prediction\');',
    //   '}',
    // '}',

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

 	'}']);
   var code = functionName + '()';
   return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['compare_string'] = function(block) {
  var value_str1 = Blockly.JavaScript.valueToCode(block, 'str1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_str2 = Blockly.JavaScript.valueToCode(block, 'str2', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
  'getPrediction',[
  'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
  '(str1,str2){',
    'if(str1 == str2){',
      'return true;',
    '}else {',
      'return false;',
    '}',
  '}']);
  var code = functionName + '('+String(value_str1)+','+String(value_str2)+')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
