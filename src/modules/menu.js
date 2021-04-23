function setActive() {
    const navButtons = ['homeBtn', 'aboutBtn', 'menuBtn', 'contactBtn'];

    for (let i = 0; i < navButtons.length;) {
        document.getElementById(navButtons[i]).classList.remove('active');
        document.getElementById(navButtons[i]).classList.add('inActive')
            ++i
    }

    const menu = document.getElementById('menuBtn');
    menu.classList.remove('inactive')
    menu.classList.add('active');
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

    const footerP = document.createElement('p');
    footerP.innerText = "Copyright © 2011 Devine Delicacies. All rights reserved."
    footer.appendChild(footerP)

    const footerP1 = document.createElement('p');
    footerP1.innerText = "This is not an actual resturant. Please do not try to reach to this company. They do no exist. This website was created as a project for 'The Odin Project' as part of a programming course."
    footer.appendChild(footerP1);

    return footer
}

function removeAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function menuLoad() {
    setActive();

    const butCont = document.getElementById('but-content');
    removeAll(butCont);


    const footer = createFooter();
    butCont.appendChild(footer);

    return butCont;
}

export default menuLoad