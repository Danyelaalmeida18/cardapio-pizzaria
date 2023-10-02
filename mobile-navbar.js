function createMobileNavbar(mobileMenu, navList, navLinks) {
    const activeClass = "active";
  
  
    function handleClick() {
        const navListElement = document.querySelector(navList);
        if (navListElement) {
            navListElement.classList.toggle(activeClass);

            const navLinksElements = document.querySelectorAll(navLinks);

            navLinksElements.forEach((navLink, index) => {
                if (navLink.style.animation) {
                    navLink.style.animation = "";
                } else {
            
                    navLink.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

        const mobileMenuElement = document.querySelector(mobileMenu);
        if (mobileMenuElement) {
          
           mobileMenuElement.classList.toggle(activeClass);
            }
        }
    }

    function addClickEvent() {
        const mobileMenuElement = document.querySelector(mobileMenu);
        if (mobileMenuElement) {
            mobileMenuElement.addEventListener("click", handleClick);
        }
    }

    function init() {
        addClickEvent();
    }

    return {
        init
    };
}

const mobileNavbar = createMobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
mobileNavbar.init();
