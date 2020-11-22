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
  if (document.getElementById("logContainer") === null) {
    initializeLog();
  }

  document.getElementById("logContainer").innerHTML += message + "\n";
}

function initializeLog() {
  if (document.getElementById("logContainer") === null) {
    var elem = document.createElement('pre');
    elem.setAttribute("id", "logContainer");
    elem.style.cssText = `
		position:absolute;
		width:500px;
		height:500px;
		top:60px;
		left:35px;
		color:greenyellow;
		padding: 5px;
		`;
    document.body.appendChild(elem);

    //catch all errors
    window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
      log("Error: \n" + errorMsg); //or any message
      return false;
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  initializeLog();
});
