const cursorCenter = document.querySelector('.cursor_center');
const cursorAura = document.querySelector('.cursor_aura');
const headerMenu = document.querySelector('.header_menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close_menu');
const contactBtn = document.querySelector('.contact-btn');
let closeContactWindow = document.querySelector('.close-contact-window');
let contactWindow = document.querySelector('.contact-window');
import { data } from '../modules/module.js'


AOS.init();

console.log(data)

const appState = {
    mobile_menu: false
}




function cursorMiove(event) {
    cursorCenter.style.top = event.pageY + 'px';
    cursorCenter.style.left = event.pageX + 'px';
    cursorAura.style.top = event.pageY - 20 + 'px';
    cursorAura.style.left = event.pageX - 20 + 'px';
}
// cursor
function openMobileMenu() {
    if (appState.mobile_menu) {
        appState.mobile_menu = false;
        menu.style.display = 'none';
    } else {
        appState.mobile_menu = true;
        menu.style.display = 'flex';
    }

}
function sendConfirmationToTelegram(message) {
    const telegramBotToken = '7666439315:AAGHkuXvxzWZG7Npq1I8xwKv3X0sxa72pBM'; // Ваш токен бота
    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const chatId = '2040393675'; // ID чата

    fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
        .then(response => {
            if (response.ok) {
                console.log('Уведомление успешно отправлено в Telegram!');
            } else {
                console.error('Ошибка при отправке уведомления в Telegram:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
}
// listeners
window.addEventListener('mousemove', cursorMiove);
headerMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', openMobileMenu);
contactBtn.addEventListener('click', () => {
    contactWindow.style.display = 'flex';
})
closeContactWindow.addEventListener('click', () => {
    contactWindow.style.display = 'none';
})


// Обработчик события для кнопки
document.querySelector('.message-btn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const number = document.getElementById('numInput').value;

    const message = `Имя: ${name}\nEmail: ${email}\nНомер: ${number}`;

    // Отправка сообщения в Telegram
    sendConfirmationToTelegram(message);
});

// git init - иниц проекта
// git add . - добавляет файлы в реп
// git commit -m 'bug fix' - коммитит
// git branch -M main - создает ветку main
// git remote add origin ссылка на реп - создает коннект с репом
// git push - отправляет на гитхаб




