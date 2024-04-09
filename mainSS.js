window.onresize = OCD();

// gets current site settings
if (localStorage.getItem("siteSettings") == null) {  
} else {
  const mySettings = JSON.parse(localStorage.getItem("siteSettings"));
  switch (parseInt(mySettings[0])) {
    case 1:
      document.getElementById("skin").value == 1;
      document.body.style.backgroundImage = "url('assets/Background-AKOffline-UDP.svg')";
      break;
    case 2:
      document.getElementById("skin").value == 2;
      document.body.style.backgroundImage = "url('assets/Background-AKOffline-BDU.svg')";
      break;
    case 3:
      document.getElementById("skin").value == 3;
      document.body.style.backgroundImage = "url('assets/Background-AKOffline-Yellow.svg')";
      break;
    case 4:
      document.getElementById("skin").value == 4;
      document.body.style.backgroundImage = "url('assets/Background-AKOriginal.jpg')";
      break;
    case 5:
      document.getElementById("skin").value == 5;
      document.body.style.backgroundImage = "url('assets/Background-AKOriginal-Alt.jpg')";
      break;
    case 6:
      document.getElementById("skin").value == 6;
      document.body.style.backgroundImage = "url('assets/Background-AKOffline-DarkMode.svg')";
      break;
    default:
      document.getElementById("skin").value == 0;
      document.body.style.backgroundImage = "url('assets/Background-AKOffline-OCP.svg')";
  }
  if (parseInt(mySettings[16]) == 1) {
    document.getElementById("paperBoySwitch").innerHTML = "Display Daily Announcements";
  }
  if (parseInt(mySettings[17]) == 1) {
    document.getElementById("botBan").style.display = "none";
    document.getElementById("botBanSwitch").innerHTML = "Hide Disclaimer";
    document.getElementById("botBanIndicator").innerHTML = "Current Status: <red>Disabled</red>";
		document.getElementById("botBanIndicator").value = 1;
  }
	if (parseInt(mySettings[18] == 0)) {
	document.getElementById('maxCardsPerRowDD').selectedIndex = 2;
  } else if (parseInt(mySettings[18]) == 1) {
	document.getElementById('maxCardsPerRowDD').selectedIndex = 0;
  } else if (parseInt(mySettings[18]) == 2) {
	document.getElementById('maxCardsPerRowDD').selectedIndex = 1;
  } else if (parseInt(mySettings[18]) == 3) {
	document.getElementById('maxCardsPerRowDD').selectedIndex = 3;
  } else if (parseInt(mySettings[18]) == 4) {
	document.getElementById('maxCardsPerRowDD').selectedIndex = 4;
  } else if (parseInt(mySettings[18]) == 5) {
	document.getElementById('maxCardsPerRowDD').selectedIndex = 5;
  } else if (parseInt(mySettings[18]) == 6) {
	document.getElementById('maxCardsPerRowDD').selectedIndex = 6;
  }
	document.getElementById('A1-text').innerHTML = ("AKO Card - A1<hr>" + document.getElementById(mySettings[1] + 'Title').innerHTML);
	document.getElementById('A2-text').innerHTML = ("AKO Card - A2<hr>" + document.getElementById(mySettings[2] + 'Title').innerHTML);
	document.getElementById('A3-text').innerHTML = ("AKO Card - A3<hr>" + document.getElementById(mySettings[3] + 'Title').innerHTML);
	document.getElementById('A4-text').innerHTML = ("AKO Card - A4<hr>" + document.getElementById(mySettings[4] + 'Title').innerHTML);
	document.getElementById('A5-text').innerHTML = ("AKO Card - A5<hr>" + document.getElementById(mySettings[5] + 'Title').innerHTML);
	document.getElementById('B1-text').innerHTML = ("AKO Card - B1<hr>" + document.getElementById(mySettings[6] + 'Title').innerHTML);
	document.getElementById('B2-text').innerHTML = ("AKO Card - B2<hr>" + document.getElementById(mySettings[7] + 'Title').innerHTML);
	document.getElementById('B3-text').innerHTML = ("AKO Card - B3<hr>" + document.getElementById(mySettings[8] + 'Title').innerHTML);
	document.getElementById('B4-text').innerHTML = ("AKO Card - B4<hr>" + document.getElementById(mySettings[9] + 'Title').innerHTML);
	document.getElementById('B5-text').innerHTML = ("AKO Card - B5<hr>" + document.getElementById(mySettings[10] + 'Title').innerHTML);
	document.getElementById('C1-text').innerHTML = ("AKO Card - C1<hr>" + document.getElementById(mySettings[11] + 'Title').innerHTML);
	document.getElementById('C2-text').innerHTML = ("AKO Card - C2<hr>" + document.getElementById(mySettings[12] + 'Title').innerHTML);
	document.getElementById('C3-text').innerHTML = ("AKO Card - C3<hr>" + document.getElementById(mySettings[13] + 'Title').innerHTML);
	document.getElementById('C4-text').innerHTML = ("AKO Card - C4<hr>" + document.getElementById(mySettings[14] + 'Title').innerHTML);
	document.getElementById('C5-text').innerHTML = ("AKO Card - C5<hr>" + document.getElementById(mySettings[15] + 'Title').innerHTML);
}

