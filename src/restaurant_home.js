/*
    Populates index.html with the restaurant layout.
*/

function populateHtml(){
    // element from index.html
    const container = document.querySelector('#content');

    // nav bar
    const nav = document.createElement('nav');
    const flexUl = document.createElement('ul');
    flexUl.classList.add('flex-list');

    const navLinks = [
        'Menu',
        'Location',
        'About',
        '<button>Order Online</button>',
    ];

    let navHtml = [];
    for (let i = 0; i < navLinks.length; i++){
        navHtml.push(`<li>${navLinks[i]}</li>`);
    }

    flexUl.innerHTML = navHtml.join('');

    nav.appendChild(flexUl);
    container.appendChild(nav);

    // main
    const main = document.createElement('main');
    const gridImg = document.createElement('div');

    // overlaping text and image
    gridImg.classList.add('grid-overlap');
    gridImg.innerHTML = `
        <div class="grid-bottom">
            <img class="rounded" alt="image of food" src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        </div>
        <div class="grid-top">
            <h1>Restaurant</h1>
            <p>The best food near you</p>
        </div>
    `;
    main.appendChild(gridImg);

    // bottom text
    const loremP = document.createElement('p');
    loremP.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    loremP.classList.add("white-text");
    loremP.classList.add("width-80");
    main.appendChild(loremP);

    container.appendChild(main);

    // footer
    const footer = document.createElement('footer');
    footer.innerText = ('Created by blayzeon 12/18/2021');

    container.appendChild(footer);
    
    return;
}

export {populateHtml as default};