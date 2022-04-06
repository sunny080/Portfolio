// let wrapper = document.querySelector('.link');
// let toggle = document.querySelector('.burger');

// window.onclick=function(){

//     toggle.onclick=function(){
//     toggle.classList.toggle('active');
//     wrapper.classList.toggle('open')
//     }

// }

const nav = document.querySelector(".link");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  burger.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("open");
    burger.classList.toggle("active");
  });
});

// end

const menu = [
  {
    id: 1,
    title: "bacon overflow",
    category: "Branding",
    //   price: 8.99,
    img: "./images/motion.png",
    //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 2,
    title: "bacon overflow",
    category: "Branding",
    //   price: 8.99,
    img: "./images/girls.png",
    //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },

  {
    id: 3,
    title: "bacon overflow",
    category: "Branding",
    //   price: 8.99,
    img: "./images/gamla.png",
    //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },

  {
    id: 4,
    title: "bacon overflow",
    category: "interaction",
    //   price: 8.99,
    img: "./images/blocks.png",
    //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 5,
    title: "bacon overflow",
    category: "Branding",
    //   price: 8.99,
    img: "./images/mountain.png",
    //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },

  {
    id: 6,
    title: "american classic",
    category: "interaction",
    //   price: 12.99,
    img: "./images/mountains.png",
    //   desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 7,
    title: "quarantine buddy",
    category: "UI/UX",
    //   price: 16.99,
    img: "./images/red.png",
    //   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 8,
    title: "bison steak",
    category: "UI/UX",
    //   price: 22.99,
    img: "./images/ux.png",
    //   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 9,
    title: "bacon overflow",
    category: "interaction",
    //   price: 8.99,
    img: "./images/illustartor.png",
    //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 10,
    title: "bacon overflow",
    category: "interaction",
    //   price: 8.99,
    img: "./images/oneman.jpg",
    //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 11,
    title: "bacon overflow",
    category: "UI/UX",
    //   price: 8.99,
    img: "./images/inter.png",
    //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 12,
    title: "bacon overflow",
    category: "web",
    //   price: 8.99,
    img: "./images/mountains.png",
    //   desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
];

const sectionCenter = document.querySelector(".projects");

const container = document.querySelector(".buttons");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
  
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //    console.log(item);

    return `
            <div class="projects-images"><img src=${item.img} class="projects-image" alt=${item.title}></div>
            <div class="projects-images"><img src=${item.img} class="projects-image" alt=${item.title}></div>
            <div class="projects-images"><img src=${item.img} class="projects-image" alt=${item.title}></div>
            <div class="projects-images"><img src=${item.img} class="projects-image" alt=${item.title}></div>
            <div class="projects-images"><img src=${item.img} class="projects-image" alt=${item.title}></div>
            <div class="projects-images"><img src=${item.img} class="projects-image" alt=${item.title}></div>
            <div class="projects-images"><img src=${item.img} class="projects-image" alt=${item.title}></div>
            <div class="projects-images"><img src=${item.img} class="projects-image" alt=${item.title}></div>

      `;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          return values;
        },
        ["all"]
      );
      const categoryBtns = categories
        .map(function (category) {
          return `<button class="btn3 nav2" type="button" data-id=${category}>${category}</button>`;
        })
        .join("");
      container.innerHTML = categoryBtns;
      const filterBtns = container.querySelectorAll(".nav2");
    
      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          // console.log(menuCategory);
          if (category === "all") {
            displayMenuItems(menu);
          } else {
            displayMenuItems(menuCategory);
          }
        });
      });
}
