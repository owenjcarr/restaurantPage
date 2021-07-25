const contactTab = () => {
    let contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact";

    const contact1 = document.createElement("h3");
    contact1.textContent = "Jen";

    const c1Info = document.createElement("ul");
    c1Info.innerHTML = "<li>Jen</li><li>Phone: (123) 456-7890</li><li>Email: jen@icecream.com</li>";

    const c2Info = document.createElement("ul");
    c2Info.innerHTML = "<li>Berry</li><li>Phone: (321) 654-0987</li><li>Email: berry@icecream.com</li>";

    const contact2 = document.createElement("h3");
    contact2.textContent = "Berry";

    main.append(contactHeader, contact1, c1Info, contact2, c2Info);
};

export default contactTab 