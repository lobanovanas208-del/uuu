// Плавная прокрутка для навигации
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Закрываем меню на мобильных устройствах
            const nav = document.querySelector('.main-nav');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                document.getElementById('menuToggle').innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Плавное появление элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Наблюдаем за секциями и элементами
document.querySelectorAll('.section, .course-card, .logo-item').forEach(element => {
    observer.observe(element);
});

// Анимация для статистики
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Запуск анимации счетчиков при скролле
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = document.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const text = stat.textContent;
                const target = parseInt(text);
                if (!isNaN(target)) {
                    stat.textContent = '0';
                    animateCounter(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const missionSection = document.querySelector('.mission');
if (missionSection) {
    statsObserver.observe(missionSection);
}

// Видеоплеер
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
        this.innerHTML = `
            <iframe width="100%" height="400" src="https://rutube.ru/embed/c7758adf0e80ee3649c41076754349ef/" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
        `;
    });
}

// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем класс для плавного появления контента
    document.body.classList.add('loaded');
    
    // Инициализация текущего года в футере
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
    
    // Параллакс эффект для баннера
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-banner');
        if (hero && scrolled < hero.offsetHeight) {
            const rate = scrolled * 0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
});

// Добавляем глобальные стили для анимации
const style = document.createElement('style');
style.textContent = `
    body.loaded .section {
        animation: fadeInUp 0.8s ease forwards;
        opacity: 0;
    }
    
    /* Задержки для разных секций */
    body.loaded .mission { animation-delay: 0.1s; }
    body.loaded .partners { animation-delay: 0.2s; }
    body.loaded .courses-section { animation-delay: 0.3s; }
    body.loaded .logos-section { animation-delay: 0.4s; }
    body.loaded .project { animation-delay: 0.5s; }
    body.loaded .gallery { animation-delay: 0.6s; }
    body.loaded .plans { animation-delay: 0.7s; }
    body.loaded .resources { animation-delay: 0.8s; }
`;
document.head.appendChild(style);
// Плавная прокрутка для навигации
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Закрываем меню на мобильных устройствах
            const nav = document.querySelector('.main-nav');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                document.getElementById('menuToggle').innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Плавное появление элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Наблюдаем за элементами
document.querySelectorAll('.course-card, .logo-item, .gallery-item').forEach(element => {
    observer.observe(element);
});

// Видеоплеер
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
        this.innerHTML = `
            <iframe width="100%" height="400" src="https://rutube.ru/embed/c7758adf0e80ee3649c41076754349ef/" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
        `;
    });
}

// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация текущего года в футере
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
    
    // Параллакс эффект для баннера
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-banner');
        if (hero && scrolled < hero.offsetHeight) {
            const rate = scrolled * 0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Предзагрузка изображений галереи
    const galleryImages = [
        'https://github.com/lobanovanas208-del/FDFFSFD/blob/main/photo_2025-12-28_21-40-34.jpg?raw=true',
        'https://github.com/lobanovanas208-del/FDFFSFD/blob/main/photo_2025-12-28_21-40-41.jpg?raw=true',
        'https://github.com/lobanovanas208-del/FDFFSFD/blob/main/photo_2025-12-28_21-40-45.jpg?raw=true'
    ];
    
    galleryImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Добавляем стили для плавного появления
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    body.loaded .section {
        animation: fadeInUp 0.8s ease forwards;
        opacity: 0;
    }
`;
document.head.appendChild(animationStyles);

// Добавляем класс loaded после загрузки страницы
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});