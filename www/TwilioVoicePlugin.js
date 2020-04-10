(function() {
    var delegate = {}
    var TwilioPlugin = {

        call: function(token, params) {
            Cordova.exec(null,null,"TwilioVoicePlugin","call",[token, params]);
        },
        sendDigits: function(digits) {
            Cordova.exec(null,null,"TwilioVoicePlugin","sendDigits",[digits]);
        },

        disconnect: function() {
            Cordova.exec(null,null,"TwilioVoicePlugin","disconnect",null);
        },

        rejectCallInvite: function() {
            Cordova.exec(null,null,"TwilioVoicePlugin","rejectCallInvite",null);
        },

        acceptCallInvite: function() {
            Cordova.exec(null,null,"TwilioVoicePlugin","acceptCallInvite",null);
        },
        
        setSpeaker: function(mode) {
            // "on" or "off"        
            Cordova.exec(null, null, "TwilioVoicePlugin", "setSpeaker", [mode]);
        },

        muteCall: function() {
            Cordova.exec(null, null, "TwilioVoicePlugin", "muteCall", null);
        },

        unmuteCall: function() {
            Cordova.exec(null, null, "TwilioVoicePlugin", "unmuteCall", null);
        },

        isCallMuted: function(fn) {
            Cordova.exec(fn, null, "TwilioVoicePlugin", "isCallMuted", null);
        },

        initialize: function(token) {

            var error = function(error) {
                //TODO: Handle errors here
                console.log(error);
                if(delegate['onerror']) delegate['onerror'](error)
            }

            var success = function(callback) {
                var argument = callback['arguments'];
                if (delegate[callback['callback']]) delegate[callback['callback']](argument);
            }


            Cordova.exec(success,error,"TwilioVoicePlugin","initializeWithAccessToken",[token]);
        },

        onError: function(fn) {
            delegate['onerror'] = fn;
        },

        onClientInitialized: function(fn) {
            delegate['onclientinitialized'] = fn;
        },

        onCallInviteReceived: function(fn) {
            delegate['oncallinvitereceived'] = fn;
        },

        onCallInviteCanceled: function(fn) {
            delegate['oncallinvitecanceled'] = fn;
        },

        onCallDidConnect: function(fn) {
            delegate['oncalldidconnect'] = fn;
        },

        onCallDidDisconnect: function(fn) {
            delegate['oncalldiddisconnect'] = fn;
        },

        install: function() {
            if (!window.Twilio) window.Twilio = {};
            //if (!window.Twilio.TwilioVoiceClient) window.Twilio.TwilioVoiceClient = new TwilioPlugin.TwilioVoiceClient();
        }
    }
    TwilioPlugin.install();

})()
