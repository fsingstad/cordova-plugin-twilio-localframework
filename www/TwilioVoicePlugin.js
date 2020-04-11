	var exec = require('cordova/exec');

	var TwilioCallPlugin = function() {};

    TwilioCallPlugin.prototype.initialize = function(token) {

            var error = function(error) {
                //TODO: Handle errors here
                console.log(error);
                //if(delegate['onerror']) delegate['onerror'](error)
            }

            var success = function(callback) {
                console.log(callback)
                var argument = callback['arguments'];
                //if (delegate[callback['callback']]) delegate[callback['callback']](argument);
            }


            exec(success,error,"TwilioVoicePlugin","initializeWithAccessToken",[token]);
        }


	var TwilioPlugin = new TwilioCallPlugin();
	module.exports = TwilioPlugin;

