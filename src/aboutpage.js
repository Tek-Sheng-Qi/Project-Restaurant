function loadAboutPage() {
    const mainContent = document.querySelector("#content");
    mainContent.replaceChildren();

    const title = document.createElement("h1");
    title.textContent = "About Us";

    const imageAbout = document.createElement("img");
    imageAbout.classList.add("about");
    imageAbout.src = "https://images.unsplash.com/photo-1736067780889-740ea83acad9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    imageAbout.alt = "capybaras";


    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("info");

    const description1 = document.createElement("p");
    description1.textContent = "Nestled in the heart of the city, Capybara Paradise was born from a love of good food and great company. Just like the world's most relaxed animal, we believe dining should be a calm, joyful, and unhurried experience.";

    const description2 = document.createElement("p");
    description2.textContent = "Our chefs craft every dish with fresh, locally sourced ingredients, inspired by the rich flavors of South American cuisine — the natural home of the capybara. From hearty mains to indulgent desserts, every bite tells a story.";
    
    const quote = document.createElement("p");
    quote.textContent = "Come hungry. Leave C'appy.";
    quote.classList.add("quote");

    aboutDiv.appendChild(description1);
    aboutDiv.appendChild(description2);
    aboutDiv.appendChild(quote);

    mainContent.appendChild(title);
    mainContent.appendChild(imageAbout);
    mainContent.appendChild(aboutDiv);


}

export { loadAboutPage };