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
    
    const body = document.body;
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Schakel Dark Mode in/uit';
    body.appendChild(darkModeToggle);
    

    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    
    
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
    