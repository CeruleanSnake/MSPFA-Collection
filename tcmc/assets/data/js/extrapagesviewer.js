// MSPFA JS
window.MSPFA = {
  BBC: [
    [/  /g, "&nbsp;&nbsp;"],
    [/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;"],
    [/\r?\n/g, "<br>"],
    [/\[b\]((?:(?!\[b\]).)*?)\[\/b\]/gi, "<span style=\"font-weight: bolder;\">$1</span>"],
    [/\[i\]((?:(?!\[i\]).)*?)\[\/i\]/gi, "<span style=\"font-style: italic;\">$1</span>"],
    [/\[u\]((?:(?!\[u\]).)*?)\[\/u\]/gi, "<span style=\"text-decoration: underline;\">$1</span>"],
    [/\[s\]((?:(?!\[s\]).)*?)\[\/s\]/gi, "<span style=\"text-decoration: line-through;\">$1</span>"],
    [/\[size=(\d*?)\]((?:(?!\[size=(?:\d*?)\]).)*?)\[\/size\]/gi, "<span style=\"font-size: $1px;\">$2</span>"],
    [/\[color=("?)#?([a-f0-9]{3}(?:[a-f0-9]{3})?)\1\]((?:(?!\[color(?:=[^;]*?)\]).)*?)\[\/color\]/gi, "<span style=\"color: #$2;\">$3</span>"],
    [/\[color=("?)([^";]+?)\1\]((?:(?!\[color(?:=[^;]*?)\]).)*?)\[\/color\]/gi, "<span style=\"color: $2;\">$3</span>"],
    [/\[background=("?)#?([a-f0-9]{3}(?:[a-f0-9]{3})?)\1\]((?:(?!\[background(?:=[^;]*?)\]).)*?)\[\/background\]/gi, "<span style=\"background-color: #$2;\">$3</span>"],
    [/\[background=("?)([^";]+?)\1\]((?:(?!\[background(?:=[^;]*?)\]).)*?)\[\/background\]/gi, "<span style=\"background-color: $2;\">$3</span>"],
    [/\[font=("?)([^";]*?)\1\]((?:(?!\[size(?:=[^;]*?)\]).)*?)\[\/font\]/gi, "<span style=\"font-family: $2;\">$3</span>"],
    [/\[(center|left|right|justify)\]((?:(?!\[\1\]).)*?)\[\/\1\]/gi, "<div style=\"text-align: $1;\">$2</div>"],
    [/\[url\]([^"]*?)\[\/url\]/gi, "<a href=\"$1\">$1</a>"],
    [/\[url=("?)([^"]*?)\1\]((?:(?!\[url(?:=.*?)\]).)*?)\[\/url\]/gi, "<a href=\"$2\">$3</a>"],
    [/\[alt=("?)([^"]*?)\1\]((?:(?!\[alt(?:=.*?)\]).)*?)\[\/alt\]/gi, "<span title=\"$2\">$3</span>"],
    [/\[img\]([^"]*?)\[\/img\]/gi, "<img class=\"major\" src=\"$1\">"],
    [/\[imgs\]([^"]*?)\[\/imgs\]/gi, "<img src=\"$1\">"],
    [/\[img=(\d*?)x(\d*?)\]([^"]*?)\[\/img\]/gi, "<img class=\"major\" src=\"$3\" width=\"$1\" height=\"$2\">"],
    [/\[spoiler\]((?:(?!\[spoiler(?: .*?)?\]).)*?)\[\/spoiler\]/gi, "<div class=\"spoiler closed\"><div style=\"text-align: center;\"><input type=\"button\" value=\"Show\" data-close=\"Hide\" data-open=\"Show\"></div><div>$1</div></div>"],
    [/\[spoiler open=("?)([^"]*?)\1 close=("?)([^"]*?)\3\]((?:(?!\[spoiler(?: .*?)?\]).)*?)\[\/spoiler\]/gi, "<div class=\"spoiler closed\"><div style=\"text-align: center;\"><input type=\"button\" value=\"$2\" data-open=\"$2\" data-close=\"$4\"></div><div>$5</div></div>"],
    [/\[spoiler close=("?)([^"]*?)\1 open=("?)([^"]*?)\3\]((?:(?!\[spoiler(?: .*?)?\]).)*?)\[\/spoiler\]/gi, "<div class=\"spoiler closed\"><div style=\"text-align: center;\"><input type=\"button\" value=\"$4\" data-open=\"$4\" data-close=\"$2\"></div><div>$5</div></div>"],
    [/\[flash=(\d*?)x(\d*?)\](.*?)\[\/flash\]/gi, "<object type=\"application/x-shockwave-flash\" data=\"$3\" width=\"$1\" height=\"$2\"></object>"],
    [/\[user\](.+?)\[\/user\]/gi, "<a class=\"usertag\" href=\"/user/?u=$1\" data-userid=\"$1\">@...</a>"]
  ],
  toggleSpoiler: function () {
    if (this.parentNode.parentNode.classList.contains("closed")) {
      this.value = this.getAttribute("data-close");
      this.parentNode.parentNode.classList.remove("closed");
      this.parentNode.parentNode.classList.add("open");
    } else if (this.parentNode.parentNode.classList.contains("open")) {
      this.value = this.getAttribute("data-open");
      this.parentNode.parentNode.classList.remove("open");
      this.parentNode.parentNode.classList.add("closed");
    }
  },
  parseBBCode: function (code, noHTML) {
    if (noHTML) {
      code = [code.replace(/</g, "&lt;").replace(/>/g, "&gt;")];
    } else {
      code = code.split(/\<(textarea|style)(?:(?: |\n)(?:.|\n)*?)?\>(?:.|\n)*?\<\/\2\>/gi);
      for (var i = 2; i < code.length; i += 2) {
        code.splice(i, 1);
      }
    }
    for (var i = 0; i < code.length; i += 2) {
      var prevCode;
      while (prevCode != code[i]) {
        prevCode = code[i];
        for (var j = 0; j < MSPFA.BBC.length; j++) {
          code[i] = code[i].replace(MSPFA.BBC[j][0], MSPFA.BBC[j][1]);
        }
      }
    }
    code = code.join("");
    var e = document.createElement("span");
    e.innerHTML = code;
    var es = e.querySelectorAll("*");
    for (var i = es.length - 1; i >= 0; i--) {
      if (es[i].tagName == "SCRIPT") {
        es[i].parentNode.removeChild(es[i]);
      } else if (es[i].tagName == "PARAM") {
        if (es[i].name.trim() == "allowScriptAccess") {
          es[i].parentNode.removeChild(es[i]);
        }
      } else {
        // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
        for (var j = 0; j < es[i].attributes.length; j++) {
          if (es[i].attributes[j].name.toLowerCase().indexOf("on") == 0 || (typeof es[i][es[i].attributes[j].name.toLowerCase()] == "string" && /^(?:javascript|data):/.test(es[i][es[i].attributes[j].name.toLowerCase()])) || /^(?:javascript|data):/.test(es[i].attributes[j].value) || es[i].attributes[j].name.toLowerCase() == "allowscriptaccess") {
            es[i].removeAttribute(es[i].attributes[j].name);
          }
        }
      }
    }
    try {
      var sins = e.querySelectorAll(".spoiler > div:first-child > input");
      for (var i = 0; i < sins.length; i++) {
        sins[i].addEventListener("click", MSPFA.toggleSpoiler);
      }
      var sdivs = e.querySelectorAll(".spoiler > div:last-child");
      for (var i = 0; i < sdivs.length; i++) {
        var rembrc = true;
        while (rembrc) {
          rembrc = false;
          var rembr = sdivs[i];
          while (rembr = rembr.firstChild) {
            if (rembr.tagName == "BR") {
              rembr.parentNode.removeChild(rembr);
              rembrc = true;
              break;
            }
          }
          rembr = sdivs[i];
          while (rembr = rembr.lastChild) {
            if (rembr.tagName == "BR") {
              rembr.parentNode.removeChild(rembr);
              rembrc = true;
              break;
            }
          }
        }
      }
    } catch (err) {}
    var usertags = e.querySelectorAll("a.usertag");
    // for (var i = 0; i < usertags.length; i++) {
    //   (function (usertag) {
    //     MSPFA.request(0, {
    //       do: "user",
    //       u: usertag.getAttribute("data-userid")
    //     }, function (user) {
    //       usertag.innerText = "@" + user.n;
    //     }, function (status) {
    //       if (status == 404) {
    //         usertag.innerText = "<user not found>";
    //       }
    //     }, true);
    //   })(usertags[i]);
    // }
    // if (MSPFA.ruffleEnabled === undefined && e.querySelector("object")) {
    //   var content = document.createElement('span');
    //   content.appendChild(document.createTextNode('This page tried to load Flash content, which is not supported. Would you like to automatically use '));
    //   var ruffleLink = document.createElement('a');
    //   ruffleLink.textContent = 'Ruffle';
    //   ruffleLink.href = 'https://ruffle.rs/';
    //   ruffleLink.target = '_blank';
    //   content.appendChild(ruffleLink);
    //   content.appendChild(document.createTextNode(' to emulate all Flash content during this session?'));
    //   content.appendChild(document.createElement('br'));
    //   content.appendChild(document.createElement('br'));
    //   var warning = document.createElement('span');
    //   warning.textContent = 'Warning: Ruffle is still in development and will not always work. You can always refresh the page to disable it again.';
    //   warning.style.color = '#ed5014';
    //   content.appendChild(warning);
    //   MSPFA.dialog('Flash', content, ["Yes", "No"], function(output) {
    //     if (output === 'Yes') {
    //       MSPFA.ruffleEnabled = true;
    //       var ruffleScript = document.createElement('script');
    //       ruffleScript.src = '/js/ruffle.js?cb=1';
    //       document.head.appendChild(ruffleScript);
    //     } else {
    //       MSPFA.ruffleEnabled = false;
    //     }
    //   });
    // }
    return e;
  },
  slide: []
}


const preloadImages = pageIndex => {
  if (adventureData.p[pageIndex - 1]) {
    const body = adventureData.p[pageIndex - 1].b
    const imgRegex = body.match(/\[img\](?<link>[^"]*?)\[\/img\]|\[img=(\d*?)x(\d*?)\]([^"]*?)\[\/img\]/gi)
    if (imgRegex) document.getElementById("prelaod").append(MSPFA.parseBBCode(imgRegex.join(" ")))
  }
}


window.addEventListener("keydown", function (evt) {
  if (isNaN(getUrlPage())) {
    return
  }

  if (evt.key == "ArrowRight") {
    clickLink(evt, this.document.querySelector("#links a").href)
  }

  if (evt.key == "ArrowLeft") {
    clickLink(evt, this.document.querySelector("#goback").href)
  }

  if (evt.key == " ") {
    evt.preventDefault()
    this.document.querySelectorAll(".spoiler input").forEach(e => {
      e.click()
    })
  }
})