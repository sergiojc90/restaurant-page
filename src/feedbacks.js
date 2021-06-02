const feedbackSection = (contentDiv) => {

    const feedbackItems = [
        {name:"Sergio Juárez",position:"Food Specialist",comment:"Amazing food, thanks for the experience"},
        {name:"Emma Rosado",position:"Food Specialist",comment:"The food is unbelievable"},
        {name:"Wendy Vázquez",position:"Food Specialist",comment:"I can't wait to come back for more"},
    ]

    const section = document.createElement("section");
    section.classList.add("content--feedbacks--section");
    const h1 = document.createElement("h1");
    h1.textContent = "Testimonials";
    const feedbacks = document.createElement("article");

    feedbackItems.forEach(element => {
        const feedbackItem = document.createElement("div");
        const feedbackName = document.createElement("h2");
        const feedbackPosition = document.createElement("p");
        const feedbackComment = document.createElement("p");

        feedbackItem.classList.add("content--feedback--item");
        feedbackName.classList.add("content--feedback--item__name");
        feedbackPosition.classList.add("content--feedback--item__position");
        feedbackComment.classList.add("content--feedback--item__comment");

        feedbackName.textContent = element.name;
        feedbackPosition.textContent = element.position;
        feedbackComment.textContent = element.comment;

        feedbackItem.appendChild(feedbackName);
        feedbackItem.appendChild(feedbackPosition);
        feedbackItem.appendChild(feedbackComment);

        feedbacks.appendChild(feedbackItem);
    });

    
    section.appendChild(h1);
    section.appendChild(feedbacks);
    
    contentDiv.appendChild(section);
}

export {feedbackSection};