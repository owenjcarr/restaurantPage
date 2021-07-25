const menuTab = () => {
    const main = document.getElementById("main");
    const menu = document.createElement("h2");
    menu.textContent = "Menu";

    main.append(menu);

    let name = ["Half Baked", "Cherry Garcia", "Chocolate Fudge Brownie"];
    let pic = ["half-baked.webp","cherry-garcia.webp","cfb.webp"];

    for (let i = 0; i < 3; i++) {
        const iceCream = document.createElement("h3");
        iceCream.textContent = name[i];
        const img = document.createElement("img");
        img.src = pic[i];
        main.append(iceCream, img);
    }
};

export default menuTab

