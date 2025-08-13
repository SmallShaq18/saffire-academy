//HOVER OVER LISTED ITEMS IN NAV
const hoverables = document.querySelectorAll('.hoverables');
const displayed = document.querySelectorAll('.hidden-navs');

hoverables.forEach((hoverable, index) => {
    hoverable.addEventListener('mouseenter', () => {
        displayed[index].style.display = "block";
    });
    hoverable.addEventListener('mouseleave', () => {
        displayed[index].style.display = "none";
    });

    
    
});

//HOVER OVER ITEMS IN SUBLIST OF NAV ITEMS
const sub_hoverables = document.querySelectorAll('.sub-hover');
const sub_list = document.querySelectorAll('.sub-a');

sub_hoverables.forEach((sub_hoverable, index) => {
    sub_hoverable.addEventListener('mouseenter', () => {
        sub_list[index].style.color = "white";
    });
    sub_hoverable.addEventListener('mouseleave', () => {
        sub_list[index].style.color = "black";
    });

});

//TOGGLES SEARCH PAGE VISIBILITY
function showSearchPage(){
    var div = document.getElementById("search_page");
    div.style.visibility = "visible";
    div.style.transition = "transform 0.2s ease";
}
document.getElementById("search_icon").onclick = showSearchPage;

function closeSearchPage(){
    var div = document.getElementById("search_page");
    div.style.visibility = "hidden";
    div.style.transition = "transform 0.2s ease";
}
document.getElementById("search_closebtn").onclick = closeSearchPage;
//document.getElementById("search_page").onclick = closeSearchPage();


//DO THIS WHEN THE ENTER BUTTON IS PRESSED IN SEARCH PAGE
function keyPress(event){
    if(event.key === "Enter"){
        window.location.href = "saffire.html"
    }
}

//TRANSFORM IMAGES THAT COME INTO VIEWPORT IN HOMEPAGE GALLERY SECTION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('in-viewport');
        } else{
            entry.target.classList.remove('in-viewport');
        }
    });
}, {
    threshold: 0.5
});
const images = document.querySelectorAll('.transform-image');
images.forEach(image => {
    observer.observe(image);
});


//NAV ONCLICK FOR SMALL SCREENS
const togglebtn = document.getElementById("btnmenu");
const nav = document.getElementById("navbar");
const collapsed = document.getElementsByClassName("collapsed");

togglebtn.addEventListener('click', function(){
  if (nav.style.display === "none" || nav.style.display === ""){
    nav.style.display = "block";
    togglebtn.className = "collapsed";
    //collapsed[0].style.border = "none";
    //collapsed[0].style.backgroundColor = "white";
  } else{
    nav.style.display = "none";
    togglebtn.className = "btnmenu";
    //btnmenu.style.border = "none";
    //btnmenu.style.backgroundColor = "white";
  }
});



//EXPAND AND COLLAPSE DETAILS OF SPORT ON ATHLETICS PAGE
const boxes = document.querySelectorAll(".rect");

boxes.forEach((rect) => {
    rect.addEventListener('click', () => {

        //Hide details for all boxes
        boxes.forEach((otherRect) => {
            if(otherRect !== rect){
                otherRect.querySelector('.rect-deets').style.display = 'none';
            }
        });

        //Toggle details for clicked box
        const deets = rect.querySelector('.rect-deets');
        //const summary = rect.querySelector('.rect-summary');
        deets.style.display = deets.style.display === 'block' ? 'none' : 'block';
        //summary.style.background = deets.style.background === 'yellow' ? 'maroon' : 'yellow';
    });
});



//HIDE AND SHOW PASSWORD WHEN REGISTERING AND LOGIN IN IN PORTAL SECTION
function togglePassword(fieldNumber){
    const passwordField = document.getElementById(`password${fieldNumber}`);
    const toggleButton = document.getElementById(`togglePassword${fieldNumber}`);

    if (passwordField.type === "password"){
        passwordField.type = "text";
        toggleButton.classList.remove("fa-eye");
        toggleButton.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleButton.classList.remove("fa-eye-slash");
        toggleButton.classList.add("fa-eye");
    }
}


