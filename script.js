var newCat;
function call(event) {
  var search = document.getElementById("searchQues").value;
  if (search != "") localStorage.setItem("searchValue", search);
  else {
    alert("Please enter something to search");
    event.preventDefault();
  }
  localStorage.setItem("searchValue", search);
  localStorage.setItem("lav", lav);
}
function addCat() {
  var addCat = document.getElementById("newCat").value;
  if (catArray.includes(addCat)) {
    alert("Category already present");
    return;
  } else if (addCat === "") {
    return;
  }
  catArray.push(addCat);
  if (document.getElementById("bigContainer") && document.getElementById("bigContainer").innerHTML) {
    document.getElementById("bigContainer").innerHTML = "";
  }


  let u = JSON.stringify(lavish);

  let r = {};
  r.title = addCat;
  r.ques = [];
  let y = {};
  lavish.data.push(r);

  localStorage.setItem("u", JSON.stringify(lavish))

  addQuestion(j, lavish);
  let p = document.getElementById("smallContainer" + j).firstChild;
  if (lav === 0) {
    p.style.backgroundColor = "#eee";
    p.style.color = "black";

  } else {
    p.style.backgroundColor = "#444";
    p.style.color = "white";
  }
  j++;
}
function addQuest(id, quest) {
  if (!quest) return;
  let o = j;
  let b = id.match(/(\d+)/)[0];
  let y = {};
  y.title = quest;
  y.id = quest;

  lavish.data[b].ques.push(y);
  localStorage.setItem("u", JSON.stringify(lavish))
  if (document.getElementById("smallContainer" + b) || document.getElementById("smallContainer" + b).innerHTML)
    document.getElementById("smallContainer" + b).remove();
  addQuestion(b, lavish);
  greenColor();
  let p = document.getElementById("smallContainer" + b).firstChild;
  let d = p.nextElementSibling;
  let q = document.querySelectorAll(".panel"); 
    if (lav === 0) {
    p.style.backgroundColor = "#eee";
    p.style.color = "black";
    location.reload()

  } else {
    p.style.backgroundColor = "#444";
    p.style.color = "white";
    location.reload()
    d.style.backgroundColor = "#444";
  }
}
let catArray = [];
url = "https://test-data-gules.vercel.app/data.json";
let lav = 0;
if (!localStorage.getItem("clicked")) localStorage.setItem("clicked", '[]');
if (!localStorage.getItem("catArray")) {
  localStorage.setItem("catArray", '[]');
}
else catArray = JSON.parse(localStorage.getItem("catArray"));

let checkedQuestion = JSON.parse(localStorage.getItem("clicked"));
let markedQuestion = [];
let questionArray = [];

let count = 0;
let j;

let lavish;

fetch(url).then((response) => {
  return response.json();
}).then((object) => {

  lavish = object;
  if (!localStorage.getItem("u")) localStorage.setItem("u", JSON.stringify(object));

  lavish = JSON.parse(localStorage.getItem("u"));
  fetchshow(object);

});
localStorage.setItem("obj", lavish);

function fetchshow(object) {
  for (j = 0; j < lavish.data.length; j++) {
    addQuestion(j, object);
  }
  greenColor();


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
    document.getElementById("myProgress").style.backgroundColor = "#2b2a2a";
    let a = document.getElementsByClassName("formId")
    for (let z = 0; z < a.length; z++) {
      let b = a[z].querySelectorAll("input");

      for (let y = 0; y < b.length; y++) {
        b[y].style.backgroundColor = "black";
        b[y].style.color = "rgb(199, 196, 196)";
        b[y].style.padding = "10px";
        b[y].style.border = "none";

      }
    }

    const ele = document.querySelectorAll(".accordion");
    ele.forEach(box => {
      box.style.backgroundColor = "#444";
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
}

function createForm() {
  let Form = document.createElement("form");
  Form.classList.add("formId");
  Form.append(createInput(), createSubmit());
  Form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const outputDiv = document.createElement("div");
    const formDataObject = {};
    let k = 0;
    for (const [key, value] of formData.entries()) {

      formDataObject[key] = value;
      if (questionArray.includes(formDataObject.newQues)) {
        alert("Question already present");
        continue;
      } else if (formDataObject.newQues === "") {
        continue;
      }
      questionArray.push(formDataObject.newQues);
      addQuest(Form.parentElement.id, formDataObject.newQues);
      localStorage.setItem("newQuest", formDataObject);


    }
  });


  return Form;
}
function createInput() {
  let input = document.createElement("input");
  input.type = "search";
  input.id = "newQues";
  input.name = "newQues";
  input.style.margin = "10px";
  input.value = "";
  input.placeholder = "Add Question";
  if (lav === 0) {
    input.style.backgroundColor = "white";
    input.style.color = "black";
    input.style.border = "1px solid black";
  } else {
    input.style.backgroundColor = "black";
    input.style.color = "white";
    input.style.border = "none";
  }
  return input;
}
function createSubmit() {
  let submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "Add";
  submit.name = "Submit";
  submit.value = "Add";
  if (lav === 0) {
    submit.style.backgroundColor = "white";
    submit.style.color = "black";
    submit.style.border = "1px solid black";
  } else {
    submit.style.backgroundColor = "black";
    submit.style.color = "white";
    submit.style.border = "none";
  }
  return submit;
}
let bigContainer = document.createElement("div");
bigContainer.id = "bigContainer";


