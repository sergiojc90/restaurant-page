const contactSection = (contentDiv) =>{
    const section = document.createElement("section");
    const location = document.createElement("div");
    const opening = document.createElement("div");
    const contactUs = document.createElement("div");

    const locationH2 = document.createElement("h2");
    const locationP = document.createElement("p"); 

    const openingH2 = document.createElement("h2");
    const openingP = document.createElement("p"); 

    const contactUsH2 = document.createElement("h2");
    const contactUsP = document.createElement("p");
    
    location.classList.add("content--contact--location");
    opening.classList.add("content--contact--opening");
    contactUs.classList.add("content--contact--contactUs");

    locationH2.textContent = "Our Location";
    locationP.textContent = "xyz Street, Sector-12 <br/> New Delhi - 000-000000"
    location.appendChild(locationH2);
    location.appendChild(locationP);

    openingH2.textContent = "Opening Hours";
    openingP.textContent = "Monday to Sunday <br/> 9:00 AM - 12:00 PM";
    openingP.appendChild(openingH2);
    openingP.appendChild(openingP);
    
    contactUsH2.textContent = "Contact Us";
    contactUsP.textContent = "99 92432210 <br/> info@gmail.com";
    contactUs.appendChild(contactUsH2);
    contactUs.appendChild(contactUsP);
    
    section.appendChild(location);
    section.appendChild(opening);
    section.appendChild(contactUs);

    contentDiv.appendChild(section);
};

export {contactSection};