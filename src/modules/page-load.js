function loadHeader() {
    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    header.textContent = 'Devine Delicacies'
    return header;
}

function createBTN(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.textContent = text;
    return btn;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'navBar');
    return nav
}

function createButCont() {
    const butCont = document.createElement('div');
    butCont.setAttribute('id', 'but-content');
    return butCont;
}

function pageLoad() {
    const content = document.getElementById('content');
    const header = loadHeader();
    const nav = createNav();

    const homeBtn = createBTN('homeBtn', 'HOME');
    const aboutBtn = createBTN('aboutBtn', 'ABOUT US')
    const menuBtn = createBTN('menuBtn', 'MENU');
    const contactBtn = createBTN('contactBtn', 'CONTACT')

    const butCont = createButCont();


    content.appendChild(header);
    content.appendChild(nav);
    nav.appendChild(homeBtn);
    nav.appendChild(aboutBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    content.appendChild(butCont);
}

export default pageLoad;