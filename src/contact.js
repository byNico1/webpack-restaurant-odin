function contact() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("container");

  const form = document.createElement("form");

  const fnameLabel = document.createElement("label");
  fnameLabel.setAttribute("for", "fname");
  fnameLabel.textContent = "First Name";

  const fnameInput = document.createElement("input");
  fnameInput.setAttribute("type", "text");
  fnameInput.id = "fname";
  fnameInput.setAttribute("placeholder", "your name");
  fnameInput.textContent = "First Name";

  form.appendChild(fnameLabel);
  form.appendChild(fnameInput);

  const lnameLabel = document.createElement("label");
  lnameLabel.setAttribute("for", "lname");
  lnameLabel.textContent = "Last Name";

  const lnameInput = document.createElement("input");
  lnameInput.setAttribute("type", "text");
  lnameInput.id = "lname";
  lnameInput.setAttribute("placeholder", "your last name");
  lnameInput.textContent = "Last Name";

  form.appendChild(lnameLabel);
  form.appendChild(lnameInput);

  const subjectLabel = document.createElement("label");
  subjectLabel.setAttribute("for", "subject");
  subjectLabel.textContent = "Subject";

  const textArea = document.createElement("textarea");
  textArea.id = "subject";
  textArea.setAttribute("placeholder", "Write...");
  textArea.style.height = "200px";

  form.appendChild(subjectLabel);
  form.appendChild(textArea);
  contactContainer.appendChild(form);

  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(contactContainer);
}

export default function loadContact() {
  const content = document.querySelector("#content");
  content.textContent = "";
  const body = document.querySelector("body");
  body.id = "contact";
  contact();
}
