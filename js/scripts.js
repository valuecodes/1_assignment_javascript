function startScript() {
  // Task 7
  console.log("Hello World");

  // Task 8
  addBackgroundImage();

  let tileWrapper = createTileWrapper();
  let title = createTitle();
  tileWrapper.appendChild(title);

  // Task 9
  let ul = createUlElement();

  ul.appendChild(createLiElement("home"));
  ul.appendChild(createLiElement("news"));
  ul.appendChild(createLiElement("contact"));
  ul.appendChild(createLiElement("about")).addEventListener("click", loadAbout);

  document.body.appendChild(ul);
  createContent();
}

function loadAbout() {
  let content = document.getElementById("content");
  content.innerText = "Welcome visitor";
  document.getElementById("tile-wrapper").style.visibility = "hidden";
}

function addBackgroundImage() {
  document.body.style.backgroundImage = 'url("img/bg.jpg")';
  document.body.style.height = "100vh";
  document.body.style.backgroundSize = "cover";
}

function createTileWrapper() {
  let tileWrapper = document.createElement("div");
  tileWrapper.id = "tile-wrapper";
  document.body.appendChild(tileWrapper);
  tileWrapper.style.top = "50%";
  tileWrapper.style.width = "100%";
  tileWrapper.style.textAlign = "center";
  tileWrapper.style.fontFamily = "impact";
  tileWrapper.style.position = "absolute";
  tileWrapper.style.textTransform = "uppercase";
  return tileWrapper;
}

function createTitle() {
  let title = document.createElement("h1");
  title.innerText = "Work under progress...";
  title.style.width = "fit-content";
  title.style.margin = "auto";
  title.style.background = "black";
  title.style.color = "white";
  return title;
}

function createUlElement() {
  return document.createElement("ul");
}

function createLiElement(name) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.id = name;
  a.className = "btn";
  a.href = "#" + name + ".asp";
  a.innerText = name;
  a.style.textTransform = "capitalize";
  li.appendChild(a);
  return li;
}

function createContent() {
  let content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
}

document.addEventListener("DOMContentLoaded", startScript);
