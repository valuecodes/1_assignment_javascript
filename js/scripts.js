function startScript() {
  // Task 7
  console.log("Hello World");

  // Task 8
  document.body.style.backgroundImage = 'url("img/bg.jpg")';
  document.body.style.height = "100vh";
  document.body.style.backgroundSize = "cover";

  let div = document.createElement("div");
  div.id = "tile-wrapper";
  document.body.appendChild(div);

  let tileWrapper = document.getElementById("tile-wrapper").style;
  tileWrapper.top = "50%";
  tileWrapper.width = "100%";
  tileWrapper.textAlign = "center";
  tileWrapper.fontFamily = "impact";
  tileWrapper.position = "absolute";
  tileWrapper.textTransform = "uppercase";

  let title = document.createElement("h1");
  title.innerText = "Work under progress...";
  title.style.width = "fit-content";
  title.style.margin = "auto";
  title.style.background = "black";
  title.style.color = "white";

  document.getElementById("tile-wrapper").appendChild(title);

  // Task 9
  let ul = document.createElement("ul");

  let li1 = document.createElement("li");
  let a1 = document.createElement("a");
  a1.id = "home";
  a1.className = "btn";
  a1.href = "#default.asp";
  a1.innerText = "Home";
  li1.appendChild(a1);
  ul.appendChild(li1);

  let li2 = document.createElement("li");
  let a2 = document.createElement("a");
  a2.id = "news";
  a2.className = "btn";
  a2.href = "#news.asp";
  a2.innerText = "News";
  li2.appendChild(a2);
  ul.appendChild(li2);

  let li3 = document.createElement("li");
  let a3 = document.createElement("a");
  a3.id = "contact";
  a3.className = "btn";
  a3.href = "#contact.asp";
  a3.innerText = "Contact";
  li3.appendChild(a3);
  ul.appendChild(li3);

  let li4 = document.createElement("li");
  li4.addEventListener("click", loadAbout);
  let a4 = document.createElement("a");
  a4.id = "about";
  a4.className = "btn";
  a4.href = "#about.asp";
  a4.innerText = "About";
  li4.appendChild(a4);
  ul.appendChild(li4);

  document.body.appendChild(ul);

  let content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
}

function loadAbout() {
  let content = document.getElementById("content");
  content.innerText = "Welcome visitor";
  document.getElementById("tile-wrapper").style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", startScript);
