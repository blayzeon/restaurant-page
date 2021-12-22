import loadHome from './restaurant_home';
import loadLocation from './location';


/* HTML CONTENT */

// element from index.html
const container = document.querySelector('#content');
const main = document.createElement('main');

// NAV BAR
(function(){
    const nav = document.createElement('nav');
    const flexUl = document.createElement('ul');
    flexUl.classList.add('flex-list');

    const navLinks = [
        'Home',
        'Location',
        'About',
        '<button>Order Online</button>',
    ];

    let navHtml = [];
    for (let i = 0; i < navLinks.length; i++){
        navHtml.push(`<li id="${[i]}" data-btn>${navLinks[i]}</li>`);
    }

    flexUl.innerHTML = navHtml.join('');

    nav.appendChild(flexUl);
    container.appendChild(nav);

    document.querySelectorAll('[data-btn]').forEach((button) =>{
        button.addEventListener('click', ()=>{
            const menuItems = [
                loadHome(),
                loadLocation(),
                //loadAbout(),
                //loadOrder(),
            ];
            let index = parseInt(button.id);
            main.appendChild(menuItems[index]);
        });
    });

})();

// MAIN
//main.appendChild(loadHome())
container.appendChild(main);

// FOOTER
const footer = document.createElement('footer');
footer.innerText = ('Created by blayzeon 12/18/2021');
container.appendChild(footer);

/* --- */
