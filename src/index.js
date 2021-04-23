import pageLoad from './modules/page-load.js';
import homeLoad from './modules/home.js';
import aboutLoad from './modules/about.js';
import menuLoad from './modules/menu.js';
import contactLoad from './modules/contact.js'


initialize();

function buttonListeners() {
    const home = document.getElementById('homeBtn');
    const about = document.getElementById('aboutBtn');
    const menu = document.getElementById('menuBtn');
    const contact = document.getElementById('contactBtn')

    home.addEventListener('click', homeLoad);
    about.addEventListener('click', aboutLoad);
    menu.addEventListener('click', menuLoad)
    contact.addEventListener('click', contactLoad)
}




function initialize() {
    pageLoad();
    homeLoad();
    buttonListeners()
}