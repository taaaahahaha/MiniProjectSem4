//code goes here

var lights = 0;

function light_on()
{
  switch(lights)
  {case 0:
      document.getElementById('light_status').value = "Switch OFF the light";
      document.getElementById('v1Value').disabled = false;
      lights = 1;
      document.getElementById('ssdexpt').src = "static/ssd_static/assets/ssd_png/Slide50.png";
      break;

   case 1:
    document.getElementById('light_status').value = "Switch ON the Circuit";
    var display = document.getElementById("initialLValue");
    display.innerHTML=50;
    // document.getElementById('ssdexpt').src = "ssd_png/Slide50.png";
    document.getElementById('ssdexpt').src = "static/ssd_static/assets/ssd_png/Slide50off.png";
    document.getElementById('v1Value').disabled = true;
    lights = 0;
    break;
  }
}

function showL(newValue)
      {
             //get the element
             var image_path = "";
             var display = document.getElementById("initialLValue");
             //show the amount
             display.innerHTML=newValue;
             L = Number(newValue);
             var str1 = "static/ssd_static/assets/ssd_png/Slide";
             var str2 = str1.concat(L);

             if(lights == 1)
                {
                  image_path = str2.concat(".png");
                }
             else
                {
                  image_path = str2.concat("off.png");
                }
             document.getElementById('ssdexpt').src = image_path;
          //   document.getElementById('ssdexpt').src = "ssd_png/Slide75.png";
            // reset();
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