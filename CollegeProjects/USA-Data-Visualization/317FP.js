//Created by Michael Scott for CPSC 317

//Arrays used for data
var incomeArray;
var marijuanaArray;

//Used for the selector
function selectionMade()
{
	//Get value currently selected
	var e = document.getElementById("selector");
	var value = e.options[e.selectedIndex].value;

    //Enter neccessary function
	if(value == "income"){ setup(); }
    if(value == "marijuana"){ marijuana(); }
}

//Used for Average Income
function setup()
{
	//Data taken from: http://www.infoplease.com/ipa/A0104652.html
	incomeArray = ["33,945", "44,174", "34,999", "33,150", "43,104", "42,802", "56,001", 
	               "39,962", "71,044", "39,272", "35,490", "41,021", "32,257", "43,159",
	               "34,943", "38,281", "39,737", "33,348", "38,446", "37,300", "49,025",
	               "51,552", "35,597", "42,843", "31,186", "36,979", "35,317", "39,557", 
	               "36,997", "44,084", "50,781", "33,837", "48,821", "35,638", "40,596", 
	               "36,421", "36,421", "37,095", "41,152", "42,579", "33,163", "33,865", 
	               "35,307", "39,493", "32,595", "40,283", "44,762", "43,564", "32,641", 
	               "38,432", "47,851", "40,584"]

	//Checks income and assigns color based on value
	for(var i = 0; i < 51; i++)
	{
		stateID = IDfromAbbrev(i);

		if(parseInt(incomeArray[i].replace(",", "")) < 35000)
		{
			document.getElementById(stateID).style.fill = "#a0e5b9";
		}
		if(parseInt(incomeArray[i].replace(",", "")) >= 35000)
		{
			document.getElementById(stateID).style.fill = "#8ce0aa";
		}
		if(parseInt(incomeArray[i].replace(",", "")) >= 38000)
		{
			document.getElementById(stateID).style.fill = "#78db9b";
		}
		if(parseInt(incomeArray[i].replace(",", "")) >= 42000)
		{
			document.getElementById(stateID).style.fill = "#64d58c";
		}
		if(parseInt(incomeArray[i].replace(",", "")) >= 45000)
		{
			document.getElementById(stateID).style.fill = "#50d07d";
		}
		if(parseInt(incomeArray[i].replace(",", "")) >= 48000)
		{
			document.getElementById(stateID).style.fill = "#3ccb6e";
		}
		if(parseInt(incomeArray[i].replace(",", "")) >= 50000)
		{
			document.getElementById(stateID).style.fill = "#32bb62";
		}
		if(parseInt(incomeArray[i].replace(",", "")) >= 60000)
		{
			document.getElementById(stateID).style.fill = "#2da758";
		}
	}
}

//Used for marijuana portion
function marijuana()
{
	//Data taken from: http://www.infoplease.com/us/states/marijuana-legalization.html
	marijuanaArray = [0,4,2,0,3,4,3,2,0,0,0,3,0,2,0,
					  0,0,0,0,3,1,3,2,2,1,0,2,1,3,
					  2,2,2,2,1,0,1,0,4,0,3,0,0,0,
					  0,0,3,0,4,0,0,0]

    //Checks the value for the state and assigns a color
	for(var i = 0; i < 51; i++)
	{
		stateID = IDfromAbbrev(i);

		if(marijuanaArray[i] == 0)
		{
			document.getElementById(stateID).style.fill = "#a0e5b9";
		}
		if(marijuanaArray[i] == 1)
		{
			document.getElementById(stateID).style.fill = "#8ce0aa";
		}
		if(marijuanaArray[i] == 2)
		{
			document.getElementById(stateID).style.fill = "#78db9b";
		}
		if(marijuanaArray[i] == 3)
		{
			document.getElementById(stateID).style.fill = "#64d58c";
		}
		if(marijuanaArray[i] == 4)
		{
			document.getElementById(stateID).style.fill = "#32ba62";
		}
	}
}

//Hover function, for when the mouse is over a state
function stateHover(id)
{   
	//Set state name
	document.getElementById("stateName").innerHTML = getStateName(id);
  
    //get the id of the state
    var idNum = getStateID(id);

    	//Get selector value
        var e = document.getElementById("selector");
	    var value = e.options[e.selectedIndex].value;

	    //if selector is value, change this header
		if(value == "income")
		{
			document.getElementById("industryText").innerHTML = ("Average Income:  " + "$" + incomeArray[idNum]);
		}

		//If selector is marijuana, change this header
		if(value == "marijuana")
		{
			var numID = getStateID(id);
			policyNum = marijuanaArray[numID];
			if(policyNum == 0)
			{
				document.getElementById("industryText").innerHTML = "Total Marijuana Prohibition";
			}
			if(policyNum == 1)
			{
				document.getElementById("industryText").innerHTML = "Decriminalized Marijuana Possession Laws";
			}
			if(policyNum == 2)
			{
				document.getElementById("industryText").innerHTML = "Legal Medical Marijuana";
			}
			if(policyNum == 3)
			{
				document.getElementById("industryText").innerHTML = "Medical and Decriminalization Laws";
			}
			if(policyNum == 4)
			{
				document.getElementById("industryText").innerHTML = "Legalized Marijuana";
			}
		}
}

