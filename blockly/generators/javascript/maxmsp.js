'use strict';

goog.provide('Blockly.JavaScript.maxmsp');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['play_1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\'1\'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['play_2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\'2\'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['play_3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\'3\'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['music_stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\'stop\'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['toggle_dac'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\'dactoggle\'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cmd_to_maxmsp'] = function(block) {
   var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
	      Blockly.JavaScript.ORDER_NONE) || '\'\'';
   var functionName = Blockly.JavaScript.provideFunction_(
   'websocketServer',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(arg0){',
   'var ws = new WebSocket(\'ws://localhost:9998/echo\');',
   'ws.onopen = function(){',

	  'ws.send(\'maxmsp#########$1$\'+arg0);',
	  '//alert(arg0);',
   '};',
   'ws.onmessage = function (evt){',
	  'var received_msg = evt.data;',
    'if(received_msg.indexOf(\'@\')!=-1){',
      'alert(received_msg.slice(received_msg.indexOf(\'@\')+1, received_msg.length-1));',
    '}',

   '};',
   'ws.onclose = function(){',
	  'alert(\'Connection close\');',

	'};',
	   'return \'msg_transfer\'',
	'}']);
  var code = functionName + '(' + msg + ');';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};
Blockly.JavaScript['send_file_to_maxmsp'] = function(block) {

   var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
	      Blockly.JavaScript.ORDER_NONE) || '\'\'';
   var functionName = Blockly.JavaScript.provideFunction_(
   'websocketServer',[
   'function '+Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_+
   '(arg0){',
   'var ws = new WebSocket(\'ws://localhost:9998/echo\');',
   'ws.onopen = function(){',

	  'ws.send(\'file##\'+arg0);',
	  '//alert(arg0);',
   '};',
   'ws.onmessage = function (evt){',
	  'var received_msg = evt.data;',
	   'alert(evt.data);',
   '};',
   'ws.onclose = function(){',
	  'alert(\'Connection close\');',

	'};',
	   'return \'file_transfer\'',
	'}']);
  var code = functionName + '(' + msg + ');';
  //return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  return code;
};
