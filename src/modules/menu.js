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

function createItem(name, img, price, alt) {

    const menuItem = document.createElement('div');
    menuItem.setAttribute('id', 'menuItem');

    const itemName = document.createElement('div');
    itemName.setAttribute('id', 'itemName');
    itemName.innerText = name;

    const itemImg = document.createElement('img');
    itemImg.setAttribute('src', img);
    itemImg.setAttribute('alt', alt)

    const itemPrice = document.createElement('div');
    itemPrice.setAttribute('id', 'itemPrice');
    itemPrice.innerText = price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemPrice);

    return menuItem;
}




function removeAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function menuLoad() {
    setActive();

    const items = [
        ['Century Eggs', 'img/century-eggs.jpg', 'Price $162', 'century eggs'],
        ['Fried Grasshoppers', 'img/fried-grasshoppers.jpg', 'Price $69', 'fried grasshopper'],
        ['Haggies', 'img/Haggies.webp', 'Price $57', 'haggies'],
        ['Monjayaki', 'img/monjayaki.jpg', 'Price $87', 'monjayaki'],
        ['Chilled Brains', 'img/monkey-brains.jpg', 'Price $893', 'chilled monkey brains'],
        ['Shirako', 'img/shirako.jpg', 'Price $122', 'shirako'],
        ['Silkworms', 'img/silkworms.jpg', 'Price $74', 'silkworms'],
        ['Stargazy Pie', 'img/Stargazy-pie.webp', 'Price $65', 'stargazy pie'],
        ['Uni on Ice', 'img/uni-in-shell-on-ice-1600x900.jpg', 'Price $43', 'uni on ice'],
        ['Zaza Mushi', 'img/zaza-mushi.jpg', 'Price $143', 'zaza mushi']
    ]

    let createLoop = [];

    const butCont = document.getElementById('but-content');
    removeAll(butCont);

    const menuCont = document.createElement('div');
    menuCont.setAttribute('id', 'menuCont');
    butCont.appendChild(menuCont);

    for (let i = 0; i < items.length;) {
        createLoop[i] = createItem(items[i][0], items[i][1], items[i][2], items[i][3]);
        menuCont.appendChild(createLoop[i]);
        ++i
    }

    const footer = createFooter();
    butCont.appendChild(footer);

    return butCont;
}

export default menuLoad