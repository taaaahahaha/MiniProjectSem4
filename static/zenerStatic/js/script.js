//code goes here

var led = 0; //LED off
var wattage = 0; //initial LED Power
var ckt = 0; //Circuit off
var diode = "1N4733A";
var biasing = "forward";
var voltages = new Array(0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6);
var for_voltages_1N4733A = new Array("0.00","0.05","0.10","0.15","0.20","0.25","0.30","0.35","0.40","0.45","0.50","0.55","0.60","0.65","0.70","0.75","0.80");
var for_current_1N4733A = new Array("0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.01","0.12","0.26","0.43","1.33","4.54","12.2","28.3");
var for_voltages_1N4736A = new Array("0.00","0.05","0.10","0.15","0.20","0.25","0.30","0.35","0.40","0.45","0.50","0.55","0.60","0.65","0.70","0.75","0.80");
var for_current_1N4736A = new Array("0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.01","0.01","0.02","0.14","0.33","2.4","8.63","23.2");

var rev_voltages_1N4733A = new Array("0.00","0.50","1.00","1.50","2.00","2.50","3.00","3.50","4.00","4.50","4.60","4.70","4.80","4.90","5.00","5.10","5.11");
var rev_current_1N4733A = new Array("0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.02","0.11","0.23","0.45","0.78","1.36","2.31","11.0","32.4","37.6");
var rev_voltages_1N4736A = new Array("0.00","1.00","2.00","3.00","4.00","4.50","5.00","5.50","6.00","6.20","6.30","6.40","6.50","6.60","6.70","6.80","6.81");
var rev_current_1N4736A = new Array("0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.01","0.01","0.03","0.21","0.60","8.21","19.2","22.3");

function ckt_on()
{

  switch(ckt)
  {case 0:

      document.getElementById('ckt_status').value = "Switch OFF the Circuit";
      document.getElementById('v1Value').disabled = false;
      ckt = 1;
      var biasing = document.getElementById("bias").value;
      if(biasing == "forward")
      {document.getElementById('zenerexpt').src = "static/zenerStatic/assets/zener_png/zener_forward_on.png";}
      if(biasing == "reverse")
      {document.getElementById('zenerexpt').src = "static/zenerStatic/assets/zener_png/zener_reverse_on.png";}
      break;

   case 1:

   document.getElementById('ckt_status').value = "Switch ON the Circuit";
   document.getElementById('v1Value').value = "0";
  // document.getElementById('v1Value').disabled = true;
   current.innerHTML="0.00 mA";
   volt.innerHTML="0.00 V";
   var display = document.getElementById("initialLValue");
   display.innerHTML=0;
      ckt = 0;
      var biasing = document.getElementById("bias").value;

      if(biasing == "forward")
      {document.getElementById('zenerexpt').src = "static/zenerStatic/assets/zener_png/zener_forward_off.png";}
      if(biasing == "reverse")
      {document.getElementById('zenerexpt').src = "static/zenerStatic/assets/zener_png/zener_reverse_off.png";}

      break;
  }
}

function showBIAS(newValue)
{
  document.getElementById('ckt_status').value = "Switch ON the Circuit";
  document.getElementById('v1Value').value = "0";
  //document.getElementById('v1Value').disabled = true;
  current.innerHTML="0.00 mA";
    volt.innerHTML="0.00 V";
      var display = document.getElementById("initialLValue");
      display.innerHTML=0;

  ckt = 0;
      biasing = newValue;

      if(biasing == "forward")
      {document.getElementById('zenerexpt').src = "static/zenerStatic/assets/zener_png/zener_forward_off.png";}
      if(biasing == "reverse")
      {document.getElementById('zenerexpt').src = "static/zenerStatic/assets/zener_png/zener_reverse_off.png";}
}

function showDIODE(newValue)
{
       //get the element
       diode = newValue;
       document.getElementById('ckt_status').value = "Switch ON the Circuit";
       document.getElementById('v1Value').value = "0";
      // document.getElementById('v1Value').disabled = true;
       current.innerHTML="0.00 mA";
       volt.innerHTML="0.00 V";
       var display = document.getElementById("initialLValue");
       display.innerHTML=0;
       ckt = 0;


           if(biasing == "forward")
           {document.getElementById('zenerexpt').src = "static/zenerStatic/assets/zener_png/zener_forward_off.png";}
           if(biasing == "reverse")
           {document.getElementById('zenerexpt').src = "static/zenerStatic/assets/zener_png/zener_reverse_off.png";}
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
                var display = document.getElementById("initialLValue");
                display.innerHTML=newValue;

                voltage = Number(newValue);
                showArrow(voltage);

                var a = voltages.indexOf(voltage, 0);

                if(biasing=="forward")
                {

                     if(diode=="1N4733A")
                     {

                       display.innerHTML=for_voltages_1N4733A[a];
                       volt.innerHTML = for_voltages_1N4733A[a].concat(" V");
                       current.innerHTML = for_current_1N4733A[a].concat(" mA");
                     }
                      if(diode=="1N4736A")
                      {
                        display.innerHTML=for_voltages_1N4736A[a];
                        volt.innerHTML = for_voltages_1N4736A[a].concat(" V");
                        current.innerHTML = for_current_1N4736A[a].concat(" mA");
                      }
                  }

                  if(biasing=="reverse")
                  {
                       if(diode=="1N4733A")
                       {
                         display.innerHTML=rev_voltages_1N4733A[a];
                         volt.innerHTML = rev_voltages_1N4733A[a].concat(" V");
                         current.innerHTML = rev_current_1N4733A[a].concat(" mA");
                       }
                        if(diode=="1N4736A")
                        {
                          display.innerHTML=rev_voltages_1N4736A[a];
                          volt.innerHTML = rev_voltages_1N4736A[a].concat(" V");
                          current.innerHTML = rev_current_1N4736A[a].concat(" mA");
                        }
                    }
            }
        }

function showArrow(newValue)
{

  var newHeight = 250-(Math.round((newValue/1.67)*150));
  var newTop = 390-(Math.round((newValue/1.67)*150));

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