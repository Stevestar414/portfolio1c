
const isMobile = window.matchMedia("(max-width: 992px)").matches;

if (!isMobile) {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    const hoverTargets = document.querySelectorAll('.hover-target');

    window.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px'; cursorDot.style.top = e.clientY + 'px';
        cursorOutline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 500, fill: "forwards" });
    });
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => cursorOutline.classList.add('cursor-hovering'));
        target.addEventListener('mouseleave', () => cursorOutline.classList.remove('cursor-hovering'));
    });

    document.querySelectorAll('.spotlight-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    document.querySelectorAll('.magnet-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener('mouseleave', () => btn.style.transform = `translate(0px, 0px)`);
    });

    const tiltCard = document.getElementById('tilt-card');
    document.addEventListener('mousemove', (e) => {
        if (window.scrollY > 800) return; 
        let xAxis = (e.clientX - window.innerWidth / 2) / 20; 
        let yAxis = (window.innerHeight / 2 - e.clientY) / 20; 
        tiltCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    document.addEventListener('mouseleave', () => tiltCard.style.transform = `rotateY(0deg) rotateX(0deg)`);
}

window.addEventListener('scroll', () => {
    const scrolled = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + "%";
});

function revealElements() {
    document.querySelectorAll(".reveal").forEach((el, index) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            setTimeout(() => el.classList.add("active"), isMobile ? 0 : index * 30);
        }
    });
}
window.addEventListener("scroll", revealElements); revealElements();

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeMenu = () => { hamburger.classList.remove('active'); navMenu.classList.remove('active'); };

hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('active'); 
    navMenu.classList.toggle('active'); 
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));

