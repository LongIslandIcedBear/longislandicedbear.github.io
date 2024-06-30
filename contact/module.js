document.addEventListener('DOMContentLoaded', () => {
    switchContact('sns');
});

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
}