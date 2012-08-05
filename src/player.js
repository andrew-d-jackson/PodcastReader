$(document).ready(function() {

    function getUrlVar(requestedKey) {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        if (typeof requestedKey == 'undefined') {
            return vars;
        } else {
            return vars[requestedKey];
        }
    }   

    $("#audio").append("<source src='" + getUrlVar('url') + "' type='audio/mpeg' />");

    $('#audio').bind('canplay', function() {
        var startTime = $.cookie(getUrlVar('url'));
        if (isNaN(startTime)){
            startTime = 0;
        }
        this.currentTime = startTime;
        this.play();
    });

    $('#audio').bind('timeupdate', function() {
        var cookieTime = $.cookie(getUrlVar('url'));
        if (isNaN(cookieTime)){
            cookieTime = 0;
        }

        if (this.currentTime - 30 > cookieTime){
            var expireDate = new Date();
            expireDate.setTime(expireDate.getTime() + (21 * 24 * 60 * 60 * 1000));
            $.cookie(getUrlVar('url'), Math.floor(this.currentTime), { expires: expireDate });
        }
    });

});