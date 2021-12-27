/* @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later */
document.addEventListener("keydown", function(e) {
    key = e.key;
    command = document.getElementById("command").innerHTML;
    console.log(key);
    switch (key) {
        case "Backspace":
            console.log("Backspace key pressed");
            document.getElementById("command").innerHTML = command.slice(0, -1);
            break;
        case "Enter":
            console.log("Enter key pressed");
            switch (command.split(" ")[0]) {
                case "clear":
                    document.getElementById("output").innerHTML = "";
                    break;
                case "version":
                case "mish -v":
                case "mish --version":
                    document.getElementById("output").innerHTML += "mish, the Mouse-Interactive Shell, version 1.0 (js-pc-browser)<br> Copyright (C) 2021 That1M8Head<br> Licence GPLv3+: GNU GPL version 3 or later &lt;<a href=http://gnu.org/licenses/gpl.html>http://gnu.org/licenses/gpl.html</a>&gt;<br><br> This is free software; you are free to change and distribute it.<br>There is NO WARRANTY, to the extent permitted by law.";
                    break;
                default:
                    document.getElementById("output").innerHTML += "<span style='color:red'>E405: No such command</span>";
                    break;
                case "shutdown":
                    switch (command.split(" ")[1]) {
                        case "-h":
                            document.getElementById("output").innerHTML += "System is going down for halt NOW!";
                            setTimeout(function(){ document.write("<style>body{background-color:black;}</style>Error") }, 500)
                            setTimeout(function(){ window.location = "index.html" }, 1000)
                            break;
                        case "-r":
                            document.getElementById("output").innerHTML += "System is going down for reboot NOW!";
                            setTimeout(function(){ document.write("<style>body{background-color:black;}</style>Error") }, 500)
                            setTimeout(function(){ window.location = "mish.html" }, 1000)
                            break;
                        default:
                            document.getElementById("output").innerHTML += "Usage<br>=======<br>shutdown -h - shut down<br>shutdown -r - reboot<br>";
                            break;
                    }
                break;
                case "help":
                    document.getElementById("output").innerHTML += "You can interact with mish using the command bar at the bottom of the browser window.<br>You can also type commands in.";
                    break;
                case "ls":
                case "dir":
                    document.getElementById("output").innerHTML += "/.<br> /..";
                    break;
                case "cd":
                    document.getElementById("output").innerHTML += "<span style='color:red'>E501: Not implemented</span>";
                    break;
                case "exit":
                    document.getElementById("output").innerHTML += "To exit mish, use 'shutdown -h'";
                    break;
                case "reboot":
                    document.getElementById("output").innerHTML += "To reboot mish, use 'shutdown -r'";
                    break;
                case "man":
                    switch (command.split(" ")[1]) {
                        case undefined:
                            document.getElementById("output").innerHTML += "Usage<br>=======<br>man &lt;entry&gt; - go to manual page for entry<br>man man - get help about man";
                            break;
                        case "man":
                            document.getElementById("output").innerHTML += "<span style='color:red'>E404: There are no manuals.</span>";
                            break;
                        default:
                            document.getElementById("output").innerHTML += "No manual entry for ";
                            document.getElementById("output").innerHTML += command.split(" ")[1];
                            break;
                    } 
                    break;
                case "vi":
                case "vim":
                    document.getElementById("output").innerHTML += "<span style='color:red'>E403: You can't handle the vi.</span>";
                    break;
                case "emacs":
                    document.getElementById("output").innerHTML += "<span style='color:red'>E404: rms.dll was not found.</span>";
                    break;
                case "ed":
                    document.getElementById("output").innerHTML += "?";
                    break;
                case "nano":
                    window.location = "https://www.youtube.com/watch?v=MosYMsZcL84";
                    break;
            }
            document.getElementById("output").innerHTML += "<br>";
            console.log("Command string is \"" + command + "\"");
            document.getElementById("command").innerHTML = "";
            break;
        case "Control":
        case "Shift":
        case "Alt":
        case "OS":
        case "CapsLock":
        case "Tab":
        case "ContextMenu":
        case "AltGraph":
            break;
        case "ArrowLeft":
        case "ArrowRight":
            document.getElementById("output").innerHTML += "<span style='color:red'>E501: mish does not support moving cursor<br></span>";
            break;
        case "ArrowUp":
        case "ArrowDown":
            document.getElementById("output").innerHTML += "<span style='color:red'>E501: mish does not support command history<br></span>";
            break;
        default:
            document.getElementById("command").innerHTML += key;
            break;
    }
});

function mish_init() { console.log("mish has started!"); }
function init_404() { 
    document.getElementById("command").innerHTML = "status";
    setTimeout(function() {
        document.getElementById("output").innerHTML += "<span style=color:red>E404: " + new URL(document.URL).pathname + ": not found</span><br>";
    }, 200)
}

function mish_cmd(command, output) {
    document.getElementById("command").innerHTML = command;
    setTimeout(function() {
        document.getElementById("output").innerHTML += output;
        document.getElementById("output").innerHTML += "<br><br>";
        document.getElementById("command").innerHTML = "";
    }, 200)
}
function mish_clear() {
    document.getElementById("command").innerHTML = "clear";
    setTimeout(function() {
        document.getElementById("command").innerHTML = "";
        document.getElementById("output").innerHTML  = "";
    }, 200)
}
function mish_datetime() {
    const d = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let ampm = d.getHours() >= 12 ? 'pm' : 'am';
    let date_output = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + " at " + d.getHours()%12 + ":" + d.getMinutes() + " " + ampm;
    document.write(date_output);
}

function version() {
    mish_cmd("mish --version", "mish, the Mouse-Interactive Shell, version 1.0 (js-pc-browser)<br> Copyright (C) 2021 That1M8Head<br> Licence GPLv3+: GNU GPL version 3 or later &lt;<a href=http://gnu.org/licenses/gpl.html>http://gnu.org/licenses/gpl.html</a>&gt;<br><br> This is free software; you are free to change and distribute it.<br>There is NO WARRANTY, to the extent permitted by law.");
}  
function help() {
    mish_cmd("help", "You can interact with mish using the command bar at the bottom of the browser window.<br>You can also type commands in.");
}  
function reboot() {
    mish_cmd("shutdown -r now", "System is going down for reboot NOW!");
    setTimeout(function(){ document.write("<style>body{background-color:black;}</style>Error") }, 500)
    setTimeout(function(){ window.location = "mish.html" }, 1000)
}
function shutdown() {
    mish_cmd("shutdown -h now", "System is going down for halt NOW!");
    setTimeout(function(){ document.write("<style>body{background-color:black;}</style>Error") }, 500)
    setTimeout(function(){ window.location = "index.html" }, 1000)
}
/* @license-end */