//-----------------------------//
// Written By..: AJ            //
// Date Written: June 23, 2024 //
// Last Written: July 11, 2024 //
// Purpose.....: Portfolio JS  //
//-----------------------------//

function toggleMenu()
{
    // targeting an element on our webpage and using that element //
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-icon");

    // when clicked it will add or remove the open class // 
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark &  Light Mode //

const btn = document.getElementById("modeToggle"); // targeting specific id //
const btn2 = document.getElementById("modeToggle2");

const themeIcons = document.querySelectorAll(".icon"); // target all class icons (.i = class) //

const currentTheme = localStorage.getItem("theme"); // keeps track of what theme we're on. //

if (currentTheme === "dark") // === equals //
{
    setDarkMode();
}

btn.addEventListener("click", function () // calls setTheme if button is clicked //
{
    setTheme();
});

btn2.addEventListener("click", function () 
{
    setTheme();
});

function setTheme()
{
     let currentTheme = document.body.getAttribute("theme"); // checks what theme we are on //

     if (currentTheme === "dark") // if current theme is dark switch to light //
     {
        setLightMode();
     }
     else // if not then switch to dark //
     {
        setDarkMode();
     }
}

function setDarkMode()
{
    document.body.setAttribute("theme", "dark"); // theme becomes dark //
    localStorage.setItem("theme", "dark"); // leaves as dark theme when come back //

    themeIcons.forEach((icon) => 
    {
        icon.src = icon.getAttribute("src-dark");
    });
}

function setLightMode()
{
    document.body.removeAttribute("theme", "light"); // theme becomes dark //
    localStorage.setItem("theme", "light"); // leaves as dark theme when come back //

    themeIcons.forEach((icon) => 
    {
        icon.src = icon.getAttribute("src-light");
    });
}
