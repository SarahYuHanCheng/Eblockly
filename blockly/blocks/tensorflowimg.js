'use strict';

goog.provide('Blockly.Blocks.tensorflowimg');

goog.require('Blockly.Blocks');

Blockly.Blocks.math.HUE = 100;
Blockly.Blocks['get_recognition_result'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("recognition result");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['send_to_tensorflow_image_recognition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send to recognize");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['compare_string'] = {
  init: function() {
    this.appendValueInput("str1")
        .setCheck("String")
        .appendField("equal? ");
    this.appendValueInput("str2")
        .setCheck("String");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
