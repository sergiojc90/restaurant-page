const navBar = (contentDiv,sections) =>{

    const nav = document.createElement("nav");
    const logo = document.createElement("div");
    const span = document.createElement("span");
    const aLogo = document.createElement("a");
    const ul = document.createElement("ul");

    nav.classList.add("nav");
    logo.classList.add("nav--logo");
    aLogo.classList.add("nav--logo__a");
    aLogo.textContent = "Dine Out";
    span.classList.add("material-icons");
    span.textContent = "restaurant";
    ul.classList.add("nav--ul");

    aLogo.appendChild(span);
    logo.appendChild(aLogo);
    
    sections.forEach((element) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add("nav--ul__a")
        a.textContent = element;
        a.id = element;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(logo)
    nav.appendChild(ul);

    contentDiv.appendChild(nav);
};

export {navBar};