document.getElementById("cardPannel").style.height = (window.innerHeight - (document.getElementById("topBan").offsetHeight + document.getElementById("botBan").offsetHeight))+"px";
document.getElementById("cardForm").style.height = (window.innerHeight - (document.getElementById("topBan").offsetHeight + document.getElementById("botBan").offsetHeight + document.getElementById("toolBar").offsetHeight))+"px";

// Change side pannel length
function OCD(){
  document.getElementById("cardPannel").style.height = (window.innerHeight - (document.getElementById("topBan").offsetHeight + document.getElementById("botBan").offsetHeight))+"px";
  document.getElementById("cardForm").style.height = (window.innerHeight - (document.getElementById("topBan").offsetHeight + document.getElementById("botBan").offsetHeight + document.getElementById("toolBar").offsetHeight))+"px";
}

// Allows for drag and drop funtions
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  // Set QLC A1
  try {
    document.getElementById("QLC_A1").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("A1-text").innerHTML = "Drop Card Here";
  }
  // Set QLC A2
  try {
    document.getElementById("QLC_A2").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("A2-text").innerHTML = "Drop Card Here";
  }
  // Set QLC A3
  try {
    document.getElementById("QLC_A3").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("A3-text").innerHTML = "Drop Card Here";
  }
  // Set QLC A4
  try {
    document.getElementById("QLC_A4").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("A4-text").innerHTML = "Drop Card Here";
  }
  // Set QLC A5
  try {
    document.getElementById("QLC_A5").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("A5-text").innerHTML = "Drop Card Here";
  }
  // Set QLC B1
  try {
    document.getElementById("QLC_B1").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("B1-text").innerHTML = "Drop Card Here";
  }
  // Set QLC B2
  try {
    document.getElementById("QLC_B2").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("B2-text").innerHTML = "Drop Card Here";
  }
  // Set QLC B3
  try {
    document.getElementById("QLC_B3").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("B3-text").innerHTML = "Drop Card Here";
  }
  // Set QLC B4
  try {
    document.getElementById("QLC_B4").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("B4-text").innerHTML = "Drop Card Here";
  }
  // Set QLC B5
  try {
    document.getElementById("QLC_B5").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("B5-text").innerHTML = "Drop Card Here";
  }
  // Set QLC C1
  try {
    document.getElementById("QLC_C1").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("C1-text").innerHTML = "Drop Card Here";
  }
  // Set QLC C2
  try {
    document.getElementById("QLC_C2").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("C2-text").innerHTML = "Drop Card Here";
  }
  // Set QLC C3
  try {
    document.getElementById("QLC_C3").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("C3-text").innerHTML = "Drop Card Here";
  }
  // Set QLC C4
  try {
    document.getElementById("QLC_C4").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("C4-text").innerHTML = "Drop Card Here";
  }
  // Set QLC C5
  try {
    document.getElementById("QLC_C5").lastChild.getAttribute("value");
  } catch(err) {
    document.getElementById("C5-text").innerHTML = "Drop Card Here";
  }
}

