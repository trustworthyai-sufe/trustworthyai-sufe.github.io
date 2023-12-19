function switchLanguage() {
    var currentLanguage = localStorage.getItem('language') || 'english';
    var newLanguage = currentLanguage === 'english' ? 'chinese' : 'english';
    localStorage.setItem('language', newLanguage);

    var elementsEn = document.querySelectorAll('[data-lang="en"]');
    var elementsZh = document.querySelectorAll('[data-lang="zh"]');

    elementsEn.forEach(function(el) {
        el.style.display = (newLanguage === 'chinese') ? 'none' : '';
    });

    elementsZh.forEach(function(el) {
        el.style.display = (newLanguage === 'chinese') ? '' : 'none';
    });
}

// 当页面加载时，应用存储的语言偏好
document.addEventListener('DOMContentLoaded', function() {
    var storedLanguage = localStorage.getItem('language') || 'english';
    switchLanguageTo(storedLanguage);
});

function switchLanguageTo(language) {
    var elementsEn = document.querySelectorAll('[data-lang="en"]');
    var elementsZh = document.querySelectorAll('[data-lang="zh"]');

    elementsEn.forEach(function(el) {
        el.style.display = (language === 'chinese') ? 'none' : '';
    });

    elementsZh.forEach(function(el) {
        el.style.display = (language === 'chinese') ? '' : 'none';
    });
}
