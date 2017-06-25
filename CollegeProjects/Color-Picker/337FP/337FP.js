var currSelector = "sat";
var currHue = .538888;
var currBright = .90;
var currSat = .71;

var HY = 11.068;
var SY = 7.25;
var BY = 2.4;

var pgClicked = false;
var adjClicked = false;

var currHex = "#43BFE8";

function setup()
{
  CC(currHue, currSat, currBright);
  changeBackground();
  setCircle();
  setLines();
  setAdjuster();

  var plotGraph = document.getElementById('PlotGraph');
  plotGraph.addEventListener("mousedown", pgMouseDown, false);
  plotGraph.addEventListener("mouseup", pgMouseUp, false);

  var adjust = document.getElementById('adjust');
  adjust.addEventListener("mousedown", adjMouseDown, false);
  adjust.addEventListener("mouseup", adjMouseUp, false);
}

function pgMouseDown(e) {
  pgClicked = true;
  e.target.addEventListener("mousemove", pgMouseMoved, false);
}

function pgMouseUp(e) {
  pgClicked = false;
  e.target.removeEventListener("mousemove", pgMouseMoved, false);
}

function pgMouseMoved(e) {
  if(pgClicked){
    mouseCoor(e);
  }
}

function adjMouseDown(e) {
  adjClicked = true;
  e.target.addEventListener("mousemove", adjMouseMoved, false);
}

function adjMouseUp(e) {
  adjClicked = false;
  e.target.removeEventListener("mousemove", adjMouseMoved, false);
}

function adjMouseMoved(e) {
  if(adjClicked){
    slider(e);
  }
}

function HSBChange(selector)
{
	if(selector == "hue")
	{
      currSelector = "hue";

      setCircle();
      setLines();

      document.getElementById("adjustLine").setAttribute("y1", HY);
      document.getElementById("adjustLine").setAttribute("y2", HY);

      document.getElementById("SatBox").style.fontFamily = "UniSansTI";
      document.getElementById("BrightBox").style.fontFamily = "UniSansTI";
      document.getElementById("HueBox").style.fontFamily = "UniSansHI";

      document.getElementById("BaseRect").style.visibility = "visible";
      document.getElementById("BrightRect").style.visibility = "visible";
      document.getElementById("HueRect").style.visibility = "hidden";
      document.getElementById("SatRect").style.visibility = "visible";
      document.getElementById("BlackRect").style.visibility = "hidden";
	  
	    Grad = document.getElementById("Sat");
	    Grad.setAttribute('x1', "1");
      Grad.setAttribute('y1', "0");
      Grad.setAttribute('x2', "0");
      Grad.setAttribute('y2', "0");

	  
	    document.getElementById("AdjustBright").style.visibility = "hidden";
      document.getElementById("AdjustSat").style.visibility = "hidden";
	    document.getElementById("AdjustHue").style.visibility = "visible";
	    document.getElementById("BaseAdjust").style.visibility = "hidden";
      
	}

	if(selector == "sat")
    {
      currSelector = "sat"

      setCircle();
      setLines();
      setAdjuster();

      document.getElementById("adjustLine").setAttribute("y1", SY);
      document.getElementById("adjustLine").setAttribute("y2", SY);

      document.getElementById("colorMatrix").setAttribute("values", currSat);

      document.getElementById("HueBox").style.fontFamily = "UniSansTI";
      document.getElementById("BrightBox").style.fontFamily = "UniSansTI";      
      document.getElementById("SatBox").style.fontFamily = "UniSansHI";
	  
      document.getElementById("AdjustBright").style.visibility = "hidden";
      document.getElementById("AdjustSat").style.visibility = "visible";
	    document.getElementById("AdjustHue").style.visibility = "hidden";
	    document.getElementById("BaseAdjust").style.visibility = "visible";
	  
      document.getElementById("colorMatrix").setAttribute("values", currSat);    
	    document.getElementById("BaseRect").style.visibility = "hidden";
      document.getElementById("BrightRect").style.visibility = "visible";
      document.getElementById("HueRect").style.visibility = "visible";
      document.getElementById("SatRect").style.visibility = "hidden";
      document.getElementById("BlackRect").style.visibility = "hidden";

	    adjustGrad = document.getElementById("Hue");
	    adjustGrad.setAttribute('x1', "0");
      adjustGrad.setAttribute('y1', "0");
      adjustGrad.setAttribute('x2', "1");
      adjustGrad.setAttribute('y2', "0");
    }

    if(selector == "bright")
    {
      currSelector = "bright";

      setCircle();
      setLines();
      setAdjuster();

      document.getElementById("adjustLine").setAttribute("y1", BY);
      document.getElementById("adjustLine").setAttribute("y2", BY);

      document.getElementById("SatBox").style.fontFamily = "UniSansTI";
      document.getElementById("HueBox").style.fontFamily = "UniSansTI";
      document.getElementById("BrightBox").style.fontFamily = "UniSansHI";
	  
	    document.getElementById("AdjustBright").style.visibility = "visible";
      document.getElementById("AdjustSat").style.visibility = "hidden";
	    document.getElementById("AdjustHue").style.visibility = "hidden";
	    document.getElementById("BaseAdjust").style.visibility = "visible;";


      document.getElementById("BaseRect").style.visibility = "hidden";
      document.getElementById("BrightRect").style.visibility = "hidden";
      document.getElementById("HueRect").style.visibility = "visible";
      document.getElementById("SatRect").style.visibility = "visible";
      document.getElementById("BlackRect").style.visibility = "visible";
      document.getElementById("colorMatrix").setAttribute("values", 1);
	  
	    Grad = document.getElementById("Sat");
	    Grad.setAttribute('x1', "0");
      Grad.setAttribute('y1', "0");
      Grad.setAttribute('x2', "0");
      Grad.setAttribute('y2', "1");
    }

    checkBrightness();
}

