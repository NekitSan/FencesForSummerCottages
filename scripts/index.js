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
});


document.querySelector(".menu--full").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle(menuMob);
    document.querySelector(".menu__button").classList.toggle(menuMob);
});

// document.body.addEventListener("click", (e) => {
//     console.log(e.target);
//     console.log(e.target.classList.contains(".menu"));
//     if( !e.target.classList.contains(".menu__link") || 
//         !e.target.classList.contains(".menu__item") || 
//         !e.target.classList.contains(".menu--full") || 
//         !e.target.classList.contains(".menu__button") ||
//         !e.target.classList.contains(".menu"))
//     {
//         if(
//             !document.querySelector(".menu").classList.contains(menuMob) &&
//             !document.querySelector(".menu__button").classList.contains(menuMob)
//         )
//         {
//             console.log(true);
//             // document.querySelector(".menu").classList.add(menuMob);
//             // document.querySelector(".menu__button").classList.add(menuMob);
//         }
//     }
// });


if(window.innerWidth < 920)
{
    document.querySelector(".menu__button").addEventListener("click", () => {
        document.querySelector(".menu").classList.toggle(menuMob);
        document.querySelector(".menu__button").classList.toggle(menuMob);
    });
}