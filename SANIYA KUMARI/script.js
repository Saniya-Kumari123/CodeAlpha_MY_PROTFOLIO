// Select all anchor links in the navbar
const navLinks = document.querySelectorAll('.navbar a');

// Add a click event listener to each anchor link
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        // Prevent the default behavior of jumping to the target section immediately
        event.preventDefault();

        // Get the href attribute value of the clicked anchor link
        const targetId = link.getAttribute('href');

        // Use smooth scrolling to scroll to the target section
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the mobile menu if it's open (for responsive design)
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Add a click event listener to the menu icon for toggling the mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});
