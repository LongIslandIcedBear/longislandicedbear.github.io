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
        applyCheckboxListener('en');
    } else if (language === 'zh') {
        chineseTab.classList.add('active');
        englishTab.classList.remove('active');
        chineseText.style.display = 'block';
        englishText.style.display = 'none';
        applyCheckboxListener('zh');
    }
}

// Function to apply the checkbox listener based on the selected language
function applyCheckboxListener(language) {
    let termsCheckbox, agreeButton, declineButton;

    if (language === 'en') {
        termsCheckbox = document.getElementById('termsCheckboxEnglish');
        agreeButton = document.getElementById('agreeButtonEnglish');
        declineButton = document.getElementById('declineButtonEnglish');
    } else if (language === 'zh') {
        termsCheckbox = document.getElementById('termsCheckboxChinese');
        agreeButton = document.getElementById('agreeButtonChinese');
        declineButton = document.getElementById('declineButtonChinese');
    }

    if (termsCheckbox) {
        termsCheckbox.addEventListener('change', () => {
            if (termsCheckbox.checked) {
                agreeButton.disabled = false;
                agreeButton.classList.add('enabled');
            } else {
                agreeButton.disabled = true;
                agreeButton.classList.remove('enabled');
            }
        });
    }

    if (agreeButton) {
        agreeButton.addEventListener('click', () => {
            if (termsCheckbox.checked) {
                window.location.href = '/vsqxnust'; // Change this to the actual download page URL
            }
        });
    }

    if (declineButton) {
        declineButton.addEventListener('click', () => {
            window.location.href = '/'; // Change this to the actual homepage URL
        });
    }
}


// Set the default language to English on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en');
});
