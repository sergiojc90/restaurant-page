const menuSection = (contentDiv) => {

    const menuItems = [
        {name:"Item 1",price:"$10.00",src:"./assets/menu/1.jpg"},
        {name:"Item 2",price:"$20.00",src:"./assets/menu/2.jpg"},
        {name:"Item 3",price:"$30.00",src:"./assets/menu/3.jpg"},
        {name:"Item 4",price:"$40.00",src:"./assets/menu/4.jpg"},
        {name:"Item 5",price:"$50.00",src:"./assets/menu/5.jpg"},
        {name:"Item 6",price:"$60.00",src:"./assets/menu/6.jpg"},
        {name:"Item 7",price:"$70.00",src:"./assets/menu/7.jpg"},
        {name:"Item 8",price:"$80.00",src:"./assets/menu/8.jpg"},
    ]

    const section = document.createElement("section");
    section.classList.add("content--menu--section");
    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";
    const menu = document.createElement("article");

    menuItems.forEach(element => {
        const menuItem = document.createElement("div");
        const menuItemImg = document.createElement("img");
        const menuItemName = document.createElement("p");
        const menuItemPrice = document.createElement("p");

        menuItem.classList.add("content--menu--item");
        menuItemImg.classList.add("content--menu--item__img");
        menuItemName.classList.add("content--menu--item__desc");
        menuItemPrice.classList.add("content--menu--item__price");

        menuItemImg.setAttribute("src",element.src);
        menuItemName.textContent = element.name;
        menuItemPrice.textContent = element.price;

        menuItem.appendChild(menuItemImg);
        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemPrice);

        menu.appendChild(menuItem);
    });

    
    section.appendChild(h1);
    section.appendChild(menu);
    
    contentDiv.appendChild(section);
}

export {menuSection};