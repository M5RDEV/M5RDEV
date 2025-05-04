// بيانات المشاريع
const projectsData = {
    programs: [
        {
            title: "موسوعة المسلم",
            description: "تطبيق إسلامي يعمل على نظام التشغيل ويندوز سهل الإستخدام و جامع للكثير من الميزات",
            image: "img/my-programs/muslim.png",
            url: "https://m5rdev.github.io/MuslimEncyclopedia/",
            keywords: "برنامج إسلامي موسوعة المسلم ويندوز قرآن أذكار"
        },
        {
            title: "أداة تحميل القراء",
            description: "أداة لتحميل مجموعة من القراء أداة مدمجة مع تطبيق موسوعة المسلم و يمكن تحميلها بمفردها",
            image: "img/my-programs/Radio.png",
            url: "https://drive.usercontent.google.com/download?id=1EweoMp-fCEIGjMATIRmRfQDrJuvDLkB1&export=download&authuser=0&confirm=t&uuid=799940cf-5b96-4964-ab03-f2a498696ebc&at=APvzH3pqvO-PCmbQ07KCCpMXKSWr%3A1735507851879",
            keywords: "أداة تحميل قراء قرآن إسلامي"
        },
        {
            title: "مسبحة الكترونية",
            description: "تطبيق للأندرويد لمساعدتك في عدد رقم الأذكار والتسابيح",
            image: "img/my-programs/Sib7a.png",
            url: "https://www.mediafire.com/file/jp8zvk8xpkd8rxc/%25D9%2585%25D8%25B3%25D8%25A8%25D8%25AD%25D8%25A9_%25D8%25A7%25D9%2584%25D9%2583%25D8%25AA%25D8%25B1%25D9%2588%25D9%2586%25D9%258A%25D8%25A9.apk/file",
            keywords: "مسبحة أذكار تسبيح أندرويد"
        },
        {
            title: "حاسبة النوم",
            description: "تطبيق للكمبيوتر لمساعدتك في تحديد مواعيد الاستيقاظ بناء علي دورات النوم",
            image: "img/my-programs/sleepcalc.png",
            url: "https://www.mediafire.com/file/k8qruo8k8zdp8p9/Sleep_Calculator.exe/file",
            keywords: "حاسبة النوم دورات نوم"
        },
        {
            title: "مترجم نصوص",
            description: "تطبيق للكمبيوتر ترجمة لغات متعدد خفيف و يتعرف علي اللغات تلقائي اذا لم تحدد لغة",
            image: "img/my-programs/TranslateText.png",
            url: "https://www.mediafire.com/file/fq6hpdnrf9scnlb/TranslateText.exe/file",
            keywords: "مترجم نصوص لغات ترجمة"
        },
        {
            title: "آلة حاسبة للاندرويد",
            description: "تطبيق آلة حاسبة بسيطة للأندرويد بلغة فلتر",
            image: "img/source-code/calculator.png",
            url: "https://www.mediafire.com/file/f7tk2t1muxltdws/%255BFlutter%255DCalcutator.apk/file",
            keywords: "آلة حاسبة اندرويد فلاتر"
        }
    ],
    games: [
        {
            title: "Flipy Robot",
            description: "أول لعبة ليا من محرك جودوت",
            image: "img/my-games/Flipy Robot.png",
            url: "https://m5rdev.itch.io/flipy-robot",
            keywords: "روبوت فليبي لعبة جودوت"
        },
        {
            title: "ورقة حجر مقص",
            description: "لعبة تجريبة بدون محاكي [ويندوز فورم بلغة سي شارب]",
            image: "img/my-games/rock paper scissors .png",
            url: "https://m5rdev.itch.io/rock-paper-scissors",
            keywords: "لعبة حجر ورقة مقص"
        },
        {
            title: "luminaze-demo",
            description: "لعبة تحاول فيها الا تقع في اي فخ حتى تصل الى نقطة النهاية (لعبة صعبه)",
            image: "img/my-games/luminaze-demo.png",
            url: "https://m5rdev.itch.io/luminaze-demo",
            keywords: "لعبة luminaze فخاخ"
        }
    ],
    sourceCode: [
        {
            title: "سورس حاسبة النوم",
            description: "سورس كود برنامج حاسبة النوم بلغة سي شارب",
            image: "img/my-programs/sleepcalc.png",
            url: "https://github.com/m5rdev/SleepCalculator",
            keywords: "سورس كود حاسبة نوم"
        },
        {
            title: "سورس لعبة Flipy Robot",
            description: "سورس كود لعبة Flipy Robot بلغة GDScript",
            image: "img/my-games/Flipy Robot.png",
            url: "https://github.com/m5rdev/Flipy-Robot",
            keywords: "سورس كود لعبة جودوت"
        },
        {
            title: "آلة حاسبة",
            description: "سورس كود لآلة حاسبة بسيطة بلغة السي شارب C#",
            image: "img/source-code/calculator.png",
            url: "https://www.mediafire.com/file/od2fldnwsxmlsn8/Calculator.rar/file",
            keywords: "سورس كود آلة حاسبة"
        },
        {
            title: "ورقه حجر مقص",
            description: "سورس كود لعبة حجرة ورقة مقص [ويندوز فورم بلغة سي شارب]",
            image: "img/my-games/rock paper scissors .png",
            url: "https://www.mediafire.com/file/bupecbz58hssywy/Rock_Game.rar/file",
            keywords: "سورس كود لعبة حجر ورقة مقص"
        },
        {
            title: "موقع موسوعة المسلم",
            description: "سورس كود موقع موسوعة المسلم [موقع مفتوح المصدر تم التعديل عليه بعض التعديلات]",
            image: "img/my-programs/muslim.png",
            url: "https://www.mediafire.com/file/qzucwc0mh91lu0i/MuslimEncyclopedia-main.zip/file",
            keywords: "سورس كود موقع موسوعة المسلم"
        },
        {
            title: "مترجم نصوص",
            description: "سورس كود لتطبيق ترجمة لغات متعدد للكمبيوتر بلغة سي شارب دوت نت ويندوز فورم",
            image: "img/my-programs/TranslateText.png",
            url: "https://www.mediafire.com/file/7klavtsdx52yagt/TranslateText.rar/file",
            keywords: "سورس كود مترجم نصوص"
        },
        {
            title: "آلة حاسبة للاندرويد",
            description: "سورس كود تطبيق آلة حاسبة بسيطة للأندرويد بلغة فلتر",
            image: "img/source-code/calculator.png",
            url: "https://www.mediafire.com/file/dca0vobk6lqgyra/Flutter+calculator.rar/file",
            keywords: "سورس كود آلة حاسبة اندرويد"
        },
        {
            title: "محرر أكواد أونلاين",
            description: "سورس كود موقع محرر أكواد أونلاين لمعاينة أكواد html,css,js",
            image: "img/source-code/programming_icon.png",
            url: "https://www.mediafire.com/file/gpnv19ebkzurr0z/Html-Code-viewer.zip/file",
            keywords: "سورس كود محرر أكواد"
        },
        {
            title: "مسبحة الكترونية أونلاين",
            description: "سورس كود موقع مسبحة أونلاين html,css,js",
            image: "img/my-programs/Sib7a.png",
            url: "https://www.mediafire.com/file/5lme3bqw4y130n4/%25D9%2585%25D8%25B3%25D8%25A8%25D8%25AD%25D8%25A9_%25D8%25A5%25D9%2584%25D9%2583%25D8%25AA%25D8%25B1%25D9%2588%25D9%2586%25D9%258A%25D8%25A9_%25D8%25A3%25D9%2588%25D9%2586%25D9%2584%25D8%25A7%25D9%258A%25D9%2586.zip/file",
            keywords: "سورس كود مسبحة الكترونية"
        }
    ]
};

