const CONTACT_MOBILE_BP = 959;

document.addEventListener('DOMContentLoaded', () => {
    switchContact('sns');
    window.addEventListener('resize', placeContactPanels);
});

// On mobile the detail panel sits directly under the tab that was clicked
// (accordion); on desktop it lives back in the right-hand pane.
function placeContactPanels() {
    const right = document.querySelector('.contact-right');
    if (!right) return;
    const isMobile = window.innerWidth <= CONTACT_MOBILE_BP;

    document.querySelectorAll('.module').forEach(tab => {
        const id = tab.id.replace('tab-', '');
        const panel = document.getElementById('content-' + id);
        if (!panel) return;
        if (isMobile) {
            tab.insertAdjacentElement('afterend', panel); // under its tab
        } else {
            right.appendChild(panel);                      // back in order
        }
    });
}

function switchContact(module) {
    const tabs = document.querySelectorAll('.module');
    const contents = document.querySelectorAll('.content-contact');

    tabs.forEach(tab => {
        if (tab.id === `tab-${module}`) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    contents.forEach(content => {
        if (content.id === `content-${module}`) {
            content.classList.add('active');
            content.style.visibility = 'visible';
            content.style.position = 'relative';
        } else {
            content.classList.remove('active');
            content.style.visibility = 'hidden';
            content.style.position = 'absolute';
        }
    });

    placeContactPanels();
}
