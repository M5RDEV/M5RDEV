// تأثير الكتابة التلقائية
function typeWriter() {
    const texts = [
        "I'm an Electronic Engineer",
        "I'm a Programmer & Developer",
        "I'm a Video Editor",
        "I'm a Creative Designer"
    ];

    const typingText = document.getElementById('typing-text');
    const cursor = document.querySelector('.typing-cursor');

    // إعداد القيم الأولية
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    // ضبط السرعات
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetweenTexts = 2000;
    const pauseBeforeStart = 1000;

    function type() {
        // إذا كان المؤشر مخفيًا (أثناء الإنتظار بين النصوص)
        if (isPaused) {
            cursor.style.visibility = 'hidden';
            return;
        }

        cursor.style.visibility = 'visible';
        const currentText = texts[textIndex];

        if (isDeleting) {
            // حالة المسح
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // حالة الكتابة
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // نهاية الكتابة، انتظر ثم ابدأ المسح
            isDeleting = true;
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                type();
            }, pauseBetweenTexts);
        } else if (isDeleting && charIndex === 0) {
            // نهاية المسح، انتقل للنص التالي
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                type();
            }, 500);
        } else {
            // استمر في الكتابة أو المسح
            const speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(type, speed);
        }
    }

    // بدء التأثير بعد تأخير قصير
    setTimeout(type, pauseBeforeStart);
}
// استدعاء الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    typeWriter(); // أضف هذا السطر
});

