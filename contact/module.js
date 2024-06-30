document.addEventListener('DOMContentLoaded', () => {
    switchContact('sns');
});

function switchContact(module) {
    const tabs = document.querySelectorAll('.tab');
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
            content.style.display = 'flex';
        } else {
            content.classList.remove('active');
            content.style.display = 'none';
        }
    });
}