function drop(ev) {
  ev.target.classList.remove('dragOver');
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  try {
    document.getElementById("QLC_A1").lastChild.getAttribute("value");
    document.getElementById("A1-text").innerHTML = "AKO Card - A1<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
		  document.getElementById("A1-text").innerHTML = "AKO Card - A1<hr>Default<br>GI Suicide Prevention";
    } else {
			document.getElementById('A1-text').innerHTML = ("AKO Card - A1<hr>" + document.getElementById(mySettings[1] + 'Title').innerHTML);
		}
  }
  // Set QLC A2
  try {
    document.getElementById("QLC_A2").lastChild.getAttribute("value");
    document.getElementById("A2-text").innerHTML = "AKO Card - A2<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("A2-text").innerHTML = "AKO Card - A2<hr>Default<br>My MEDPROS";
    } else {
			document.getElementById('A2-text').innerHTML = ("AKO Card - A2<hr>" + document.getElementById(mySettings[2] + 'Title').innerHTML);
		}
  }
  // Set QLC A3
  try {
    document.getElementById("QLC_A3").lastChild.getAttribute("value");
    document.getElementById("A3-text").innerHTML = "AKO Card - A3<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("A3-text").innerHTML = "AKO Card - A3<hr>Default<br>Army Fit";
    } else {
			document.getElementById('A3-text').innerHTML = ("AKO Card - A3<hr>" + document.getElementById(mySettings[3] + 'Title').innerHTML);
		}
  }
  // Set QLC A4
  try {
    document.getElementById("QLC_A4").lastChild.getAttribute("value");
    document.getElementById("A4-text").innerHTML = "AKO Card - A4<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("A4-text").innerHTML = "AKO Card - A4<hr>Default<br>Soldier Record Brief<br>(Folder)";
    } else {
			document.getElementById('A4-text').innerHTML = ("AKO Card - A4<hr>" + document.getElementById(mySettings[4] + 'Title').innerHTML);
		}
  }
  // Set QLC A5
  try {
    document.getElementById("QLC_A5").lastChild.getAttribute("value");
    document.getElementById("A5-text").innerHTML = "AKO Card - A5<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("A5-text").innerHTML = "AKO Card - A5<hr>Default<br>Military OneSource";
    } else {
			document.getElementById('A5-text').innerHTML = ("AKO Card - A5<hr>" + document.getElementById(mySettings[5] + 'Title').innerHTML);
		}
  }
  // Set QLC B1
  try {
    document.getElementById("QLC_B1").lastChild.getAttribute("value");
    document.getElementById("B1-text").innerHTML = "AKO Card - B1<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("B1-text").innerHTML = "AKO Card - B1<hr>Default<br>Army Email<br>(Folder)";
    } else {
			document.getElementById('B1-text').innerHTML = ("AKO Card - B1<hr>" + document.getElementById(mySettings[6] + 'Title').innerHTML);
		}
  }
  // Set QLC B2
  try {
    document.getElementById("QLC_B2").lastChild.getAttribute("value");
    document.getElementById("B2-text").innerHTML = "AKO Card - B2<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("B2-text").innerHTML = "AKO Card - B2<hr>Default<br>IPERMS";
    } else {
			document.getElementById('B2-text').innerHTML = ("AKO Card - B2<hr>" + document.getElementById(mySettings[7] + 'Title').innerHTML);
		}
  }
  // Set QLC B3
  try {
    document.getElementById("QLC_B3").lastChild.getAttribute("value");
    document.getElementById("B3-text").innerHTML = "AKO Card - B3<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("B3-text").innerHTML = "AKO Card - B3<hr>Default<br>IPPS-A<br>(Folder)";
    } else {
			document.getElementById('B3-text').innerHTML = ("AKO Card - B3<hr>" + document.getElementById(mySettings[8] + 'Title').innerHTML);
		}
  }
  // Set QLC B4
  try {
    document.getElementById("QLC_B4").lastChild.getAttribute("value");
    document.getElementById("B4-text").innerHTML = "AKO Card - B4<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("B4-text").innerHTML = "AKO Card - B4<hr>Default<br>MYPay";
    } else {
			document.getElementById('B4-text').innerHTML = ("AKO Card - B4<hr>" + document.getElementById(mySettings[9] + 'Title').innerHTML);
		}
  }
  // Set QLC B5
  try {
		
    document.getElementById("QLC_B5").lastChild.getAttribute("value");
    document.getElementById("B5-text").innerHTML = "AKO Card - B5<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("B5-text").innerHTML = "AKO Card - B5<hr>Default<br>Army Career Tracker";
    } else {
			document.getElementById('B5-text').innerHTML = ("AKO Card - B5<hr>" + document.getElementById(mySettings[10] + 'Title').innerHTML);
		}
  }
  // Set QLC C1
  try {
    document.getElementById("QLC_C1").lastChild.getAttribute("value");
    document.getElementById("C1-text").innerHTML = "AKO Card - C1<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("C1-text").innerHTML = "AKO Card - C1<hr>Default<br>Digital Training<br>Management System<br>(DTMS)";
    } else {
			document.getElementById('C1-text').innerHTML = ("AKO Card - C1<hr>" + document.getElementById(mySettings[11] + 'Title').innerHTML);
		}
  }
  // Set QLC C2
  try {
    document.getElementById("QLC_C2").lastChild.getAttribute("value");
    document.getElementById("C2-text").innerHTML = "AKO Card - C2<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("C2-text").innerHTML = "AKO Card - C2<hr>Default<br>My Clothing Record";
    } else {
			document.getElementById('C2-text').innerHTML = ("AKO Card - C2<hr>" + document.getElementById(mySettings[12] + 'Title').innerHTML);
		}
  }
  // Set QLC C3
  try {
    document.getElementById("QLC_C3").lastChild.getAttribute("value");
    document.getElementById("C3-text").innerHTML = "AKO Card - C3<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("C3-text").innerHTML = "AKO Card - C3<hr>Default<br>Army 365<br>(Folder)";
    } else {
			document.getElementById('C3-text').innerHTML = ("AKO Card - C3<hr>" + document.getElementById(mySettings[13] + 'Title').innerHTML);
		}
  }
  // Set QLC C4
  try {
    document.getElementById("QLC_C4").lastChild.getAttribute("value");
    document.getElementById("C4-text").innerHTML = "AKO Card - C4<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("C4-text").innerHTML = "AKO Card - C4<hr>Default<br>MHS Genesis";
    } else {
			document.getElementById('C4-text').innerHTML = ("AKO Card - C4<hr>" + document.getElementById(mySettings[14] + 'Title').innerHTML);
		}
  }
  // Set QLC C5
  try {
    document.getElementById("QLC_C5").lastChild.getAttribute("value");
    document.getElementById("C5-text").innerHTML = "AKO Card - C5<hr>";
  } catch(err) {
    if (localStorage.getItem("siteSettings") == null) {
      document.getElementById("C5-text").innerHTML = "AKO Card - C5<hr>Default<br>Army Maintenance<br>Application (ArMA)";
    } else {
			document.getElementById('C5-text').innerHTML = ("AKO Card - C5<hr>" + document.getElementById(mySettings[15] + 'Title').innerHTML);
		}
  }
}

