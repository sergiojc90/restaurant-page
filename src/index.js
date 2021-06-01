import {pageLoader} from "./page-loader";
import {navBar} from "./nav";

const restaurantPage = (()=>{
    const sections = ["Home","About","Menu","Testimonials","Team","Contact"]
    const contentDiv = document.getElementById("content");
    pageLoader(contentDiv,sections);
})();
