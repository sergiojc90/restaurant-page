const teamSection = (contentDiv) => {

    const teamItems = [
        {name:"Emma Rosado",position:"Head Chef",src:"./assets/team/1.jpg"},
        {name:"Sergio Juárez",position:"Sous Chef",src:"./assets/team/2.jpg"},
        {name:"Wendy Vázquez",position:"Sous Chef",src:"./assets/team/3.jpg"},
    ]

    const section = document.createElement("section");
    const h1 = document.createElement("h1");
    const team = document.createElement("article");

    teamItems.forEach(element => {
        const teamItem = document.createElement("div");
        const teamImg = document.createElement("img")
        const teamName = document.createElement("h2");
        const teamPosition = document.createElement("p");
        
        teamItem.classList.add("content--team--item");
        teamImg.classList.add("content--team--item__img");
        teamImg.setAttribute("src",element.src);
        teamName.classList.add("content--team--item__name");
        teamPosition.classList.add("content--team--item__position");
        
        teamName.textContent = element.name;
        teamPosition.textContent = element.position;
        
        teamItem.appendChild(teamImg);
        teamItem.appendChild(teamName);
        teamItem.appendChild(teamPosition);
        
        team.appendChild(teamItem);
    });

    
    section.appendChild(h1);
    section.appendChild(team);
    
    contentDiv.appendChild(section);
}

export {teamSection};