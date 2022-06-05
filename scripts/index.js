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

if(document.querySelector(".form") != undefined)
{
    for(let linkForm of document.querySelectorAll(".form--scroll"))
    {
        let formCoord = document.querySelector(".form").getBoundingClientRect().top + pageYOffset;
        linkForm.addEventListener("click", () => {
            window.scrollTo({
                top: formCoord - 120
            });  
        });
    }
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
            document.querySelector(".menu__list").setAttribute("href", "index");
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
document.querySelector("#online_phone").addEventListener("input", () => {
    let valPhone = document.querySelector("#online_phone").value;
    
    if(valPhone == "+" || valPhone == "7" || valPhone == "8")
        document.querySelector("#online_phone").value = "+7";
    if(valPhone.match(/^[0-6,9]/g))
        document.querySelector("#online_phone").value = "+7" + valPhone;

    let autoFullInput = valPhone.match(/8\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/g);
    if( Array.isArray(autoFullInput) )
    {
        document.querySelector("#online_phone").value = autoFullInput[0].replace(/^8/,'+7');
    }
});


function slider()
{
    const controllLeft = document.querySelector(".gallary__slider--control__left");
    const controllRight = document.querySelector(".gallary__slider--control__right");

    const sliderPreview = document.querySelector(".gallary__slider--preview");

    const sliderPreviewIMG = sliderPreview.querySelector("img");
    const sliderPreviewWebp = sliderPreview.querySelector("source");

    const sliderList = document.querySelectorAll(".gallary__slider--list .gallary__slider--list__item");

    sliderPreviewIMG.dataset.item = 0;
    sliderPreviewIMG.setAttribute("src", srcPicture(0).type.img);
    sliderPreviewWebp.setAttribute("srcset", srcPicture(0).type.webp);

    for(let i = 0; i < sliderList.length; i++)
        sliderList[i].dataset.item = i;

    function srcPicture(item)
    {
        let imgItem = sliderList[item].querySelector("img").getAttribute("src");
        let webpItem = sliderList[item].querySelector("source").getAttribute("srcset");

        return {
            "type": {"img": imgItem, "webp": webpItem},
        };
    }

    controllLeft.addEventListener("click", () => {
        sliderPreviewIMG.dataset.item = sliderPreviewIMG.dataset.item - 1;
        if(sliderPreviewIMG.dataset.item < 1)
        {
            sliderPreviewIMG.dataset.item = (sliderList.length - 1);
            sliderPreviewIMG.setAttribute("src", srcPicture(sliderList.length - 1).type.img);
            sliderPreviewWebp.setAttribute("srcset", srcPicture(sliderList.length - 1).type.webp);
        }
        else
        {
            sliderPreviewIMG.setAttribute("src", srcPicture(sliderPreviewIMG.dataset.item).type.img);
            sliderPreviewWebp.setAttribute("srcset", srcPicture(sliderPreviewIMG.dataset.item).type.webp);
        }
    });

    controllRight.addEventListener("click", () => {
        sliderPreviewIMG.dataset.item = (sliderPreviewIMG.dataset.item * 1) + 1;
        if(sliderPreviewIMG.dataset.item > (sliderList.length - 1))
        {
            sliderPreviewIMG.dataset.item = 0;
            sliderPreviewIMG.setAttribute("src", srcPicture(0).type.img);
            sliderPreviewWebp.setAttribute("srcset", srcPicture(0).type.webp);
        }
        else
        {
            sliderPreviewIMG.setAttribute("src", srcPicture(sliderPreviewIMG.dataset.item).type.img);
            sliderPreviewWebp.setAttribute("srcset", srcPicture(sliderPreviewIMG.dataset.item).type.webp);
        }
    });

    for(let item of sliderList)
    {
        item.addEventListener("click", () => {
            sliderPreviewIMG.dataset.item = item.dataset.item;
            let srcIMG = item.querySelector("img").getAttribute("src");
            let srcWEBP = item.querySelector("source").getAttribute("srcset");

            sliderPreviewIMG.setAttribute("src", srcIMG);
            sliderPreviewWebp.setAttribute("srcset", srcWEBP);
        });
    }
    
    // sliderListArea.addEventListener("mouseover", (e) => {
    //     e.scrollIntoView({ behavior: 'smooth' });
    // });
}


if(document.querySelector(".slider"))
    slider();