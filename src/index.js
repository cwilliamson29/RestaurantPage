import pageLoad from './modules/page-load.js';
import homeLoad from './modules/home.js';
import aboutLoad from './modules/about.js'


initialize();

function buttonListeners() {
    const home = document.getElementById('homeBtn');
    const about = document.getElementById('aboutBtn');

    home.addEventListener('click', homeLoad);
    about.addEventListener('click', aboutLoad);
}




function initialize() {
    pageLoad();
    homeLoad();
    buttonListeners()
}