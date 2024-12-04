/*------------------------- Shared Scripts -------------------------*/

/*------------------------- Navigation bar -------------------------*/
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

/*------------------------- Tablets -------------------------*/


/*------------------------- Home Page Section Two -------------------------*/
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

/*------------------------- Info Page Section One -------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    // Set the specific media query for the screen size range
    const mediaQuery = window.matchMedia('(min-device-width: 768px) and (max-device-width: 1024px)');

    const handleMediaChange = (e) => {
        const hoursTableDiv = document.querySelector('.col-4.hoursTable'); 
        const spacerDiv = document.querySelector('.col-2.spacer');
        const insurance1Div = document.querySelector('.col-3.InsuranceAcc, .col-4.InsuranceAcc'); 
        const insurance2Div = document.querySelector('.col-3.InsuranceSTB, .col-4.InsuranceSTB'); 

        if (e.matches) { // If the screen matches the specific media query
            // Remove the spacer div
            spacerDiv?.remove();

            // Change the class names of the Insurance divs to 'col-4'
            insurance1Div?.classList.replace('col-3', 'col-4');
            insurance2Div?.classList.replace('col-3', 'col-4');
        } else { // Revert changes for screens outside the media query
            if (!document.querySelector('.col-2.spacer')) {
                // Recreate the spacer div
                const parentElement = hoursTableDiv.parentNode;

                // Ensure the spacer is added between the hoursTableDiv and the insurance1Div
                const spacerClone = document.createElement('div');
                spacerClone.className = 'col-2 spacer';
                parentElement.insertBefore(spacerClone, insurance1Div);
            }

            // Revert the class names of the Insurance divs to 'col-3'
            insurance1Div?.classList.replace('col-4', 'col-3');
            insurance2Div?.classList.replace('col-4', 'col-3');
        }
    };

    // Attach the handler function to the media query
    mediaQuery.addEventListener('change', handleMediaChange);

    // Call the handler initially to set up the page correctly
    handleMediaChange(mediaQuery);
});


/*------------------------- Phones  -------------------------*/

/*------------------------- Home Page Section Two -------------------------*/
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

/*------------------------- Info Page Section One -------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    // Set the specific media query
    const mediaQuery = window.matchMedia('(min-device-width: 320px) and (max-device-width: 480px)');

    const handleMediaChange = (e) => {
        const hoursTableDiv = document.querySelector('.col-4.hoursTable, .col-12.hoursTable'); 
        const spacerDiv = document.querySelector('.col-2.spacer');
        const insurance1Div = document.querySelector('.col-3.InsuranceAcc, .col-12.InsuranceAcc'); 
        const insurance2Div = document.querySelector('.col-3.InsuranceSTB, .col-12.InsuranceSTB'); 

        if (e.matches) { // If the screen matches the specific media query
            // Remove the spacer div
            spacerDiv?.remove();

            // Change the class names of the divs to 'col-12'
            hoursTableDiv?.classList.replace('col-4', 'col-12');
            insurance1Div?.classList.replace('col-3', 'col-12');
            insurance2Div?.classList.replace('col-3', 'col-12');
        } else { // Revert changes for screens outside the media query
            // Ensure the spacer is added back if it doesn't exist
            if (!document.querySelector('.col-2.spacer')) {
                const parentElement = hoursTableDiv?.parentNode;
                if (parentElement && insurance1Div) {
                    const spacerClone = document.createElement('div');
                    spacerClone.className = 'col-2 spacer';
                    parentElement.insertBefore(spacerClone, insurance1Div);
                }
            }

            // Revert the class names of the divs to original
            hoursTableDiv?.classList.replace('col-12', 'col-4');
            insurance1Div?.classList.replace('col-12', 'col-3');
            insurance2Div?.classList.replace('col-12', 'col-3');
        }
    };

    // Attach the handler function to the media query
    mediaQuery.addEventListener('change', handleMediaChange);

    // Call the handler initially to set up the page correctly
    handleMediaChange(mediaQuery);
});

/*------------------------- Info Page Section Two -------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    // Set the specific media query
    const mediaQuery = window.matchMedia('(min-device-width: 320px) and (max-device-width: 480px)');

    const handleMediaChange = (e) => {
        const service = document.querySelector('.col-6.Service, .col-12.Service'); 
        const treatment = document.querySelector('.col-6.Treatment, .col-12.Treatment'); 

        if (e.matches) { // If the screen matches the specific media query

            // Change the class names of the divs to 'col-12'
            service?.classList.replace('col-6', 'col-12');
            treatment?.classList.replace('col-6', 'col-12');

        } else { // Revert changes for screens outside the media query

            // Revert the class names of the divs to original
            service?.classList.replace('col-12', 'col-6');
            treatment?.classList.replace('col-12', 'col-6');
        }
    };

    // Attach the handler function to the media query
    mediaQuery.addEventListener('change', handleMediaChange);

    // Call the handler initially to set up the page correctly
    handleMediaChange(mediaQuery);
});