function mouseCoor(evt){
  var W = document.getElementById("PlotGraph").getBoundingClientRect().width;
  var H = document.getElementById("PlotGraph").getBoundingClientRect().height;

  console.log(document.getElementById("PlotGraph").getBoundingClientRect());

  var X = (evt.offsetX / W) * 100;
  var Y = 1 - (evt.offsetY / H);

  var hue, sat, bright;

  if (currSelector == "sat")
  {
    hue = (X * 3.6)/360;
    sat = currSat;
    bright = Y;

    CC(hue, sat, bright);

    HY = 25 -(currHue * 25);
    BY = 25 -(currBright * 25);

    document.getElementById("BlackRect").setAttribute("fill-opacity", 1-currBright);
  }

  if (currSelector == "hue")
  {
    hue = currHue
    sat = (X/100);
    bright = Y;

    CC(hue, sat, bright);

    SY = 25 -(currSat * 25);
    BY = 25 -(currBright * 25);

    document.getElementById("colorMatrix").setAttribute("values", currSat);
    document.getElementById("BlackRect").setAttribute("fill-opacity", 1-currBright);

  }

  if (currSelector == "bright")
  {
    hue = (X * 3.6)/360;
    sat = Y;
    bright = currBright;

    CC(hue, sat, bright);

    HY = 25 -(currHue * 25);
    SY = 25 -(currSat * 25);

  }

  document.getElementById("Selector-Circle").setAttribute("cx", X );
  document.getElementById("Selector-Circle").setAttribute("cy", ((evt.offsetY / H)* 100));

  document.getElementById("HueValue").innerHTML = Math.round(hue * 360) + "&deg;";
  document.getElementById("SatValue").innerHTML = Math.round(sat * 100) + "%";
  document.getElementById("BrightValue").innerHTML = Math.round(bright * 100) + "%";
  
  setLines();
  setAdjuster();
  checkBrightness();

}

function slider(evt)
{
  var H = document.getElementById("adjust").getBoundingClientRect().height;
  var Y = 1-(evt.offsetY / H);

  if( currSelector == "sat")
  {
     document.getElementById("colorMatrix").setAttribute("values", Y);
     
     document.getElementById("SatValue").innerHTML = Math.round(Y * 100) + "%";

     SY = 25 -(Y * 25);

     CC(currHue, Y, currBright);
  }

  if( currSelector == "bright")
  {
     document.getElementById("BlackRect").setAttribute("fill-opacity", 1-Y);
     
     document.getElementById("BrightValue").innerHTML = Math.round(Y * 100) + "%";

     BY = 25 -(Y * 25);

     CC(currHue, currSat, Y);
  }

  if( currSelector == "hue")
  {
     var tempRGB = HSVtoRGB( ((Y*3.6 * 100)/360), 1, 1);
     var tempHex = rgbToHex(tempRGB.r, tempRGB.g, tempRGB.b);

     document.getElementById("BaseRect").setAttribute("fill", tempHex);
     
     document.getElementById("HueValue").innerHTML = Math.round(Y * 360) + "&deg;";

     HY = 25 -(Y * 25)

     CC( ((Y*3.6 * 100)/360), currSat, currBright);
  }

  setCircle();
  checkBrightness();

  document.getElementById("adjustLine").setAttribute("y1", 25 -(Y * 25));
  document.getElementById("adjustLine").setAttribute("y2", 25 -(Y * 25));

}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (h && s === undefined && v === undefined) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
    };
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function CC(hue, sat, bright)
{
  var rgb = HSVtoRGB(hue, sat, bright);
  var hexCode = rgbToHex(rgb.r, rgb.g, rgb.b);

  document.getElementById("CCRect").setAttribute("fill", hexCode);
  document.getElementById("hexCode").innerHTML = hexCode;

  currHue = hue;
  currBright = bright;
  currSat = sat;

  currHex = hexCode;

  var nameMatch = ntc.name(hexCode);
  
  document.getElementById("colorName").innerHTML = ('"' + nameMatch[1] + '"');

}

