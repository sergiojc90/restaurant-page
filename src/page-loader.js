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
    const footer = document.createElement("footer");
    const footer_a = document.createElement("a");
    footer_a.setAttribute("href","https://github.com/sergiojc90/restaurant-page");
    footer_a.setAttribute("target","_blank")
    footer_a.textContent = "Sergio Juárez";
    footer.textContent = "Developed by ";
    footer.appendChild(footer_a);

    contentDiv.appendChild(footer);

    home.addEventListener("click",() =>{
        reload();
        homeSection(contentDiv);
        contentDiv.appendChild(footer);
    });
    about.addEventListener("click",() =>{
        reload();
        aboutSection(contentDiv);
        contentDiv.appendChild(footer);
    });
    menu.addEventListener("click",() =>{
        reload();
        menuSection(contentDiv);
        contentDiv.appendChild(footer);
    });
    feedback.addEventListener("click",() =>{
        reload();
        feedbackSection(contentDiv);
        contentDiv.appendChild(footer);
    });
    team.addEventListener("click",() =>{
        reload();
        teamSection(contentDiv);
        contentDiv.appendChild(footer);
    });
    contact.addEventListener("click",() =>{
        reload();
        contactSection(contentDiv);
        contentDiv.appendChild(footer);
    });

    function reload(){
        contentDiv.removeChild(contentDiv.childNodes[1]);
        if (navBarLinks.classList.contains("active")){
            navBarLinks.classList.remove("active");
        }
    }
};

export {pageLoader};