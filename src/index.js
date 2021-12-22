import loadHome from './restaurant_home';
import loadLocation from './location';
import loadOrder from './order';


/* HTML CONTENT */

// element from index.html
const container = document.querySelector('#content');
const main = document.createElement('main');
const footer = document.createElement('footer');

function generateMain(source){
    // clear old content
    if (container.contains(main)){
        main.innerHTML = ``;
    }

    // add the new content
    main.appendChild(source)
    container.appendChild(main);

    // FOOTER
    if (container.contains(footer)){
        container.removeChild(footer);
    }
    footer.innerText = ('Created by blayzeon 12/18/2021');
    container.appendChild(footer);

};

// NAV BAR
(function(){
    const nav = document.createElement('nav');
    const flexUl = document.createElement('ul');
    flexUl.classList.add('flex-list');

    const navLinks = [
        'Home',
        'Location',
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
                loadOrder(),
            ];
            let index = parseInt(button.id);
            generateMain(menuItems[index]);
        });
    });

})();

generateMain(loadHome());

/* --- */
