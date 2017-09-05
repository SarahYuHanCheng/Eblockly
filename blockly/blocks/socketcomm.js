'use strict';

goog.provide('Blockly.Blocks.socketcomm');

goog.require('Blockly.Blocks');
Blockly.Blocks.math.HUE = 100;
Blockly.Blocks['gene_arduino'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("cmd to arduino");
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['gene_rpi'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("cmd to rpi");
    this.setColour(255);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['gene_tcp'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("cmd to tcp");
    this.setColour(130);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['gene_udp'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("cmd to udp");
    this.setColour(30);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['gene_uds'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("cmd to uds");
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['ultrasonic_arduino'] = {
  init: function() {
    this.appendValueInput("ECHO")
        .setCheck("Number")
        .appendField("ultrasonic, echo pin");
    this.appendValueInput("TRIG")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("trig pin");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['tone_arduino'] = {
  init: function() {
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("buzzer pin");
    this.appendValueInput("MUSIC")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("music");
    this.appendValueInput("DURATION")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("duration");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['send_to_puredata'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("send to PureData");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['delay_time'] = {
  init: function() {
    this.jsonInit({

        "type": "delay_time",
        "message0": "delay %1 seconds",
        "args0": [
          {
            "type": "input_value",
            "name": "TIME",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""

    });
  }
};
Blockly.Blocks['light_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("light sensor value");
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['led_switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["led on","led_on"], ["led off","led_off"]]), "LED_DROPDOWN");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['led_blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("led blink")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("seconds");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['digitalpin_input'] = {
  init: function() {
    this.appendValueInput("DIGITAL_PIN")
        .setCheck("Number")
        .appendField("request digital pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['digitalpin_output'] = {
  init: function() {
    this.appendValueInput("DIGITAL_PIN")
        .setCheck("Number")
        .appendField("Digital Pin");
    this.appendValueInput("DIGITAL_PIN_FUNC")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['analogpin_input'] = {
  init: function() {
    this.appendValueInput("ANALOG_PIN")
        .setCheck("Number")
        .appendField("Analog Pin");
    this.appendValueInput("ANALOG_PIN_FUNC")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['servo_motor'] = {
  init: function() {
    this.appendValueInput("SERVO_PIN")
        .setCheck("Number")
        .appendField("Servo Pin");
    this.appendValueInput("SERVO_ANGLE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['rpi_camera_photo'] = {
  init: function() {
    this.appendStatementInput("TAKE_PHOTO")
        .setCheck(null)
        .appendField("take photo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['photo_number'] = {
  init: function() {
    this.appendValueInput("PHOTO_NUMBER")
        .setCheck("Number")
        .appendField("photo number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['photo_interval'] = {
  init: function() {
    this.appendValueInput("PHOTO_INTERVAL")
        .setCheck("Number")
        .appendField("photo interval");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['rpi_camera_video'] = {
  init: function() {
    this.appendStatementInput("RECORD_VIDEO")
        .setCheck(null)
        .appendField("record video");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['video_length'] = {
  init: function() {
    this.appendValueInput("VIDEO_LENGTH")
        .setCheck("Number")
        .appendField("video length");
    this.appendDummyInput()
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['video_fps'] = {
  init: function() {
    this.appendValueInput("VIDEO_FPS")
        .setCheck("Number")
        .appendField("video fps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['camera_height'] = {
  init: function() {
    this.appendValueInput("CAMERA_HEIGHT")
        .setCheck("Number")
        .appendField("height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['camera_width'] = {
  init: function() {
    this.appendValueInput("CAMERA_WIDTH")
        .setCheck("Number")
        .appendField("width");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['test_block'] = {
  init: function() {
    this.appendValueInput("ECHO")
        .setCheck("Number")
        .appendField("ultrasonic, echo pin");
    this.appendValueInput("TRIG")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("trig pin");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['pin_value'] = {
  init: function() {
    this.appendValueInput("PIN_VALUE")
        .setCheck(null)
        .appendField("pin");
    this.appendDummyInput()
        .appendField("value");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
