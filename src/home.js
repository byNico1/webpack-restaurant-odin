function home() {
  const hoursData = {
    Sunday: "8am - 8pm",
    Monday: "6am - 6pm",
    Tuesday: "6am - 6pm",
    Wednesday: "6am - 6pm",
    Thursday: "6am - 10pm",
    Friday: "6am - 10pm",
    Saturday: "8am - 10pm",
  };

  const contentContainer = document.querySelector("#content");

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero", "home");

  const heroContainerOverlay = document.createElement("div");
  heroContainerOverlay.classList.add("hero-content-overlay");
  heroContainer.appendChild(heroContainerOverlay);

  const heroContent = document.createElement("div");
  heroContent.classList.add("hero-content");

  const heroTitle = document.createElement("h2");
  heroTitle.textContent = "Restaurant";
  heroTitle.classList.add("hero__title", "max-w-60");

  const heroParagraph = document.createElement("p");
  heroParagraph.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio cupiditate
                    sint, quia fugit
                    vitae est aliquam, aut unde blanditiis minus quasi, facere odio labore ea repellendus corporis neque
                    laborum ipsam?
                    Nihil minus quidem dolorum saepe quaerat dolorem sunt asperiores cupiditate ratione neque
                    laboriosam, eveniet architecto adipisci eos maxime voluptas enim dolore assumenda. At reiciendis
                    temporibus voluptatum sunt! Inventore, possimus veritatis.
                    Harum quibusdam voluptas id, temporibus laboriosam laudantium aliquid corporis impedit praesentium,
                    excepturi officia ducimus? Provident assumenda rerum dolorem corporis autem, magni fugit quasi
                    fugiat, aperiam non facilis dolores et corrupti.`;
  heroParagraph.classList.add("max-w-60");

  heroContent.appendChild(heroTitle);
  heroContent.appendChild(heroParagraph);
  heroContainer.appendChild(heroContent);

  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("max-w-60", "hours");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours";

  hoursContainer.appendChild(hoursTitle);

  for (let [key, value] of Object.entries(hoursData)) {
    const p = document.createElement("p");
    let strong = document.createElement("strong");
    strong.textContent = `${key}: `;

    p.appendChild(strong);
    const pText = document.createTextNode(value);
    p.appendChild(pText);

    hoursContainer.appendChild(p);
  }

  contentContainer.appendChild(heroContainer);
  contentContainer.appendChild(hoursContainer);
}

export default function loadHome() {
  const content = document.querySelector("#content");
  const body = document.querySelector("body");
  body.id = "home";
  content.textContent = "";
  home();
}