//Function that returns the state names based on abbreviations
function getStateName(abbrev)
{
	if(abbrev == "AL"){ return "ALABAMA";}
	if(abbrev == "AK"){ return "ALASKA";}
    if(abbrev == "AZ"){ return "ARIZONA";}
    if(abbrev == "AR"){ return "ARKANSAS";}
    if(abbrev == "CA"){ return "CALIFORNIA";}
    if(abbrev == "CO"){ return "COLORADO";}
    if(abbrev == "CT"){ return "CONNECTICUT";}
    if(abbrev == "DE"){ return "DELAWARE";}
    if(abbrev == "DC"){ return "DISTRICT OF COLUMBIA";}
    if(abbrev == "FL"){ return "FLORIDA";}
	if(abbrev == "GA"){ return "GEORGIA";}
	if(abbrev == "HI"){ return "HAWAII";}
	if(abbrev == "ID"){ return "IDAHO";}
	if(abbrev == "IL"){ return "ILLINOIS";}
	if(abbrev == "IN"){ return "INDIANA";}
	if(abbrev == "IA"){ return "IOWA";}
	if(abbrev == "KS"){ return "KANSAS";}
	if(abbrev == "KY"){ return "KENTUCKY";}
	if(abbrev == "LA"){ return "LOUISIANA";}
    if(abbrev == "ME"){ return "MAINE";}
    if(abbrev == "MD"){ return "MARYLAND";}
	if(abbrev == "MA"){ return "MASSACHUSETTS";}	
	if(abbrev == "MI"){ return "MICHIGAN";}		
	if(abbrev == "MN"){ return "MINNESOTA";}		
	if(abbrev == "MS"){ return "MISSISSIPPI";}	
	if(abbrev == "MT"){ return "MONTANA";}
	if(abbrev == "MO"){ return "MISSOURI";}
	if(abbrev == "NE"){ return "NEBRASKA";}
    if(abbrev == "NV"){ return "NEVADA";}
    if(abbrev == "NH"){ return "NEW HAMPSHIRE";}
    if(abbrev == "NJ"){ return "NEW JERSEY";}
    if(abbrev == "NM"){ return "NEW MEXICO";}
    if(abbrev == "NY"){ return "NEW YORK";}
    if(abbrev == "NC"){ return "NORTH CAROLINA";}
    if(abbrev == "ND"){ return "NORTH DAKOTA";}
	if(abbrev == "OH"){ return "OHIO";}
	if(abbrev == "OK"){ return "OKLAHOMA";}
	if(abbrev == "OR"){ return "OREGON";}
	if(abbrev == "PA"){ return "PENNSYLVANIA";}
    if(abbrev == "RI"){ return "RHODE ISLAND";}
    if(abbrev == "SC"){ return "SOUTH CAROLINA";}
    if(abbrev == "SD"){ return "SOUTH DAKOTA";}
    if(abbrev == "TN"){ return "TENNESSEE";}
    if(abbrev == "TX"){ return "TEXAS";}
    if(abbrev == "UT"){ return "UTAH";}
    if(abbrev == "VT"){ return "VERMONT";}
	if(abbrev == "VA"){ return "VIRGINIA";}
	if(abbrev == "WA"){ return "WASHINGTON";}
	if(abbrev == "WV"){ return "WEST VIRGINIA";}
	if(abbrev == "WI"){ return "WISCONSIN";}
	if(abbrev == "WY"){ return "WYOMING";}
}

