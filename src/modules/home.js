function setActive() {
    const navButtons = ['homeBtn', 'aboutBtn', 'menuBtn', 'contactBtn'];

    for (let i = 0; i < navButtons.length;) {
        document.getElementById(navButtons[i]).classList.remove('active');
        document.getElementById(navButtons[i]).classList.add('inActive')
            ++i
    }

    const home = document.getElementById('homeBtn');
    home.classList.remove('inactive')
    home.classList.add('active');
}

function reservations() {
    const reserveDiv = document.createElement('div');
    reserveDiv.setAttribute('id', 'reserve');
    reserveDiv.innerText = 'Need to book a reservation? ';

    const reserveBtn = document.createElement('button');
    reserveBtn.setAttribute('id', 'reserveBtn');
    reserveBtn.innerText = 'CLICK HERE';

    reserveDiv.appendChild(reserveBtn);

    return reserveDiv
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

function homeContent() {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const homeImg = document.createElement('img');
    homeImg.setAttribute('src', 'img/restaurant.jpg');
    home.appendChild(homeImg);

    const homeDesc = document.createElement('div');
    homeDesc.setAttribute('id', 'homeDesc');
    home.appendChild(homeDesc);

    const homeH1 = document.createElement('h1');
    homeH1.innerText = "Welcome to Divine Delicacies."
    homeDesc.appendChild(homeH1);

    const homeP = document.createElement('p')
    homeP.innerText = "Here at Davine Delicacies we pride ourselves on being the premier restaurant for offering some of the worlds finest foods. We offer our guests our exotic food menu but we also have our local cuisine menu which includes our seafood, lamb, and prime cuts of beef.";
    homeDesc.appendChild(homeP)

    const homeP2 = document.createElement('p')
    homeP2.innerText = "We offer a private party room for groups larger than 5. We have an extenive wine collection that is bound to tickle the falvor pallet of even the finest of wine connoisseur's. Our wine selection is constantly changing to bring you the finest wines, so please reach out to our staff for exact details.";
    homeDesc.appendChild(homeP2)

    return home;
}

function removeAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function homeLoad() {
    setActive();

    const butCont = document.getElementById('but-content');
    removeAll(butCont);

    const loadReser = reservations();
    butCont.appendChild(loadReser)

    const homeInside = homeContent();
    butCont.appendChild(homeInside);


    const footer = createFooter();
    butCont.appendChild(footer);
}

export default homeLoad;