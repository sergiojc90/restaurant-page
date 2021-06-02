(()=>{"use strict";const e=e=>{const t=document.createElement("section"),n=document.createElement("h1"),a=document.createElement("p");t.classList.add("content--home--section"),n.classList.add("content--home__h1"),a.classList.add("content--home__p"),n.textContent="Dine Out Restaurant",a.textContent="Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour — even dessert.",t.appendChild(n),t.appendChild(a),e.appendChild(t)};((t,n)=>{((e,t)=>{const n=document.createElement("nav"),a=document.createElement("div"),c=document.createElement("span"),d=document.createElement("a"),s=document.createElement("ul"),o=document.createElement("a");o.appendChild(document.createElement("span")),o.appendChild(document.createElement("span")),o.appendChild(document.createElement("span")),n.classList.add("nav"),o.classList.add("nav--toggle-button"),a.classList.add("nav--logo"),d.classList.add("nav--logo__a"),d.textContent="Dine Out",c.classList.add("material-icons"),c.textContent="restaurant",s.classList.add("nav--ul"),a.appendChild(c),a.appendChild(d),t.forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");t.classList.add("nav--ul__li"),t.id=e,n.textContent=e,t.appendChild(n),s.appendChild(t)})),n.appendChild(a),n.appendChild(s),n.appendChild(o),o.addEventListener("click",(()=>{document.querySelector(".nav--ul").classList.toggle("active")})),e.appendChild(n)})(t,n),e(t);const a=document.getElementById("Home"),c=document.getElementById("About"),d=document.getElementById("Menu"),s=document.getElementById("Testimonials"),o=document.getElementById("Team"),i=document.getElementById("Contact"),m=document.querySelector(".nav--ul"),l=document.createElement("footer"),p=document.createElement("a");function r(){t.removeChild(t.childNodes[1]),m.classList.contains("active")&&m.classList.remove("active")}p.setAttribute("href","https://github.com/sergiojc90/restaurant-page"),p.setAttribute("target","_blank"),p.textContent="Sergio Juárez",l.textContent="Developed by ",l.appendChild(p),t.appendChild(l),a.addEventListener("click",(()=>{r(),e(t),t.appendChild(l)})),c.addEventListener("click",(()=>{r(),(e=>{const t=document.createElement("section"),n=document.createElement("img"),a=document.createElement("h1"),c=document.createElement("article"),d=document.createElement("div"),s=document.createElement("h2"),o=document.createElement("p"),i=document.createElement("img");t.classList.add("content--about--section"),n.classList.add("content--about__img"),a.classList.add("content--about__h1"),c.classList.add("content--about__subsection"),d.classList.add("content--about__description"),s.classList.add("content--about__h2"),o.classList.add("content--about__p"),i.classList.add("content--about__subImage"),a.textContent="About Us",s.textContent="Welcome to Dine Out Restaurant",o.textContent="Dine Out is well known with a substantial gathering of people including families, kids, seniors and business experts. Our benevolent condition is perfect for praising unique events, facilitating a business lunch or assembling for a flavorful dinner with loved ones. ",d.appendChild(s),d.appendChild(o),c.appendChild(d),c.appendChild(i),t.appendChild(a),t.appendChild(c),e.appendChild(t)})(t),t.appendChild(l)})),d.addEventListener("click",(()=>{r(),(e=>{const t=document.createElement("section");t.classList.add("content--menu--section");const n=document.createElement("h1");n.textContent="Our Menu";const a=document.createElement("article");[{name:"Item 1",price:"$10.00",src:"./assets/menu/1.jpg"},{name:"Item 2",price:"$20.00",src:"./assets/menu/2.jpg"},{name:"Item 3",price:"$30.00",src:"./assets/menu/3.jpg"},{name:"Item 4",price:"$40.00",src:"./assets/menu/4.jpg"},{name:"Item 5",price:"$50.00",src:"./assets/menu/5.jpg"},{name:"Item 6",price:"$60.00",src:"./assets/menu/6.jpg"},{name:"Item 7",price:"$70.00",src:"./assets/menu/7.jpg"},{name:"Item 8",price:"$80.00",src:"./assets/menu/8.jpg"}].forEach((e=>{const t=document.createElement("div"),n=document.createElement("img"),c=document.createElement("p"),d=document.createElement("p");t.classList.add("content--menu--item"),n.classList.add("content--menu--item__img"),c.classList.add("content--menu--item__desc"),d.classList.add("content--menu--item__price"),n.setAttribute("src",e.src),c.textContent=e.name,d.textContent=e.price,t.appendChild(n),t.appendChild(c),t.appendChild(d),a.appendChild(t)})),t.appendChild(n),t.appendChild(a),e.appendChild(t)})(t),t.appendChild(l)})),s.addEventListener("click",(()=>{r(),(e=>{const t=document.createElement("section");t.classList.add("content--feedbacks--section");const n=document.createElement("h1");n.textContent="Testimonials";const a=document.createElement("article");[{name:"Sergio Juárez",position:"Food Specialist",comment:"Amazing food, thanks for the experience"},{name:"Emma Rosado",position:"Food Specialist",comment:"The food is unbelievable"},{name:"Wendy Vázquez",position:"Food Specialist",comment:"I can't wait to come back for more"}].forEach((e=>{const t=document.createElement("div"),n=document.createElement("h2"),c=document.createElement("p"),d=document.createElement("p");t.classList.add("content--feedback--item"),n.classList.add("content--feedback--item__name"),c.classList.add("content--feedback--item__position"),d.classList.add("content--feedback--item__comment"),n.textContent=e.name,c.textContent=e.position,d.textContent=e.comment,t.appendChild(n),t.appendChild(c),t.appendChild(d),a.appendChild(t)})),t.appendChild(n),t.appendChild(a),e.appendChild(t)})(t),t.appendChild(l)})),o.addEventListener("click",(()=>{r(),(e=>{const t=document.createElement("section");t.classList.add("content--team--section");const n=document.createElement("h1");n.textContent="Our Team";const a=document.createElement("article");[{name:"Wendy Vázquez",position:"Head Chef",src:"./assets/team/1.jpg"},{name:"Sergio Juárez",position:"Sous Chef",src:"./assets/team/2.jpg"},{name:"Emma Rosado",position:"Sous Chef",src:"./assets/team/3.jpg"}].forEach((e=>{const t=document.createElement("div"),n=document.createElement("img"),c=document.createElement("h2"),d=document.createElement("p");t.classList.add("content--team--item"),n.classList.add("content--team--item__img"),n.setAttribute("src",e.src),c.classList.add("content--team--item__name"),d.classList.add("content--team--item__position"),c.textContent=e.name,d.textContent=e.position,t.appendChild(n),t.appendChild(c),t.appendChild(d),a.appendChild(t)})),t.appendChild(n),t.appendChild(a),e.appendChild(t)})(t),t.appendChild(l)})),i.addEventListener("click",(()=>{r(),(e=>{const t=document.createElement("section");t.classList.add("content--contact--section");const n=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),d=document.createElement("h2"),s=document.createElement("p"),o=document.createElement("h2"),i=document.createElement("p"),m=document.createElement("h2"),l=document.createElement("p");n.classList.add("content--contact--location"),a.classList.add("content--contact--opening"),c.classList.add("content--contact--contactUs"),d.textContent="Our Location",s.textContent="xyz Street, Sector-12 New Delhi - 000-000000",n.appendChild(d),n.appendChild(s),o.textContent="Opening Hours",i.textContent="Monday to Sunday 9:00 AM - 12:00 PM",a.appendChild(o),a.appendChild(i),m.textContent="Contact Us",l.textContent="99 92432210 info@gmail.com",c.appendChild(m),c.appendChild(l),t.appendChild(n),t.appendChild(a),t.appendChild(c),e.appendChild(t)})(t),t.appendChild(l)}))})(document.getElementById("content"),["Home","About","Menu","Testimonials","Team","Contact"])})();
//# sourceMappingURL=main.js.map