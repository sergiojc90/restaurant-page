const navBar = (contentDiv,sections) =>{

    const nav = document.createElement("nav");
    const logo = document.createElement("div");
    const ul = document.createElement("ul");

    nav.classList.add("nav");
    logo.classList.add("nav--logo");
    ul.classList.add("nav--ul");

    sections.forEach((element) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
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