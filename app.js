//-----------------------------//
// Written By: AJ              //
// Date Written: June 23, 2024 //
// Purpose: Extra JS           //
//-----------------------------//

function toggleMenu()
{
    // targeting an element on our webpage and using that element
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icon");

    // when clicked it will add or remove the open class
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}