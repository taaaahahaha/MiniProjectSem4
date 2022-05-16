//code goes here

var led = 0; //LED off
var wattage = 0; //initial LED Power
var ckt = 0; //Circuit off
var diode = "ledred";

var voltages = new Array(0,1,2,3,4,5,6,7,8,9,10,11);
var for_voltages_ledred = new Array("0.0","0.3","0.6","0.8","1.0","1.2","1.4","1.6","1.8","2.0","2.2","2.4");
var for_voltages_ledyellow = new Array("0.0","0.3","0.6","0.9","1.2","1.5","1.8","2.1","2.4","2.7","2.9","3.0");
var for_voltages_ledgreen = new Array("0.0","0.3","0.6","0.9","1.2","1.5","1.8","2.1","2.4","2.7","3.0","3.2");
var for_voltages_ledblue = new Array("0.0","0.4","0.8","1.2","1.6","2.0","2.4","2.8","3.0","3.2","3.4","3.5");


var for_current_ledred = new Array("000.0", "000.0", "000.0","000.2","000.4","001.1","003.2","007.9","017.2","034.5","062.3","091.6");
var for_current_ledyellow = new Array("000.0", "000.0", "000.2","000.4","000.7","000.9","003.2","009.4","034.2","060.6","079.1","087.3");
var for_current_ledgreen = new Array("000.0", "000.0", "000.2","000.4","000.7","000.9","002.2","005.8","018.3","048.5","076.1","095.2");
var for_current_ledblue = new Array("000.0", "000.2", "000.4","000.7","000.9","002.2","004.7","018.2","038.4","062.7","087.4","099.5");


function ckt_on()
{

  switch(ckt)
  {case 0:

      document.getElementById('ckt_status').value = "Switch OFF the Circuit";
      document.getElementById('v1Value').disabled = false;
      ckt = 1;
       
      document.getElementById('ledexpt').src = "static/led_planck_Static/assets/led_png/ledon.png";
     
      
      //alert(document.getElementById('ledexpt').width);
      break;

   case 1:

   document.getElementById('ckt_status').value = "Switch ON the Circuit";
   document.getElementById('v1Value').value = "0";
   document.getElementById('v1Value').disabled = true;
   current.innerHTML="000.0 mA";
   volt.innerHTML="0.0 V";
   var display = document.getElementById("initialLValue");
   display.innerHTML=0;
         
      document.getElementById('ledexpt').src = "static/led_planck_Static/assets/led_png/ledoff.png";
       ckt = 0; 
      break;
  }


}

function showDIODE(newValue)
{
       //get the element
	   
       diode = newValue;
	  
       document.getElementById('ckt_status').value = "Switch ON the Circuit";
       document.getElementById('v1Value').value = "0";
       document.getElementById('v1Value').disabled = true;
	   
	   if(diode=="ledred")
	   {
			document.getElementById('diode_disp').src = "static/led_planck_Static/assets/led_png/redled.png";
	   }
	    if(diode=="ledyellow")
	   {
			document.getElementById('diode_disp').src = "static/led_planck_Static/assets/led_png/yellowled.png";
	   }
	    if(diode=="ledgreen")
	   {
			document.getElementById('diode_disp').src = "static/led_planck_Static/assets/led_png/greenled.png";
	   }
	    if(diode=="ledblue")
	   {
			document.getElementById('diode_disp').src = "static/led_planck_Static/assets/led_png/blueled.png";
	   }
       current.innerHTML="000.0 mA";
       volt.innerHTML="0.0 V";
       var display = document.getElementById("initialLValue");
       display.innerHTML=0;
       ckt = 0;


           
           document.getElementById('ledexpt').src = "static/led_planck_Static/assets/led_png/ledoff.png";
         
           document.getElementById('voltage').value = "0.0";
           document.getElementById('current').value = "000";
           document.getElementById('v1Value').value = "0";
           //get the element
           var display = document.getElementById("initialLValue");
           //show the amount
           display.innerHTML=0;

}

function showCurrent(newValue)
     {
		 if(ckt==0)
            {
              alert("First Switch on the Circuit");
              document.getElementById('v1Value').value = "0";
            }
            //alert(ckt);
            if(ckt==1)
            {
            //get the element
            var display = document.getElementById("initialLValue");

            //show the amount
            display.innerHTML=newValue;
            voltage = Number(newValue);
            showArrow(voltage/15);
            var a = voltages.indexOf(voltage, 0);
            
                 
                 if(diode=="ledred")
				{
					display.innerHTML=voltages[a];
                    volt.innerHTML = for_voltages_ledred[a].concat(" V");
				    current.innerHTML = for_current_ledred[a].concat(" mA");
                 }
				  if(diode=="ledyellow")
				{
					display.innerHTML=voltages[a];
                    volt.innerHTML = for_voltages_ledyellow[a].concat(" V");
				    current.innerHTML = for_current_ledyellow[a].concat(" mA");
                 }
				  if(diode=="ledgreen")
				{
					display.innerHTML=voltages[a];
                    volt.innerHTML = for_voltages_ledgreen[a].concat(" V");
				    current.innerHTML = for_current_ledgreen[a].concat(" mA");
                 }
				  if(diode=="ledblue")
				{
					display.innerHTML=voltages[a];
                    volt.innerHTML = for_voltages_ledblue[a].concat(" V");
				    current.innerHTML = for_current_ledblue[a].concat(" mA");
                 }
                 
                            
			}
	 }

function showArrow(newValue)
{

  var newHeight = 250-(newValue*150);
  var newTop = 390-(newValue*150);

  document.getElementById("line").height = newHeight;
  document.getElementById("arrow").style.top = newTop;
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