# RTM-CLI Plugin Example

This repository can be used to serve as a template for creating a command plugin for 
[rtm-cli](https://github.com/dwaring87/rtm-cli).

This example is set up as a Node module that will export two commands: `hello` and `settings`.  
Each command lives as a separtate file (`hello.js` and `settings.js`, respectively) and are 
exported together by the `index.js` file, which serves as the main entry point for the 
entire Node module.

### hello

This example command shows how to set up and use a required argument, an optional list argument, 
and an optional flag value with the command.

### settings

This example command shows how to obtain the authenticated RTM User instance and how to use this 
instance to make RTM API requests.

## Usage & Installation

For more information on the plugin architecture installing a plugin, see the 
[rtm-cli Wiki](https://github.com/dwaring87/rtm-cli/wiki).
