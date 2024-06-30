function switchLanguage(language) {
    const englishTab = document.getElementById('tab-english');
    const chineseTab = document.getElementById('tab-chinese');
    const englishText = document.querySelector('.text-english');
    const chineseText = document.querySelector('.text-chinese');

    if (language === 'en') {
        englishTab.classList.add('active');
        chineseTab.classList.remove('active');
        englishText.style.display = 'block';
        chineseText.style.display = 'none';
    } else if (language === 'zh') {
        chineseTab.classList.add('active');
        englishTab.classList.remove('active');
        chineseText.style.display = 'block';
        englishText.style.display = 'none';
    }
}

// Set the default language to English on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en');
});