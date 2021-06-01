const navBar = (contentDiv,sections) =>{

    const nav = document.createElement("nav");
    const logo = document.createElement("div");
    const span = document.createElement("span");
    const aLogo = document.createElement("a");
    const ul = document.createElement("ul");
    const toggleButton = document.createElement("a");

    toggleButton.appendChild(document.createElement("span"));
    toggleButton.appendChild(document.createElement("span"));
    toggleButton.appendChild(document.createElement("span"));

    nav.classList.add("nav");
    toggleButton.classList.add("nav--toggle-button");
    logo.classList.add("nav--logo");
    aLogo.classList.add("nav--logo__a");
    aLogo.textContent = "Dine Out";
    span.classList.add("material-icons");
    span.textContent = "restaurant";
    ul.classList.add("nav--ul");

    logo.appendChild(span);
    logo.appendChild(aLogo);
    
    sections.forEach((element) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        li.classList.add("nav--ul__li");
        li.id = element
        a.textContent = element;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(logo)
    nav.appendChild(ul);
    nav.appendChild(toggleButton);

    toggleButton.addEventListener("click",() =>{
        const navBarLinks = document.querySelector(".nav--ul");
        navBarLinks.classList.toggle("active")
    })

    contentDiv.appendChild(nav);
};

export {navBar};