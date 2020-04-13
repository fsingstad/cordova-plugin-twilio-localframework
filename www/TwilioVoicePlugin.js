	var exec = require('cordova/exec');

  var delegate = {};
	var TwilioCallPlugin = function() {};

  TwilioCallPlugin.prototype.initialize = function(token) {

      var error = function(error) {
          //TODO: Handle errors here
          console.log(error);
          if(delegate['onerror']) delegate['onerror'](error)
      }

      var success = function(callback) {
          console.log(callback)
          var argument = callback['arguments'];
          if (delegate[callback['callback']]) delegate[callback['callback']](argument);
      }


      exec(success,error,"TwilioVoicePlugin","initializeWithAccessToken",[token]);
  }
  

  TwilioCallPlugin.prototype.call = function(token, params) {
      var error = function(error) {
          //TODO: Handle errors here
          console.log(error);
          if(delegate['onerror']) delegate['onerror'](error)
      }

      var success = function(callback) {
          console.log(callback)
          var argument = callback['arguments'];
          if (delegate[callback['callback']]) delegate[callback['callback']](argument);
      }
	  
      exec(success,error,"TwilioVoicePlugin","call",[token, params]);
  }

  TwilioCallPlugin.prototype.sendDigits = function(digits) {
      exec(null,null,"TwilioVoicePlugin","sendDigits",[digits]);
  }

  TwilioCallPlugin.prototype.disconnect = function() {
      exec(null,null,"TwilioVoicePlugin","disconnect",null);
  }

  TwilioCallPlugin.prototype.rejectCallInvite = function() {
      exec(null,null,"TwilioVoicePlugin","rejectCallInvite",null);
  }

  TwilioCallPlugin.prototype.acceptCallInvite = function() {
      exec(null,null,"TwilioVoicePlugin","acceptCallInvite",null);
  }

  TwilioCallPlugin.prototype.setSpeaker = function(mode) {
      // "on" or "off"        
      exec(null, null, "TwilioVoicePlugin", "setSpeaker", [mode]);
  }

  TwilioCallPlugin.prototype.muteCall = function() {
      exec(null, null, "TwilioVoicePlugin", "muteCall", null);
  }

  TwilioCallPlugin.prototype.unmuteCall = function() {
      exec(null, null, "TwilioVoicePlugin", "unmuteCall", null);
  }

  TwilioCallPlugin.prototype.isCallMuted = function(fn) {
      exec(fn, null, "TwilioVoicePlugin", "isCallMuted", null);
  }

  TwilioCallPlugin.prototype.onError = function(fn) {
      delegate['onerror'] = fn;
  }

  TwilioCallPlugin.prototype.onClientInitialized = function(fn) {
      delegate['onclientinitialized'] = fn;
  }


  TwilioCallPlugin.prototype.onCallInviteReceived = function(fn) {
      delegate['oncallinvitereceived'] = fn;
  }

  TwilioCallPlugin.prototype.onCallInviteCanceled = function(fn) {
      delegate['oncallinvitecanceled'] = fn;
  }

  TwilioCallPlugin.prototype.onCallDidConnect = function(fn) {
      delegate['oncalldidconnect'] = fn;
  }

  TwilioCallPlugin.prototype.onCallDidDisconnect = function(fn) {
      delegate['oncalldiddisconnect'] = fn;
  }


	var TwilioPlugin = new TwilioCallPlugin();
	module.exports = TwilioPlugin;


