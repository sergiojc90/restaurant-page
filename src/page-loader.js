import{navBar} from "./nav";
import{homeSection} from "./home";
import{aboutSection} from "./about";
import{menuSection} from "./menu";
import{feedbackSection} from "./feedbacks";
import{teamSection} from "./team";
import{contactSection} from "./contact";

const pageLoader = (contentDiv,sections) =>{

    navBar(contentDiv,sections);

    const tabs = document.querySelectorAll("li");
    const callSections = [homeSection(contentDiv),aboutSection(contentDiv),menuSection(contentDiv),feedbackSection(contentDiv),teamSection(contentDiv),contactSection(contentDiv)];
    tabs.forEach((element,index) =>{
        element.addEventListener("click", callSections[index]);
    });
};

export {pageLoader};