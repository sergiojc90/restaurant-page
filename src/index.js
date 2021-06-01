import {pageLoader} from "./page-loader";

const restaurantPage = (()=>{
    const sections = ["Home","About","Menu","Testimonials","Team","Contact"]
    const contentDiv = document.getElementById("content");
    pageLoader(contentDiv,sections);
})();
