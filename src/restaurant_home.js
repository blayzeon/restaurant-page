/*
    Populates index.html with the restaurant layout.

        <nav>
            <ul class="flex-list">
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li><button>Order Online</button></li>
            </ul>
        </nav>

        <main class="flex-focus">
            <div class="position-overlap">
                <h1>Restaurant</h1>
                <p>The best food near you</p>
            </div>
            <div>
                <img alt="image of food" src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </main>
*/

function populateHtml(){
    const container = document.querySelector('#content');
    const nav = document.createElement('nav');
    const main = document.createElement('main');
    const flexMain = document.createElement('div');

    nav.innerHTML = `
        <ul class="flex-list">
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li><button>Order Online</button></li>
        </ul>
    `;

    flexMain.classList.add('flex-focus');

    flexMain.innerHTML = `
        <div class="position-overlap">
            <h1>Restaurant</h1>
            <p>The best food near you</p>
        </div>
        <div>
        <img alt="image of food" src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `;

    container.appendChild(nav);
    container.appendChild(main);
    main.appendChild(flexMain);
    return;
}

export {populateHtml as default};