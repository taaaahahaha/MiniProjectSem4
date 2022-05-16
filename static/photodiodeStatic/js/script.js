//code goes here

var led = 0; //LED off
var wattage = 0; //initial LED Power
var ckt = 0; //Circuit off
var voltages = new Array(0.0,0.2,0.4,0.6,0.8,1.0,1.2,1.4,1.6,1.8,2.0,2.2,2.4,2.6,2.8,3.0,3.2,3.4,3.6,3.8,4.0,4.2,4.4,4.6,4.8,5.0);
var voltages_disp = new Array("0.0","0.2","0.4","0.6","0.8","1.0","1.2","1.4","1.6","1.8","2.0","2.2","2.4","2.6","2.8","3.0","3.2","3.4","3.6","3.8","4.0","4.2","4.4","4.6","4.8","5.0");
var current0 = new Array("000", "008", "017","026","034","041","052","058","060","061","062","062","063","063","063","063","063","063","063","063","063","063","063","063","063","063");
var current10 = new Array("000", "020", "054","093","136","168","188","194","197","200","202","202","204","204","204","204","204","204","204","204","204","204","204","204","204","204");
var current20 = new Array("000", "038", "094","181","262","318","374","384","388","392","394","395","396","396","396","396","396","396","396","396","396","396","396","396","396","396");
var current30 = new Array("000", "080", "172","275","394","490","560","576","585","588","590","592","593","593","593","593","593","593","593","593","593","593","593","593","593","593");
var current40 = new Array("000", "122", "253","413","596","710","821","875","882","885","886","888","889","889","890","890","890","890","890","890","890","890","890","890","890","890");

function led_on()
{
  switch(led)
  {case 0:
      document.getElementById('led').value = "Switch OFF the LED";
      document.getElementById('led_watt').disabled = false;
      led = 1;
      wattage = 10;
      document.getElementById('led_watt').value = 10;
      showLED(wattage);
      alert(document.getElementById('photoexpt').width);
      break;

   case 1:
      document.getElementById('led').value = "Switch ON the LED";
      document.getElementById('led_watt').disabled = true;
      led = 0;
      wattage = 0;
      document.getElementById('led_watt').value = 0;
      showLED(wattage);
      break;
  }
}

function ckt_on()
{

  switch(ckt)
  {case 0:
      document.getElementById('ckt_status').value = "Switch OFF the Circuit";
      document.getElementById('v1Value').disabled = false;
      ckt = 1;
      document.getElementById('photoexpt').src = "static/photodiodeStatic/assets/photodiode_png/photodiode_on.png";
  //    wattage = 10;
  //    document.getElementById('led_watt').value = 10;
  //    showLED(wattage);
      break;

   case 1:
      document.getElementById('ckt_status').value = "Switch ON the Circuit";
      document.getElementById('v1Value').disabled = true;
      ckt = 0;
      document.getElementById('photoexpt').src = "static/photodiodeStatic/assets/photodiode_png/photodiode.png";
      document.getElementById('voltage').value = "0.0";
      document.getElementById('current').value = "000";
      document.getElementById('v1Value').value = 0;
      //get the element
      var display = document.getElementById("initialLValue");
      //show the amount
      display.innerHTML=0;
  //    wattage = 0;
  //    document.getElementById('led_watt').value = 0;
  //    showLED(wattage);
      break;
  }


//        document.getElementById('led_watt').value = 10;
//        showLED(wattage);
}

function showLED(newValue)
{
       //get the element
       var image_path = "";
       L = Number(newValue);
       wattage=Number(newValue);
       var str1 = "static/photodiodeStatic/assets/photodiode_png/";
       var str2 = str1.concat(L);
       image_path = str2.concat("mW.png");

         document.getElementById('led_disp').src = image_path;
         if (L==0)
         {
           document.getElementById('led_watt').disabled = true;
           led = 0;
           document.getElementById('led').value = "Switch ON the LED";
         }
            showCurrent(document.getElementById('voltage').value);
        //   document.getElementById('ssdexpt').src = "ssd_png/Slide75.png";
      // reset();
}

function showCurrent(newValue)
     {
            //get the element
            var display = document.getElementById("initialLValue");
            //show the amount
            display.innerHTML=newValue;
            voltage = Number(newValue);
            var a = voltages.indexOf(voltage, 0);
           document.getElementById('voltage').value = voltages_disp[a];

           if(wattage==0)
           {
            document.getElementById('current').value = current0[a];
           }
            if(wattage==10)
            {
             document.getElementById('current').value = current10[a];
            }
            if(wattage==20)
            {
             document.getElementById('current').value = current20[a];
            }
            if(wattage==30)
            {
             document.getElementById('current').value = current30[a];
            }
            if(wattage==40)
            {
             document.getElementById('current').value = current40[a];
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
