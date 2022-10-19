// Menu Toggle Function
function menuToggle() {
    // Toggle first and third lines of hamburger icon when menu open
    const lines = document.querySelectorAll('.hidden')
    lines.forEach(svg => svg.classList.toggle('menu-active'));

    // Toggle visibility of menu links when menu open
    const links = document.querySelectorAll('.nav-link')
    links.forEach(nav => nav.classList.toggle('active'));
}

// Add toggle function to menu icon
document.querySelector('.menu-toggle')
    .addEventListener('click', menuToggle);

// ---------------------

// Initialise Flatpickr
flatpickr("#flatpickr", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});

// ---------------------

// Modal Functionality

// Get all the modal buttons
var btns = document.querySelectorAll("button.modal-button");

// Get all the modals
var modals = document.querySelectorAll(".modal");

// Get all the closing spans
var spans = document.getElementsByClassName("close");

// Loop through the modal buttons and display corresponding modal when clicked
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function(e) {
        e.preventDefault(); /* Prevent url from being followed */
        modal = document.querySelector(e.target.getAttribute("href")); /* Select corresponding modal by href... */
        modal.style.display = "block"; /* ...and set its display to block */
    }
}

// Loop through the closing spans and close modal when clicked
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// Close the modal when user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}