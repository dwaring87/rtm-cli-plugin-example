'use strict';

// Import the rtm-cli module to use its utility functions
const rtm = require('rtm-cli');

/**
 * Command Action
 * This is the function that will be called
 * @param {Array} args List of command arguments
 * @param {Object} env Commander environment
 */
function action(args, env) {

  // Print message using rtm log spinner
  rtm.log.spinner.success("Running settings command!");

  // Get the signed in RTM user
  rtm.config.user(function(user) {

    // Display the User Settings
    getSettings(user, function() {

      // Display the incomplete task count
      getIncTasks(user, function() {

        // Use the finish utility function to exit the command
        rtm.finish();

      });

    });

  });

}


/**
 * Make an API request to get the user's settings and display them
 * to the console
 * @param {RTMUser} user RTM User
 * @param {function} callback Callback function
 */
function getSettings(user, callback) {

  // Display the spinner before making API request
  rtm.log.spinner.start("Getting User Settings...");

  // Use the RTM user to make RTM API requests
  user.get('rtm.settings.getList', function(err, resp) {

    // Stop the Spinner
    rtm.log.spinner.stop();

    // Handle an error
    if ( err ) {
      rtm.log.spinner.error(err);
      rtm.finish();
    }

    // Get the settings from the response
    let settings = resp.settings;

    // Print the settings
    rtm.log.info("Your Settings:");
    rtm.log(JSON.stringify(settings, null, 4));

    // Return to the callback
    callback();

  });

}


/**
 * Get the User's incomplete tasks and display the count
 * @param {RTMUser} user RTM User
 * @param {function} callback Callback function
 */
function getIncTasks(user, callback) {

  // Display the spinner before making API request
  rtm.log.spinner.start("Getting User Tasks...");

  // Use the RTM User to get the tasks
  user.tasks.get("status:incomplete", function(err, tasks) {

    // Stop the Spinner
    rtm.log.spinner.stop();

    // Handle an error
    if ( err ) {
      rtm.log.spinner.error(err);
      rtm.finish();
    }

    // Print the task count
    rtm.log.style("You Have ");
    rtm.log.style(" " + tasks.length + " ", "bgRed.white.bold");
    rtm.log.style(" Incomplete Tasks", true);

    // Return to the callback
    callback();

  });

}



/**
 * Define the command properties here
 */
module.exports = {

  /**
   * Command definition:
   * command name and argument definition
   */
  command: "settings",

  /**
   * Command description:
   * short helpful description of the command
   */
  description: "Print user settings",

  /**
   * Command action:
   * the function called when executing the command
   */
  action: action

};