// Change Backgrounds
function shiftingRealities() {
  if (document.getElementById("skin").value == "0") {
  // Switch to AKOffline-OCP
    document.body.style.backgroundImage = "url('assets/Background-AKOffline-OCP.svg')";
  } else if (document.getElementById("skin").value == "1") {
  // Switch to AKOffline-UCP
    document.body.style.backgroundImage = "url('assets/Background-AKOffline-UDP.svg')";
  } else if (document.getElementById("skin").value == "2") {
  // Switch to AKOffline-BDU
    document.body.style.backgroundImage = "url('assets/Background-AKOffline-BDU.svg')";
  } else if (document.getElementById("skin").value == "3") {
  // Switch to AKOffline-UCP
    document.body.style.backgroundImage = "url('assets/Background-AKOffline-Yellow.svg')";
  } else if (document.getElementById("skin").value == "4") {
  // Switch to AKOriginal
    document.body.style.backgroundImage = "url('assets/Background-AKOriginal.jpg')";
  } else if (document.getElementById("skin").value == "5") {
  // Switch to AKOriginal-Alt
    document.body.style.backgroundImage = "url('assets/Background-AKOriginal-Alt.jpg')";
  } else if (document.getElementById("skin").value == "6") {
    document.body.style.backgroundImage = "url('assets/Background-AKOffline-DarkMode.svg')";
  }
}

