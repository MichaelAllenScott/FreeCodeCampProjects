<!--
/* Created by Michael Scott for Assigment 4 for CpSc 217 */


imgAry = new Array(); //This array holds the address to the images
arrayCheck = new Array(); //this array stores the values from 0-11 that HAVE been used in the upcoming function

/* This is the function that is first called when the page loads.
   It first calls the function that puts the images in an array.
   Then it creates two for loops, the outer represents the row, the inner represents columns.
   it uses this loop structure to create a table.
   In the loop it creates a random number from 0-11, and checks if the number has been used before.
   If it hasn't, it then uses that number as the index of the image array and puts that image into the column
   The result is a 3x4 table with scrambled images  */
function generateImages()
{
    createArray(); // Calling array that puts images into the array
    
    document.getElementById('picturePlace').innerHTML = "<table>"; //Starting the table
    
    for(var j = 1; j <= 3; j++) //Row Loop
    {
        document.getElementById("picturePlace").innerHTML += "<tr>"; //Creates a row on each loop
        
        for(var i = 1; i <= 4; i++) //Column loop
        {
            var randomNum = Math.floor(Math.random() * (11 - 0 + 1)) + 0; // Random number from 0-11

            if(!inArray(randomNum)) //Check to see if we've used this number before
            {
                arrayCheck[arrayCheck.length] = randomNum; //Since we haven't, we put it in the array
                
                var jString = new String(j);                                  //String of the j value
                var iString = new String(i);                                  //String of the i value
                var imageID = new String("Row" + jString + "Col" + iString);  //String that will become the image HTML ID
                
                var imgString = new String("<img src='"+imgAry[randomNum]+"' id='"+imageID+"'>"); //String that will be used to create the html
                
                //The HTML created will look like: <td><img src='xy.jpg' id='RowxColy'></td>
                document.getElementById("picturePlace").innerHTML += "<td>"+imgString+"</td>"; //Creating the column HTML    
            }
            else i= i-1; //If the number IS in the array, we just minus one and retry
        }
        document.getElementById("picturePlace").innerHTML += "</tr><br>"; //Ending Row
    }
    document.getElementById("picturePlace").innerHTML += "</table>"; //Ending Table
    
}//End of Generate Images

//This simply enters the source name for each image into the array.
//Each image src is just 11.jpg or 21.jpg
//The first number represents the Row, The second represents the Column
function createArray()
{
    var counter = 0; //simple Counter
    for(var i = 1; i <= 3; i++) //Row
    {
        for(var j = 1; j <= 4; j++) //Column
        {
            var iString = new String(i);
            var jString = new String(j);
            var imgSource = new String(iString+jString+".jpg"); //String of image source
            
            imgAry[counter] = imgSource; //Put the string into the array
            counter++;
        }
    }
}

//Checks to see if the number passed in in the array, return true if it is, false if not
function inArray(curNum)
{
    if(arrayCheck.length==0) return false; //If the array is empty we return false
    
    for(var i = 0; i < arrayCheck.length; i++)
    {
        if(arrayCheck[i] == curNum)
        {
            return true;
        }
    }
    return false; //If we get here that means the number hasn't been found so it must be false
}

//These two variable represent the row and column we are looking for
//They are set to one because we start at the top left and work right.
//They will be changed throught the upcomin function
var rowNum = 1; 
var colNum = 1;

var picturesComplete = 0; //Represent the pictures we have checked
var clicked = 0;          //Just used to control what happens when the user presses the "automate" button
var timer = 500;          //Used in setInterval, represents half a second

/* Alright, so first of the clicked variable represents which state the process is in.
   If it's a 1 then the swapping is just starting, if it's greater than a one then the swapping is still being done
   At the end of the program iti is set to -1, so we know it is complete.
   if clicked is a one we enter the main process.
   There is a setInterval which allows the program's steps to be seen.
   The main function is inside this setInterval which acts as a timed while loop.
   I'll give a short description and go into detail down there.
   basically we recreate two ID, the one we're looking for and the one we're on.
   Using these we sort throught each image and see if it's id matches the one we want.
   If they do we swap them.
   We should do this 12 times for each image, at the end we stop the setInterval and then it's done*/

function unSwap()
{
    if(clicked >= 0) clicked++; //keeps track of clicks until the image is correct, because then clicked will be set to -2
    
    if(clicked == 1) //If this is the first time the button is clicked we enter
    {
        var intervalStopper = setInterval(function() //setInterval which acts as a loop
        {
            var rowStr = new String(rowNum); //String of the wanted row number
            var colStr = new String(colNum); //String of the wanted column number
            
            for(var i = 1; i <= 3; i++) //Row loop
            {
                for(var j = 1; j <= 4; j++) //Column loop
                {
                    var iString = new String(i);                                    //String of i value
                    var jString = new String(j);                                    //String of j value
                    var currentID = new String("Row" + iString + "Col" + jString);  //String ID of the current image
                    var correctID = new String("Row" + rowStr + "Col" + colStr);    //String ID of the image we want
                    var correctImageSrc = new String(rowStr+colStr+".jpg");         //String src of the image we want
                    
                    //These next three steps basically just get the src and cut it down so it's only xy.jpg
                    var currentImageSrc = new String(document.getElementById(currentID).src);
                    var fileNameIndex = currentImageSrc.lastIndexOf("/") + 1;
                    var shortCurrentImageSrc = currentImageSrc.substr(fileNameIndex); //String src of the image we're on
                    
                    if(correctImageSrc == shortCurrentImageSrc) //If the current src matches the correct source we enter and switch them.
                    {   
                        var longCorrectImageSrc = new String(document.getElementById(correctID).src); //long src of the correct image
                        
                        document.getElementById(correctID).src = shortCurrentImageSrc; //We set the correct image place, to the right image
                        
                        //Same as above, just making the src right
                        var fileNameIndex2 = longCorrectImageSrc.lastIndexOf("/") + 1;
                        var newCorrectImageSource = longCorrectImageSrc.substr(fileNameIndex2);
                        
                        //set the stolen images spot to the image that was in the spot we wanted.
                        document.getElementById(currentID).src = newCorrectImageSource;
                        
                        i=4; //Setting the variables so these for loops aren't used until the next interval iteration
                        j=5;  
                    }
                }
            }
            
            //After we leave the for loops we increase the column number, if it is equal to 4, we set it to 1 and increase the row
            colNum++;
                if(colNum == 5)
                {
                    rowNum++;
                    colNum = 1;
                }
        
            
            picturesComplete++; //increase the number of pictures we've replaced
                if(picturesComplete == 12) //If this equals 12 we are done
                {
                    clearInterval(intervalStopper); //stop the interval
                
                    //Cue the celebration gifs
                    document.getElementById("RightCannon").style.visibility = "visible";
                    document.getElementById("LeftCannon").style.visibility = "visible";
                    
                    clicked = -1; // allows a different pop up to appear
                }
        }, timer); //End of setInterval
    }
    
    if(clicked > 1) alert("Automation is in progress!"); //If the picture is still un-scramblin this will pop up
    if(clicked == -1) alert("The picture is already un-scrambled! To start again, press Re-scramble.") // If the picture is done, this will pop up.
}
-->>