function setActive() {
    const navButtons = ['homeBtn', 'aboutBtn', 'menuBtn', 'contactBtn'];

    for (let i = 0; i < navButtons.length;) {
        document.getElementById(navButtons[i]).classList.remove('active');
        document.getElementById(navButtons[i]).classList.add('inActive')
            ++i
    }

    const contact = document.getElementById('contactBtn');
    contact.classList.remove('inactive')
    contact.classList.add('active');
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

function createContact() {
    const contSide = document.createElement('div');
    contSide.setAttribute('id', 'contSide');

    const address = document.createElement('div');
    address.setAttribute('id', 'address');
    address.innerText = '225 Ottley Dr SE' + '\n' + 'Atlanta, GA 30324';
    contSide.appendChild(address);

    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    hours.innerText = 'Mon-Thurs: 11am - 7pm' + '\n' + 'Fri-Sun: 11am - 9pm';
    contSide.appendChild(hours);

    const phone = document.createElement('div');
    phone.setAttribute('id', 'phone');
    phone.innerText = 'Call Us' + '\n' + '(678) 231 - 1616';
    contSide.appendChild(phone);

    const email = document.createElement('div');
    email.setAttribute('id', 'email');
    email.innerText = 'Email Us' + '\n' + 'info@davinedelicacies.com';
    contSide.appendChild(email);

    return contSide
}

function contactLoad() {
    setActive();

    const butCont = document.getElementById('but-content');
    removeAll(butCont);

    const contactCont = document.createElement('div');
    contactCont.setAttribute('id', 'contactCont');
    butCont.appendChild(contactCont);

    const side = createContact();
    contactCont.appendChild(side);

    const map = document.createElement('div');
    map.setAttribute('id', 'mapBox');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1044938147566!2d-84.38151289910455!3d33.809616393166756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f505b6dc5ac7b5%3A0xd92151b37377ff39!2s225%20Ottley%20Dr%20NE%2C%20Atlanta%2C%20GA%2030324!5e0!3m2!1sen!2sus!4v1619185849841!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    contactCont.appendChild(map)



    const footer = createFooter();
    butCont.appendChild(footer);

    return butCont;
}

export default contactLoad