/*
    Populates Location Page with the appropriate content.
*/


function loadLocation(){
    // main
    const locationPg = document.createElement('div');
    locationPg.classList.add('grid-overlap');

    // overlaping text and image
    locationPg.innerHTML = `
        <div class="grid-bottom">
            <img class="rounded" alt="image of food" src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        </div>
        <div class="grid-top">
            <h1>Restaurant</h1>
            <h2 class="margin-top">Always Near You</h2>
            <div id="dynamic-elm" class="dynamic-text"><p>Whether you're just chillin' in an apartment in America or climbing the peaks Mt. Everest, we deliver. With our new Hyperspace Transdimensional Teleportation Pseudotechnology (HTTP), we can bring you food-like substances anywhere, anytime, for free.</p>
            <p><em>You wouldn't download a car, but how about some pasta?</em></p></div>
            <div class="margin"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28928.027636145816!2d-71.01750961661052!3d24.99999857523423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89451ab5034cb7ab%3A0xb600ecf3df7aca4d!2sBermuda%20Triangle!5e0!3m2!1sen!2sus!4v1640139560030!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
        </div>
    `;
    return locationPg;
}

export {loadLocation as default};

