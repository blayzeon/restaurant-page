/*
    Populates Location Page with the appropriate content.
*/


function loadLocation(){
    const lorem10 = `Sequi corporis iure beatae consequatur esse odio in illum doloremque.`;
    const lorem40 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ducimus enim tempore, modi non delectus corporis ipsa repellat quia fugiat nam qui, recusandae eius. Harum quidem quasi iure velit eveniet temporibus nisi sequi et distinctio. Eveniet quo ipsa quam hic.`;
    const imgLink = `https://images.pexels.com/photos/4321946/pexels-photo-4321946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
    // main
    const locationPg = document.createElement('div');
    locationPg.classList.add('grid-overlap');

    // overlaping text and image
    locationPg.innerHTML = `
        <div class="grid-bottom">
            <img class="rounded" alt="image of the ocean" src="${imgLink}">
        </div>
        <div class="grid-top">
            <h1 style="color: orange">Restaurant</h1>
            <h2 class="margin-top">Conveniently Located</h2>
            <div id="dynamic-elm" class="dynamic-text"><p>Hours of Operation:</p><ul><li>Monday-Friday: 9 PM to 5:55 AM</li><li>Open all day Saturday/Sunday</li></ul><p>${lorem40}</p>
            <p><em>${lorem10}</em></p></div>
            <div class="margin"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28928.027636145816!2d-71.01750961661052!3d24.99999857523423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89451ab5034cb7ab%3A0xb600ecf3df7aca4d!2sBermuda%20Triangle!5e0!3m2!1sen!2sus!4v1640139560030!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
        </div>
    `;
    return locationPg;
}

export {loadLocation as default};

