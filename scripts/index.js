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
    let header = document.querySelector(".header");
    let menu = document.querySelector(".menu--fixed");
    let menuCoord = header.getBoundingClientRect();

    let menu_position = menuCoord.bottom + pageYOffset;
    let scroll_position = pageYOffset;
    
    console.log("=======");
    console.log(menuCoord);
    console.log(menu_position);
    console.log(scroll_position);
    
    if(scroll_position >= menu_position)
    {
        menu.style.position = "fixed";
        menu.style.top = 0;
        document.querySelector(".header__person").style.display = "none";
    }
    else
    {
        menu.style.position = "";
        menu.style.top = "";
        document.querySelector(".header__person").style.display = "";
    }
});