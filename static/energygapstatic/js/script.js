//code goes here
var ckt = 0; //Circuit off
var temp = 25; //Thermometor off
var temperature_on = 0;
var voltages = new Array(0,1,2,3,4,5,6,7,8,9,10);
var voltages_disp = new Array("0.00","1.00","2.00","3.00","4.00","5.00","6.00","7.00","8.00","9.00","10.0");
var current = new Array("0","10","10","10","10","10","10","10","10","10","10");
var temperatures = new Array(25,30,35,40,45,50,55,60,65,70,75,80,85);
var current_temp = new Array("006","009","013","017","027","035","054","072","105","148","207","298","418");

function ckt_on()
{
	
  switch(ckt)
  {case 0:

      document.getElementById('ckt_status').value = "Switch OFF the Circuit";
	  
      document.getElementById('v1Value').disabled = false;
      ckt = 1;
      document.getElementById('energygapexpt').src = "static/energygapstatic/assets/energygap_png/energygap_on.png";
      break;

   case 1:

   document.getElementById('ckt_status').value = "Switch ON the Circuit";
   document.getElementById('v1Value').value = "0";
   document.getElementById("current").innerHTML = "0.00".concat(" \xB5 A");
   document.getElementById('t1Value').value = "25";
   volt.innerHTML="0.00 V";
   voltage = 0;
   
   var display = document.getElementById("initialLValue");
   display.innerHTML=0;
   document.getElementById('initialLTValue').innerHTML = 25;
   if(temperature_on==1)
   {
	   document.getElementById("temperature").innerHTML=25;
   }
   temp=25;
      ckt = 0;
      document.getElementById('energygapexpt').src = "static/energygapstatic/assets/energygap_png/energygap_off.png";
      break;
  }
}

function temp_on()
{
	
  switch(temperature_on)
  {case 0:
      document.getElementById('temp_status').value = "Switch OFF the Thermometer";
	  document.getElementById("temperature").innerHTML = temp;
      temperature_on = 1;
      break;

   case 1:

   document.getElementById('temp_status').value = "Switch ON the Thermometer";
	  document.getElementById("temperature").innerHTML = "";
      temperature_on = 0;
      break;
  }
}

function showVoltage(newValue)
     {
		
		 if(ckt==0)
            {
              alert("First Switch on the Circuit");
              document.getElementById('v1Value').value = "0";
			   document.getElementById('t1Value').value = "25";
            }
		if(ckt==1)
            {
				document.getElementById("initialLValue").innerHTML=newValue;

                voltage = Number(newValue);
                showArrow(voltage);

                var a = voltages.indexOf(voltage, 0);
				
                document.getElementById("volt").innerHTML = voltages_disp[a].concat(" V");
				
				showCurrent(temp);
			
			}
	 
	 }

function showCurrent(newValue)
     {
		temp=Number(newValue);
		
            if(ckt==0)
            {
              alert("First Switch on the Circuit");
              document.getElementById('v1Value').value = "0";
			  document.getElementById('t1Value').value = "25";
            }
            //alert(ckt);
            if(ckt==1)
            {
				
               if(voltage>0)
			   {
				  var b = temperatures.indexOf(temp, 0);
				 
				  document.getElementById("current").innerHTML = current_temp[b].concat(" \xB5 A");
			   }
				if(voltage==0)
			   {
				  document.getElementById("current").innerHTML = "0.00".concat(" \xB5 A");
			   }
					 
            }
        }

function showArrow(newValue)
{

  var newHeight = 65+(Math.round((newValue/11)*150));
  
  var newBottom = 170+(Math.round((newValue/11)*150));
//alert(newBottom);
  document.getElementById("line").height = newHeight;
  document.getElementById("arrow").style.bottom = newBottom;
}

function changeTemp(newValue)
{
	if(ckt==0)
            {
              alert("First Switch on the Circuit");
              document.getElementById('v1Value').value = "0";
			   document.getElementById('t1Value').value = "25";
            }
	if(ckt==1)
	{
		temp = newValue;
		
		if(temperature_on==1)
		{	
			document.getElementById("temperature").innerHTML=newValue;
		}
		document.getElementById("initialLTValue").innerHTML=newValue;
		showCurrent(temp);
	}

}
document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
    
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