// عرض المشاريع باستخدام loops
function renderProjects() {
    // عرض البرامج
    const programsList = document.getElementById('programs-list');
    projectsData.programs.forEach(project => {
        programsList.innerHTML += `
                    <li class="project-card animate_animated animate_fadeIn"
                        data-keywords="${project.keywords}"
                        onclick="openProjectModal(this)">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <h4 class="project-title">${project.title}</h4>
                        <h6 class="project-description">${project.description}</h6>
                        <a href="${project.url}" class="project-link" target="_blank"
                            data-url="${project.url}" aria-label="تحميل ${project.title}">
                            <i class="fa-solid fa-circle-down"></i>
                        </a>
                    </li>
                `;
    });

    // عرض الألعاب
    const gamesList = document.getElementById('games-list');
    projectsData.games.forEach(project => {
        gamesList.innerHTML += `
                    <li class="project-card animate_animated animate_fadeIn"
                        data-keywords="${project.keywords}"
                        onclick="openProjectModal(this)">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <h4 class="project-title">${project.title}</h4>
                        <h6 class="project-description">${project.description}</h6>
                        <a href="${project.url}" class="project-link" target="_blank"
                            data-url="${project.url}" aria-label="تحميل ${project.title}">
                            <i class="fa-solid fa-circle-down"></i>
                        </a>
                    </li>
                `;
    });

    // عرض سورس كود
    const sourceCodeList = document.getElementById('source-code-list');
    projectsData.sourceCode.forEach(project => {
        sourceCodeList.innerHTML += `
                    <li class="project-card animate_animated animate_fadeIn"
                        data-keywords="${project.keywords}"
                        onclick="openProjectModal(this)">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <h4 class="project-title">${project.title}</h4>
                        <h6 class="project-description">${project.description}</h6>
                        <a href="${project.url}" class="project-link" target="_blank"
                            data-url="${project.url}" aria-label="تحميل ${project.title}">
                            <i class="fa-solid fa-circle-down"></i>
                        </a>
                    </li>
                `;
    });
}