//  Switch Catagories/Links Listed
function switchCategories() {
  if (document.getElementById("catSwitch").innerHTML == "Switch to Sites Listed") {
    document.getElementById("catSites").style.display = "none";
    document.getElementById("azSites").style.display = "block";
    document.getElementById("catSwitch").innerHTML = "Switch to Catagory View";
  } else {
    document.getElementById("catSites").style.display = "block";
    document.getElementById("azSites").style.display = "none";
    document.getElementById("catSwitch").innerHTML = "Switch to Sites Listed";
  }
}

//  
function togglePaperBoy() {
  if (document.getElementById("paperBoySwitch").innerHTML == "Hide Daily Announcements") {
    document.getElementById("paperBoySwitch").innerHTML = "Display Daily Announcements";
    document.getElementById("paperBoyIndicator").innerHTML = "Current Status: <red>Announcements Disabled</red>";
  } else {
    document.getElementById("paperBoySwitch").innerHTML = "Hide Daily Announcements";
    document.getElementById("paperBoyIndicator").innerHTML = "Current Status: <green>Announcements Enabled</green>";
  }
}

//  
function toggleBotBan() {
  if (document.getElementById("botBanSwitch").innerHTML == "Hide Site Disclaimer") {
    document.getElementById("botBan").style.display = "none";
    document.getElementById("botBanSwitch").innerHTML = "Display Site Disclaimer";
    document.getElementById("botBanIndicator").innerHTML = "Current Status: <red>Disclaimer Disabled</red>";
    OCD();
    } else {
    document.getElementById("botBan").style.display = "";
    document.getElementById("botBanSwitch").innerHTML = "Hide Site Disclaimer";
    document.getElementById("botBanIndicator").innerHTML = "Current Status: <green>Disclaimer Enabled</green>";
    OCD();
  }
}

// Set Catagories
var cat00 = document.querySelectorAll('.catArmySites');
for(var i = 0; i < cat00.length; i++){
  document.getElementById('categoryArmySites').innerHTML = document.getElementById('categoryArmySites').innerHTML + cat00[i].innerHTML;
}
var cat01 = document.querySelectorAll('.catCombatReadiness');
for(var i = 0; i < cat01.length; i++){
  document.getElementById('categoryCombatReadiness').innerHTML = document.getElementById('categoryCombatReadiness').innerHTML + cat01[i].innerHTML;
}
var cat02 = document.querySelectorAll('.catDod');
for(var i = 0; i < cat02.length; i++){
  document.getElementById('categoryDod').innerHTML = document.getElementById('categoryDod').innerHTML + cat02[i].innerHTML;
}
var cat03 = document.querySelectorAll('.catCivEd');
for(var i = 0; i < cat03.length; i++){
  document.getElementById('categoryCivEd').innerHTML = document.getElementById('categoryCivEd').innerHTML + cat03[i].innerHTML;
}
var cat04 = document.querySelectorAll('.catMilEd');
for(var i = 0; i < cat04.length; i++){
  document.getElementById('categoryMilEd').innerHTML = document.getElementById('categoryMilEd').innerHTML + cat04[i].innerHTML;
}
var cat05 = document.querySelectorAll('.catFamily');
for(var i = 0; i < cat05.length; i++){
  document.getElementById('categoryFamily').innerHTML = document.getElementById('categoryFamily').innerHTML + cat05[i].innerHTML;
}
var cat06 = document.querySelectorAll('.catFinance');
for(var i = 0; i < cat06.length; i++){
  document.getElementById('categoryFinance').innerHTML = document.getElementById('categoryFinance').innerHTML + cat06[i].innerHTML;
}
var cat07 = document.querySelectorAll('.catHealth');
for(var i = 0; i < cat07.length; i++){
  document.getElementById('categoryHealth').innerHTML = document.getElementById('categoryHealth').innerHTML + cat07[i].innerHTML;
}
var cat08 = document.querySelectorAll('.catHuman');
for(var i = 0; i < cat08.length; i++){
  document.getElementById('categoryHuman').innerHTML = document.getElementById('categoryHuman').innerHTML + cat08[i].innerHTML;
}
var cat09 = document.querySelectorAll('.catLegal');
for(var i = 0; i < cat09.length; i++){
  document.getElementById('categoryLegal').innerHTML = document.getElementById('categoryLegal').innerHTML + cat09[i].innerHTML;
}
var cat10 = document.querySelectorAll('.catProDev');
for(var i = 0; i < cat10.length; i++){
  document.getElementById('categoryProDev').innerHTML = document.getElementById('categoryProDev').innerHTML + cat10[i].innerHTML;
}
var cat11 = document.querySelectorAll('.catTech');
for(var i = 0; i < cat11.length; i++){
  document.getElementById('categoryTech').innerHTML = document.getElementById('categoryTech').innerHTML + cat11[i].innerHTML;
}
var cat12 = document.querySelectorAll('.catUsGov');
for(var i = 0; i < cat12.length; i++){
  document.getElementById('categoryUsGov').innerHTML = document.getElementById('categoryUsGov').innerHTML + cat12[i].innerHTML;
}
var cat13 = document.querySelectorAll('.catAll');
for(var i = 0; i < cat13.length; i++){
  document.getElementById('categorySearchResults').innerHTML = document.getElementById('categorySearchResults').innerHTML + cat13[i].innerHTML;
}

