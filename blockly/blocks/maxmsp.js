'use strict';

goog.provide('Blockly.Blocks.maxmsp');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
      <block type="play 1"></block>
      <block type="play 2"></block>
      <block type="play 3"></block>
      <block type="music stop"></block>
      <block type="toggle dac"></block>
      <block type="cmd to Max/Msp"></block>
 */
Blockly.Blocks.math.HUE = 100;

Blockly.Blocks['play_1'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
	  //"type": "play_1",
	  "message0": "play 1",
	  "output": "String",
	  "colour": 230,
	  "tooltip": "",
	  "helpUrl": ""
    });
  }
};
Blockly.Blocks['play_2'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
	  //"type": "play_2",
	  "message0": "play 2",
	  "output": "String",
	  "colour": 130,
	  "tooltip": "",
	  "helpUrl": ""
    });
  }
};
Blockly.Blocks['play_3'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
	  //"type": "play_1",
	  "message0": "play 3",
	  "output": "String",
	  "colour": 330,
	  "tooltip": "",
	  "helpUrl": ""
    });
  }
};
Blockly.Blocks['music_stop'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
	  //"type": "play_1",
	  "message0": "music stop",
	  "output": "String",
	  "colour": 530,
	  "tooltip": "",
	  "helpUrl": ""
    });
  }
};
Blockly.Blocks['toggle_dac'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
	  //"type": "play_1",
	  "message0": "toggle dac",
	  "output": "String",
	  "colour": 630,
	  "tooltip": "",
	  "helpUrl": ""
    });
  }
};
Blockly.Blocks['cmd_to_maxmsp'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
		  "message0": "cmd to max %1",
		  "args0": [
		    {
		      "type": "input_value",
		      "name": "TEXT",
		      "check": "String"
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
Blockly.Blocks['send_file_to_maxmsp'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
		  "message0": "send file to max %1",
		  "args0": [
		    {
		      "type": "input_value",
		      "name": "TEXT",
		      "check": "String"
		    }
		  ],
		  "colour": 230,
		  "tooltip": "",
		  "helpUrl": ""
    });
  }
};
