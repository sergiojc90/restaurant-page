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

    home.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        homeSection(contentDiv);
    });
    about.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        aboutSection(contentDiv);
    });
    menu.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        menuSection(contentDiv);
    });
    feedback.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        feedbackSection(contentDiv);
    });
    team.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        teamSection(contentDiv);
    });
    contact.addEventListener("click",() =>{
        contentDiv.removeChild(contentDiv.lastChild);
        contactSection(contentDiv);
    });
};

export {pageLoader};