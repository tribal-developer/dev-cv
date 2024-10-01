
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }); 

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    });

    // Form Validation
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        let isValid = true;

        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            emailError.textContent = 'Email is invalid.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (isValid) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
    });

    // Lightbox Initialization
    // lightbox.option({
    //     'resizeDuration': 200,
    //     'wrapAround': true,
    //     'showImageNumberLabel': false 
    // });
});