function changeSettingsPage() {
  if (document.getElementById('mainSettingsTab').style.display=="none") { //  going to mainSettingsTab
		document.getElementById('cardForm').style.display="none";
		document.getElementById('toolBar').style.display="none";
		document.getElementById('mainSettingsTab').style.display="block";
		document.getElementById('quickLinksTab').style.display="none";
		document.getElementById('cardPannel').style.width="80%";
		document.getElementById('cardPannel').style.maxWidth="100%";
		document.getElementById('cardPannel').classList.add("expand");
		document.getElementById('cardPannel').classList.remove("retract");
		OCD();
		} else if (document.getElementById('quickLinksTab').style.display=="none") { // going to Quicklinks settings
		document.getElementById('cardForm').style.display="block";
		document.getElementById('toolBar').style.display="block";
		document.getElementById('quickLinksTab').style.display="block";
		document.getElementById('mainSettingsTab').style.display="none";
		document.getElementById('cardPannel').style.width="30%";
		document.getElementById('cardPannel').style.maxWidth="255px";
		document.getElementById('cardPannel').classList.add("retract");
		document.getElementById('cardPannel').classList.remove("expand");
		OCD();
	}
}

function accio() {
//    document.getElementById('noResultsCard').style.display='none';
//  try {
  if (document.getElementById('searchbar').value.length >= 3) {
    document.getElementById("categorySearchResults").style.display = "block";
    document.getElementById("catSites").style.display = "none";
    document.getElementById("azSites").style.display = "none";
    document.getElementById("catSwitch").innerHTML = "Switch to Sites Listed";
    var input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    var x = document.getElementById("categorySearchResults").getElementsByClassName('column');
		let counter = 0;
    for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
      }
      else {
        x[i].style.display="inline-block";
        counter++;
      }
    }
//    if (counter <= 0) {
//      document.getElementById('noResultsCard').style.display='inline-block';
//    } else {
//      document.getElementById('noResultsCard').style.display='none';
//    }
//		console.log(x.length)
  }
}

var tempBack = 0;
function toggleDarkMode() {
  document.body.classList.toggle('darkmode');
  if (parseInt(localStorage.getItem("darkmode")) == 1) {
    localStorage.setItem("darkmode", 0);
		document.getElementById('DarkModeIndicator').innerHTML = "Current Status: <red>Dark Mode Site Disabled</red>";
    document.getElementById("DarkModeSwitch").innerHTML = "Turn On Dark Mode";
    document.getElementById("skin").value = tempBack;
    shiftingRealities()
  } else {
    localStorage.setItem("darkmode", 1);
    tempBack = document.getElementById("skin").value;
		document.getElementById("skin").value = 6;
		document.getElementById('DarkModeIndicator').innerHTML = "Current Status: <green>Dark Mode Site Enabled</green>";
    document.getElementById("DarkModeSwitch").innerHTML = "Turn Off Dark Mode";
    shiftingRealities()
  }
}

switch (parseInt(localStorage.getItem("darkmode"))) {
	case 1:
		document.getElementById("skin").value = 6;
		document.getElementById('DarkModeIndicator').innerHTML = "Current Status: <green>Dark Mode Site Enabled</green>";
		document.getElementById("DarkModeSwitch").innerHTML = "Turn Off Dark Mode";
		break;
	default:
		break;
}
