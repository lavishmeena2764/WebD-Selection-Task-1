function call() {
  var search = document.getElementById("searchQues").value;
  if(search != "") localStorage.setItem("searchValue", search);
  else{
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

   // localStorage.setItem("lav",lav);
  if (document.getElementById("body").classList.contains("dark-theme")) {
    lav = 0;
    localStorage.setItem("lav",lav);
    document.getElementById("body").classList.remove("dark-theme");
    document.getElementById("theme").classList.add("theme-button-light");
    document.getElementById("theme").classList.remove("theme-button-dark");
    document.getElementById("theme").innerText = "Dark Mode";
    let a = document.getElementById("searchQues")
    let b = document.getElementById("submit")

        b.style.backgroundColor = "white";
        b.style.color = "#444";
        b.style.padding = "10px";
        b.style.border = "1px solid black";
        a.style.backgroundColor = "white";
        a.style.color = "#444";
        a.style.padding = "10px";
        a.style.border = "1px solid black";
      //  console.log(document.getElementsByClassName("accordion"))
    //document.getElementById("accordion").style.backgroundColor = "white";/* .style.backgroundColor = "blue" */;
    //console.log(document.getElementById("accordion").style.backgroundColor);/* .style.backgroundColor = "blue" */;
    const ele = document.querySelectorAll(".accordion");
    console.log(ele);
     ele.forEach(box => {
      console.log(box)
      console.log(box.style)
      console.log(box.style.backgroundColor)
      box.style.backgroundColor = "white";
      console.log(box)
      console.log(box.style.backgroundColor)
      //console.log("hisd 5 "+box.style.backgroundColor)
      box.style.color = "black";
      let innerChild = box.nextElementSibling.childNodes;
      console.log(box)
      for (let p = 0; p < innerChild.length; p++) {
        console.log("hii");
        if (innerChild[p].style.backgroundColor != "green") {
          innerChild[p].firstChild.style.color = "black";
          innerChild[p].style.backgroundColor = "white";
        }
      } 
    })

  }
  else {
    lav = 1;
    localStorage.setItem("lav",lav);
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
          //console.log(innerChild[p].firstChild.style.color);
          innerChild[p].firstChild.style.color = "white";
          innerChild[p].style.backgroundColor = "#444";
        }
      }
    })
  }
  /* greenColor(); */


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
      quesTitle.append( quesContent);
      quesTitleLink.append(quesTitle);
      linkContainer.append(quesTitleLink);
      smallContainer.append(linkContainer);
    container.append(smallContainer);
     
    }

    
  }
  



}

/* function addQuestion(j, object) {
  /* console.log("object");
  console.log(object); 
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
  if (!lavish.data[j].ques) return;
  for (let k = 0; k < lavish.data[j].ques.length; k++) {
    count++;
    let quesTitleLink = document.createElement("a");
    let quesTitle = document.createElement("div");
    let quesContent = document.createElement("p");
    quesTitleLink.classList.add("panel");
    quesTitle.classList.add("panel1");

    quesContent.style.display = "inline-block";
    quesTitle.style.color = "black";
    quesTitleLink.style.textDecoration = "none";

    quesContent.textContent = lavish.data[j].ques[k].title;


    //if (!quesContent) quesTitleLink.innerHTML = "";

    if (quesContent.innerText.includes(search) || topicTitle.innerText.includes(search)) {
      quesTitle.append(checkBox, quesContent);
      quesTitleLink.append(quesTitle);
      linkContainer.append(quesTitleLink);
      quesTitle.append(quesContent);
      quesTitleLink.append(quesTitle);
      linkContainer.append(quesTitleLink);
      count++;
    }
    
  }
  /* 
    linkContainer.append(createForm()); 
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



} */

/* function addQuestion(j, object) {
  console.log(object.data);
  let container = document.getElementById("container");
  let smallContainer = document.createElement("div");
  let topicTitle = document.createElement("button");
  let linkContainer = document.createElement("div");
  linkContainer.classList.add("linkContainer");
  smallContainer.classList.add("smallContainer");
  topicTitle.classList.add("accordion");
  topicTitle.id = "accordion";
  topicTitle.innerText = object.data[j].title;
  smallContainer.append(topicTitle);

  for (let k = 0; k < object.data[j].ques.length; k++) {
    console.log(object.data[j].ques.length);
    
    let quesTitleLink = document.createElement("a");
    let quesTitle = document.createElement("div");
    let quesContent = document.createElement("p");
    quesTitleLink.classList.add("panel");
    quesTitle.classList.add("panel1");
    quesContent.style.display = "inline-block";
    quesTitle.style.color = "black";
    quesTitleLink.style.textDecoration = "none";

    quesContent.textContent = object.data[j].ques[k].title;

    if (quesContent.innerText.includes(search) || topicTitle.innerText.includes(search)) {
      //console.log("ho gaya append");
      quesTitle.append(checkBox, quesContent);
      quesTitleLink.append(quesTitle);
      linkContainer.append(quesTitleLink);
      count++;
    }

    checkBox.addEventListener("click", function () {
      let checkedElement = object.data[j].ques[k].id;


      let temp = this.parentElement.parentElement.style;
      let temp2 = this.parentElement.style;

      if (temp.backgroundColor != "green") {
        /* temp.backgroundColor = "green";
        temp2.color = "white"; 
        checkedQuestion.push(checkedElement);
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
        } 
        checkedQuestion.splice(checkedQuestion.indexOf(checkedElement), 1);
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
  }
  console.log(linkContainer);
  if (linkContainer.innerHTML) {
    smallContainer.append(linkContainer);
    container.append(smallContainer);
  }
  topicTitle.onclick = function () {
    if (this.nextElementSibling.style.display === "none") {
      this.nextElementSibling.style.display = "block";
    } else if (this.nextElementSibling.style.display === "block") {
      this.nextElementSibling.style.display = "none";
    }
  };



} */

//if(currentTheme() != lav) changeTheme();