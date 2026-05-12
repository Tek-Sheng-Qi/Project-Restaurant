function loadHomePage() {
    const mainContent = document.querySelector("#content");
    mainContent.replaceChildren();

    const title = document.createElement("h1");
    title.textContent = "Capybara Paradise Restaurant";

    const body = document.createElement("div");

    const restaurantImage = document.createElement("img");
    restaurantImage.src = "https://images.unsplash.com/photo-1716064554838-f9ae49db992b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    restaurantImage.alt = "Capybara Paradise Restaurant";
    restaurantImage.classList.add("restaurant");

    const caption = document.createElement("p");
    caption.textContent = "Welcome to Capybara Paradise, where every bite feels like a warm hug from nature. Join us for an unforgettable dining experience!";

    //Opening hours content
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("info");
    const hoursTitle = document.createElement("h3");
    hoursTitle.textContent = "Opening Hours";

    const hoursWeekdays = document.createElement("p");
    hoursWeekdays.textContent = "Monday to Fridays: 8am to 8pm";

    const hoursWeekend = document.createElement("p");
    hoursWeekend.textContent = "Saturday & Sunday: 8am to 10pm";

    //Location content
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("info");

    const locationTitle = document.createElement("h3");
    locationTitle.textContent = "Location";

    const locationInfo = document.createElement("p");
    locationInfo.textContent = "123 Capybara Drive, ForestVille 234567";

    locationDiv.appendChild(locationTitle);
    locationDiv.appendChild(locationInfo);

    hoursDiv.appendChild(hoursTitle);
    hoursDiv.appendChild(hoursWeekdays);
    hoursDiv.appendChild(hoursWeekend);


    body.appendChild(restaurantImage);
    body.appendChild(caption);
    body.appendChild(hoursDiv);
    body.appendChild(locationDiv);
    mainContent.appendChild(title);
    mainContent.appendChild(body);
    

}

export { loadHomePage };