const aboutTab = () => {
    const main = document.getElementById("main");

    const aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "About";

    const aboutInfo = document.createElement("p");
    aboutInfo.textContent = "We started Jen & Berry's with one mission: create the best ice cream on the planet. Our ice cream uses milk from happy, grass-fed cows in Wisconsin."

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";

    let hours = ["Monday-Friday: 10:00 am to 5:00 pm", "Saturday: 10:00 am to 8:00pm", "Sunday: Closed"];
    const hoursInfo = document.createElement("ul");
    hours.forEach((hour) => {
        const li = document.createElement("li");
        li.textContent = hour;
        hoursInfo.append(li);
    });


    main.append(aboutHeader, aboutInfo, hoursHeader, hoursInfo);
}

export default aboutTab