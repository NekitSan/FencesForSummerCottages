// Форматирование картинок
class Webp
{
    eventsAttach()
    {
        this.testWebP(function (support) {

            if (support == true) {
                document.querySelector('body').classList.add('webp');
            } else {
                document.querySelector('body').classList.add('no-webp');
            }
        });
    }
    testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    init()
    {
        this.eventsAttach();
    }
}

const WEBP_TRUE = new Webp();
WEBP_TRUE.init();
const menuMob = "menu--mob";

if(window.innerWidth < 920)
{
    let mobilePhoneTags = document.querySelectorAll(".mob__phone");
    for(let i = 0; i < mobilePhoneTags.length; i++)
    {
        mobilePhoneTags[i].setAttribute("href", "tel:+" + mobilePhoneTags[i].dataset.phone);
    } 
}

//Понравилась? -> Заказать -btn
for(let linkForm of document.querySelectorAll(".form--scroll"))
{
    let formCoord = document.querySelector(".form").getBoundingClientRect().top + pageYOffset;
    linkForm.addEventListener("click", () => {
        window.scrollTo({
            top: formCoord - 120
        });  
    });
}

document.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    let menu = document.querySelector(".menu--fixed");
    let menuCoord = header.getBoundingClientRect();

    let menu_position = menuCoord.bottom + pageYOffset;
    let scroll_position = pageYOffset;
    let menu_top = 40;

    if(scroll_position < menu_position)
    {
        if(window.innerWidth < 920)
        {
            menu.style.position = "fixed";
            menu_top -= scroll_position;
            menu.style.top = menu_top + "px";
            document.querySelector(".mob-logo").style.top = menu_top + "px";
        }

        if(window.innerWidth > 920)
        {
            menu.style.position = "";
            menu.style.top = "";
            document.querySelector(".header__person").style.display = "";
            document.querySelector(".mob-logo").style.top = "";
        }
    }
    
    if(scroll_position >= menu_position)
    {
        menu.style.position = "fixed";
        menu.style.top = "0px";
        document.querySelector(".mob-logo").style.top = "4px";
        document.querySelector(".header__person").style.display = "none";
    }

    document.querySelector(".menu").classList.add(menuMob);
    document.querySelector(".menu__button").classList.add(menuMob);
    document.querySelector(".submenu").classList.add("hidden");
    document.querySelector(".menu__button").style.top = "";
});


document.querySelector(".menu--full").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle(menuMob);
    document.querySelector(".menu__button").classList.toggle(menuMob);
});

document.querySelector(".menu__list").addEventListener("touchstart", () => {
    document.querySelector(".submenu").classList.toggle("hidden");
      
    if(!document.querySelector(".submenu").classList.contains("hidden"))
    {
        document.querySelector(".menu__button").style.top = "434px";
    }
    else
    {
        document.querySelector(".menu__button").style.top = "";
    }
});

if(window.innerWidth > 920)
{
    document.querySelector(".menu__list").addEventListener("mouseover", () => {
        document.querySelector(".submenu").classList.remove("hidden");
        setTimeout(() => {
            document.querySelector(".menu__list").setAttribute("href", "index.html");
        }, 1);
    });
}

if(window.innerWidth < 920)
{
    document.querySelector(".menu__button").addEventListener("click", () => {
        document.querySelector(".menu").classList.toggle(menuMob);
        document.querySelector(".menu__button").classList.toggle(menuMob);
    });
}

document.body.addEventListener("mouseover", (e) => {
    if( !e.target.closest(".menu__list") && 
        !e.target.closest(".submenu") &&
        !e.target.closest(".menu__button")
    )
    {
        document.querySelector(".submenu").classList.add("hidden");
        document.querySelector(".menu__button").style.top = "";
    }
});