//Function that returns ID based on abbreviations
function getStateID(abbrev)
{
	if(abbrev == "AL"){ return 0;}
	if(abbrev == "AK"){ return 1;}
    if(abbrev == "AZ"){ return 2;}
    if(abbrev == "AR"){ return 3;}
    if(abbrev == "CA"){ return 4;}
    if(abbrev == "CO"){ return 5;}
    if(abbrev == "CT"){ return 6;}
    if(abbrev == "DE"){ return 7;}
    if(abbrev == "DC"){ return 8;}
    if(abbrev == "FL"){ return 9;}
	if(abbrev == "GA"){ return 10;}
	if(abbrev == "HI"){ return 11;}
	if(abbrev == "ID"){ return 12;}
	if(abbrev == "IL"){ return 13;}
	if(abbrev == "IN"){ return 14;}
	if(abbrev == "IA"){ return 15;}
	if(abbrev == "KS"){ return 16;}
	if(abbrev == "KY"){ return 17;}
	if(abbrev == "LA"){ return 18;}
    if(abbrev == "ME"){ return 19;}
    if(abbrev == "MD"){ return 20;}
	if(abbrev == "MA"){ return 21;}	
	if(abbrev == "MI"){ return 22;}		
	if(abbrev == "MN"){ return 23;}		
	if(abbrev == "MS"){ return 24;}	
	if(abbrev == "MT"){ return 25;}
	if(abbrev == "MO"){ return 26;}
	if(abbrev == "NE"){ return 27;}
    if(abbrev == "NV"){ return 28;}
    if(abbrev == "NH"){ return 29;}
    if(abbrev == "NJ"){ return 30;}
    if(abbrev == "NM"){ return 31;}
    if(abbrev == "NY"){ return 32;}
    if(abbrev == "NC"){ return 33;}
    if(abbrev == "ND"){ return 34;}
	if(abbrev == "OH"){ return 35;}
	if(abbrev == "OK"){ return 36;}
	if(abbrev == "OR"){ return 37;}
	if(abbrev == "PM"){ return 38;}
	if(abbrev == "PA"){ return 39;}
    if(abbrev == "RI"){ return 40;}
    if(abbrev == "SC"){ return 41;}
    if(abbrev == "SD"){ return 42;}
    if(abbrev == "TN"){ return 43;}
    if(abbrev == "TX"){ return 44;}
    if(abbrev == "UT"){ return 45;}
    if(abbrev == "VT"){ return 46;}
	if(abbrev == "VA"){ return 47;}
	if(abbrev == "WA"){ return 48;}
	if(abbrev == "WV"){ return 49;}
	if(abbrev == "WI"){ return 50;}
	if(abbrev == "WY"){ return 51;}
}

//Function that returns abbreviations based on ID
function IDfromAbbrev(abbrev)
{
	if(abbrev == 0){ return "AL";}
	if(abbrev == 1){ return "AK";}
    if(abbrev == 2){ return "AZ";}
    if(abbrev == 3){ return "AR";}
    if(abbrev == 4){ return "CA";}
    if(abbrev == 5){ return "CO";}
    if(abbrev == 6){ return "CT";}
    if(abbrev == 7){ return "DE";}
    if(abbrev == 8){ return "DC";}
    if(abbrev == 9){ return "FL";}
	if(abbrev == 10){ return "GA";}
	if(abbrev == 11){ return "HI";}
	if(abbrev == 12){ return "ID";}
	if(abbrev == 13){ return "IL";}
	if(abbrev == 14){ return "IN";}
	if(abbrev == 15){ return "IA";}
	if(abbrev == 16){ return "KS";}
	if(abbrev == 17){ return "KY";}
	if(abbrev == 18){ return "LA";}
    if(abbrev == 19){ return "ME";}
    if(abbrev == 20){ return "MD";}
	if(abbrev == 21){ return "MA";}	
	if(abbrev == 22){ return "MI";}		
	if(abbrev == 23){ return "MN";}		
	if(abbrev == 24){ return "MS";}	
	if(abbrev == 25){ return "MT";}
	if(abbrev == 26){ return "MO";}
	if(abbrev == 27){ return "NE";}
    if(abbrev == 28){ return "NV";}
    if(abbrev == 29){ return "NH";}
    if(abbrev == 30){ return "NJ";}
    if(abbrev == 31){ return "NM";}
    if(abbrev == 32){ return "NY";}
    if(abbrev == 33){ return "NC";}
    if(abbrev == 34){ return "ND";}
	if(abbrev == 35){ return "OH";}
	if(abbrev == 36){ return "OK";}
	if(abbrev == 37){ return "OR";}
	if(abbrev == 38){ return "PA";}
	if(abbrev == 39){ return "RI";}
    if(abbrev == 40){ return "SC";}
    if(abbrev == 41){ return "SD";}
    if(abbrev == 42){ return "TN";}
    if(abbrev == 43){ return "TX";}
    if(abbrev == 44){ return "UT";}
    if(abbrev == 45){ return "VT";}
    if(abbrev == 46){ return "VA";}
	if(abbrev == 47){ return "WA";}
	if(abbrev == 48){ return "WV";}
	if(abbrev == 49){ return "WI";}
	if(abbrev == 50){ return "WY";}
	if(abbrev == 51){ return "WM";}
}
//END
