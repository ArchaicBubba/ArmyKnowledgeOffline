try {
window.onload = changeCat;
window.addEventListener('resize', centerCards);
document.getElementById("DropDownBox").onchange = changeCat;
document.getElementById("searchbar").onchange = searchAKO;

var mySettings = [];
if (localStorage.getItem("siteSettings") !== null) {
  var mySettings = JSON.parse(localStorage.getItem("siteSettings"));
}

//  Hides Disclaimer if desired
if (parseInt(mySettings[17]) == 1) {
  document.getElementById("botBan").style.display="none";
}

// Centers Cards on screen
function centerCards() {
	if (window.innerHeight >= document.body.offsetHeight ) {
		document.getElementById('cardContainer').style.margin = 'auto';
		if ((window.innerHeight - (document.getElementById('cardContainer').offsetHeight + document.getElementById('navGrid').offsetHeight + document.getElementById('announcerGrid').offsetHeight + document.getElementById('searchGrid').offsetHeight + document.getElementById('footerGrid').offsetHeight))/2 < 0) {
		  return;
		}
		document.getElementById('cardContainer').style.marginTop = Math.ceil((window.innerHeight - (document.getElementById('cardContainer').offsetHeight + document.getElementById('navGrid').offsetHeight + document.getElementById('announcerGrid').offsetHeight + document.getElementById('searchGrid').offsetHeight + document.getElementById('footerGrid').offsetHeight))/2 + 2) + "px";
		document.getElementById('cardContainer').style.marginBottom = Math.ceil((window.innerHeight - (document.getElementById('cardContainer').offsetHeight + document.getElementById('navGrid').offsetHeight + document.getElementById('announcerGrid').offsetHeight + document.getElementById('searchGrid').offsetHeight + document.getElementById('footerGrid').offsetHeight))/2 + 2) + "px";
		return;
	} else if (window.innerHeight <= document.body.offsetHeight || window.innerHeight >= document.getElementById('fullCardContainer').offsetHeight) {
		document.getElementById('cardContainer').style.margin = 'auto';
	}
}

// Category Selection
const jsCategory = document.querySelectorAll('.category');
document.getElementById('looker').style.display="block";
function changeCat() {
  document.getElementById('ddmAllSites').style.display='none';
  jsCategory.forEach(element => {
    element.style.display = 'none';
  });
  // Switch to Quick Links Category
  if (document.getElementById("DropDownBox").value == "BeforeETS") {
    document.getElementById('categoryBeforeETS').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to All Sites A-Z Category    
  } else if (document.getElementById("DropDownBox").value == "All-Sites") {
    document.getElementById('categoryAllSites').style.display='block';
    document.getElementById('ddmAllSites').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to Army Sites Category
  } else if (document.getElementById("DropDownBox").value == "Housing") {
    document.getElementById('categoryHousing').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to Army Sites Category
  } else if (document.getElementById("DropDownBox").value == "Health") {
    document.getElementById('categoryHealthPrograms').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to Combat Readiness Category
  } else if (document.getElementById("DropDownBox").value == "Mental") {
    document.getElementById('categoryMental').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to Dod Sites Category
  } else if (document.getElementById("DropDownBox").value == "Jobs") {
    document.getElementById('categoryJobs').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to Military Education Category
  } else if (document.getElementById("DropDownBox").value == "Career") {
    document.getElementById('categoryCareer').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to Civilian Educiation Category
  } else if (document.getElementById("DropDownBox").value == "Ed") {
    document.getElementById('categoryEd').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to Family Links Category
  } else if (document.getElementById("DropDownBox").value == "VA") {
    document.getElementById('categoryVA').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to Finance Category
  } else if (document.getElementById("DropDownBox").value == "Other") {
    document.getElementById('categoryOther').style.display='block';
    document.getElementById('searchbar').value = "";
    centerCards();
  // Switch to display Search Results
  } else if (document.getElementById("DropDownBox").value == "searchResults") {
    document.getElementById('categorySearchResults').style.display='block';
    document.getElementById('fullCardContainer').style.marginTop = '10px';
    //document.getElementById('fullCardContainer').style.marginBottom = (document.getElementById('botBan').offsetHeight + 10 +'px');
    document.getElementById('cardContainer').style.margin = '0px';
  }
}

// Change Background image on load
switch (parseInt(mySettings[0])) {
	case 1:  // Switch to AKOffline-UCP
		document.body.style.backgroundImage = "url('assets/Background-AKOffline-UDP.svg')";
		break;
	case 2:  // Switch to AKOffline-BDU
		document.body.style.backgroundImage = "url('assets/Background-AKOffline-BDU.svg')";
		break;
	case 3:  // Switch to AKOffline-Yellow
		document.body.style.backgroundImage = "url('assets/Background-AKOffline-Yellow.svg')";
		break;
	case 4:  // Switch to AKOriginal
		document.body.style.backgroundImage = "url('assets/Background-AKOriginal.jpg')";
		break;
	case 5:  // Switch to AKOriginal-Alt
		document.body.style.backgroundImage = "url('assets/Background-AKOriginal-Alt.jpg')";
		break;
	case 0:  // Switch to OCP override
		document.body.style.backgroundImage = "url('assets/Background-AKOffline-OCP.svg')";
		break;
	case 6:
		document.body.style.backgroundImage = "url('assets/Background-AKOffline-DarkMode.svg')";
		break;
	default:  // Switch to AKOffline-OCP
		break;
}

//  Change max Cards per row
switch (parseInt(mySettings[18])) {
  case 1:  // Max 3
		document.getElementById('cardDeck').style.maxWidth = (3 * 360) + 'px';
    break;
  case 2:  // Max 4
		document.getElementById('cardDeck').style.maxWidth = (4 * 360) + 'px';
    break;
  case 3:  // Max 6
		document.getElementById('cardDeck').style.maxWidth = (6 * 360) + 'px';
    break;
  case 4:  // Max 7
		document.getElementById('cardDeck').style.maxWidth = (7 * 360) + 'px';
    break;
  case 5:  // Max 8
		document.getElementById('cardDeck').style.maxWidth = (8 * 360) + 'px';
    break;
  case 6:  // Max 8
		document.getElementById('cardDeck').style.maxWidth = '9999px';
    break;
	default:  // Max 5 or setting not found
		document.getElementById('cardDeck').style.maxWidth = (5 * 360) + 'px';
}

// Site listings
var cat00 = document.querySelectorAll('.catBeforeETS');
for(var i = 0; i < cat00.length; i++){
  document.getElementById('categoryBeforeETS').innerHTML = document.getElementById('categoryBeforeETS').innerHTML + cat00[i].innerHTML;
}
var cat01 = document.querySelectorAll('.catHealthPrograms');
for(var i = 0; i < cat01.length; i++){
  document.getElementById('categoryHealthPrograms').innerHTML = document.getElementById('categoryHealthPrograms').innerHTML + cat01[i].innerHTML;
}
var cat02 = document.querySelectorAll('.catHousing');
for(var i = 0; i < cat02.length; i++){
  document.getElementById('categoryHousing').innerHTML = document.getElementById('categoryHousing').innerHTML + cat02[i].innerHTML;
}
var cat03 = document.querySelectorAll('.catMental');
for(var i = 0; i < cat03.length; i++){
  document.getElementById('categoryMental').innerHTML = document.getElementById('categoryMental').innerHTML + cat03[i].innerHTML;
}
var cat04 = document.querySelectorAll('.catJobs');
for(var i = 0; i < cat04.length; i++){
  document.getElementById('categoryJobs').innerHTML = document.getElementById('categoryJobs').innerHTML + cat04[i].innerHTML;
}
var cat05 = document.querySelectorAll('.catCareer');
for(var i = 0; i < cat05.length; i++){
  document.getElementById('categoryCareer').innerHTML = document.getElementById('categoryCareer').innerHTML + cat05[i].innerHTML;
}
var cat06 = document.querySelectorAll('.catEd');
for(var i = 0; i < cat06.length; i++){
  document.getElementById('categoryEd').innerHTML = document.getElementById('categoryEd').innerHTML + cat06[i].innerHTML;
}
var cat07 = document.querySelectorAll('.catVA');
for(var i = 0; i < cat07.length; i++){
  document.getElementById('categoryVA').innerHTML = document.getElementById('categoryVA').innerHTML + cat07[i].innerHTML;
}
var cat08 = document.querySelectorAll('.catOther');
for(var i = 0; i < cat08.length; i++){
  document.getElementById('categoryOther').innerHTML = document.getElementById('categoryOther').innerHTML + cat08[i].innerHTML;
}
document.getElementById('categorySearchResults').innerHTML = document.getElementById('categorySearchResults').innerHTML + document.getElementById("noResults").innerHTML;

// Calls the Daily Bugle when dates are specified. 
function announcements() {
  const dt = new Date();
//dt.setFullYear(2022, 4, 1); // for testing Daily Bugle (Year, Month, Day)
  const m = dt.getMonth() + 1;
  const d = dt.getDate();
  const y = dt.getFullYear();
  var random = Math.floor(Math.random() * 10);
  var AOTD;
  switch (m) {
    // January
    case 1:
      switch (d) {
        // New Years Day
        case 1:
          AOTD = "Happy New Year";
          break;
        // Martin Luther King Jr Day (NEEDS TO BE CHANGED YEARLY)
        case 15:
          AOTD = "It is currently Martin Luther King Jr Day"; 
          break;
        default:
          document.getElementById("dailyBugle").style.display="none";
          break;
      }
      break;
    // February
    case 2:
      switch (d) {
        // African American Black History Month
        default:
          AOTD = "It is currently African American Black History Month";
          break;
      }
      break;
    // March
    case 3:
      switch (d) {
        // Women's History Month
        default:
          AOTD = "It is currently Women's History Month";
          break;
      }
      break;
    // April
    case 4:
      switch (d) {
        // Gold Star Spouses Day
        case 5:
          AOTD = "It is Gold Star Spouses Day";
          break;
        // Volunteer Appreciation Week
        case 2:
          AOTD = "It is Volunteer Appreciation Week";
          break;
        // Earth Day
        case 22:
          AOTD = "It is Earth Day!";
          break;
        // Today is the Army Reserves' birthday
        case 23:
          AOTD = "Happy Birthday Army Reserves!";
          break;
        // Days of Remembrance of the Victims of the Holocaust (NEEDS TO BE CHANGED YEARLY)
        case 28:
          AOTD = "Days of Remembrance of the Victims of the Holocaust";
          break;
        // Month of the Military Child and National Sexual Assault Awareness and Prevention Month
        default:
          AOTD = "It is the Month of the Military Child and National Sexual Assault Awareness and Prevention Month.";
          break;
      }
      break;
    // May
    case 5:
      switch (d) {
        // National Day of Prayer (NEEDS TO BE CHANGED YEARLY)
        case 4:
          AOTD = "It is currently National Day of Prayer and Asian American Pacific Islander Heritage Month";
          break;
        // Military Spouse Appreciation Day (NEEDS TO BE CHANGED YEARLY)
        case 6:
          AOTD = "It is Military Spouse Appreciation Day! It is currently Asian American Pacific Islander Heritage Month"; 
          break;
        // Memorial Day (NEEDS TO BE CHANGED YEARLY)
        case 30: 
          AOTD = "It is currently Memorial Day and Asian American Pacific Islander Heritage Month";
          break;
        // Asian American Pacific Islander Heritage Month
        default:
          AOTD = "It is currently Asian American Pacific Islander Heritage Month";
          document.getElementById("dailyBugle").style.display="none";
          break;
      }
      break;
    // June
    case 6:
      switch (d) {
        // Army Birthday
        case 14:
          AOTD = "Happy Birthday Army! It is currently Army Heritage and LGBTQ+ Pride Month";
          break;
        // Juneteenth
        case 19:
          AOTD = "Happy Juneteenth! It is currently Army Heritage and LGBTQ+ Pride Month";
          break;
        // Army Heritage and LGBTQ+ Pride Month
        default:
          AOTD = "It is currently Army Heritage and LGBTQ+ Pride Month";
          document.getElementById("dailyBugle").style.display="none";
          break;
      }
      break;
    // July
    case 7:
      switch (d) {
        // Independence Day
        case 4:
          AOTD = "Happy Independence Day"; 
          break
        default:
          document.getElementById("dailyBugle").style.display="none";
          break;
      }
      break;
    // August
    case 8:
      switch (d) {
        // Women's Equality Day
        case 26:
          AOTD = "Happy Women's Equality Day! It is Currently Antiterrorism Awareness Awareness Month"; 
        // Antiterrorism Awareness Awareness
        default:
          AOTD = "It is Currently Antiterrorism Awareness Awareness Month";
          break;
      }
      break;
    // September
    case 9:
      switch (d) {
        // September 11th/Patriot Day
        case 11:
          AOTD = "It is currently Patriot day and the 9/11 Memorial day";
          break;
        // Air Force Birthday
        case 18:
          AOTD = "Happy Birthday Air Force! It is currently Hispanic Heritage and Suicide Prevention Month";
          break;
        // Hispanic Heritage Month / Suicide Prevention Month
        default:
          if (d <= 14) {AOTD = "It is currently Suicide Prevention Month";} else {AOTD = "It is currently Hispanic Heritage and Suicide Prevention Month";}
          document.getElementById("dailyBugle").style.display="none";
          break;
      }
      break;
    // October
    case 10:
      switch (d) {
        // Navy Birthday
        case 13:
          AOTD = "Happy Birthday Navy! It is currently Hispanic Heritage, Army Cybersecurity Awarenes, National Energy Action, and Disability Awareness Month Month";
        // Army Cybersecurity Awarenes, National Energy Action, and Disability Awareness Month / Hispanic Heritage Month
        default:
          if (d <= 15) {AOTD = "It is currently Hispanic Heritage, Army Cybersecurity Awarenes, National Energy Action, and Disability Awareness Month Month";} else {AOTD = "It is currently Army Cybersecurity Awarenes, National Energy Action, and Disability Awareness Month";}
          break;
      }
      break;
    // November
    case 11:
      switch (d) {
        // Maines Birthday 
        case 10:
          AOTD = ("Happy Birthday Marines! It is currently Miltary Family, Native American and Alaskan Heritage Month");
          break;
        // Veterans Day (NEEDS TO BE CHANGED YEARLY)
        case 11:
          AOTD = "It is currently Veterans Day! It is currently Miltary Family, Native American and Alaskan Heritage Month";
          break;
        // Native American Heritage Month
        default:
          AOTD = "It is currently Miltary Family, Native American and Alaskan Heritage Month";
          break;
      }
      break;
    // December
    case 12:
      switch (d) {
        // National Guard Birthday
        case 13:
          AOTD = "Happy Birthday National Guard!";
          break;
        // Space Force Birthday
        case 20:
          AOTD = "Happy Birthday Space Force!";
          break;
        // Happy Holidays
        case 25:
          AOTD = "Happy Holidays";
          break;
        // New Years Eve
        case 31:
          AOTD = "New Years Eve";
          break;
        default:
          AOTD = "No Holiday Detected";
          document.getElementById("dailyBugle").style.display="none";
          break;
      }
      break;
    // Error
    default:
      console.log('Error, No month found');
      document.getElementById("dailyBugle").style.display="none";
      document.getElementById("reporter").style.display="none";
      break;
  }
  document.getElementById("dailyBugle").innerHTML = AOTD;
}

//  Turns Announcements on and off
switch (parseInt(mySettings[16])) {
  case 1:
    document.getElementById("dailyBugle").style.display="none";
    document.getElementById("reporter").style.display="none";
    break;
  default:
    announcements();
}

// Open folder
function openFolder(folder) {
  document.getElementById("folder").style.width = "100%";
  switch (folder) {
	// SRBs
	case 0:
		document.getElementById("categoryFolder").innerHTML = (jsM29 + '<br>' + jsM14 + jsM15 + "<br>" + jsM16 + jsM18);
		break;
	// eMail
	case 1:
		document.getElementById("categoryFolder").innerHTML = (jsA15 + jsA16 + jsG10);
		break;
	// GEARS
	case 2:
		document.getElementById("categoryFolder").innerHTML = (jsG04 + jsG05 + jsG06);
		break;
	// Army 365
	case 3:
		document.getElementById("categoryFolder").innerHTML = (jsA43 + '<br>' + jsA42 + jsA51 + jsA44 + jsA52 + jsA53 + jsA54 + jsA55 + jsA04 + jsA56);
		break;
	// Tricare
	case 4:
		document.getElementById("categoryFolder").innerHTML = (jsP05 + jsT04 + jsT07 + jsT05);
		break;
	// IPPS-A
	case 5:
		document.getElementById("categoryFolder").innerHTML = (jsI03 + '<br>' + jsD22 + jsM27 + jsM28 + jsM29 + jsP06);
		break;
	default:
		alert('Open Folder Error, Please check folder value!')
		break;
  }
}

// Close Folder
function closeFolder() {
  document.getElementById("folder").style.width = "0%";
} 

// Enables Searchbar
function searchAKO() {
    document.getElementById('noResultsCard').style.display='none';
//  try {
  if (document.getElementById('searchbar').value.length >= 3) {
    document.getElementById('DropDownBox').selectedIndex = 15;
    changeCat();
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
    if (counter <= 0) {
      document.getElementById('noResultsCard').style.display='inline-block';
    } else {
      document.getElementById('noResultsCard').style.display='none';
    }
		console.log(x.length);
  }

}

function toggleDarkMode() {
  document.body.classList.toggle('darkmode');
  if (parseInt(localStorage.getItem("darkmode")) == 1) {
    localStorage.setItem("darkmode", 0);
  } else {
    localStorage.setItem("darkmode", 1);
  }
}

document.getElementById("sonic06").style.display = "none";

} catch (error) {
  console.error(error);
  document.getElementById("sonic06").style.display = "none";
}
