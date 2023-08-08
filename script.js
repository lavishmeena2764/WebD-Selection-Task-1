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
  console.log(addCat);
  if (catArray.includes(addCat)) {
    alert("Category already present");
    return;
  } else if (addCat === "") {
    return;
  }
  catArray.push(addCat);
  if (document.getElementById("bigContainer") && document.getElementById("bigContainer").innerHTML) {
    document.getElementById("bigContainer").innerHTML = "";
    console.log(document.getElementById("bigContainer").innerHTML);
  }


  console.log("j");
  console.log(j);
  let u = JSON.stringify(lavish);
  //localStorage.setItem("u",u)
  console.log("u");

  let r = {};
  r.title = addCat;
  r.ques = [];
  let y = {};
  /* y.title = "New Question";
  y.id = "quesID"; */

  lavish.data.push(r);

  //lavish.data[lavish.data.length - 1].ques.push(y);
  localStorage.setItem("u", JSON.stringify(lavish))

  console.log("lavish with new cat");
  console.log(lavish);
  addQuestion(j, lavish);
  let p = document.getElementById("smallContainer" + j).firstChild;
  if (lav === 0) {
    p.style.backgroundColor = "#eee";
    p.style.color = "black";

  } else {
    p.style.backgroundColor = "#444";
    p.style.color = "white";
  }
  //defaultColor(document.getElementById("accordion").style,document.getElementById("accordion").style);
  j++;
}
function addQuest(id, quest) {
  if (!quest) return;
  let o = j;
  let b = id.match(/(\d+)/)[0];
  //let b = id.charAt(id.length - 1);
  console.log("b ki mkc " + b);
  let y = {};
  y.title = quest;
  y.id = quest;

  lavish.data[b].ques.push(y);
  localStorage.setItem("u", JSON.stringify(lavish))
  console.log("lavish with new cat");
  console.log(lavish);
  if (document.getElementById("smallContainer" + b) || document.getElementById("smallContainer" + b).innerHTML)
    document.getElementById("smallContainer" + b).remove();
  addQuestion(b, lavish);
  greenColor();
  let p = document.getElementById("smallContainer" + b).firstChild;
  let d = p.nextElementSibling;
  let q = document.querySelectorAll(".panel");
  //defaultColor(p.nextElementSibling.firstChild.nextElementSibling.firstChild.firstChild.nextElementSibling.nextElementSibling.style,p.nextElementSibling.firstChild.nextElementSibling.firstChild.firstChild.nextElementSibling.nextElementSibling.style)
  if (lav === 0) {
    p.style.backgroundColor = "#eee";
    p.style.color = "black";
    location.reload()
    /* q.forEach((element)=>{
      console.log("ye wala color"+element.firstChild.firstChild.nextElementSibling.nextElementSibling.style.color)
      element.firstChild.firstChild.nextElementSibling.nextElementSibling.style.color = "black"; 
    }) */
    //q.style.color = "black";

  } else {
    p.style.backgroundColor = "#444";
    p.style.color = "white";
   // q.style.color = "white"; 
    /* q.forEach((element)=>{
      //console.log("ye wala color "+element.firstChild.firstChild.nextElementSibling)
      //element.firstChild.firstChild.nextElementSibling.nextElementSibling.style.color = "black"; 
    })  */
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
//JSON.parse(localStorage.getItem("catArray"));
let markedQuestion = [];
let questionArray = [];
console.log(catArray);
console.log(checkedQuestion);

let count = 0;
let j;

let lavish;
//if (!localStorage.getItem("u")) localStorage.setItem("u", {});
//lavish = localStorage.getItem("u");


fetch(url).then((response) => {
  return response.json();
  console.log(response);
}).then((object) => {

  console.log(object);
  lavish = object;
  if (!localStorage.getItem("u")) localStorage.setItem("u", JSON.stringify(object));

  lavish = JSON.parse(localStorage.getItem("u"));
  console.log("data ki mkc" + lavish.data.length);
  fetchshow(object);
  console.log(object);
  //lavish = object;
  //localStorage.setItem("obj", object.data[0]);

});
//lavish = localStorage.getItem("u");

console.log(lavish);
localStorage.setItem("obj", lavish);

function fetchshow(object) {
  console.log(object);
  for (j = 0; j < lavish.data.length; j++) {
    addQuestion(j, object);
  }
  greenColor();
  //addElement();


  console.log("j");
  console.log(j);
}




function changeTheme() {

  if (document.getElementById("body").classList.contains("dark-theme")) {
    lav = 0;
    localStorage.setItem("lav", lav);
    document.getElementById("body").classList.remove("dark-theme");
    document.getElementById("theme").classList.add("theme-button-light");
    document.getElementById("theme").classList.remove("theme-button-dark");
    document.getElementById("myProgress").style.backgroundColor = "#ececec";
    document.getElementById("theme").innerText = "Dark Mode";/* 
    document.getElementsByTagName("form").firstChild.classList.add("light-theme-input");
    document.getElementsByTagName("form").firstChild.classList.remove("dark-theme-input"); */
    //let form = document.getElementsByTagName("form").querySelectorAll("input");
    let a = document.getElementsByClassName("formId")
    for (let z = 0; z < a.length; z++) {
      let b = a[z].querySelectorAll("input");

      for (let y = 0; y < b.length; y++) {
        b[y].style.backgroundColor = "white";
        b[y].style.color = "#444";
        b[y].style.padding = "10px";
        b[y].style.border = "1px solid black";
      }
    }
    const ele = document.querySelectorAll(".accordion");
    ele.forEach(box => {
      box.style.backgroundColor = "white";
      box.style.color = "black";
      let innerChild = box.nextElementSibling.childNodes;

      for (let p = 0; p < innerChild.length; p++) {
        if (innerChild[p].style.backgroundColor != "green") {
          innerChild[p].firstChild.style.color = "black";
          innerChild[p].style.backgroundColor = "white";
        }
      }
    })

  }
  else {
    lav = 1;
    localStorage.setItem("lav", lav);
    document.getElementById("body").classList.add("dark-theme");
    document.getElementById("theme").classList.add("theme-button-dark");
    document.getElementById("theme").innerText = "Light Mode";
    document.getElementById("theme").classList.remove("theme-button-light");/* 
    document.getElementsByTagName("input").classList.remove("light-theme-input");
    document.getElementsByTagName("input").classList.add("dark-theme-input"); *//* 
    document.getElementsByTagName("form").firstChild.classList.remove("light-theme-input");
    document.getElementsByTagName("form").firstChild.classList.add("dark-theme-input"); */
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
          console.log(innerChild[p].firstChild.style.color);
          innerChild[p].firstChild.style.color = "white";
          innerChild[p].style.backgroundColor = "#444";
        }
      }
    })
  }
  /* greenColor(); */
}