const translations = {
    en: {
        nav_home: "Home", nav_team: "Team", nav_skills: "Expertise", nav_work: "Case Studies", nav_contact: "Contact", charter: "specialist",
        hero_subtitle: "Enterprise IT Solutions", hero_we: "Elite", hero_desc: "Providing comprehensive automation, advanced Python integrations, and scalable business system architectures for modern enterprises.", btn_contact: "Consult With Us", hero_code_text: "System Architectures",
        title_team: "Executive Team",
        abror_role: "System Architect & 1C Engineer", abror_bio: "Specializing in the 1C:Enterprise platform. My primary objective is to engineer flawless accounting, management, and operational workflows through sophisticated, high-performance code.",
        murodxoja_role: "Business Analyst & 1C Engineer", murodxoja_bio: "Bringing over 3 years of deep expertise in 1C:Enterprise 8, MS SQL, and business process analysis. Currently advancing corporate IT infrastructure at JSC 'TOSHSHAHARTRANSXIZMAT'. Yeoju Technical Institute alumni.",
        title_skills: "Technical Expertise",
        skill_1_title: "1C:Enterprise Solutions", skill_1_desc: "Architecting bespoke configurations, complex modifications, and deep integrations for the 1C platform.",
        skill_2_title: "ERP Architecture", skill_2_desc: "End-to-end design and implementation of highly scalable enterprise resource planning systems.",
        skill_3_title: "Python Automation", skill_3_desc: "Executing advanced process automation, large-scale data processing, and complex business logic via Python.",
        skill_4_title: "Web & API Engineering", skill_4_desc: "Constructing modern enterprise web applications and highly responsive RESTful API infrastructures.",
        skill_5_title: "System Interoperability", skill_5_desc: "Bridging disparate platforms to ensure a seamless, highly secure data flow across corporate networks.",
        skill_6_title: "Warehouse Digitalization", skill_6_desc: "Deploying barcode ecosystems, mobile scanning logic, and supply chain workflow optimizations.",
        title_work: "Deployed Solutions", badge_problem: "BUSINESS CHALLENGE", badge_solution: "ENGINEERED SOLUTION",
        proj_1_title: "ERP System Integration", proj_1_prob: "A manufacturing corporation required real-time synchronization between their 1C core and an external Warehouse Management System.", proj_1_sol: "Engineered a custom integration module featuring automated data exchange, advanced error handling, and a monitoring dashboard.",
        proj_2_title: "Inventory Automation", proj_2_prob: "A major retail chain experienced operational bottlenecks with manual inventory tracking and recurrent stock discrepancies.", proj_2_sol: "Deployed a sophisticated barcode-tracking ecosystem utilizing mobile scanning, real-time analytics, and instant database updates.",
        proj_3_title: "Workflow Automation", proj_3_prob: "A distribution enterprise suffered massive efficiency losses due to manual data entry and sluggish report generation.", proj_3_sol: "Architected a fully automated workflow system capable of high-speed document processing, validation, and scheduled reporting.",
        proj_4_title: "CRM Architectural Customization", proj_4_prob: "A corporate sales division required highly specialized analytical CRM capabilities unavailable in standard software suites.", proj_4_sol: "Successfully expanded the existing CRM infrastructure using bespoke modules tailored for advanced client lifecycle management.",
        title_contact: "Initiate Collaboration", contact_h3: "Transform Your Business Operations", contact_p: "We invite you to discuss high-level database architectures, complex integrations, and bespoke enterprise solutions.", footer_text: "Premium Corporate Solutions"
    },
    ru: {
        nav_home: "Главная", nav_team: "Команда", nav_skills: "Экспертиза", nav_work: "Кейсы", nav_contact: "Контакты", charter: "специалист",
        hero_subtitle: "Корпоративные IT Решения", hero_we: "Элитные", hero_desc: "Предоставляем комплексную автоматизацию, передовые интеграции на Python и масштабируемую архитектуру бизнес-систем для современных предприятий.", btn_contact: "Сотрудничество", hero_code_text: "Системные Интеграции",
        title_team: "Руководящий Состав",
        abror_role: "Системный Архитектор и Инженер 1С", abror_bio: "Специализируюсь на платформе 1С:Предприятие. Моя главная цель — обеспечить безупречные учетные и управленческие процессы посредством высокопроизводительного корпоративного кода.",
        murodxoja_role: "Бизнес-Аналитик и Инженер 1С", murodxoja_bio: "Более 3 лет глубокой экспертизы в 1С:Предприятие 8, MS SQL и аналитике бизнес-процессов. Развиваю корпоративную IT-инфраструктуру в АО «TOSHSHAHARTRANSXIZMAT». Выпускник Технического Института Ёджу.",
        title_skills: "Техническая Экспертиза",
        skill_1_title: "Решения 1С:Предприятие", skill_1_desc: "Проектирование индивидуальных конфигураций, сложных модификаций и глубоких интеграций.",
        skill_2_title: "Архитектура ERP", skill_2_desc: "Проектирование и внедрение масштабируемых систем планирования ресурсов предприятия (ERP) под ключ.",
        skill_3_title: "Автоматизация на Python", skill_3_desc: "Реализация передовой автоматизации процессов и обработки больших данных с использованием Python.",
        skill_4_title: "Web и API Инженерия", skill_4_desc: "Создание современных корпоративных веб-приложений и высоконагруженных инфраструктур RESTful API.",
        skill_5_title: "Интеграция Систем", skill_5_desc: "Объединение разрозненных платформ для обеспечения безопасного потока данных в корпоративных сетях.",
        skill_6_title: "Цифровизация Складов", skill_6_desc: "Внедрение экосистем штрихкодирования, мобильного сканирования и оптимизация логистических цепочек.",
        title_work: "Реализованные Решения", badge_problem: "БИЗНЕС-ЗАДАЧА", badge_solution: "ВНЕДРЕННОЕ РЕШЕНИЕ",
        proj_1_title: "Интеграция ERP Системы", proj_1_prob: "Производственной корпорации требовалась синхронизация в реальном времени между ядром 1С и внешней системой управления складом (WMS).", proj_1_sol: "Спроектирован кастомный модуль интеграции с автоматическим обменом данными, обработкой ошибок и дашбордом мониторинга.",
        proj_2_title: "Автоматизация Инвентаризации", proj_2_prob: "Крупная розничная сеть несла операционные убытки из-за ручного учета запасов и регулярных расхождений.", proj_2_sol: "Внедрена передовая экосистема отслеживания штрих-кодов, использующая мобильное сканирование и аналитику в реальном времени.",
        proj_3_title: "Автоматизация Процессов", proj_3_prob: "Дистрибьюторское предприятие теряло эффективность из-за ручного ввода данных и медленной генерации отчетов.", proj_3_sol: "Создана полностью автоматизированная система документооборота с высокоскоростной обработкой и валидацией.",
        proj_4_title: "Кастомизация Архитектуры CRM", proj_4_prob: "Корпоративному отделу продаж требовались узкоспециализированные аналитические возможности CRM.", proj_4_sol: "Успешно расширена существующая инфраструктура CRM с использованием модулей, разработанных под индивидуальные нужды клиента.",
        title_contact: "Начать Сотрудничество", contact_h3: "Трансформируйте Ваш Бизнес", contact_p: "Мы приглашаем вас к обсуждению архитектуры баз данных высокого уровня, сложных интеграций и корпоративных решений.", footer_text: "Премиальные Корпоративные Решения"
    },
    uz: {
        nav_home: "Asosiy", nav_team: "Jamoa", nav_skills: "Ekspertiza", nav_work: "Loyihalar", nav_contact: "Aloqa", charter: "Mutaxassis",
        hero_subtitle: "Korporativ IT Yechimlar", hero_we: "Oliy Toifali", hero_desc: "Zamonaviy korxonalar uchun kompleks avtomatlashtirish, ilg'or Python integratsiyalari va yuqori darajadagi biznes tizimlari arxitekturasini taqdim etamiz.", btn_contact: "Hamkorlik Qilish", hero_code_text: "Tizimli Integratsiyalar",
        title_team: "Jamoamiz",
        abror_role: "Tizim Arxitektori va 1C Muhandisi", abror_bio: "Kompaniyalar uchun ishonchli va xavfsiz kompyuter tizimlari quradi, buxgalteriya va boshqaruv jarayonlarini 1C:Enterprise platforma orqali sozlaydi va avtomatlashtiradi. Xodimlar kundalik ishlarini tezroq va xatosizroq bajarishlari uchun to'g'ri vositalarni tanlaydi va ishga tushiradi. Hozirda «TOSHSHAHARTRANSXIZMAT» AJda ishlaydi.",
        murodxoja_role: "Biznes Tahlilchisi va 1C Muhandisi", murodxoja_bio: "Kompaniya ichidagi jarayonlarni batafsil o'rganadi, qayerda vaqt, pul va resurs behuda ketayotganini aniqlaydi va bunga yechim bo'ladigan dasturiy tizimlar joriy etadi. 1C:Enterprise 8 va MS SQL bilan ishlaydi, murakkab hisob-kitoblarni oddiy va tushunarli ko'rinishga keltiradi. Yeoju texnika instituti bitiruvchisi, hozirda «TOSHSHAHARTRANSXIZMAT» AJda faoliyat yuritadi.",
        title_skills: "Ekspertiza va Texnologiyalar",
        skill_1_title: "1C:Korxona (Enterprise)", skill_1_desc: "Keng ko'lamli korporativ konfiguratsiyalarni loyihalash, moslashtirish va integratsiya qilish.",
        skill_2_title: "ERP va Biznes Tizimlari", skill_2_desc: "Korxona resurslarini boshqarish bo'yicha murakkab me'moriy yechimlarni joriy etish.",
        skill_3_title: "Python Avtomatizatsiyasi", skill_3_desc: "Python yordamida chuqur tahliliy jarayonlarni avtomatlashtirish va biznes mantiqini yaratish.",
        skill_4_title: "Web va API Arxitekturasi", skill_4_desc: "Zamonaviy korporativ veb-ilovalar va yuqori yuklamali RESTful API xizmatlarini yaratish.",
        skill_5_title: "Tizimli Integratsiyalar", skill_5_desc: "Turli xil platformalarni yagona ekotizimga birlashtirish va xavfsiz ma'lumotlar oqimini ta'minlash.",
        skill_6_title: "Logistika va Omborxona", skill_6_desc: "Shtrix-kod tizimlari, mobil terminallar va ta'minot zanjiri jarayonlarini raqamlashtirish.",
        title_work: "Amalga Oshirilgan Loyihalar", badge_problem: "BIZNES MUAMMO", badge_solution: "KORPORATIV YECHIM",
        proj_1_title: "ERP Tizimi Integratsiyasi", proj_1_prob: "Ishlab chiqarish kompaniyasiga 1C va tashqi omborni boshqarish tizimi (WMS) o'rtasida uzluksiz sinxronizatsiya zarur edi.", proj_1_sol: "Avtomatlashtirilgan ma'lumotlar almashinuvi, xatoliklarni boshqarish va monitoring paneliga ega maxsus integratsiya moduli ishlab chiqildi.",
        proj_2_title: "Ombor Avtomatizatsiyasi", proj_2_prob: "Chakana savdo tarmog'ida tovarlarni qo'lda kuzatish qiyinlashib, ombordagi qoldiqlar bo'yicha tez-tez tafovutlar yuzaga kelgan.", proj_2_sol: "Mobil skanerlash, real vaqtda yangilash va tahliliy hisobotlarni o'z ichiga olgan shtrix-kod kuzatuv tizimi joriy etildi.",
        proj_3_title: "Korporativ Jarayonlar", proj_3_prob: "Distribyutorlik kompaniyasi ma'lumotlarni kiritish va hisobotlarni shakllantirish uchun har kuni samarasiz vaqt sarflar edi.", proj_3_sol: "Hujjatlarni qayta ishlash, tekshirish va rejalashtirilgan hisobotlarni yaratish bo'yicha to'liq avtomatlashtirilgan tizim yaratildi.",
        proj_4_title: "CRM Tizimini Moslashtirish", proj_4_prob: "Savdo bo'limiga standart echimlarda mavjud bo'lmagan, maxsus tahliliy CRM xususiyatlari talab etilardi.", proj_4_sol: "Mijozlarni boshqarish va tahlil qilish uchun maxsus modullar yordamida mavjud CRM tizimi muvaffaqiyatli kengaytirildi.",
        title_contact: "Hamkorlik Qilish", contact_h3: "Biznesingizni Yangi Bosqichga Olib Chiqing", contact_p: "Biz doimo yuqori darajadagi ma'lumotlar bazasi arxitekturasi, murakkab integratsiyalar va korporativ yechimlarni muhokama qilishga tayyormiz.", footer_text: "Premium Korporativ Yechimlar"
    }
};

