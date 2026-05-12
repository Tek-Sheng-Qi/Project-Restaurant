function loadMenuPage() {
    const mainContent = document.querySelector("#content");
    mainContent.replaceChildren();

    const title = document.createElement("h1");
    title.textContent = "Menu";

    const categories = document.createElement("h2");
    categories.textContent = "Beverages";

    //Drink1
    const beveragesDiv1 = document.createElement("div");
    beveragesDiv1.classList.add("info");
    const drink1Title = document.createElement("h3");
    drink1Title.textContent = "Passionfruit Orange Sparkling Drink";
    const drink1Description = document.createElement("p");
    drink1Description.textContent = "Delicious and cold passionfruit with orange sparkling juice to squench your thirst!";
    const drink1Price = document.createElement("h4");
    drink1Price.textContent = "$4.50";

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const beverageImage1 = document.createElement("img");
    beverageImage1.src= "https://images.unsplash.com/photo-1697479815895-23ea2934711a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    beverageImage1.alt = "Passionfruit Orange Sparkling Drink";
    beverageImage1.classList.add("beverage");

    imageContainer.appendChild(beverageImage1);


    beveragesDiv1.appendChild(drink1Title);
    beveragesDiv1.appendChild(drink1Description);
    beveragesDiv1.appendChild(drink1Price);
    beveragesDiv1.appendChild(imageContainer);

    //Drink2

    const beveragesDiv2 = document.createElement("div");
    beveragesDiv2.classList.add("info");
    const drink2Title = document.createElement("h3");
    drink2Title.textContent = " Melona Oat Milk";
    const drink2Description = document.createElement("p");
    drink2Description.textContent = "Rich and creamy oat milk with the sweetness of summer melon!";
    const drink2Price = document.createElement("h4");
    drink2Price.textContent = "$5.60";

    const imageContainer2 = document.createElement("div");
    imageContainer2.classList.add("image-container");

    const beverageImage2 = document.createElement("img");
    beverageImage2.src= "https://images.unsplash.com/photo-1704224700896-501220134ffe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    beverageImage2.alt = "Melona OatMilk";
    beverageImage2.classList.add("beverage");

    imageContainer2.appendChild(beverageImage2);


    beveragesDiv2.appendChild(drink2Title);
    beveragesDiv2.appendChild(drink2Description);
    beveragesDiv2.appendChild(drink2Price);
    beveragesDiv2.appendChild(imageContainer2);

    mainContent.appendChild(title);
    mainContent.appendChild(categories);

    mainContent.appendChild(beveragesDiv1);
    mainContent.appendChild(beveragesDiv2);

}

export { loadMenuPage };