// بيانات المشاريع
const projectsData = {
    programs: [
        {
            title: "موسوعة المسلم",
            description: "تطبيق إسلامي يعمل على نظام التشغيل ويندوز سهل الإستخدام و جامع للكثير من الميزات",
            image: "img/my-programs/muslim.png",
            url: "https://m5rdev.github.io/MuslimEncyclopedia/",
            keywords: "برنامج إسلامي موسوعة المسلم ويندوز قرآن أذكار",
        },
        {
            title: "أداة تحميل القراء",
            description: "أداة لتحميل مجموعة من القراء أداة مدمجة مع تطبيق موسوعة المسلم و يمكن تحميلها بمفردها",
            image: "img/my-programs/Radio.png",
            url: "https://www.mediafire.com/file/z89vdti050tu1tm/تحميل+قراء.rar/file",
            keywords: "أداة تحميل قراء قرآن إسلامي"
        },
        {
            title: "مسبحة الكترونية 📿",
            description: "تطبيق للأندرويد لمساعدتك في عدد رقم الأذكار والتسابيح",
            image: "img/my-programs/Sib7a.png",
            url: "https://www.mediafire.com/file/jp8zvk8xpkd8rxc/%25D9%2585%25D8%25B3%25D8%25A8%25D8%25AD%25D8%25A9_%25D8%25A7%25D9%2584%25D9%2583%25D8%25AA%25D8%25B1%25D9%2588%25D9%2586%25D9%258A%25D8%25A9.apk/file",
            keywords: "مسبحة أذكار تسبيح أندرويد"
        },
        {
            title: "حاسبة مواقيت النوم",
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
            keywords: "مترجم نصوص لغات ترجمة",
        },
        {
            title: "آلة حاسبة للاندرويد",
            description: "تطبيق آلة حاسبة بسيطة للأندرويد بلغة فلتر",
            image: "img/source-code/calculator.png",
            url: "https://www.mediafire.com/file/f7tk2t1muxltdws/%255BFlutter%255DCalcutator.apk/file",
            keywords: "آلة حاسبة اندرويد فلاتر",
        },
        {
            title: "تقيم الصور [ترتيب الصور]",
            description: "تقيم او ترتيب الصور بالافضل rate pic",
            image: "img/my-programs/pic-rate.png",
            url: "https://www.mediafire.com/file/c361bn2kd0nooyf/Pic_Rate.rar/file",
            keywords: "تقيم الصور و ترتيب الصور",
        },
        {
            title: "Speech text [ناطق النصوص]",
            description: "تطبيق يقوم بنطق النصوص و التحكم في سرعة القراءة بلغة C#",
            image: "img/my-programs/Speech.png",
            url: "https://www.mediafire.com/file/4w0ob9f70wag8qn/Speech_text.rar/file",
            keywords: "ناطق النصوص سرعة القراءة C#",
        }
    ],
    games: [
        {
            title: "Flipy Robot",
            description: "أول لعبة ليا من محرك جودوت",
            image: "img/my-games/Flipy Robot.png",
            url: "https://m5rdev.itch.io/flipy-robot",
            keywords: "روبوت فليبي لعبة جودوت",
        },
        {
            title: "ورقة حجر مقص",
            description: "لعبة تجريبة بدون محاكي [ويندوز فورم بلغة سي شارب]",
            image: "img/my-games/rock paper scissors .png",
            url: "https://m5rdev.itch.io/rock-paper-scissors",
            keywords: "لعبة حجر ورقة مقص",
        },
        {
            title: "luminaze-demo",
            description: "لعبة تحاول فيها الا تقع في اي فخ حتى تصل الى نقطة النهاية (لعبة صعبه)",
            image: "img/my-games/luminaze-demo.png",
            url: "https://m5rdev.itch.io/luminaze-demo",
            keywords: "لعبة luminaze فخاخ"
        }
    ],  
    websites: [
        {
            title: "MuslimEncyclopedia-online",
            description: "موقع موسوعة المسلم الإلكترونية - نسخة الويب",
            image: "img/my-programs/muslim.png",
            url: "https://m5rdev.github.io/MuslimEncyclopedia-online/",
            keywords: "موقع إسلامي موسوعة المسلم ويب قرآن أذكار",
        },
        {
            title: "ColorMate",
            description: "أداة لاختيار وتنسيق الألوان للمصممين والمطورين",
            image: "img/my-websites/ColorMate-code.png",
            url: "https://m5rdev.github.io/ColorMate/",
            keywords: "ألوان تنسيق مصمم مطور ويب"
        },
        {
            title: "VoiceToText-TextToVoice",
            description: "أداة تحويل الصوت إلى نص والنص إلى صوت مباشرة في المتصفح",
            image: "img/my-websites/text-to-voice-code.png",
            url: "https://m5rdev.github.io/VoiceToText-TextToVoice/",
            keywords: "صوت نص تحويل ويب"
        },
        {
            title: "Html-Code-viewer",
            description: "محرر أكواد أونلاين لمعاينة أكواد HTML, CSS, JavaScript",
            image: "img/my-websites/programming_icon.png",
            url: "https://m5rdev.github.io/Html-Code-viewer/",
            keywords: "محرر أكواد ويب html css javascript",
        },
        {
            title: "مسبحة اونلاين 📿",
            description: "مسبحة الكترونية أونلاين HTML, CSS, JavaScript",
            image: "img/my-programs/Sib7a.png",
            url: "https://m5rdev.github.io/ECounter/",
            keywords: "محرر أكواد ويب html css javascript",
        },
        {
            title: "المرشد السياحي العربي",
            description: "منصة عربية شاملة تحتوي على كل المعلومات السياحية عن الدول العربية و بعض المعلومات",
            image: "img/my-websites/tour guide.png",
            url: "https://m5rdev.github.io/ar-tour-guide/",
            keywords: "المرشد السياحي العربي : منصة عربية شاملة تحتوي على كل المعلومات السياحية عن الدول العربية و تحديث أسعار العملات مباشرة من مصادر موثوقة",
        }
    ],
    sourceCode: [
        {
            title: "سورس Crazylogin",
            description: "سورس كود برنامج login و register بسيطة ومسلية بلغة سي شارب بلغة سي شارب C#",
            image: "img/my-programs/crazylogin-code.png",
            url: "https://drive.google.com/file/d/1pHAvSQ1Hqbw158_JBrGpMgGoRPH9B0Wl/view?usp=sharing",
            keywords: "سورس كود CrazyLogin"
        },
        {
            title: "سورس Flipy Robot",
            description: "سورس كود لعبة Flipy Robot بلغة GDScript",
            image: "img/my-games/Flipy Robot.png",
            url: "https://github.com/m5rdev/Flipy-Robot",
            keywords: "سورس كود لعبة جودوت"
        },
        {
            title: "سورس آلة حاسبة",
            description: "سورس كود لآلة حاسبة بسيطة بلغة السي شارب C#",
            image: "img/source-code/calculator.png",
            url: "https://www.mediafire.com/file/od2fldnwsxmlsn8/Calculator.rar/file",
            keywords: "سورس كود آلة حاسبة"
        },
        {
            title: "سورس مترجم نصوص",
            description: "سورس كود لتطبيق ترجمة لغات متعدد للكمبيوتر بلغة C# سي شارب دوت نت ويندوز فورم",
            image: "img/my-programs/TranslateText.png",
            url: "https://www.mediafire.com/file/7klavtsdx52yagt/TranslateText.rar/file",
            keywords: "سورس كود مترجم نصوص"
        },
        {
            title: "سورس آلة حاسبة للاندرويد",
            description: "سورس كود تطبيق آلة حاسبة بسيطة للأندرويد بلغة فلتر Flutter",
            image: "img/source-code/calculator.png",
            url: "https://www.mediafire.com/file/dca0vobk6lqgyra/Flutter+calculator.rar/file",
            keywords: "سورس كود آلة حاسبة اندرويد"
        },
        {
            title: "محرر أكواد أونلاين",
            description: "سورس كود موقع محرر أكواد أونلاين لمعاينة أكواد html,css,js",
            image: "img/my-websites/programming_icon.png",
            url: "https://www.mediafire.com/file/gpnv19ebkzurr0z/Html-Code-viewer.zip/file",
            keywords: "سورس كود محرر أكواد"
        },
        {
            title: "سورس المسبحة الاونلاين 📿",
            description: "سورس كود موقع المسبحة الكترونية أونلاين HTML, CSS, JavaScript",
            image: "img/my-programs/Sib7a.png",
            url: "https://www.mediafire.com/file/5lme3bqw4y130n4/%25D9%2585%25D8%25B3%25D8%25A8%25D8%25AD%25D8%25A9_%25D8%25A5%25D9%2584%25D9%2583%25D8%25AA%25D8%25B1%25D9%2588%25D9%2586%25D9%258A%25D8%25A9_%25D8%25A3%25D9%2588%25D9%2586%25D9%2584%25D8%25A7%25D9%258A%25D9%2586.zip/file",
            keywords: "محرر أكواد ويب html css javascript",
        },
        {
            title: "سورس المسبحة لاندرويد 📿",
            description: "سورس كود المسبحة الكترونية لاندرويد بلغة فلتر Flutter",
            image: "img/my-programs/Sib7a.png",
            url: "https://drive.google.com/file/d/1ZCEH5PHUFox8IsZ-3VpXav0imMs7Rdo9/view?usp=drive_link",
            keywords: "محرر أكواد ويب html css javascript",
        },
        {
            title: "سورس تقيم الصور",
            description: "سورس كود تقيم او ترتيب الصور بالافضل لغة C# rate pic",
            image: "img/my-programs/pic-rate.png",
            url: "https://www.mediafire.com/file/y765zxugz1uhd9q/RatePic+Source+code.rar/file",
            keywords: "تقيم الصور و ترتيب الصور",
        },
        ,
        {
            title: "Speech text سورس",
            description: "سورس تطبيق Speech text ناطق النصوص بلغة C#",
            image: "img/my-programs/Speech.png",
            url: "https://www.mediafire.com/file/iin41ow8i3fysm5/Speech+Text.rar/file",
            keywords: "ناطق النصوص سرعة القراءة C#",
        },
        {
            title: "سورس المرشد السياحي",
            description: "منصة عربية شاملة تحتوي على كل المعلومات السياحية عن الدول العربية و بعض المعلومات",
            image: "img/my-websites/tour guide.png",
            url: "https://www.mediafire.com/file/w0nk1euh8kgkymj/index.html/file",
            keywords: "المرشد السياحي العربي : منصة عربية شاملة تحتوي على كل المعلومات السياحية عن الدول العربية و تحديث أسعار العملات مباشرة من مصادر موثوقة",
        },
        {
            title: "سورس الموقع الحالي M5RDEV",
            description: "موقعي الخاص Portfolio MRDEV معلومات عني و اخر مشاريعي البرمجية",
            image: "img/avatar.png",
            url: "https://www.mediafire.com/file/l73g7upf4q37b2g/M5RDEV.rar/file",
            keywords: "موقعي الخاص Portfolio MRDEV معلومات عني و اخر مشاريعي البرمجية",
        },
        {
            title: "سورس موقع موسوعة المسلم",
            description: "تطبيق إسلامي يعمل على نظام التشغيل ويندوز سهل الإستخدام و جامع للكثير من الميزات",
            image: "img/my-programs/muslim.png",
            url: "https://www.mediafire.com/file/qzucwc0mh91lu0i/MuslimEncyclopedia-main.zip/file",
            keywords: "برنامج إسلامي موسوعة المسلم ويندوز قرآن أذكار",
        }
    ],
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
                <div class="project-link" onclick="openProjectModal(this.parentElement, event)"
                    data-url="${project.url}" aria-label="تحميل ${project.title}">
                    <i class="fa-solid fa-circle-down"></i>
                </div>
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
                <div class="project-link" onclick="openProjectModal(this.parentElement, event)"
                    data-url="${project.url}" aria-label="تحميل ${project.title}">
                    <i class="fa-solid fa-circle-down"></i>
                </div>
            </li>
        `;
    });

    // عرض المواقع
    const websitesList = document.getElementById('websites-list');
    projectsData.websites.forEach(project => {
        websitesList.innerHTML += `
             <li class="project-card animate_animated animate_fadeIn"
                 data-keywords="${project.keywords}"
                 onclick="openProjectModal(this)">
                 <img src="${project.image}" alt="${project.title}" class="project-image">
                 <h4 class="project-title">${project.title}</h4>
                 <h6 class="project-description">${project.description}</h6>
                 <div class="project-link" onclick="openProjectModal(this.parentElement, event)"
                     data-url="${project.url}" aria-label="زيارة ${project.title}">
                     <i class="fa-solid fa-globe"></i>
                 </div>
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
                    <div class="project-link" onclick="openProjectModal(this.parentElement, event)"
                        data-url="${project.url}" aria-label="تحميل ${project.title}">
                        <i class="fa-solid fa-circle-down"></i>
                    </div>
                </li>
            `;
    });
}

// Project Modal - النسخة المعدلة
function openProjectModal(element, event = null) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // حفظ موقع التمرير الحالي
    const scrollY = window.scrollY || window.pageYOffset;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('modal-open');

    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDownloadLink = document.getElementById('modalDownloadLink');

    modalImage.src = element.querySelector('img').src;
    modalTitle.textContent = element.querySelector('h4').textContent;
    modalDescription.textContent = element.querySelector('h6').textContent;
    modalDownloadLink.href = element.querySelector('[data-url]').getAttribute('data-url');

    // تحديد نص الزر بناءً على نوع المشروع
    const parentListId = element.closest('ul').id;
    if (parentListId === 'websites-list') {
        modalDownloadLink.textContent = 'تصفح الموقع';
    } else {
        modalDownloadLink.textContent = 'تحميل';
    }

    modal.style.display = 'block';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
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

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
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