// Loading Screen Animation
function updateProgress() {
    const loadingScreen = document.getElementById('loadingScreen');
    const percentageText = document.getElementById('percentage');
    const statusText = document.getElementById('status-text');
    let count = 0;
    const statusMessages = ["مطور العاب", "مبرمج مواقع", "مبرمج تطبيقات", ""];

    const interval = setInterval(() => {
        count++;
        percentageText.textContent = count + '%';

        if (count === 30) statusText.textContent = statusMessages[0];
        if (count === 50) statusText.textContent = statusMessages[1];
        if (count === 70) statusText.textContent = statusMessages[2];

        if (count === 100) {
            statusText.textContent = statusMessages[3];
            clearInterval(interval);

            // Add fade out animation
            loadingScreen.style.opacity = '0';

            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                renderProjects(); // عرض المشاريع بعد انتهاء التحميل
            }, 500);
        }
    }, 20);
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Popup Message
function showPopup() {
    const popup = document.getElementById('popupMessage');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000);
}

// Project Modal
function openProjectModal(element) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDownloadLink = document.getElementById('modalDownloadLink');

    modalImage.src = element.querySelector('img').src;
    modalTitle.textContent = element.querySelector('h4').textContent;
    modalDescription.textContent = element.querySelector('h6').textContent;
    modalDownloadLink.href = element.querySelector('a').getAttribute('data-url');

    modal.style.display = 'block';
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
const projectItems = document.querySelectorAll('.project-card');
const projectCategories = document.querySelectorAll('.projects-grid');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let hasResults = false;

    projectCategories.forEach(category => {
        let categoryHasResults = false;

        category.querySelectorAll('.project-card').forEach(item => {
            const keywords = item.getAttribute('data-keywords').toLowerCase();
            const title = item.querySelector('h4').textContent.toLowerCase();
            const description = item.querySelector('h6').textContent.toLowerCase();

            if (keywords.includes(searchTerm) || title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'block';
                categoryHasResults = true;
            } else {
                item.style.display = 'none';
            }
        });

        // Show/hide "No results" message
        const noResults = category.querySelector('.no-results') || document.createElement('div');
        if (!categoryHasResults && searchTerm !== '') {
            if (!category.querySelector('.no-results')) {
                noResults.className = 'no-results';
                noResults.textContent = 'لا توجد نتائج مطابقة للبحث';
                category.appendChild(noResults);
            }
        } else {
            if (category.querySelector('.no-results')) {
                category.removeChild(category.querySelector('.no-results'));
            }
        }

        if (categoryHasResults) hasResults = true;
    });

    // Scroll to first result if there are matches
    if (hasResults && searchTerm !== '') {
        const firstVisibleItem = document.querySelector('.project-card[style="display: block;"]');
        if (firstVisibleItem) {
            firstVisibleItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Bubbles Background Animation
function createBubbles() {
    const bubblesContainer = document.getElementById('bubbles');
    const bubbleCount = 20;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random() * 60 + 20;
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}%`;
        bubble.style.setProperty('--duration', `${duration}s`);
        bubble.style.animationDelay = `${delay}s`;

        bubblesContainer.appendChild(bubble);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    createBubbles();
});