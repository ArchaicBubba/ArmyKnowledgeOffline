window.onload = phaseShift;
document.getElementById("DropDownBox").onchange = phaseShift;

// Category Selection
const jsCategory = document.querySelectorAll('.category');
document.getElementById('looker').style.display="block";
function phaseShift() {
	document.getElementById('ddmAllSites').style.display='none';
	jsCategory.forEach(element => {
		element.style.display = 'none';
	});
	// Switch to Quick Links Category
	if (document.getElementById("DropDownBox").value == "Quick-Links") {
		document.getElementById('catQuickLinks').style.display='block';
	// Switch to All Sites A-Z Category		
	} else if (document.getElementById("DropDownBox").value == "All-Sites") {
		document.getElementById('catAllSites').style.display='block';
		document.getElementById('ddmAllSites').style.display='block';
	// Switch to Army Sites Category
	} else if (document.getElementById("DropDownBox").value == "Army-Sites") {
		document.getElementById('catArmySites').style.display='block';
	// Switch to Combat Readiness Category
	} else if (document.getElementById("DropDownBox").value == "Combat-Readiness") {
		document.getElementById('catCombatReadiness').style.display='block';
	// Switch to Dod Sites Category
	} else if (document.getElementById("DropDownBox").value == "DOD") {
		document.getElementById('catDod').style.display='block';
	// Switch to Military Education Category
	} else if (document.getElementById("DropDownBox").value == "MilEd") {
		document.getElementById('catMilEd').style.display='block';
	// Switch to Civilian Educiation Category
	} else if (document.getElementById("DropDownBox").value == "CivEd") {
		document.getElementById('catCivEd').style.display='block';
	// Switch to Family Links Category
	} else if (document.getElementById("DropDownBox").value == "Family") {
		document.getElementById('catFamily').style.display='block';
	// Switch to Finance Category
	} else if (document.getElementById("DropDownBox").value == "Finance") {
		document.getElementById('catFinance').style.display='block';
	// Switch to health Category
	} else if (document.getElementById("DropDownBox").value == "Health") {
		document.getElementById('catHealth').style.display='block';
	// Switch to Human Category
	} else if (document.getElementById("DropDownBox").value == "Human") {
		document.getElementById('catHuman').style.display='block';
	// Switch to Legal Category
	} else if (document.getElementById("DropDownBox").value == "Legal") {
		document.getElementById('catLegal').style.display='block';
	// Switch to Professional Development Category
	} else if (document.getElementById("DropDownBox").value == "Professional-Development") {
		document.getElementById('catProDev').style.display='block';
	// Switch to Technologies Category
	} else if (document.getElementById("DropDownBox").value == "Technologies") {
		document.getElementById('catTech').style.display='block';
	// Switch to Us Government Links Category
	} else if (document.getElementById("DropDownBox").value == "US-Gov") {
		document.getElementById('catUsGov').style.display='block';
	}
}

