// Navigation bar 
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navigationBar');

    // Ensure elements exist before adding event listeners
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('visible');
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('visible');
            }
        });
    }
});

// Home page Specific 

// Tablets
document.addEventListener('DOMContentLoaded', () => {
    // Set the specific media query
    const mediaQuery = window.matchMedia('(min-device-width: 768px) and (max-device-width: 1024px)');

    const handleMediaChange = (e) => {
        const contactsDiv = document.querySelector('.col-6.Contacts, .col-5.Contacts');
        const spacerDiv = document.querySelector('.col-2.spacer');
        const locationDiv = document.querySelector('.col-6.Location, .col-5.Location');

        if (e.matches) { // If the screen matches the specific media query
            // Remove the spacer div
            spacerDiv?.remove();

            // Change the class names of the outer divs to 'col-6'
            contactsDiv?.classList.replace('col-5', 'col-6');
            locationDiv?.classList.replace('col-5', 'col-6');
        } else { // Revert changes for screens outside the media query
            if (!document.querySelector('.col-2.spacer')) {
                // Recreate the spacer div
                const parentElement = contactsDiv.parentNode;
                const spacerClone = document.createElement('div');
                spacerClone.className = 'col-2 spacer';
                parentElement.insertBefore(spacerClone, locationDiv);
            }

            // Revert the class names of the outer divs to 'col-5'
            contactsDiv?.classList.replace('col-6', 'col-5');
            locationDiv?.classList.replace('col-6', 'col-5');
        }
    };

    // Attach the handler function to the media query
    mediaQuery.addEventListener('change', handleMediaChange);

    // Call the handler initially to set up the page correctly
    handleMediaChange(mediaQuery);
});

// Phones 
document.addEventListener('DOMContentLoaded', () => {
    // Set the specific media query
    const mediaQuery = window.matchMedia('(min-device-width: 320px) and (max-device-width: 480px)');

    const handleMediaChange = (e) => {
        const contactsDiv = document.querySelector('.col-12.Contacts, .col-5.Contacts');
        const spacerDiv = document.querySelector('.col-2.spacer');
        const locationDiv = document.querySelector('.col-12.Location, .col-5.Location');

        if (e.matches) { // If the screen matches the specific media query
            // Remove the spacer div
            spacerDiv?.remove();

            // Change the class names of the outer divs to 'col-12'
            contactsDiv?.classList.replace('col-5', 'col-12');
            locationDiv?.classList.replace('col-5', 'col-12');
        } else { // Revert changes for screens outside the media query
            if (!document.querySelector('.col-2.spacer')) {
                // Recreate the spacer div
                const parentElement = contactsDiv.parentNode;
                const spacerClone = document.createElement('div');
                spacerClone.className = 'col-2 spacer';
                parentElement.insertBefore(spacerClone, locationDiv);
            }

            // Revert the class names of the outer divs to 'col-5'
            contactsDiv?.classList.replace('col-12', 'col-5');
            locationDiv?.classList.replace('col-12', 'col-5');
        }
    };

    // Attach the handler function to the media query
    mediaQuery.addEventListener('change', handleMediaChange);

    // Call the handler initially to set up the page correctly
    handleMediaChange(mediaQuery);
});