function createForm() {
  let Form = document.createElement("form");
  Form.classList.add("formId");
  Form.append(createInput(), createSubmit());
  Form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
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
      console.log(Form.parentElement);
      localStorage.setItem("newQuest", formDataObject);


      /* let quesTitleLink = document.createElement("a");
      let quesTitle = document.createElement("div");
      let quesContent = document.createElement("p");
      quesTitleLink.classList.add("panel");
      let linkContainer = document.getElementById("linkContainer" + j);
      j++;
      quesTitle.classList.add("panel1");
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.id = formDataObject.newQues;
      checkBox.value = "mycheck";
      let bookmark = document.createElement("input");
      bookmark.type = "checkbox";
      bookmark.id = formDataObject.newQues + "book";
      if (lav === 0) {
        quesTitleLink.style.backgroundColor = "white";
        quesTitle.style.color = "black";
      } else {
        quesTitleLink.style.backgroundColor = "#444";
        quesTitle.style.color = "white";
      }

      quesContent.style.display = "inline-block";
      //quesTitle.style.color = "black";
      quesTitleLink.style.textDecoration = "none";

      quesContent.textContent = formDataObject.newQues;

      //questionArray["ques" + j + k] = formDataObject.newQues;

      quesTitle.append(bookmark, checkBox, quesContent);
      quesTitleLink.append(quesTitle);
      linkContainer.appendChild(quesTitleLink);
      questionArray.push(formDataObject.newQues);
      console.log(questionArray);

      checkBox.addEventListener("click", function () {
        //let checkedElement = object.data[j].ques[k].id;

        console.log(this.parentElement.style.color);
        let temp = this.parentElement.parentElement.style;
        let temp2 = this.parentElement.style;

        if (temp.backgroundColor != "green") {
          count++;
          /* temp.backgroundColor = "green";
          temp2.color = "white"; 
          checkedQuestion.push(formDataObject.newQues);
          console.log(checkedQuestion);
          localStorage.setItem("clicked", JSON.stringify(checkedQuestion));

          greenColor();
        }
        else {
          count--;
          /* if(lav === 0){
            temp.backgroundColor = "white";
            temp2.color = "black";
          }else{
            temp.backgroundColor = "#444";
            temp2.color = "white";
          } 
          checkedQuestion.splice(checkedQuestion.indexOf(formDataObject.newQues), 1);
          console.log(checkedQuestion);
          localStorage.setItem("clicked", JSON.stringify(checkedQuestion));
          defaultColor(temp, temp2);
        }
        let progress = checkedQuestion.length / count;
        document.getElementById("myBar").style.width = progress * 100 + "%";
      });
      bookmark.addEventListener("click", function () {
        let checkedElement = formDataObject.newQues;
        if (markedQuestion.includes(checkedElement)) markedQuestion.splice(markedQuestion.indexOf(checkedElement), 1);
        else markedQuestion.push(checkedElement);
        console.log(markedQuestion);
        addBookmark();
      }); */
      //k++;

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
  //submit.addEventListener("click", addQues());
  return submit;
}
let bigContainer = document.createElement("div");
bigContainer.id = "bigContainer";
/* function addElement() {
  let v = j + 1;
  catArray.forEach((cat) => {



    let container = document.getElementById("container");
    let smallContainer = document.createElement("div");
    let topicTitle = document.createElement("button");
    let linkContainer = document.createElement("div");
    linkContainer.classList.add("linkContainer");
    smallContainer.classList.add("smallContainer");
    smallContainer.id = "smallContainer" + v;
    linkContainer.id = "linkContainer" + v;
    topicTitle.classList.add("accordion");
    topicTitle.id = "accordion";
    topicTitle.innerText = cat;


    //questionArray["title" + v +v] = object.data[j].title;

    //console.log(v);
    smallContainer.append(topicTitle);
    linkContainer.appendChild(createForm(v));
    if (lav === 0) {
      topicTitle.style.backgroundColor = "#eee";
      topicTitle.style.color = "black";
      topicTitle.addEventListener("onmouseover", function () {
        topicTitle.style.backgroundColor = "#ccc";
      });
    } else {
      topicTitle.style.backgroundColor = "#444";
      topicTitle.style.color = "white";
    }

    smallContainer.append(linkContainer);
    bigContainer.append(smallContainer);
    linkContainer.style.display = "none";

    topicTitle.onclick = function () {
      if (this.nextElementSibling.style.display === "none") {
        this.nextElementSibling.style.display = "block";
      } else if (this.nextElementSibling.style.display === "block") {
        this.nextElementSibling.style.display = "none";
      }
    };
    container.append(bigContainer);
    v++;
  })
} */

