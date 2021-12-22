/*
    Populates Home Page with the appropriate content.
*/


function loadHome(){
    const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus dolores sequi corporis iure beatae consequatur esse odio in illum doloremque.`;

    // main
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
    return gridImg;
}

export {loadHome as default};