// Declaration of site variables 
// Sites that begin with A
var jsA00 = document.getElementById("A00").innerHTML; // Air Force Weather Agency
var jsA01 = document.getElementById("A01").innerHTML; // AMEDD Command Management System
var jsA02 = document.getElementById("A02").innerHTML; // Anti-Terrorism Enterprise Portal
var jsA03 = document.getElementById("A03").innerHTML; // Antivirus Home Use Program (AV HUP)
var jsA04 = document.getElementById("A04").innerHTML; // Army 365 Teams
var jsA05 = document.getElementById("A05").innerHTML; // Army Accident Reporting System
var jsA06 = document.getElementById("A06").innerHTML; // Army Acquisition Support Center
var jsA07 = document.getElementById("A07").innerHTML; // Army Benefits Center
var jsA08 = document.getElementById("A08").innerHTML; // Army Career Tracker
var jsA09 = document.getElementById("A09").innerHTML; // Army Combat Readiness Center
var jsA10 = document.getElementById("A10").innerHTML; // Army Community Service Staff System
var jsA11 = document.getElementById("A11").innerHTML; // Army Credentialing Opportunities On-Line (COOL)
var jsA12 = document.getElementById("A12").innerHTML; // Army Criminal Investigation Command
var jsA13 = document.getElementById("A13").innerHTML; // Army Disaster Personnel Accountability and Assessment System (ADPAAS)
var jsA14 = document.getElementById("A14").innerHTML; // Army E-Learning
var jsA15 = document.getElementById("A15").innerHTML; // Army Email (@army.mil)
var jsA16 = document.getElementById("A16").innerHTML; // Army Email (@mail.mil)
var jsA17 = document.getElementById("A17").innerHTML; // Army Enterprise Service Desk (AESD)
var jsA18 = document.getElementById("A18").innerHTML; // Army Enterprise Systems Integration Program
var jsA19 = document.getElementById("A19").innerHTML; // Army Family and Moral, Welfare and Recreation Programs
var jsA20 = document.getElementById("A20").innerHTML; // Army Family Readiness Group (FRG)
var jsA21 = document.getElementById("A21").innerHTML; // Army Fit
var jsA22 = document.getElementById("A22").innerHTML; // Army Housing Online User Services
var jsA23 = document.getElementById("A23").innerHTML; // Army Human Resources Command
var jsA24 = document.getElementById("A24").innerHTML; // Army Ideas for Innovation (AI2)
var jsA25 = document.getElementById("A25").innerHTML; // Army Learning Management System (ALMS)
var jsA26 = document.getElementById("A26").innerHTML; // Army Maintenance Application (ArMA)
var jsA27 = document.getElementById("A27").innerHTML; // Army National Guard GI Personnel Gateway
var jsA28 = document.getElementById("A28").innerHTML; // Army Public Health Center
var jsA29 = document.getElementById("A29").innerHTML; // Army Publications
var jsA30 = document.getElementById("A30").innerHTML; // Army Readiness Assessment Program
var jsA31 = document.getElementById("A31").innerHTML; // Army Senior Leadership
var jsA32 = document.getElementById("A32").innerHTML; // Army SkillSoft
var jsA33 = document.getElementById("A33").innerHTML; // Army Substance Abuse Program (ASAP)
var jsA34 = document.getElementById("A34").innerHTML; // Army Sustainment
var jsA35 = document.getElementById("A35").innerHTML; // Army Training and Certification Tracking System
var jsA36 = document.getElementById("A36").innerHTML; // Army Training Information System
var jsA37 = document.getElementById("A37").innerHTML; // Army Training Network
var jsA38 = document.getElementById("A38").innerHTML; // Army Training Requirements and Resources System (ATRRS)
var jsA39 = document.getElementById("A39").innerHTML; // Army Veterinary Corps
var jsA40 = document.getElementById("A40").innerHTML; // Assignment Satisfaction Key
var jsA41 = document.getElementById("A41").innerHTML; // Automated Personal Clothing Request
var jsA42 = document.getElementById("A42").innerHTML; // Army 365 Azure Portal
var jsA43 = document.getElementById("A43").innerHTML; // Army 365 Home
var jsA44 = document.getElementById("A44").innerHTML; // Army 365 Information Hub
var jsA45 = document.getElementById("A45").innerHTML; // Army Records Information Management System (ARIMS)
var jsA46 = document.getElementById("A46").innerHTML; // Aircraft and Personnel Automated Clearance System (APACS)
var jsA47 = document.getElementById("A47").innerHTML; // Army Emergency Relief (AER)
// Sites that begin with C
var jsC00 = document.getElementById("C00").innerHTML; // Career Acquisition Management Portal
var jsC01 = document.getElementById("C01").innerHTML; // Center for the Army Profession and Leadership (CAPL)
var jsC02 = document.getElementById("C02").innerHTML; // Central Army Registry (CAR)
var jsC03 = document.getElementById("C03").innerHTML; // Combined Arms Center
var jsC04 = document.getElementById("C04").innerHTML; // Comprehensive Soldier and Family Fitness
var jsC05 = document.getElementById("C05").innerHTML; // Computer Hardware Enterprise Software and Solutions (CHESS)
var jsC06 = document.getElementById("C06").innerHTML; // Cyber Awareness Challenge
var jsC07 = document.getElementById("C07").innerHTML; // Citi Bank (GTCC)
// Sites that begin with D
var jsD00 = document.getElementById("D00").innerHTML; // Defense Acquisition University
var jsD01 = document.getElementById("D01").innerHTML; // Defense Civilian Personnel Data System
var jsD02 = document.getElementById("D02").innerHTML; // Defense Enrollment Eligibility Readiness
var jsD03 = document.getElementById("D03").innerHTML; // Defense Finance and Accounting Service (DFAS)
var jsD04 = document.getElementById("D04").innerHTML; // Defense Information Systems Agency
var jsD05 = document.getElementById("D05").innerHTML; // Defense Logistics Agency
var jsD06 = document.getElementById("D06").innerHTML; // Defense Manpower Data Center
var jsD07 = document.getElementById("D07").innerHTML; // Defense Travel Management System
var jsD08 = document.getElementById("D08").innerHTML; // Defense Travel System
var jsD09 = document.getElementById("D09").innerHTML; // Department of the Army Photo Management Information System (DAPMIS)
var jsD10 = document.getElementById("D10").innerHTML; // Deployed Digital Training Campus (DDTC)
var jsD11 = document.getElementById("D11").innerHTML; // Deployment Health Assessment Program (DHAP)
var jsD12 = document.getElementById("D12").innerHTML; // Digital Training Facility (DTF)
var jsD13 = document.getElementById("D13").innerHTML; // Digital Training Management System (DTMS)
var jsD14 = document.getElementById("D14").innerHTML; // DoD Automated Time Attendance and Production System
var jsD15 = document.getElementById("D15").innerHTML; // DOD CAC Reference Center
var jsD16 = document.getElementById("D16").innerHTML; // DOD MWR Libraries Overdrive
var jsD17 = document.getElementById("D17").innerHTML; // DS Login Registration
var jsD18 = document.getElementById("D18").innerHTML; // Defense Civilian Interlligence Personnel System (DCIPS)
var jsD19 = document.getElementById("D19").innerHTML; // DOD CAC Cert Repository
var jsD20 = document.getElementById("D20").innerHTML; // DoD Cyber Exchange (NIPR)
var jsD21 = document.getElementById("D21").innerHTML; // DoD Cyber Exchange (Public)
// Sites that begin with E
var jsE00 = document.getElementById("E00").innerHTML; // EagleCash
var jsE01 = document.getElementById("E01").innerHTML; // eBenefits
var jsE02 = document.getElementById("E02").innerHTML; // electronic Financial Liability Investigations of Property Loss
var jsE03 = document.getElementById("E03").innerHTML; // eMILPO
var jsE04 = document.getElementById("E04").innerHTML; // Evaluation Entry System
// Sites that begin with F
var jsF00 = document.getElementById("F00").innerHTML; // Federal Voting Assistance Program
var jsF01 = document.getElementById("F01").innerHTML; // FEDLOG
var jsF02 = document.getElementById("F02").innerHTML; // FEDLOG LITE
var jsF03 = document.getElementById("F03").innerHTML; // FEDMALL
var jsF04 = document.getElementById("F04").innerHTML; // Financial Disclosure Management
var jsF05 = document.getElementById("F05").innerHTML; // Force Management System (FMSWeb)
// Sites that begin with G
var jsG00 = document.getElementById("G00").innerHTML; // GENERAL FUND ENTERPRISE BUSINESS SYSTEM
var jsG01 = document.getElementById("G01").innerHTML; // GI Suicide Prevention
var jsG02 = document.getElementById("G02").innerHTML; // Global Combat Support System - Army (GCSS-Army)
var jsG03 = document.getElementById("G03").innerHTML; // Global Electronic Approval Routing System (GEARS Purple)
var jsG04 = document.getElementById("G04").innerHTML; // Global Electronic Approval Routing System 5 (GEARS Yellow)
var jsG05 = document.getElementById("G05").innerHTML; // Global Electronic Approval Routing System V (GEARS Red)
var jsG06 = document.getElementById("G06").innerHTML; // Ground Risk Assessment Tool (GRAT)
var jsG07 = document.getElementById("G07").innerHTML; // Guard Knowledge Online (GKO)
var jsG08 = document.getElementById("G08").innerHTML; // Green To Gold Access Portal
// var jsG09 = document.getElementById("G09").innerHTML; // Global Federated User Directory (GFUD)
// Sites that begin with H
var jsH00 = document.getElementById("H00").innerHTML; // Health.mil
// Sites that begin with I
var jsI00 = document.getElementById("I00").innerHTML; // Identity Management Portal
var jsI01 = document.getElementById("I01").innerHTML; // IgnitED
var jsI02 = document.getElementById("I02").innerHTML; // Installation Support Module
var jsI03 = document.getElementById("I03").innerHTML; // Integrated Personnel and Pay System Army
var jsI04 = document.getElementById("I04").innerHTML; // iPerms
var jsI05 = document.getElementById("I05").innerHTML; // iSALUTE
// Sites that begin with J
var jsJ00 = document.getElementById("J00").innerHTML; // JAG Corps
var jsJ01 = document.getElementById("J01").innerHTML; // JAG University
var jsJ02 = document.getElementById("J02").innerHTML; // Joint Improvised Treat Defeat Organization
var jsJ03 = document.getElementById("J03").innerHTML; // Joint Knowledge Online (JKO)
var jsJ04 = document.getElementById("J04").innerHTML; // Joint Risk Assessment Tool
var jsJ05 = document.getElementById("J05").innerHTML; // Joint Service Transcript (JST)
// Sites that begin with L
var jsL00 = document.getElementById("L00").innerHTML; // LHI Appointment Scheduling
var jsL01 = document.getElementById("L01").innerHTML; // LandWarNet eUniversity
// Sites that begin with M
var jsM00 = document.getElementById("M00").innerHTML; // Medical Operational Data System
var jsM01 = document.getElementById("M01").innerHTML; // MEDLine Plus
var jsM02 = document.getElementById("M02").innerHTML; // Medpros (ADMIN)
var jsM03 = document.getElementById("M03").innerHTML; // MHS Genesis
var jsM04 = document.getElementById("M04").innerHTML; // milConnect
var jsM05 = document.getElementById("M05").innerHTML; // MILGAMING
var jsM06 = document.getElementById("M06").innerHTML; // Military Auxiliary Radio System
var jsM07 = document.getElementById("M07").innerHTML; // Military OneSource
var jsM08 = document.getElementById("M08").innerHTML; // MilitaryCAC
var jsM09 = document.getElementById("M09").innerHTML; // MilSuite
var jsM10 = document.getElementById("M10").innerHTML; // MOBCOP
var jsM11 = document.getElementById("M11").innerHTML; // Mobile Digital Training Facility (MDTF)
var jsM12 = document.getElementById("M12").innerHTML; // My Army Benefits
var jsM13 = document.getElementById("M13").innerHTML; // My Clothing Record
var jsM14 = document.getElementById("M14").innerHTML; // My Enlisted Record Brief (ERB)
var jsM15 = document.getElementById("M15").innerHTML; // My Enlisted/Officer Record Brief (National Guard)
var jsM16 = document.getElementById("M16").innerHTML; // My Enlisted/Officer Record Brief (Reserve)
var jsM17 = document.getElementById("M17").innerHTML; // My MEDPROS Medical Readiness Portal
var jsM18 = document.getElementById("M18").innerHTML; // MY Officer Record Brief (ORB) 
var jsM19 = document.getElementById("M19").innerHTML; // MY RFO (Request for Orders)
var jsM20 = document.getElementById("M20").innerHTML; // My Training Tab
var jsM21 = document.getElementById("M21").innerHTML; // MyPay
var jsM22 = document.getElementById("M22").innerHTML; // MyMEB
var jsM23 = document.getElementById("M23").innerHTML; // Military Child Care
var jsM24 = document.getElementById("M24").innerHTML; // Move.Mil
// Sites that begin with N
var jsN00 = document.getElementById("N00").innerHTML; // NCO Leader Center for Excellence
var jsN01 = document.getElementById("N01").innerHTML; // NCO Worldwide
var jsN02 = document.getElementById("N02").innerHTML; // NETCOM
// Sites that begin with O
var jsO00 = document.getElementById("O00").innerHTML; // Office of Personnel Management
// Sites that begin with P
var jsP00 = document.getElementById("P00").innerHTML; // Preventative Maintenance Monthly (P.S. Magazine)
var jsP01 = document.getElementById("P01").innerHTML; // Procurement Integrated Enterprise Environment (PIEE)
var jsP02 = document.getElementById("P02").innerHTML; // Promotion Point Worksheet
var jsP03 = document.getElementById("P03").innerHTML; // Psychological Health Center of Excellence
var jsP04 = document.getElementById("P04").innerHTML; // Protected Internet eXchange (PiX)
var jsP05 = document.getElementById("P05").innerHTML; // Patient Portal Tricare Online
// Sites that begin with R
var jsR00 = document.getElementById("R00").innerHTML; // Risk Management Information System (RMIS)
var jsR01 = document.getElementById("R01").innerHTML; // RAPIDS
// Sites that begin with S
var jsS00 = document.getElementById("S00").innerHTML; // Service members' Group Life Insurance (SGLI)
var jsS01 = document.getElementById("S01").innerHTML; // Sexual Harassment Assault Response and Prevention
var jsS02 = document.getElementById("S02").innerHTML; // Soldier Enhancement Program
var jsS03 = document.getElementById("S03").innerHTML; // Soldier For Life Transition Assistance Program (SFL-TAP)
var jsS04 = document.getElementById("S04").innerHTML; // Supply and Maintenance Assistance Review Team (SMART)
var jsS05 = document.getElementById("S05").innerHTML; // Survivor OutReach Services
var jsS06 = document.getElementById("S06").innerHTML; // S1Net
var jsS07 = document.getElementById("S07").innerHTML; // Soldier For life
// Sites that begin with T
var jsT00 = document.getElementById("T00").innerHTML; // Thrift Savings Plan
var jsT01 = document.getElementById("T01").innerHTML; // TRADOC Application GateWay (TAG)
var jsT02 = document.getElementById("T02").innerHTML; // Travel Risk Planing System (TRiPS)
var jsT03 = document.getElementById("T03").innerHTML; // Trial Defense Service
var jsT04 = document.getElementById("T04").innerHTML; // Tricare Dental Readiness
var jsT05 = document.getElementById("T05").innerHTML; // Tricare Online
var jsT06 = document.getElementById("T06").innerHTML; // Trusted End Node Security (TENS)
// Sites that begin with U
var jsU00 = document.getElementById("U00").innerHTML; // U.S. Armed Forces Legal Assistance
var jsU01 = document.getElementById("U01").innerHTML; // United Services Military Apprenticeship Program (USMAP)
var jsU02 = document.getElementById("U02").innerHTML; // Unit Commander’s Finance Report (UCFR)
// Sites that begin with V
var jsV00 = document.getElementById("V00").innerHTML; // Visual Information Ordering Site
var jsV01 = document.getElementById("V01").innerHTML; // Volunteer Management Information System (VMIS)
// Sites that begin with Y
var jsY00 = document.getElementById("Y00").innerHTML; // Yellow Ribbon Reintegration Program (YRRP)
// Site Folders
var jsFolder00 = document.getElementById("folder00").innerHTML; // SRB
var jsFolder01 = document.getElementById("folder01").innerHTML; // Email
var jsFolder02 = document.getElementById("folder02").innerHTML; // GEARS

