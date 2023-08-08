function call() {
  var search = document.getElementById("searchQues").value;
  if (search != "") localStorage.setItem("searchValue", search);
  else {
    alert("Please enter something to search");
    event.preventDefault();
  }

}
var search = localStorage.getItem("searchValue");
let lav = localStorage.getItem("lav");

document.getElementById("page-title").innerHTML = "Search results for : " + search;
let lavish = JSON.parse(localStorage.getItem("u"));

for (let j = 0; j < lavish.data.length; j++) {
  addQuestion(j, lavish);
}



function changeTheme() {

  if (document.getElementById("body").classList.contains("dark-theme")) {
    lav = 0;
    localStorage.setItem("lav", lav);
    location.reload();
  }
  else {

    lav = 1;
    localStorage.setItem("lav", lav);
    document.getElementById("body").classList.add("dark-theme");
    document.getElementById("theme").classList.add("theme-button-dark");
    document.getElementById("theme").innerText = "Light Mode";
    document.getElementById("theme").classList.remove("theme-button-light");
    document.getElementById("accordion").style.backgroundColor = "#444";
    let a = document.getElementById("searchQues");
    let b = document.getElementById("submit");
    b.style.backgroundColor = "black";
    b.style.color = "rgb(199, 196, 196)";
    b.style.padding = "10px";
    b.style.border = "none";
    a.style.backgroundColor = "black";
    a.style.color = "rgb(199, 196, 196)";
    a.style.padding = "10px";
    a.style.border = "none";
  }

  const ele = document.querySelectorAll(".accordion");
  ele.forEach(box => {
    box.style.backgroundColor = "black";
    box.style.color = "white";
    let innerChild = box.nextElementSibling.childNodes;

    for (let p = 0; p < innerChild.length; p++) {
      if (innerChild[p].style.backgroundColor != "green") {
        innerChild[p].firstChild.style.color = "white";
        innerChild[p].style.backgroundColor = "#444";
      }
    }
  })
}
function addQuestion(j, object) {
  let container = document.getElementById("container");
  let smallContainer = document.createElement("div");
  let topicTitle = document.createElement("div");
  let linkContainer = document.createElement("div");
  linkContainer.classList.add("linkContainer");
  smallContainer.classList.add("smallContainer");
  topicTitle.classList.add("accordion");
  topicTitle.id = "accordion";
  topicTitle.innerText = object.data[j].title;
  smallContainer.append(topicTitle);

  for (let k = 0; k < object.data[j].ques.length; k++) {

    let quesTitleLink = document.createElement("a");
    let quesTitle = document.createElement("div");
    let quesContent = document.createElement("p");
    quesTitleLink.classList.add("panel");
    quesTitle.classList.add("panel1");


    quesContent.style.display = "inline-block";
    quesTitle.style.color = "#444";
    quesTitleLink.style.cursor = "pointer";
    quesContent.style.marginLeft = "20px";
    quesContent.textContent = "⦿ " + object.data[j].ques[k].title;

    if (quesContent.innerText.includes(search) || topicTitle.innerText.includes(search)) {
      quesTitle.append(quesContent);
      quesTitleLink.append(quesTitle);
      linkContainer.append(quesTitleLink);
      smallContainer.append(linkContainer);
      container.append(smallContainer);
    }
  }
}