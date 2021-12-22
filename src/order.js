/*
    Populates Order Page with the appropriate content.
*/

function loadOrder(){
    const orderPg = document.createElement('div');

    const options = [
        {
            title: `Pancakes`,
            img: `https://images.pexels.com/photos/3323680/pexels-photo-3323680.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        {
            title: `French Toast`,
            img: `https://images.pexels.com/photos/4623075/pexels-photo-4623075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
        },
        {
            title: `Oatmeal`,
            img: `https://images.pexels.com/photos/9027530/pexels-photo-9027530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        {
            title: `Chicken Sandwich`,
            img: `https://images.pexels.com/photos/9211149/pexels-photo-9211149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
        },
        {
            title: `Hamburger`,
            img: `https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        {
            title: `Vegetarian Pasta`,
            img: `https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        {
            title: `Chicken and Potatoes`,
            img: `https://images.pexels.com/photos/7538053/pexels-photo-7538053.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        {
            title: `Seafood Delight`,
            img: `https://images.pexels.com/photos/1618873/pexels-photo-1618873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        {
            title: `Steak`,
            img: `https://images.pexels.com/photos/8753745/pexels-photo-8753745.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        {
            title: `Blueberry Cake`,
            img: `https://images.pexels.com/photos/1247670/pexels-photo-1247670.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        {
            title: `Homemade Ice Cream`,
            img: `https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
        },
        {
            title: `Apple Pie and Ice Cream`,
            img: `https://images.pexels.com/photos/4340676/pexels-photo-4340676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
        },
        {
            title: `Margarita Mocktail`,
            img: `https://images.pexels.com/photos/1590154/pexels-photo-1590154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
        },
        {
            title: `Artisan Soda`,
            img: `https://images.pexels.com/photos/2336670/pexels-photo-2336670.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        {
            title: `Southern Sweet Tea`,
            img: `https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`,
        },
        /* add more:
        {
            title: ``,
            img: ``,
        },
        */
    ];

    let generatedTiles = `<ul class="flex-icons">`;
    for (let i = 0; i < options.length; i++){
        generatedTiles += `<li class="flex-img"><img alt="image of ${options[i].title}" src="${options[i].img}" height="400" width="400"><div class="flex-label">${options[i].title}<button>Order</button></div></li>`
    }
    generatedTiles += `</ul>`;

    // overlaping text and image
    orderPg.innerHTML = `
        <div class="tile-container">${generatedTiles}</div>
    `;
    return orderPg;
}

export {loadOrder as default};