const mySettings = JSON.parse(localStorage.getItem("siteSettings"));
// Change Background image on load
if (localStorage.getItem("siteSettings") == null) {
	document.body.style.backgroundImage = "url('assets/Background-AKOffline-OCP.svg')";
} else if (mySettings[0] == "0") {
	// Switch to AKOffline-OCP
	document.body.style.backgroundImage = "url('assets/Background-AKOffline-OCP.svg')";		
} else if (mySettings[0] == "1") {
	// Switch to AKOffline-UCP
	document.body.style.backgroundImage = "url('assets/Background-AKOffline-UDP.svg')";
} else if (mySettings[0] == "2") {
	// Switch to AKOffline-BDU
	document.body.style.backgroundImage = "url('assets/Background-AKOffline-BDU.svg')";
} else if (mySettings[0] == "3") {
	// Switch to AKOffline-UCP
	document.body.style.backgroundImage = "url('assets/Background-AKOffline-Yellow.svg')";
} else if (mySettings[0] == "4") {
	// Switch to AKOriginal
	document.body.style.backgroundImage = "url('assets/Background-AKOriginal.jpg')";
} else if (mySettings[0] == "5") {
	// Switch to AKOriginal-Alt
	document.body.style.backgroundImage = "url('assets/Background-AKOriginal-Alt.jpg')";
}

