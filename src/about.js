function about() {
  const aboutData = {
    aboutFirstSection: {
      content:
        "Welcome to our Restaurant, where culinary excellence meets warm hospitality in a setting designed to indulge your senses. Nestled 1709 Dryden Rd, Houston, TX 77030-2400, our restaurant is a culinary haven that prides itself on delivering a memorable dining experience.",
      title: "Our Restaurant",
      containerClass: ["about-first-section", "max-w-60"],
    },
    valuesSection: {
      content:
        "At Our Restaurant we believe in the power of exceptional food to bring people together. Our menu is a carefully curated symphony of flavors, crafted by our talented chefs who draw inspiration from global cuisines while using locally sourced, fresh ingredients. Whether you're a connoisseur of fine dining or seeking a casual, yet elevated, culinary adventure, our diverse menu has something to satisfy every palate.",
      containerClass: ["values-section", "max-w-60"],
    },
    invitationSection: {
      content:
        "Step into our inviting and stylish space, where the ambiance seamlessly complements the artistry in our kitchen. The warm tones, contemporary decor, and attentive staff create an atmosphere that is perfect for intimate dinners, family gatherings, or celebrations with friends. We strive to make every visit to our Restaurant a special occasion.",
      containerClass: ["values-section", "max-w-60"],
    },
  };

  const contentContainer = document.querySelector("#content");

  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero", "about");

  const heroContainerOverlay = document.createElement("div");
  heroContainerOverlay.classList.add("hero-content-overlay");
  heroContainer.appendChild(heroContainerOverlay);

  const heroContent = document.createElement("div");
  heroContent.classList.add("hero-content", "about-hero-content");

  const heroTitle = document.createElement("h2");
  heroTitle.textContent = "ABOUT";
  heroTitle.classList.add("hero__title", "max-w-60");

  const heroParagraph = document.createElement("p");
  heroParagraph.textContent = `Learn More About Our Restaurant`;
  heroParagraph.classList.add("max-w-60", "hero__about");

  heroContent.appendChild(heroTitle);
  heroContent.appendChild(heroParagraph);
  heroContainer.appendChild(heroContent);
  contentContainer.appendChild(heroContainer);

  for (let key in aboutData) {
    const dataContainer = document.createElement("div");
    dataContainer.classList.add(...aboutData[key].containerClass);

    if (aboutData[key].title) {
      const dataTitle = document.createElement("h2");
      dataTitle.textContent = aboutData[key].title;
      dataContainer.appendChild(dataTitle);
    }

    const dataText = document.createElement("p");
    dataText.textContent = aboutData[key].content;
    dataContainer.appendChild(dataText);

    contentContainer.appendChild(dataContainer);
  }
}

export default function loadAbout() {
  const content = document.querySelector("#content");
  content.textContent = "";
  const body = document.querySelector("body");
  body.id = "about";
  about();
}
