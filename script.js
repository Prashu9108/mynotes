
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

//To save data
function saveNote(){
    var title = document.getElementById("title").value;
    var note = document.getElementById("content").value;
    const myNotes = localStorage.getItem('noteData') || '[]'

    const dataArray = JSON.parse(myNotes);

    dataArray.push({title, note});

    //save note to localstorage
    localStorage.setItem('noteData', JSON.stringify(dataArray));
    alert('notes has been saved...')
    
    dialogOpener();
    displayNotes();
}

const displayNotes = () =>{
    const container = document.getElementById("notes-container");
    const myNotes = localStorage.getItem('noteData') || '[]' //json format
    const allNotes = JSON.parse(myNotes) //object format
    allNotes.forEach(element => {
        container.innerHTML+= ` 
        <div class="col-12 col-sm-12 col-md-4 col-lg-3 mb-3">
        <div class="notes-card h-100 p-5">
        <h5 class="text-danger fs-4" >${element.title}</h5>
        <p class="text-secondary fs-5">${element.note}</p>
        <div class="icons d-flex align-items-center gap-3">
        <i class="fa fa-heart"></i>
        <i class="fa fa-edit"></i>
        <i class="fa fa-trash"></i>
        <i class="fa fa-share"></i>
     </div>
      </div>
        </div> ` 
    });
}
displayNotes();
