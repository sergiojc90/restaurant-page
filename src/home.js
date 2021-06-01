const homeSection = (contentDiv) => {

    const section = document.createElement("section");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    
    section.classList.add("content--home--section");
    h1.classList.add("content--home__h1");
    p.classList.add("content--home__p");

    h1.textContent = "Dine Out Restaurant";
    p.textContent = "Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour — even dessert.";

    section.appendChild(h1);
    section.appendChild(p);

    contentDiv.appendChild(section);
}

export {homeSection};