// Site listings
if (localStorage.getItem("siteSettings") == null) {
	document.getElementById("catQuickLinks").innerHTML = (jsG01 + jsM17 + jsA21 + jsFolder00 + jsM07 + jsFolder01 + jsI04 + jsM21 + jsA08 + jsD13 + jsM13 + jsA43 + jsM03 + jsA26 + jsV01);
} else {
	document.getElementById("catQuickLinks").innerHTML = (document.getElementById(mySettings[1]).innerHTML + document.getElementById(mySettings[2]).innerHTML + document.getElementById(mySettings[3]).innerHTML + document.getElementById(mySettings[4]).innerHTML + document.getElementById(mySettings[5]).innerHTML + document.getElementById(mySettings[6]).innerHTML + document.getElementById(mySettings[7]).innerHTML + document.getElementById(mySettings[8]).innerHTML + document.getElementById(mySettings[9]).innerHTML + document.getElementById(mySettings[10]).innerHTML + document.getElementById(mySettings[11]).innerHTML + document.getElementById(mySettings[12]).innerHTML + document.getElementById(mySettings[13]).innerHTML + document.getElementById(mySettings[14]).innerHTML + document.getElementById(mySettings[15]).innerHTML);
};
document.getElementById("catAllSites").innerHTML = ('<div id="section-A"></div>' + jsA00 + jsA46 + jsA01 + jsA02 + jsA03 + jsA42 + jsA43 + jsA44 + jsA04 + jsA05 + jsA06 + jsA07 + jsA08 + jsA09 + jsA10 + jsA11 + jsA12 + jsA13 + jsA14 + jsA15 + jsA16 + jsA47 + jsA17 + jsA18 + jsA19 + jsA20 + jsA21 + jsA22 + jsA23 + jsA24 + jsA25 + jsA26 + jsA27 + jsA28 + jsA29 + jsA30 + jsA45 + jsA31 + jsA32 + jsA33 + jsA34 + jsA35 + jsA36 + jsA37 + jsA38 + jsA39 + jsA40 + jsA41 + '<div id="section-C"><br><hr><br></div>' + jsC00 + jsC01 + jsC02 + jsC07 + jsC03 + jsC04 + jsC05 + jsC06 + '<div id="section-D"><br><hr><br></div>' + jsD00 + jsD18 + jsD01 + jsD02 + jsD03 + jsD04 + jsD05 + jsD06 + jsD07 + jsD08 + jsD09 + jsD10 + jsD11 + jsD12 + jsD13 + jsD14 + jsD19 + jsD15 + jsD20 + jsD21 + jsD16 + jsD17 + '<div id="section-E"><br><hr><br></div>' + jsE00 + jsE01 + jsE02 + jsE03 + jsE04 + '<div id="section-F"><br><hr><br></div>' + jsF00 + jsF01 + jsF02 + jsF03 + jsF04 + jsF05 + '<div id="section-G"><br><hr><br></div>' + jsG00 + jsG01 + jsG02 + jsG03 + jsG04 + jsG05 + jsG08 + jsG06 + jsG07 + '<div id="section-H"><br><hr><br></div>' + jsH00 + '<div id="section-I"><br><hr><br></div>' + jsI00 + jsI01 + jsI02 + jsI03 + jsI04 + jsI05 + '<div id="section-J"><br><hr><br></div>' + jsJ00 + jsJ01 + jsJ02 + jsJ03 + jsJ04 + jsJ05 + '<div id="section-L"><br><hr><br></div>' + jsL01 + jsL00 + '<div id="section-M"><br><hr><br></div>' + jsM00 + jsM01 + jsM02 + jsM03 + jsM04 + jsM05 + jsM06 + jsM23 + jsM07 + jsM08 + jsM09 + jsM10 + jsM11 + jsM24 + jsM12 + jsM13 + jsM14 + jsM15 + jsM16 + jsM17 + jsM18 + jsM19 + jsM20 + jsM22 + jsM21 + '<div id="section-N"><br><hr><br></div>' + jsN00 + jsN01 + jsN02 + '<div id="section-O"><br><hr><br></div>' + jsO00 + '<div id="section-P"><br><hr><br></div>' + jsP05 + jsP00 + jsP01 + jsP02 + jsP04 + jsP03 + '<div id="section-R"><br><hr><br></div>' + jsR01 + jsR00 + '<div id="section-S"><br><hr><br></div>' + jsS06 + jsS00 + jsS01 + jsS02 + jsS07 + jsS04 + jsS05 + '<div id="section-T"><br><hr><br></div>' + jsT00 + jsT01 + jsS03 + jsT02 + jsT03 + jsT04 + jsT05 + jsT06 + '<div id="section-U"><br><hr><br></div>' + jsU00 + jsU02 + jsU01 + '<div id="section-V"><br><hr><br></div>' + jsV00 + jsV01 + '<div id="section-Y"><br><hr><br></div>' + jsY00);
document.getElementById("catArmySites").innerHTML = (jsA42 + jsA43 + jsA44 + jsA04 + jsA06 + jsA07 + jsA14 + jsA15 + jsA16 + jsA47 + jsA18 + jsA19 + jsA24 + jsA26 + jsA29 + jsA31 + jsA33 + jsA34 + jsA40 + jsC05 + jsD09 + jsD11 + jsD13 + jsF04 + jsF05 + jsG07 + jsI05 + jsJ00 + jsJ01 + jsM04 + jsM12 + jsM13 + jsM14 + jsM18 + jsM19 + jsM22 + jsN02 + jsS01 + jsS02 + jsS04 + jsT03 + jsU02);
document.getElementById("catCombatReadiness").innerHTML = (jsA05 + jsA09 + jsA21 + jsA30 + jsD11 + jsG02 + jsG06 + jsM10 + jsR00 + jsS02);
document.getElementById("catDod").innerHTML = (jsA00 + jsD03 + jsD05 + jsD07 + jsD08 + jsD19 + jsD15 + jsD20 + jsD21 + jsD17 + jsF01 + jsF02 + jsF03 + jsI05 + jsJ02 + jsJ03 + jsJ04 + jsL01 + jsM23 + jsM07 + jsM09 + jsM24 + jsM21 + jsP01 + jsP04 + jsR01 + jsU00);
document.getElementById("catCivEd").innerHTML = (jsA11 + jsA14 + jsA32 + jsI01 + jsJ05 + jsS07 + jsS03 + jsU01 + jsY00);
document.getElementById("catMilEd").innerHTML = (jsA14 + jsA25 + jsA35 + jsA36 + jsA37 + jsA38 + jsC00 + jsC02 + jsC03 + jsC06 + jsD00 + jsD10 + jsD12 + jsJ03 + jsJ05 + jsL01 + jsM05 + jsM11 + jsM20 + jsT01);
document.getElementById("catFamily").innerHTML = (jsA10 + jsA19 + jsA20 + jsA22 + jsC04 + jsD02 + jsD16 + jsG01 + jsM23 + jsM07 + jsS05 + jsT05 + jsV01);
document.getElementById("catFinance").innerHTML = (jsC07 + jsD03 + jsE00 + jsF04 + jsG00 + jsM07 + jsM21 + jsT00 + jsU02);
document.getElementById("catHealth").innerHTML = (jsA01 + jsA28 + jsA33 + jsA39 + jsC04 + jsD11 + jsE01 + jsG01 + jsH00 + jsL00 + jsM00 + jsM01 + jsM02 + jsM03 + jsM07 + jsM17 + jsM22 + jsP05 + jsP03 + jsS06 + jsS00 + jsS01 + jsS05 + jsT04 + jsT05);
document.getElementById("catHuman").innerHTML = (jsA46 + jsA13 + jsA23 + jsA29 + jsA45 + jsA40 + jsA41 + jsD01 + jsD02 + jsD05 + jsD06 + jsE01 + jsE02 + jsE03 + jsE04 + jsG03 + jsG04 + jsG05 + jsG08 + jsI00 + jsI02 + jsI03 + jsI04 + jsM13 + jsM14 + jsM15 + jsM16 + jsM18 + jsM19 + jsO00 + jsP02 + jsR01 + jsS06 + jsS07 + jsS03 + jsT02 + jsU02 + jsY00);
document.getElementById("catLegal").innerHTML = (jsA12 + jsF04 + jsJ00 + jsJ01 + jsU00);
document.getElementById("catProDev").innerHTML = (jsA08 + jsA14 + jsA27 + jsA32 + jsA38 + jsA40 + jsC01 + jsE04 + jsG08 + jsJ01 + jsN00 + jsN01 + jsP00 + jsP02 + jsS07 + jsS03 + jsU01 + jsV00 + jsV01 + jsY00);
document.getElementById("catTech").innerHTML = (jsA03 + jsA42 + jsA43 + jsA44 + jsA04 + jsA17 + jsC05 + jsC06 + jsD04 + jsD14 + jsD19 + jsD15 + jsD20 + jsD21 + jsM06 + jsM08 + jsR01 + jsT06);
document.getElementById("catUsGov").innerHTML = (jsA03 + jsE00 + jsF00 + jsI05 + jsM01 + jsP04 + jsT00 + jsU01);