const typingPhrases = { 
    en: ["Architecting 1C Ecosystems", "Developing Python APIs", "Automating Enterprise Workflows"], 
    ru: ["Архитектура экосистем 1С", "Разработка Python API", "Автоматизация бизнес-процессов"], 
    uz: ["1C ekotizimlarini yaratish", "Python API integratsiyasi", "Korporativ jarayonlarni avtomatlashtirish"] 
};

let currentLang = 'uz';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    clearTimeout(typeTimeout); typePhraseIndex = 0; charIndex = 0; isDeleting = false; 
    typingElement.textContent = ""; typeEffect(); 
}

const typingElement = document.getElementById("typing-text");
let typePhraseIndex = 0, charIndex = 0, isDeleting = false, typeTimeout;

function typeEffect() {
    const currentPhrase = typingPhrases[currentLang][typePhraseIndex];
    if (isDeleting) { typingElement.textContent = currentPhrase.substring(0, charIndex - 1); charIndex--; } 
    else { typingElement.textContent = currentPhrase.substring(0, charIndex + 1); charIndex++; }
    let speed = isDeleting ? 30 : 60; 
    if (!isDeleting && charIndex === currentPhrase.length) { speed = 2500; isDeleting = true; } 
    else if (isDeleting && charIndex === 0) { isDeleting = false; typePhraseIndex = (typePhraseIndex + 1) % typingPhrases[currentLang].length; speed = 500; }
    typeTimeout = setTimeout(typeEffect, speed);
}

typeTimeout = setTimeout(typeEffect, 1000);
setLanguage('uz');
