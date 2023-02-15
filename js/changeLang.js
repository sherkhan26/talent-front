const langKz = document.getElementById('lang-kz')
const langRu = document.getElementById('lang-ru')

langKz.addEventListener('click', () => {
    location.hash = 'kz';
    location.reload();
})

langRu.addEventListener('click', () => {
    location.hash = 'ru';
    location.reload();
})

let language = {
    ru: {
        finishDay: "22 Марта",
        mainPage: "Главная",
        aboutPage: "О мероприятие",
        eventPage: "Ответственные координаторы",
        userPage: "Участники",
        userVoice: "Вокал (эстрада + классика)",
        userDance: "Танцы (все виды)",
        userGroup: "Групповое выступление (Ансамбль, дуэт, трио, квартет)",
        userTool: "Инструментальное выступление (все виды инструменталки)",
        userTraditional: "Народное пение",
        registrationPage: "Регистрация",
        broadcastPage: "Трансляция",
        homeMeetStart: "До старта мероприятия осталось:",
        timerDay: "дней",
        timerHour: "часы",
        timerMin: "минут",
        timerSec: "секунд",
        homeRegistration: "РЕГИСТРАЦИЯ",
        homeCallPerson1: "По вопросам конкурса: Жанэль Болат: +77477779006",
        homeCallPerson2: "По техническим вопросам обращаться: Нурсултан Акбаров: +77751530708",
        aboutTitle: "О Мероприятие",
        aboutDescription: "Мы создали чрезвычайно позитивную и непринужденную атмосферу, направленную на развитие ваших навыков, независимо от того, являетесь ли вы абсолютным новичком, пытающимся оторваться от земли, или опытным игроком, стремящимся перейти на следующий уровень. Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов.",
        eventOrganizer: "Ответственные координаторы",
        footerDescription: "создает самые современные решения для цифровизации Казатомпрома и является динамично развивающейся ИТ-компанией",
    },
    kz: {
        finishDay: "22 Наурыз",
        mainPage: "Басты бет",
        aboutPage: "Оқиға туралы",
        eventPage: "Жауапты үйлестірушілер",
        userPage: "Мүшелер",
        userVoice: "Вокал (эстрадалық + классикалық)",
        userDance: "Би (барлық түрі)",
        userGroup: "Топтық орындау (ансамбль, дуэт, трио, квартет)",
        userTool: "Аспаптық орындау (аспаптардың барлық түрлері)",
        userTraditional: "Халық әні",
        registrationPage: "Тіркеу",
        broadcastPage: "Хабар тарату",
        homeMeetStart: "Іс-шара басталуына қалды:",
        timerDay: "күндер",
        timerHour: "сағат",
        timerMin: "минут",
        timerSec: "секунд",
        homeRegistration: "Тіркеу",
        homeCallPerson1: "Байқауға қатысты: Жанэль Болат: +77477779006",
        homeCallPerson2: "Техникалық сұрақтар бойынша хабарласыңыз: Нурсултан Акбаров: +77751530708",
        aboutTitle: "Оқиға туралы",
        aboutDescription: "Біз өзіңіздің дағдыларыңызды дамытуға бағытталған өте позитивті және жайлы ортаны жасадық, мейлі сіз жерден түсуге тырысатын абсолютті бастаушы болсаңыз да, оны келесі деңгейге көтеруді қалайтын тәжірибелі ойыншы болсаңыз да. Lorem Ipsum - бұл басып шығару және теру өнеркәсібіне арналған жалған мәтін. Lorem Ipsum 1500 жылдардан бері саладағы стандартты жалған мәтін болды.",
        eventOrganizer: "Жауапты үйлестірушілер",
        footerDescription: "Қазатомөнеркәсіпті цифрландыру үшін ең озық шешімдерді жасайды және серпінді дамып келе жатқан IT-компания болып табылады.",
    },
};

if (window.location.hash) {

    if (window.location.hash === "#kz") {
        xDay.textContent = language.kz.finishDay;
        mainPage.textContent = language.kz.mainPage;
        aboutPage.textContent = language.kz.aboutPage;
        eventPage.textContent = language.kz.eventPage;
        userPage.textContent = language.kz.userPage;
        userVoice.textContent = language.kz.userVoice;
        userDance.textContent = language.kz.userDance;
        userGroup.textContent = language.kz.userGroup;
        userTool.textContent = language.kz.userTool;
        userTraditional.textContent = language.kz.userTraditional;
        registrationPage.textContent = language.kz.registrationPage;
        broadcastPage.textContent = language.kz.broadcastPage;
        homeMeetStart.textContent = language.kz.homeMeetStart;
        timerDay.textContent = language.kz.timerDay;
        timerHour.textContent = language.kz.timerHour;
        timerMin.textContent = language.kz.timerMin;
        timerSec.textContent = language.kz.timerSec;
        homeRegistration.textContent = language.kz.homeRegistration;
        homeCallPerson1.textContent = language.kz.homeCallPerson1;
        homeCallPerson2.textContent = language.kz.homeCallPerson2;
        aboutTitle.textContent = language.kz.aboutTitle;
        aboutDescription.textContent = language.kz.aboutDescription;
        eventOrganizer.textContent = language.kz.eventOrganizer;
        footerDescription.textContent = language.kz.footerDescription;
    }

}