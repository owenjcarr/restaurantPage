const pageLoad = () => {
    const content = document.querySelector("#content");

    const name = document.createElement("h1");
    name.id = "name";
    name.textContent = "Jen & Berry's"

    const nav = document.createElement("div");
    nav.id = "nav";

    const about = document.createElement("span");
    about.id = "about";
    about.className = "active";
    about.textContent = "About"; 
    

    const menu = document.createElement("span");
    menu.id = "menu";
    menu.className = "hidden";
    menu.innerText = "Menu";

    const contact = document.createElement("span");
    contact.id = "contact";
    contact.className = "hidden";
    contact.innerText = "Contact";

    const main = document.createElement("div");
    main.id = "main";

    nav.append(about, menu, contact)
    content.append(name, nav, main);
}

export default pageLoad