//  Import Settings
if (localStorage.getItem("siteSettings") != null) {
  var mySettings = JSON.parse(localStorage.getItem("siteSettings"));
}

document.getElementById('importSettingsFile').addEventListener('change', readFileAsString)

// Clear Settings
function clearSettings() {
  localStorage.clear();
  document.getElementById("skin").value == "0";
  document.body.style.backgroundImage = "url('assets/Background-AKOffline-OCP.svg')";
  alert("Default settings restored");
}

// Set Local Storage 
function setSettings() {
  var mySettings = []
	if (localStorage.getItem("siteSettings") != null) {
    var mySettings = JSON.parse(localStorage.getItem("siteSettings"));
  }
  if (document.getElementById("skin").value == "0") {
    mySettings[0] = "0";  
  } else if (document.getElementById("skin").value == "1") {
    mySettings[0] = "1";
  } else if (document.getElementById("skin").value == "2") {
    mySettings[0] = "2";
  } else if (document.getElementById("skin").value == "3") {
    mySettings[0] = "3";
  } else if (document.getElementById("skin").value == "4") {
    mySettings[0] = "4";
  } else if (document.getElementById("skin").value == "5") {
    mySettings[0] = "5";
  } else if (document.getElementById("skin").value == "6") {
    mySettings[0] = "6";
  }
  // Set QLC A1
  try {
    mySettings[1]  = document.getElementById("QLC_A1").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[1] == null) {
      mySettings[1] = "G01";
    }
  }
  // Set QLC A2
  try {
    mySettings[2]  = document.getElementById("QLC_A2").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[2] == null) {
      mySettings[2] = "M17";
    }
  }
  // Set QLC A3
  try {
    mySettings[3]  = document.getElementById("QLC_A3").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[3] == null) {
      mySettings[3] = "A21";
    }
  }
  // Set QLC A4
  try {
    mySettings[4]  = document.getElementById("QLC_A4").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[4] == null) {
      mySettings[4] = "folder00";
    }
  }
  // Set QLC A5
  try {
    mySettings[5]  = document.getElementById("QLC_A5").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[5] == null) {
      mySettings[5] = "M07";
    }
  }
  // Set QLC B1
  try {
    mySettings[6]  = document.getElementById("QLC_B1").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[6] == null) {
      mySettings[6] = "folder01";
    }
  }
  // Set QLC B2
  try {
    mySettings[7]  = document.getElementById("QLC_B2").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[7] == null) {
      mySettings[7] = "I04";
    }
  }
  // Set QLC B3
  try {
    mySettings[8]  = document.getElementById("QLC_B3").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[8] == null) {
      mySettings[8] = "folder05";
    }
  }
  // Set QLC B4
  try {
    mySettings[9]  = document.getElementById("QLC_B4").lastChild.getAttribute("value");      
  } catch(err) {
    if (mySettings[9] == null) {
      mySettings[9] = "M21";
    }
  }
  // Set QLC B5
  try {
    mySettings[10]  = document.getElementById("QLC_B5").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[10] == null) {
      mySettings[10] = "A08";
    }
  }
  // Set QLC C1
  try {
    mySettings[11] = document.getElementById("QLC_C1").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[11] == null) {
      mySettings[11] = "D13";
    }
  }
  // Set QLC C2
  try {
    mySettings[12] = document.getElementById("QLC_C2").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[12] == null) {
      mySettings[12] = "M13";
    }
  }
  // Set QLC C3
  try {
    mySettings[13] = document.getElementById("QLC_C3").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[13] == null) {
      mySettings[13] = "folder05";
    }
  }
  // Set QLC C4
  try {
    mySettings[14] = document.getElementById("QLC_C4").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[14] == null) {
      mySettings[14] = "M03";
    }
  }
  // Set QLC C5
  try {
    mySettings[15] = document.getElementById("QLC_C5").lastChild.getAttribute("value");
  } catch(err) {
    if (mySettings[15] == null) {
      mySettings[15] = "A26";
    }
  }
  switch (document.getElementById("paperBoySwitch").innerHTML) {
    case "Display Daily Announcements":
      mySettings[16] = 1;
      break;
    default:
      mySettings[16] = 0;
  }
  switch (document.getElementById("botBanSwitch").innerHTML) {
    case "Display Site Disclaimer":
      mySettings[17] = 1;
      break;
    default:
      mySettings[17] = 0;
  }
	switch (document.getElementById('maxCardsPerRowDD').value) {
    case '0':
		  mySettings[18] = 0;
      break;
		case '1':
		  mySettings[18] = 1;
      break;
		case '2':
		  mySettings[18] = 2;
      break;
		case '3':
		  mySettings[18] = 3;
      break;
		case '4':
		  mySettings[18] = 4;
      break;
		case '5':
		  mySettings[18] = 5;
      break;
		case '6':
		  mySettings[18] = 6;
      break;
	}
  localStorage.setItem("siteSettings", JSON.stringify(mySettings));
  alert("Settings Saved");
  } ;

function readFileAsString() {
  var files = this.files;
  if (files.length === 0) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(event) {
    var mySettings = []
		var mySettings = JSON.parse(event.target.result);
    localStorage.setItem("siteSettings", JSON.stringify(mySettings));
  };
  reader.readAsText(files[0]);
}

// Export settings
function exportSettings() {
  if (localStorage.getItem("siteSettings") == null){
		alert("No settings detected");
    return;
	}
	let dataStr = localStorage.getItem("siteSettings");
  let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  let exportFileDefaultName = 'AKOffline Settings.json';
  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}

function saveExportSettings() {
  setSettings()
  exportSettings()
}