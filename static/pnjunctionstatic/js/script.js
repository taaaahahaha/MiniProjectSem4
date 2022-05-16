
//code goes here
var led = 0; //LED off
var wattage = 0; //initial LED Power
var ckt = 0; //Circuit off
var diode = "1N4007";
var biasing = "forward";
var voltages = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
var for_voltages_1N4007 = new Array("0.0","0.1","0.2","0.3","0.4","0.5","0.6","0.62","0.64","0.66","0.68","0.70","0.72","0.74","0.75","0.76");
var for_voltages_1N270 = new Array("0.0","0.05","0.1","0.15","0.2","0.25","0.28","0.3","0.32","0.34","0.36","0.38","0.4","0.41","0.42");
var for_current_1N4007 = new Array("000.0", "000.0", "000.0","000.0","000.2","002.6","006.9","009.5","012.8","015.6","020.73","032.9","060.4","097.8","130.4","187.1");
var for_current_1N270 = new Array("00.0", "00.0","00.0","00.0","00.1","00.2","00.4","00.6","00.9","01.6","02.8","04.1","05.4","06.1","07.1");

var rev_voltages_disp = new Array("0.0","1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0","12.0","13.0","14.0","15.0");
var rev_current_1N4007 = new Array("00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0");
var rev_current_1N270 = new Array("00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0","00.0");
function ckt_on()
{

  switch(ckt)
  {case 0:

      document.getElementById('ckt_status').value = "Switch OFF the Circuit";
      document.getElementById('v1Value').disabled = false;
      ckt = 1;
      
      var biasing = document.getElementById("bias").value;
      if(biasing == "forward")
      {document.getElementById('pn_junctionexpt').src = "static/pnjunctionstatic/assets/pn_junction_png/forward_on.png";}
      if(biasing == "reverse")
      {document.getElementById('pn_junctionexpt').src = "static/pnjunctionstatic/assets/pn_junction_png/reverse_on.png";}
      //alert(document.getElementById('pn_junctionexpt').width);
      break;

   case 1:

   document.getElementById('ckt_status').value = "Switch ON the Circuit";
   document.getElementById('v1Value').value = "0";
   document.getElementById('v1Value').disabled = true;
   current.innerHTML="000.0 mA";
   volt.innerHTML="0.0 V";
   var display = document.getElementById("initialLValue");
   display.innerHTML=0;
      ckt = 0;
      var biasing = document.getElementById("bias").value;

      if(biasing == "forward")
      {document.getElementById('pn_junctionexpt').src = "static/pnjunctionstatic/assets/pn_junction_png/forward_off.png";}
      if(biasing == "reverse")
      {document.getElementById('pn_junctionexpt').src = "static/pnjunctionstatic/assets/pn_junction_png/reverse_off.png";}


  
      break;
  }


}

function showBIAS(newValue)
{
  document.getElementById('ckt_status').value = "Switch ON the Circuit";
  document.getElementById('v1Value').value = "0";
  document.getElementById('v1Value').disabled = true;
  current.innerHTML="000.0 mA";
    volt.innerHTML="0.0 V";
      var display = document.getElementById("initialLValue");
      display.innerHTML=0;

  ckt = 0;
      biasing = newValue;

      if(biasing == "forward")
      {document.getElementById('pn_junctionexpt').src = "static/pnjunctionstatic/assets/pn_junction_png/forward_off.png";}
      if(biasing == "reverse")
      {document.getElementById('pn_junctionexpt').src = "static/pnjunctionstatic/assets/pn_junction_png/reverse_off.png";}

      //get the element

      //show the amount

}

function showDIODE(newValue)
{
       //get the element
       diode = newValue;
       document.getElementById('ckt_status').value = "Switch ON the Circuit";
       document.getElementById('v1Value').value = "0";
       document.getElementById('v1Value').disabled = true;
       current.innerHTML="000.0 mA";
       volt.innerHTML="0.0 V";
       var display = document.getElementById("initialLValue");
       display.innerHTML=0;
       ckt = 0;


           if(biasing == "forward")
           {document.getElementById('pn_junctionexpt').src = "static/pnjunctionstatic/assets/pn_junction_png/forward_off.png";}
           if(biasing == "reverse")
           {document.getElementById('pn_junctionexpt').src = "static/pnjunctionstatic/assets/pn_junction_png/reverse_off.png";}
  
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
            //get the element
            var display = document.getElementById("initialLValue");

            //show the amount
            display.innerHTML=newValue;
            voltage = Number(newValue);
            showArrow(voltage/15);
            var a = voltages.indexOf(voltage, 0);
            if(biasing=="forward")
            {
                 
                 if(diode=="1N4007")
				{
					display.innerHTML=voltages[a];
                    volt.innerHTML = for_voltages_1N4007[a].concat(" V");
				    current.innerHTML = for_current_1N4007[a].concat(" mA");
                 }
                  if(diode=="1N270")
                  {
					display.innerHTML=voltages[a];
                    volt.innerHTML = for_voltages_1N270[a].concat(" V");
                    current.innerHTML = for_current_1N270[a].concat(" mA");
                  }
              }

              if(biasing=="reverse")
              {
                  display.innerHTML=voltages[a];
                   volt.innerHTML = rev_voltages_disp[a].concat(" V");

                   if(diode=="1N4007")
                   {

                    current.innerHTML = rev_current_1N4007[a].concat(" mA");
                   }
                    if(diode=="1N270")
                    {
                     current.innerHTML = rev_current_1N270[a].concat(" mA");
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