function setCircle()
{
  if(currSelector == "hue")
  {
    document.getElementById("Selector-Circle").setAttribute("cx", currSat * 100);
    document.getElementById("Selector-Circle").setAttribute("cy", (100-(currBright * 100)));
  }
  if(currSelector == "sat")
  {
    document.getElementById("Selector-Circle").setAttribute("cx", currHue * 100);
    document.getElementById("Selector-Circle").setAttribute("cy", (100-(currBright * 100)));
  }
  if(currSelector == "bright")
  {
    document.getElementById("Selector-Circle").setAttribute("cx", currHue * 100);
    document.getElementById("Selector-Circle").setAttribute("cy", (100-(currSat * 100)));
  }
}

function setLines()
{
  if(currSelector == "hue")
  {
    document.getElementById("adjustLine").setAttribute("y1", HY);
    document.getElementById("adjustLine").setAttribute("y2", HY);
  }
  if(currSelector == "sat")
  {
    document.getElementById("adjustLine").setAttribute("y1", SY);
    document.getElementById("adjustLine").setAttribute("y2", SY);
  }
  if(currSelector == "bright")
  {
    document.getElementById("adjustLine").setAttribute("y1", BY);
    document.getElementById("adjustLine").setAttribute("y2", BY);
  }
}

function setAdjuster()
{
  if(currSelector == "sat")
  {
    var rgb = HSVtoRGB(currHue, 1, currBright);
    var hexCode = rgbToHex(rgb.r, rgb.g, rgb.b);

    document.getElementById("BaseAdjust").setAttribute("fill", hexCode);
    document.getElementById("BaseRect").setAttribute("fill", hexCode);
  }

  if(currSelector == "bright")
  {
    var rgb = HSVtoRGB(currHue, currSat, 1);
    var hexCode = rgbToHex(rgb.r, rgb.g, rgb.b);

    document.getElementById("BaseAdjust").setAttribute("fill", hexCode);
    document.getElementById("BaseRect").setAttribute("fill", hexCode);
  }

}

function checkBrightness()
{
  if(currSelector == "hue")
  {
      if(currBright < .45)
      {
        document.getElementById("Selector-Circle").setAttribute("stroke", "#ffffff");
      }
      else
      {
        document.getElementById("adjustLine").setAttribute("stroke", "#000000");
        document.getElementById("Selector-Circle").setAttribute("stroke", "#000000");
      }
  }
  if(currSelector == "sat")
  {
      if((currSat > .50) && (currBright < .45))
      {
        document.getElementById("adjustLine").setAttribute("stroke", "#ffffff");
        document.getElementById("Selector-Circle").setAttribute("stroke", "#ffffff");
      }
      if((currSat < .50) && (currBright < .45))
      {
        document.getElementById("Selector-Circle").setAttribute("stroke", "#ffffff");
        document.getElementById("adjustLine").setAttribute("stroke", "#000000");
      }
      if(((currSat >= .50) && (currBright >= .45)) || ((currSat <= .50) && (currBright >= .45)))
      {
        document.getElementById("adjustLine").setAttribute("stroke", "#000000");
        document.getElementById("Selector-Circle").setAttribute("stroke", "#000000");
      }

  }
  if(currSelector == "bright")
  {
      if(currBright < .45)
      {
        document.getElementById("adjustLine").setAttribute("stroke", "#ffffff");
        document.getElementById("Selector-Circle").setAttribute("stroke", "#ffffff");
      }
      else
      {
        document.getElementById("adjustLine").setAttribute("stroke", "#000000");
        document.getElementById("Selector-Circle").setAttribute("stroke", "#000000");
      }
  }
}

function changeBackground()
{
  document.body.style.background = currHex;

  if(currBright < .50)
  {
    document.getElementById("name").style.color = "#F0F0F5";
    document.getElementById("title").style.color = "#F0F0F5";
  }
  if(currBright >= .50)
  {
    document.getElementById("name").style.color = "#000000";
    document.getElementById("title").style.color = "#000000";
  }
}

