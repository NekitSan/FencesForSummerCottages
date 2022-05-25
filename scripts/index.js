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
document.addEventListener("scroll", () => {
    let menu = document.querySelector(".menu--fixed");
    let menuCoord = menu.getBoundingClientRect();

    let menu_position = menuCoord.top + pageYOffset;
    let scroll_position = window.innerHeight + pageYOffset;
    
    console.log(menu_position);
    console.log(scroll_position);
    
    // if(scroll_position >= menu_position)
    // {
    //     menu.style.position = "fixed";
    //     menu.style.top = 0;

    //     document.querySelector(".header__person").style.display = "none";
    // }
    // else
    // {
    //     menu.style.position = "";
    //     menu.style.top = "";
    //     document.querySelector(".header__person").style.display = "";
    // }
});