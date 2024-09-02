function ativarTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  // console.log(tabMenu)
  // console.log(tabContent)

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

ativarTab();

// Accordion List
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const ativo = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(ativo);
    accordionList[0].nextElementSibling.classList.add(ativo);

    function activeAccordion() {
      this.nextElementSibling.classList.toggle(ativo);
      this.classList.toggle(ativo);
    }

    accordionList.forEach((element) => {
      element.addEventListener("click", activeAccordion);
    });
  }

  initAccordion();
}

// Scroll Suave & Link Interno
function initScrollSuave() {
  const menu = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  menu.forEach((element) => {
    element.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

// Animação ao Scroll

function initAnimacaoScroll() {
  const scroll = document.querySelectorAll(".js-scroll");

  if (scroll.length) {
    console.log(scroll);
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      scroll.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const isSectionVisible = elementTop - windowMetade < 0;
        if (isSectionVisible) {
          element.classList.add("ativo");
        } else {
          element.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();
