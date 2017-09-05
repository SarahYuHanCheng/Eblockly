'use strict';

goog.provide('Blockly.Blocks.myvar');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.math.HUE = 100;
Blockly.Blocks['my_one'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": 'one',
      "output": 'Number',
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_LENGTH_TOOLTIP,
      "helpUrl": Blockly.Msg.LISTS_LENGTH_HELPURL,
      "nextStatement": "Action"
    });
  }
};
Blockly.Blocks['my_two'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": 'two',
      "output": 'Number',
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_LENGTH_TOOLTIP,
      "helpUrl": Blockly.Msg.LISTS_LENGTH_HELPURL,
      "previousStatement": "Action"
    });
  }
};
Blockly.Blocks['my_three'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
	  "message0": "set %1 to %2",
	  "args0": [
	    {
	      "type": "field_variable",
	      "name": "VAR",
	      "variable": "i"
	    },
	    {
	      "type": "input_value",
	      "colour": "300",
	      "name": "VALUE"
	    }
	  ]
    });
  }
};
Blockly.Blocks['my_four'] = {
  /**
   * Block for list length.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
	  "message0": "constant %1",
	  "args0": [
	    {
	      "type": "field_dropdown",
	      "name": "CONSTANT",
         /* "options": [
            ['hour', '60'],
            ['day', '24']
          ]*/
               "options": [
            ['\u03c0', 'PI'],
            ['e', 'E'],
            ['\u03c6', 'GOLDEN_RATIO'],
            ['sqrt(2)', 'SQRT2'],
            ['sqrt(\u00bd)', 'SQRT1_2'],
            ['\u221e', 'INFINITY']
          ]	      	  
	    }
	    
	  ],
	 	  "colour": "250",
		  "output": "Number"
    });
  }
};