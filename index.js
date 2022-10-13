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

// Initialise Flatpickr
flatpickr("#flatpickr", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});