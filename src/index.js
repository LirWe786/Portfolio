 const cursorCenter = document.querySelector('.cursor_center');
const cursorAura = document.querySelector('.cursor_aura');
const headerMenu = document.querySelector('.header_menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close_menu');
import { data } from '../modules/module.js'


AOS.init();

console.log(data)

const appState = {
    mobile_menu: false
}



// animations 
function skillsAnimatation(element) {
    element.classList.add('skills_divs_animatation');
    element.style.opacity = 1;
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
// listeners
window.addEventListener('mousemove', cursorMiove);
headerMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', openMobileMenu);






// document.addEventListener('scroll', () => {
//     const languagesSkillsDiv = document.querySelector('.languagesSkillsDiv');
//     const languagesElement = document.querySelector('.skills_languages');
//     const rect = languagesElement.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     if (rect.top >= 0 && rect.bottom <= windowHeight) {
//         skillsAnimatation(languagesSkillsDiv);
//     }
// });
// document.addEventListener('scroll', () => {
//     const designElement = document.querySelector('.skills_design');
//     const designSkillsDiv = document.querySelector('.designSkillsDiv');
//     const rect = designElement.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     if (rect.top >= 0 && rect.bottom <= windowHeight) {
//         skillsAnimatation(designSkillsDiv);
//     }
// });
document.addEventListener('scroll', () => {
    skillsAnimatation()


});
document.addEventListener('scroll', () => {
  
});