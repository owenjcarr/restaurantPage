import aboutTab from "./aboutTab";
import menuTab from "./menuTab";
import contactTab from "./contactTab";
import pageLoad from "./pageLoad";

pageLoad();
aboutTab();

const about = document.getElementById("about");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

nav.addEventListener("click", (e) => {
    if(e.target.className === "hidden") {

        about.className = "hidden";
        menu.className = "hidden";
        contact.className = "hidden";
        e.target.className = "active";

        clearMain();

        if (e.target.textContent === "About") {
            aboutTab();
        }
        if (e.target.textContent === "Menu") {
            menuTab();
        }
        if (e.target.textContent === "Contact") {
            contactTab();
        }
    }
});

const clearMain = () => {
    document.getElementById("main").innerHTML = "";
};
