// define a new console
var console = (function(oldCons) {
  return {
    log: function(text) {
      oldCons.log(text);
      customLog(text);
    },
    info: function(text) {
      oldCons.info(text);
      customLog(text);
    },
    warn: function(text) {
      oldCons.warn(text);
      customLog(text);
    },
    error: function(text) {
      oldCons.error(text);
      customLog(text);
    }
  };
}(window.console));

//Then redefine the old console
window.console = console;

function customLog(message) {
  if (document.getElementById("log4browserContainer") === null) {
    initializeLog();
  }

  document.getElementById("log4browserContainer").innerHTML += "- "+message + "\n";
}

function initializeLog() {

  if (document.getElementById("log4browserContainer") === null) {
    var elem = document.createElement('pre');
    elem.setAttribute("id", "log4browserContainer");
    elem.style.cssText = `
		position:absolute;
		top:0px;
		left:0px;
		color:greenyellow;
		padding: 5px;
		white-space: pre-wrap;
		`;
    document.body.appendChild(elem);

    //catch all errors
    window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
      log("Error: \n" + errorMsg); //or any message
      return false;
    }
  }
}
