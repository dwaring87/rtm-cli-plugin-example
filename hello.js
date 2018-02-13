'use strict';

// Import rtm-cli to use the utility functions
const rtm = require('rtm-cli');

/**
 * Command Action
 * This is the function that will be called
 * @param {Array} args List of command arguments
 * @param {Object} env Commander environment
 */
function action(args, env) {

  // Get the name argument
  let name = args[0];

  // Get the friends list
  let friends = args[1];

  // Get the language code
  let lang = env.lang !== undefined ? env.lang : 'en';

  // Say Hello in the language
  let greeting = '';
  switch (lang) {
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
  }

  // Build the Greeting
  greeting += ', ' + name;
  if ( friends ) {
    greeting += ' and ' + friends.join(' and ')
  }

  // Print the greeting
  rtm.log(greeting);

  // Use the finish utility function to exit the command
  rtm.finish();

}


/**
 * Define the command properties here
 */
module.exports = {

  /**
   * Command definition:
   * command name and argument definition
   */
  command: "hello <name> [friends...]",

  /**
   * Command options:
   * add option flags to the command
   */
  options: [
    {
      option: "-l, --lang <code>",
      description: "language can be one of 'en', 'es' or 'fr'"
    }
  ],

  /**
   * Command description:
   * short helpful description of the command
   */
  description: "Say Hello!",

  /**
   * Command action:
   * the function called when executing the command
   */
  action: action

};