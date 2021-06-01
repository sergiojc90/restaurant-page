import{navBar} from "./nav";
import{homeSection} from "./home";
import{aboutSection} from "./about";
import{menuSection} from "./menu";
import{feedbackSection} from "./feedbacks";
import{teamSection} from "./team";
import{contactSection} from "./contact";

const pageLoader = (contentDiv,sections) =>{

    navBar(contentDiv,sections);
    homeSection(contentDiv);

    const home = document.getElementById("Home");
    const about = document.getElementById("About");
    const menu = document.getElementById("Menu");
    const feedback = document.getElementById("Testimonials");
    const team = document.getElementById("Team");
    const contact = document.getElementById("Contact");
    const navBarLinks = document.querySelector(".nav--ul");

    home.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        homeSection(contentDiv);
        if (navBarLinks.classList.contains("active")){
            navBarLinks.classList.remove("active");
        }
    });
    about.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        aboutSection(contentDiv);
        if (navBarLinks.classList.contains("active")){
            navBarLinks.classList.remove("active");
        }
    });
    menu.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        menuSection(contentDiv);
        if (navBarLinks.classList.contains("active")){
            navBarLinks.classList.remove("active");
        }
    });
    feedback.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        feedbackSection(contentDiv);
        if (navBarLinks.classList.contains("active")){
            navBarLinks.classList.remove("active");
        }
    });
    team.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        teamSection(contentDiv);
        if (navBarLinks.classList.contains("active")){
            navBarLinks.classList.remove("active");
        }
    });
    contact.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        contactSection(contentDiv);
        if (navBarLinks.classList.contains("active")){
            navBarLinks.classList.remove("active");
        }
    });
};

export {pageLoader};