//questionArray.name = [];  

function addQuestion(j, object) {
  /* console.log("object");
  console.log(object); */
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
  console.log("mkc");
  console.log(j);
  topicTitle.innerText = lavish.data[j].title;
  smallContainer.append(topicTitle);
  linkContainer.appendChild(createForm(j));
  if (!lavish.data[j].ques) return;
  for (let k = 0; k < lavish.data[j].ques.length; k++) {
    count++;
    let quesLink = "";
    /* if (object.data[j].ques[k].p1_link) quesLink = object.data[j].ques[k].p1_link;
    else if (object.data[j].ques[k].p2_link) quesLink = object.data[j].ques[k].p2_link;
    else if (object.data[j].ques[k].yt_link) quesLink = object.data[j].ques[k].yt_link; */
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
    /* questionArray[object.data[j].title] = [];
    questionArray[object.data[j].title].push(object.data[j].ques[k].title); */
    //let g = "title" + j
    //questionArray["title" + j +k] = object.data[j].title;
    //questionArray["ques" + j + k] = object.data[j].ques[k].title;

    quesTitle.append(bookmark, checkBox, quesContent);
    quesTitleLink.append(quesTitle);
    linkContainer.append(quesTitleLink);

    //checkBox.onclick = 

    checkBox.addEventListener("click", function () {
      let checkedElement = lavish.data[j].ques[k].id;


      let temp = this.parentElement.parentElement.style;
      let temp2 = this.parentElement.style;

      if (temp.backgroundColor != "green") {
        /* temp.backgroundColor = "green";
        temp2.color = "white"; */
        checkedQuestion.push(checkedElement);
        localStorage.setItem("clicked", JSON.stringify(checkedQuestion));
        console.log(checkedQuestion);

        greenColor();
      }
      else {
        /* if(lav === 0){
          temp.backgroundColor = "white";
          temp2.color = "black";
        }else{
          temp.backgroundColor = "#444";
          temp2.color = "white";
        } */
        checkedQuestion.splice(checkedQuestion.indexOf(checkedElement), 1);
        localStorage.setItem("clicked", JSON.stringify(checkedQuestion));
        defaultColor(temp, temp2);
      }
      let progress = checkedQuestion.length / count;
      console.log(count);
      console.log(checkedQuestion.length);
      document.getElementById("myBar").style.width = progress * 100 + "%";
      console.log(checkedQuestion);
    });
    bookmark.addEventListener("click", function () {
      let checkedElement = lavish.data[j].ques[k].title;
      if (markedQuestion.includes(checkedElement)) markedQuestion.splice(markedQuestion.indexOf(checkedElement), 1);
      else markedQuestion.push(checkedElement);
      console.log(markedQuestion);
      addBookmark();
    });
    //greenColor();
  }
  /* 
    linkContainer.append(createForm()); */
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
//console.log("ye wala dekh ");
//console.log(questionArray);
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

  /* for (let k = 0; k < markedQuestion.length; k++) {
    let quesTitleLink = document.createElement("a");
    let quesTitle = document.createElement("div");
    let quesContent = document.createElement("p");
    quesTitleLink.classList.add("panel");
    quesTitle.classList.add("panel1");
    let bookmark = document.createElement("input");
    bookmark.type = "checkbox";
    bookmark.id = markedQuestion[k];
    quesContent.style.display = "inline-block";
    quesContent.textContent = markedQuestion[k];
    quesTitle.append(bookmark, quesContent);
    quesTitleLink.append(quesTitle);
    linkContainer.append(quesTitleLink);

    bookmark.addEventListener("click", function () {
      let checkedElement = markedQuestion[k];
      markedQuestion.splice(markedQuestion.indexOf(checkedElement),1);
    });
  } */
  /* 
    linkContainer.append(createForm()); */
  container.append(linkContainer);
  if (markedQuestion[0]) showBook();
  else hideBook();
  //linkContainer.style.display = "none";

  /* container.onclick = function () {
    if (linkContainer.style.display === "none") {
      linkContainer.style.display = "block";
    } else if (linkContainer.style.display === "block") {
      linkContainer.style.display = "none";
    }
  }; */



}

console.log(count);

function greenColor() {
  checkedQuestion.forEach((ques) => {
    //console.log("idhar dekh na mc");
    //console.log(document.getElementById(ques));
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
  /*   if (linkContainer.style.display === "none") {
      linkContainer.style.display = "block";
      bookmark.innerText = "Hide Bookmarks";
    } else if (linkContainer.style.display === "block") {
      bookmark.innerText = "Show Bookmarks";
      linkContainer.style.display = "none";
    } */
}
function hideBook() {
  document.getElementById("book-title").style.display = "none";
  document.getElementById("bookmark").style.display = "none";
}

//Get form element
var form = document.getElementById("formId");

/* function submitForm(event) {

  //Preventing page refresh
  event.preventDefault();
} */

//Calling a function during form submission.
form.addEventListener('submit', function (event) { event.preventDefault() });


let p = checkedQuestion.length / localStorage.getItem("count");
console.log(count);
document.getElementById("myBar").style.width = p * 100 + "%";

function findTheme(){
  if(document.getElementById("body").classList.contains("dark-theme")) return 1;
  else return 0;
}
/* if(lav != findTheme) changeTheme(); */