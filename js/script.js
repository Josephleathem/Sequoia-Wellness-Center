/*  
        Scripts for Sequoia Wellness Center
            Author: Joseph Leathem Jr
            Filename: script2.js 
    */

/* ************************* Computer ************************* */

document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayIndex = new Date().getDay(); // Get current day (0 = Sunday, 6 = Saturday)

    // Find the table and rows
    const tableRows = document.querySelectorAll(".hoursTable table tbody tr");

    // Loop through rows and match the day
    tableRows.forEach((row) => {
        const dayCell = row.querySelector("th");
        if (dayCell && dayCell.textContent.trim() === daysOfWeek[currentDayIndex]) {
            row.classList.add("highlight"); // Add a class for the current day
        }
    });
});

/* ************************* Tablets ************************* */

/* ********** Home Page Section Two ********** */

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

/* ********** Info Page Section One ********** */

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

/* ********** Providers Page providers Section ********** */

document.addEventListener('DOMContentLoaded', () => {
    // Set the specific media query
    const mediaQuery = window.matchMedia('(min-device-width: 768px) and (max-device-width: 1024px)');

    const handleMediaChange = (e) => {
        const providers = document.querySelectorAll('.provider'); // Select all .provider divs

        providers.forEach(provider => {
            if (e.matches) { // If the screen matches the specific media query
                // Change the class names of the provider divs to 'col-3'
                provider.classList.replace('col-4', 'col-5');
            } else { // Revert changes for screens outside the media query
                // Revert the class names of the provider divs to original
                provider.classList.replace('col-5', 'col-4');
            }
        });
    };

    // Attach the handler function to the media query
    mediaQuery.addEventListener('change', handleMediaChange);

    // Call the handler initially to set up the page correctly
    handleMediaChange(mediaQuery);
});

/* ************************* Phones ************************* */

/* ********** Navigation bar ********** */

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

/* ********** Footer ********** */

document.addEventListener('DOMContentLoaded', () => {
    // Define the media query for phones
    const mediaQuery = window.matchMedia('(max-width: 480px)');

    const updateFooterForPhones = (e) => {
        const address = document.querySelector('footer address');
        if (!address) return; // Exit if no address element exists

        if (e.matches) {
            // For phones: Add <br> tags to the footer content
            address.innerHTML = `
                <span itemprop="name">Sequoia Wellness</span> | 
                Phone: <a href="tel:+14198138009" itemprop="telephone">419-813-8009</a><br>
                Email: <a href="mailto:Sequoiawellness@outlook.com" itemprop="email">Sequoiawellness@outlook.com</a>
            `;
        } else {
            // For non-phones: Restore the original inline footer content
            address.innerHTML = `
                <span itemprop="name">Sequoia Wellness</span> | 
                Phone: <a href="tel:+14198138009" itemprop="telephone">419-813-8009</a> | 
                Email: <a href="mailto:Sequoiawellness@outlook.com" itemprop="email">Sequoiawellness@outlook.com</a>
            `;
        }
    };

    // Listen for changes in the media query
    mediaQuery.addEventListener('change', updateFooterForPhones);

    // Run the function initially to apply the correct format on load
    updateFooterForPhones(mediaQuery);
});


/* ********** Home Page Section Two ********** */

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

/* ********** Info Page Section One ********** */

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

/* ********** Info Page Section Two ********** */

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

/* ********** Providers Page providers Section ********** */

document.addEventListener('DOMContentLoaded', () => {
    // Set the specific media query
    const mediaQuery = window.matchMedia('(min-device-width: 320px) and (max-device-width: 480px)');

    const handleMediaChange = (e) => {
        const providers = document.querySelectorAll('.provider'); // Select all .provider divs

        providers.forEach(provider => {
            if (e.matches) { // If the screen matches the specific media query
                // Change the class names of the provider divs to 'col-3'
                provider.classList.replace('col-4', 'col-12');
            } else { // Revert changes for screens outside the media query
                // Revert the class names of the provider divs to original
                provider.classList.replace('col-12', 'col-4');
            }
        });
    };

    // Attach the handler function to the media query
    mediaQuery.addEventListener('change', handleMediaChange);

    // Call the handler initially to set up the page correctly
    handleMediaChange(mediaQuery);
});

/* ********** 404 page not found ********** */
// Function to handle the media query check and remove/re-add the <br> element
function handleMediaQuery() {
    const spacerElements = document.querySelectorAll('br.spacer'); // Select all <br class="spacer" /> elements

    if (window.matchMedia('(min-device-width: 320px) and (max-device-width: 480px)').matches) {
        // If the device width is between 320px and 480px, remove the spacer elements
        spacerElements.forEach(spacer => {
            spacer.style.display = 'none'; // Optionally hide the <br> element
        });
    } else {
        // If outside the media query, ensure the <br> elements are visible again
        spacerElements.forEach(spacer => {
            spacer.style.display = 'block'; // Revert to default block display
        });
    }
}

// Initialize the function on load
window.addEventListener('load', handleMediaQuery);

// Add event listener to check when window size changes
window.addEventListener('resize', handleMediaQuery);
