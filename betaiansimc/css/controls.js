var autoShowLogs = true; //if you want to spritlogs, pesterlogs, etc.. to open automatically
var arrowControls = False; //if you want to list through pages by pressing left/right arrows






//copy-pasted from http://stackoverflow.com/a/950146
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var myPrettyCode = function() {

    if(autoShowLogs)
    {
        var logBtns = document.getElementsByClassName('button');
            logBtns[0].click();
            logBtns[2].click();
    }
};
loadScript("css/log.js", myPrettyCode);



if(arrowControls)
{
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                var url = window.location.pathname;
                url = url.replace(/\\/g, '/');
                var name = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.'));
                if(typeof prevPageInc == "undefined")
                    window.location.href = parseInt(name)-1+".html";
                else
                    window.location.href = parseInt(name)-1-prevPageInc+".html";
               
                break;
            case 39:
                var url = window.location.pathname;
                url = url.replace(/\\/g, '/');
                var name = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.'));
                if(typeof nextPageInc == "undefined")
                    window.location.href = parseInt(name)+1+".html";  
                else
                    window.location.href = parseInt(name)+1+nextPageInc+".html";
              
                break;
        }
    };
}
