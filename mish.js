/* @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later */
document.addEventListener('keypress', logAnyKey);
function logAnyKey() {
    document.getElementById("output").innerHTML += "<span style='color:red'>Keypress detected</span>";
    document.getElementById("output").innerHTML += "<br>"
}

function init_404() { 
    document.getElementById("command").innerHTML = "status";
    setTimeout(function() {
        document.getElementById("output").innerHTML += "<span style=color:red>E404: " + new URL(document.URL).pathname + " : not found</span><br><br>";
    }, 100)
}

function mish_cmd(command, output) {
    document.getElementById("command").innerHTML = command;
    setTimeout(function() {
        document.getElementById("output").innerHTML += output;
        document.getElementById("output").innerHTML += "<br><br>";
    }, 100)
}
function mish_clear() {
    document.getElementById("command").innerHTML = "clear";
    setTimeout(function() {
        document.getElementById("command").innerHTML = "";
        document.getElementById("output").innerHTML  = "";
    }, 100)
}

function version() {
    mish_cmd("mish --version", "mish, the Mouse-Interactive Shell, version 1.0 (js-pc-browser)<br> Copyright (C) 2021 That1M8Head<br> Licence GPLv3+: GNU GPL version 3 or later &lt;<a href=http://gnu.org/licenses/gpl.html>http://gnu.org/licenses/gpl.html</a>&gt;<br><br> This is free software; you are free to change and distribute it.<br>There is NO WARRANTY, to the extent permitted by law.", true);
}  
function reboot() {
    mish_cmd("shutdown -r now", "System is going down for reboot NOW!", true);
    setTimeout(function(){ window.location = "index.html" }, 500)
}
/* @license-end */