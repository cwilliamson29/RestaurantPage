function setActive() {
    const navButtons = ['homeBtn', 'aboutBtn', 'menuBtn', 'contactBtn'];

    for (let i = 0; i < navButtons.length;) {
        document.getElementById(navButtons[i]).classList.remove('active');
        document.getElementById(navButtons[i]).classList.add('inActive')
            ++i
    }

    const about = document.getElementById('aboutBtn');
    about.classList.remove('inactive')
    about.classList.add('active');
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

function createAbout() {
    const about = document.createElement('div');
    about.setAttribute('id', 'about');

    const aboutP = document.createElement('p');
    aboutP.innerHTML = "<img src='img/about-pic.jpg'> Devine Delicacies was founded in 2011 by Karen Shmoozer.Karen is originally from the Ukraine." +
        "At the age of 16 she was taken into human trafficking.Karen battled with getting away from human trafficingfor many years.Duringher experience she " +
        "learned to cook mealsfor her captors.Through resilience and persistence she managed to escape from her captor 's and regained her freedom in the united" +
        "states.Once she arrived in the united states she was able to recieve sponsorshipto attend The Culinary Institute of America in New York.After graduating in " +
        "2009 she relocated to Atlanta, GA.In the summer of 2011 she opened Devine Delicacies in downtown Atlanta.The restaurant is loved by many of the locals in " +
        "the area and it is consistant tourist destination.Less than a 10 minute walk from the Atlanta 's many attractions such as the Georgia Aquarium, Phillips " +
        "Arena, and newly built Falcon's stadium.In 2018 she revised the menu to not only include culinary delicacies from across the world but to also include " +
        "some of the Atlanta locals favorites.This menu contains many dishes but some of the more popular are the 'Atlanta honey roasted Falcon' which is a slow " +
        "roasted quail with honey glaze, and the 'Atlanta Piggy's on Le Run ' which is a pork blood sausage with our homemade BBW sauce. Our most popular desert " +
        "is our 'Pop De La Copp ' which is a black cake covered in blue fondant icing with a red cream cheese icing between its 3 layers. The cake is sprinkled " +
        "with red and gold candy flakes before it is served. "
        /*
            const aboutP1 = document.createElement('p');
            aboutP1.innerText = "Once she arrived in the united states she was able to recieve sponsorship to attend The Culinary Institute of America in New York. After graduating in 2009 she relocated to Atlanta, GA. In the summer of 2011 she opened Devine Delicacies in downtown Atlanta. The restaurant is loved by many of the locals int he area and it is consistant tourist destination. Less than a 10 minute walk from the Atlanta's many attractions such as the Georgia Aquarium, Phillips Arena, and newly built Falcon's stadium."

            const aboutP2 = document.createElement('p');
            aboutP2.innerText = "In 2018 she revised the menu to not only include culinary delicacies from across the world but to also include some of the Atlanta locals favorites. This menu contains many dishes but some of the more popular are the 'Atlanta honey roasted Falcon' which is a slow roasted quail with honey glaze, and the 'Atlanta Piggy's on Le Run' which is a pork blood sausage with our homemade BBW sauce. Our most popular desert is our 'Pop De La Copp' which is a black cake covered in blue fondant icing with a red cream cheese icing between its 3 layers. The cake is sprinkled with red and gold candy flakes before it is served."

            const aboutPic = document.createElement('img');
            aboutPic.setAttribute('src', 'img/about-pic.jpg');
        */
    about.appendChild(aboutP);
    //about.appendChild(aboutPic);
    //about.appendChild(aboutP1);
    //about.appendChild(aboutP2);

    return about
}

function removeAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function aboutLoad() {
    setActive();

    const butCont = document.getElementById('but-content');
    removeAll(butCont);

    const about = createAbout();
    butCont.appendChild(about)


    const footer = createFooter();
    butCont.appendChild(footer);
}

export default aboutLoad;