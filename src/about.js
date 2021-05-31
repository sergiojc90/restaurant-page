const aboutSection = (contentDiv) => {

    const section = document.createElement("section");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");

    const subSection = document.createElement("article");
    const description = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const button = document.createElement("button");
    const subImage = document.createElement("img");

    section.classList.add("content--about--section");
    img.classList.add("content--about__img");
    h1.classList.add("content--about__h1");

    subSection.classList.add("content--about__subsection");
    description.classList.add("content--about__description");
    h2.classList.add("content--about__h2");
    p.classList.add("content--about__p");
    button.classList.add("content--about__button");
    subImage.classList.add("content--about__subImage");

    h1.textContent = "About Us";

    h2.textContent = "Welcome to Dine Out Restaurant"
    p.textContent = "Dine Out is well known with a substantial gathering of people including families, kids, seniors and business experts. Our benevolent condition is perfect for praising unique events, facilitating a business lunch or assembling for a flavorful dinner with loved ones. ";
    button.textContent = "Check Our Menu";

    description.appendChild(h2);
    description.appendChild(p);
    description.appendChild(button);

    subSection.appendChild(description);
    subSection.appendChild(subImage);

    section.appendChild(h1);
    section.appendChild(subSection);
    
    contentDiv.appendChild(section);
}

export {aboutSection};