// Calls the Daily Bugle when dates are specified. 
const dt = new Date();
// dt.setFullYear(2022, 0, 23); // for testing Daily Bugle (Year, Month, Day)
const m = dt.getMonth();
const d = dt.getDate();
const y = dt.getFullYear();
var AOTD;
// January
if (m == 0) {
	// New Year's Day
	if (d == 1) { 
		AOTD = "Happy New Year";
	// Martin Luther King Jr Day (NEEDS TO BE CHANGED YEARLY)
	} else if ((d == 16 && y == 2023) || (d == 15 && y == 2024) || (d == 20 && y == 2025)) { 
		AOTD = "It is currently Martin Luther King Jr Day"; 
	} else {
		AOTD = "No Holiday Detected";
		document.getElementById("dailyBugle").style.display="none";
	}
// February
} else if (m == 1) {
	// African American Black History Month
	AOTD = "It is currently African American Black History Month";
// March
} else if (m == 2) {
	// Women's History Month
	AOTD = "It is currently Women's History Month";
// April
} else if (m == 3) {
	// Gold Star Spouses Day
	if (d == 5) { 
		AOTD = "It is Gold Star Spouses Day";
	// Volunteer Appreciation Week
	} else if (d == 2) { 
		AOTD = "It is Volunteer Appreciation Week";
	// Earth Day
	} else if (d == 22) { 
		AOTD = "It is Earth Day!";
	// Today is the Army Reserves' birthday
	} else if (d == 23) { 
		AOTD = "Happy Birthday Army Reserves!";
	// Days of Remembrance of the Victims of the Holocaust (NEEDS TO BE CHANGED YEARLY)
	} else if (d == 28) { 
		AOTD = "Days of Remembrance of the Victims of the Holocaust";
	// Month of the Military Child and National Sexual Assault Awareness and Prevention Month
	} else {
		AOTD = "It is the Month of the Military Child and National Sexual Assault Awareness and Prevention Month.";
	}
// May
} else if (m == 4) {
	// Military Spouse Appreciation Day (NEEDS TO BE CHANGED YEARLY)
	if (d == 6) { 
		AOTD = "It is Military Spouse Appreciation Day! It is currently Asian American Pacific Islander Heritage Month"; 
	// National Day of Prayer (NEEDS TO BE CHANGED YEARLY)
	} else if (d == 4) { 
		AOTD = "It is currently National Day of Prayer and Asian American Pacific Islander Heritage Month";
		// Memorial Day (NEEDS TO BE CHANGED YEARLY)
	} else if (d == 30) { 
		AOTD = "It is currently Memorial Day and Asian American Pacific Islander Heritage Month";
		// Asian American Pacific Islander Heritage Month
	} else {
		AOTD = "It is currently Asian American Pacific Islander Heritage Month";
	}
// June
} else if (m == 5) {		
	// Army Birthday
	if (d == 14) { 
		AOTD = "Happy Birthday Army! It is currently Army Heritage and LGBTQ+ Pride Month";
	// Juneteenth
	} else if (d == 19) { 
		AOTD = "Happy Juneteenth! It is currently Army Heritage and LGBTQ+ Pride Month";
	// LGBTQ+ Pride and Army Heritage Month
	} else {
		AOTD = "It is currently Army Heritage and LGBTQ+ Pride Month";
	}
// July
} else if (m == 6) {
	// Independence Day
	if (d == 4) { 
		AOTD = "Happy Independence Day"; 
	// No Day Detected
	} else {
		AOTD = "No Parameters Detected";
		document.getElementById("dailyBugle").style.display="none";
	}
// August
} else if (m == 7) {
	// Women's Equality Day
	if (d == 26) {
		AOTD = "Happy Women's Equality Day! It is Currently Antiterrorism Awareness Awareness Month"; 
	// Antiterrorism Awareness Awareness
	} else {
		AOTD = "It is Currently Antiterrorism Awareness Awareness Month";
	}
// September
} else if (m == 8) {
	// September 11th/Patriot Day
	if (d == 11) {
		AOTD = "It is currently Patriot day";
	// Air Force Birthday
	} else if ( d == 18) { 
		AOTD = "Happy Birthday Air Force! It is currently Hispanic Heritage and Suicide Prevention Month";
	// Hispanic Heritage Month
	} else if (d >= 15) { 
		AOTD = "It is currently Hispanic Heritage and Suicide Prevention Month";
	// Suicide Prevention Month
	} else {
		AOTD = "It is currently Suicide Prevention Month";
	}
// October
} else if (m == 9) {
	// Navy Birthday
	if (d == 13) { // 
		AOTD = "Happy Birthday Navy! It is currently Hispanic Heritage, Army Cybersecurity Awarenes, National Energy Action, and Disability Awareness Month Month";
	// Hispanic Heritage Month
	} else if (d <= 15) { 
		AOTD = "It is currently Hispanic Heritage, Army Cybersecurity Awarenes, National Energy Action, and Disability Awareness Month";
	// Army Cybersecurity Awarenes, National Energy Action, and Disability Awareness Month
	} else {
		AOTD = "It is currently Army Cybersecurity Awarenes, National Energy Action, and Disability Awareness Month";
	}
// November
} else if (m == 10) {
// Maines Birthday 
	if (d == 10) { 
		AOTD = ("Happy Birthday Marines! It is currently Miltary Family, Native American and Alaskan Heritage Month");
	// Veterans Day (NEEDS TO BE CHANGED YEARLY)
	} else if (d == 11) { 
		AOTD = "It is currently Veterans Day! It is currently Miltary Family, Native American and Alaskan Heritage Month";
	// Native American Heritage Month
	} else {
		AOTD = "It is currently Miltary Family, Native American and Alaskan Heritage Month";
	}
// December
} else if (m == 11) {
	// National Guard Birthday
	if (d == 13) { 
		AOTD = "Happy Birthday National Guard!";
	// Space Force Birthday
	} else if (d == 20) { 
		AOTD = "Happy Birthday Space Force!";
	} else if (d == 25) {
		AOTD = "Happy Holidays";
	// New Years Eve
	} else if (d == 31) { 
		AOTD = "New Years Eve";
	// No Day Detected
	} else {
		AOTD = "No Parameters Detected";
		document.getElementById("dailyBugle").style.display="none";
	}
// Error, No month detected
} else {
	AOTD = "Error, No Month Detected";
	document.getElementById("dailyBugle").style.display="none";
document.getElementsByClassName("naviCentered").style.display="none";;
}	
document.getElementById("dailyBugle").innerHTML = AOTD;

// Open folder
function openFolder(folder) {
	document.getElementById("folder").style.width = "100%";
	if (folder == "0") {
		document.getElementById("catFolder").innerHTML = (jsM14 + jsM15 + "<br>" + jsM16 + jsM18);
	} else if (folder == "1") {
		document.getElementById("catFolder").innerHTML = (jsA15 + jsA16);
	} else if (folder == "2") {
		document.getElementById("catFolder").innerHTML = (jsG04 + jsG05 + jsG06);
	}
}

// Close Folder
function closeFolder(folder) {
	document.getElementById("folder").style.width = "0%";
}
