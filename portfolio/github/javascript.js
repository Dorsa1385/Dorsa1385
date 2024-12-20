var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
  
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }
    
let Dark = document.getElementById("darkmode");
Dark.addEventListener("click", function(){
  let body = document.body;
  body.classList.toggle("darkmode");
  })
    
const cookieBanner = document.getElementById("cookie-banner");
const acceptButton = document.getElementById("accept-cookie");

acceptButton.addEventListener("click", function() {
    cookieBanner.style.display = "none"; 
    console.log("Cookie-melding weggeklikt.");  
});

const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

hamburgerMenu.addEventListener('click', function() {
    const isOpen = navbar.classList.toggle('open');
    
    hamburgerMenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

function updateGreetingAndTime() {
  const now = new Date();
  const hours = now.getHours(); 
  const minutes = now.getMinutes(); 

  const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

  let greeting;
  if (hours >= 6 && hours < 12) {
      greeting = "Goodmorning!";
  } else if (hours >= 12 && hours < 17) {
      greeting = "Goodafternoon!";
  } else if (hours >= 17 && hours < 22) {
      greeting = "Goodevening!";
  } else {
      greeting = "Goodnight!";
  }

     document.getElementById("greeting").textContent = greeting;
    
     document.getElementById("current-time").textContent = `Current Time: ${formattedTime}`;
 }

 setInterval(updateGreetingAndTime, 60000);

 updateGreetingAndTime();

// Counter
let countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime(); 
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "The countdown has ended!";
    }
}, 1000); 