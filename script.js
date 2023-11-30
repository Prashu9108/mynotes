
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
