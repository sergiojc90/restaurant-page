const navBar = (contentDiv) =>{

    const sections = ["Home","About","Menu","Testimonials","Team","Contact"]
    const nav = document.createElement("nav");
    const logo = document.createElement("div");
    const ul = document.createElement("ul");

    nav.classList.add("nav");
    logo.classList.add("nav--logo");
    ul.classList.add("nav--ul");

    sections.forEach((element,index) => {
        const li = document.createElement("li");
        li.textContent = element;
        li.dataset.index = index;
        ul.appendChild(li);
    });

    nav.appendChild(logo)
    nav.appendChild(ul);

    contentDiv.appendChild(nav);
};

export {navBar};