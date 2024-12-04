const navbarMenuIcon = document.querySelector(".navbar__menu > img");
const navbarLinks = document.querySelector(".navbar__links");

const toggleManuIcon = (event) => {
    /**
     * Function to Toggle The Navigation Menu Button's Icon
     */

    const icons = {
        "../assets/icons/menu.png": "../assets/icons/close.png",
        "../assets/icons/close.png": "../assets/icons/menu.png"
    }

    // Toggle Icon
    const curr = navbarMenuIcon.attributes.src.value;
    navbarMenuIcon.attributes.src.value = icons[curr];

    // Toggle Navigation Links Visibility
    navbarLinks.classList.toggle("open");
}