
var isOpen = false;
function dialogOpener (){
    isOpen = !isOpen;
    console.log(isOpen);
    const dialog = document.getElementById('dialog');
    const icon = document.getElementById('open-icon');
    if (isOpen) {
        dialog.style.display = "block";
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-close');
    }
    else{
        dialog.style.display = "none"
        icon.classList.remove('fa-close');
        icon.classList.add('fa-plus')
    }
}

var isLightTheme = true;
const themeChanger = () => {
    isLightTheme = !isLightTheme;
    const nav = document.getElementById("nav")
    const topbar = document.getElementById("top-bar")
    const themeIcon = document.getElementById("theme");

    if (isLightTheme) {
        themeIcon.classList.remove("fa-cloud-moon");
        themeIcon.classList.add("fa-cloud-sun");
        document.body.style.background = "#fff";
        document.body.style.color = "#000";
        
        //nav
        nav.style.backgroundColor = "#fff";
        topbar.style.backgroundColor = "#fff";

    }
    else {
        themeIcon.classList.add("fa-cloud-moon");
        themeIcon.classList.remove("fa-cloud-sun");
        document.body.style.background = "#000";
        document.body.style.color = "#fff";
        nav.style.backgroundColor = "#252525";
        topbar.style.backgroundColor = "#252525";

    }
}