function addQuestion(j, object) {
  
  let container = document.getElementById("container");
  let smallContainer = document.createElement("div");
  let topicTitle = document.createElement("button");
  let linkContainer = document.createElement("div");
  linkContainer.classList.add("linkContainer");
  linkContainer.id = "linkContainer" + j;
  smallContainer.classList.add("smallContainer");
  smallContainer.id = "smallContainer" + j;
  topicTitle.classList.add("accordion");
  topicTitle.id = "accordion";
  topicTitle.innerText = lavish.data[j].title;
  smallContainer.append(topicTitle);
  linkContainer.appendChild(createForm(j));
  if (!lavish.data[j].ques) return;
  for (let k = 0; k < lavish.data[j].ques.length; k++) {
    count++;
    let quesLink = "";
    
    let quesTitleLink = document.createElement("a");
    let quesTitle = document.createElement("div");
    let quesContent = document.createElement("p");
    quesTitleLink.classList.add("panel");
    quesTitle.classList.add("panel1");
    quesTitleLink.href = quesLink;
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = lavish.data[j].ques[k].id;
    checkBox.value = "mycheck";
    let bookmark = document.createElement("input");
    bookmark.type = "checkbox";
    bookmark.id = lavish.data[j].ques[k].id + "book";
    quesContent.style.display = "inline-block";
    quesTitle.style.color = "black";
    quesTitleLink.style.textDecoration = "none";

    quesContent.textContent = lavish.data[j].ques[k].title;


    if (!quesContent) quesTitleLink.innerHTML = "";
  
    quesTitle.append(bookmark, checkBox, quesContent);
    quesTitleLink.append(quesTitle);
    linkContainer.append(quesTitleLink);

    checkBox.addEventListener("click", function () {
      let checkedElement = lavish.data[j].ques[k].id;


      let temp = this.parentElement.parentElement.style;
      let temp2 = this.parentElement.style;

      if (temp.backgroundColor != "green") {
       
        checkedQuestion.push(checkedElement);
        localStorage.setItem("clicked", JSON.stringify(checkedQuestion));

        greenColor();
      }
      else {
       
        checkedQuestion.splice(checkedQuestion.indexOf(checkedElement), 1);
        localStorage.setItem("clicked", JSON.stringify(checkedQuestion));
        defaultColor(temp, temp2);
      }
      let progress = checkedQuestion.length / count;
      document.getElementById("myBar").style.width = progress * 100 + "%";
    });
    bookmark.addEventListener("click", function () {
      let checkedElement = lavish.data[j].ques[k].title;
      if (markedQuestion.includes(checkedElement)) markedQuestion.splice(markedQuestion.indexOf(checkedElement), 1);
      else markedQuestion.push(checkedElement);
      addBookmark();
    });

  }
  
  smallContainer.append(linkContainer);
  container.append(smallContainer);
  linkContainer.style.display = "none";

  topicTitle.onclick = function () {
    if (this.nextElementSibling.style.display === "none") {
      this.nextElementSibling.style.display = "block";
    } else if (this.nextElementSibling.style.display === "block") {
      this.nextElementSibling.style.display = "none";
    }
  };



}
function addBookmark() {
  let container = document.getElementById("bookmark");
  let linkContainer = document.createElement("div");
  linkContainer.classList.add("linkContainer");
  linkContainer.id = "linkContainerBookmark";
  container.innerHTML = "";

  markedQuestion.forEach((ques) => {
    let quesTitleLink = document.createElement("a");
    let quesTitle = document.createElement("div");
    let quesContent = document.createElement("p");
    quesTitleLink.classList.add("panel");
    quesTitle.classList.add("panel1");
    quesContent.style.display = "inline-block";
    quesContent.textContent = " • " + ques;
    quesTitle.append(quesContent);
    quesTitleLink.append(quesTitle);
    linkContainer.append(quesTitleLink);
  })

  container.append(linkContainer);
  if (markedQuestion[0]) showBook();
  else hideBook();
  


}


function greenColor() {
  checkedQuestion.forEach((ques) => {
    
    document.getElementById(ques).parentElement.parentElement.style.backgroundColor = "green";
    document.getElementById(ques).parentElement.style.color = "white";
    document.getElementById(ques).setAttribute("checked", "true");
  })
}
function defaultColor(temp, temp2) {
  if (lav === 0) {
    temp.backgroundColor = "white";
    temp2.color = "black";
  } else {
    temp.backgroundColor = "#444";
    temp2.color = "white";
  }
}
function showBook() {
  document.getElementById("book-title").style.display = "block";
  document.getElementById("bookmark").style.display = "block";
  
}
function hideBook() {
  document.getElementById("book-title").style.display = "none";
  document.getElementById("bookmark").style.display = "none";
}

var form = document.getElementById("formId");


form.addEventListener('submit', function (event) { event.preventDefault() });


let p = checkedQuestion.length / localStorage.getItem("count");
document.getElementById("myBar").style.width = p * 100 + "%";

function findTheme() {
  if (document.getElementById("body").classList.contains("dark-theme")) return 1;
  else return 0;
}