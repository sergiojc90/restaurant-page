const homeSection = (contentDiv) => {

    const section = document.createElement("section");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const button = document.createElement("button");

    section.classList.add("content--home--section");
    h1.classList.add("content--home__h1");
    p.classList.add("content--home__p");
    button.classList.add("content--home__button");

    h1.textContent = "Dine Out Restaurant";
    p.textContent = "Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour — even dessert.";
    button.textContent = "Our Menu";

    section.appendChild(h1);
    section.appendChild(p);
    section.appendChild(button);

    contentDiv.appendChild(section);
}

export {homeSection};