/*
    Populates index.html with the restaurant layout.
*/

function populateHtml(){
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    
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
        '<button><a class="hide-link" href="https://www.ubereats.com/" target="_blank">Order Online</a></button>',
    ];

    let navHtml = [];
    for (let i = 0; i < navLinks.length; i++){
        navHtml.push(`<li id="${[i]}" data-btn>${navLinks[i]}</li>`);
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
            <h2>The best food near you</h2>
            <div id="dynamic-elm"><p class="dynamic-text">${lorem}</p></div>
        </div>
    `;
    main.appendChild(gridImg);

    document.querySelectorAll('[data-btn]').forEach((button) =>{
        button.addEventListener('click', ()=>{
            const menuItems = [
                {
                    item: `Tempei`,
                    price: 12.99
                },
                {
                    item: `Chicken`,
                    price: 15.99
                },
                {
                    item: `Fish`,
                    price: 17.99
                },
                {
                    item: `Steak`,
                    price: 29.99
                },
            ];
            const menuPhrase = `<p>All options come with a side of vegetables and quinoa.</p>`;
        
            let menuList = []
            for (let i = 0; i < menuItems.length; i++){
                menuList.push(`<li>${menuItems[i].item} - ${menuItems[i].price}</li>`);
            }
            menuList.push(menuPhrase);

            const menu = menuList.join('');

            const textArray = [
                `<ul class="dynamic-text">${menu}</ul>`,
                `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6363301681768!2d-122.08627838411677!3d37.42206984014497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1639881665166!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
                `<p class="dynamic-text">${lorem}</p>`,
                `<p class="dynamic-text">${lorem}</p>`,
            ];
            let index = parseInt(button.id);
            document.getElementById('dynamic-elm').innerHTML = textArray[index];
        });
    });

    container.appendChild(main);

    // footer
    const footer = document.createElement('footer');
    footer.innerText = ('Created by blayzeon 12/18/2021');

    container.appendChild(footer);

};

export {populateHtml as default};