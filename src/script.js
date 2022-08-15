// VARIABLE DECLARATION.
const Navigation = ["EDUCATION", "ABOUT", "HOME"];
const HomeButton = ["DOWNLOAD RESUME", "CONTACT"];
const BasicInformation = [
  "Age: 19",
  "Email: djshah11@myseneca.ca",
  "Language: English, Gujarati, Hindi",
  "Class Section: NCC",
  "Student ID: 131623217",
  "Instructor: Mr. Mark Meritt",
];
const Education = [
  "Advanced Diploma in Computer Programming and Analysis (2nd Sem)",
  "Seneca College (Jan 2022 - Aug 2024)",
  "CGPA: 3.7",
  "Diploma in Electrical Engineering",
  "The Maharaja Sayajirao University of Baroda(Jul 2018 - Jun 2021)",
  "Precentage: 83%",
];

window.onload = () => {
  // VARIABLE DECLARATION.
  let x = document.getElementById("topnav");
  Navigation.forEach((i) => {
    let button = document.createElement("button");
    button.id = i;
    button.setAttribute("onclick", "clk(id)");
    button.innerHTML = i;
    x.appendChild(button);
  });
  // THIS WILL SHOW THE HOME SCREEN BY DEFAULT TO THE USER.
  home();
};

// THIS FUNCTION WILL BE CALLED WHEN ANY OF THE TOP NAVIGATION BUTTON WOULD BE CLICKED.
function clk(id) {
  // THIS FUNCTION WOULD CALL THE FUNCTION ACCORDING TO THE BUTTON CLICKED.
  // VARIABLE DECLARATION.
  var content = document.getElementById(content);
  switch (id) {
    case "HOME":
      home();
      break;
    case "ABOUT":
      about();
      break;
    case "EDUCATION":
      background();
      break;
  }
}

function home() {
  // VARIABLE DECLARATION.
  let image = document.createElement("img"),
    name = document.createElement("h1"),
    designation = document.createElement("h2");
  content.innerHTML = "";
  image.src = "Images/dp.jpg";
  image.id = "dp";
  image.alt = "Display Picture";
  image.width = "250";
  image.height = "250";
  name.innerHTML = "Dev Shah";
  designation.innerHTML = "Software Developer";
  content.appendChild(image);
  content.appendChild(name);
  content.appendChild(designation);
  HomeButton.forEach((i) => {
    let button = document.createElement("button"),
      anchor = document.createElement("a");
    if (i == "DOWNLOAD RESUME") {
      anchor.href = "Profile.pdf";
      anchor.download = "Resume";
    } else {
      anchor.href = "form.html";
    }
    button.id = i;
    button.innerHTML = i;
    anchor.appendChild(button);
    content.appendChild(anchor);
  });
}

function about() {
  // VARIABLE DECLARATION.
  let heading = document.createElement("h1"),
    declaration = document.createElement("article"),
    head = document.createElement("h3"),
    honesty =
      "I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students.",
    basicInfo = document.createElement("div");
  content.innerHTML = "";
  heading.id = "About";
  heading.innerText = "About Me and Academic Honesty!";
  declaration.innerText = honesty + " Date: 14 / 08 / 2022";
  basicInfo.id = "BasicI";
  head.innerText = "Basic Information";
  basicInfo.appendChild(head);
  BasicInformation.forEach((i) => {
    // VARIABLE DECLARATION.
    let listName = document.createElement("dl"),
      term = document.createElement("dt");
    term.innerHTML = i;
    listName.appendChild(term);
    basicInfo.appendChild(listName);
  });
  content.appendChild(heading);
  content.appendChild(declaration);
  content.appendChild(basicInfo);
}

function background() {
  // VARIABLE DECLARATION.
  let title = document.createElement("h1");
  content.innerHTML = "";
  title.innerText = "Education";
  content.appendChild(title);
  console.log(title); ////////////////
  for (let i = 0; i < Education.length; i++) {
    // VARIABLE DECLARATION.
    let table = document.createElement("table"),
      row = document.createElement("tr"),
      data1 = document.createElement("td"),
      data2 = document.createElement("td");
    table.style.fontSize = "20px";
    data1.style.backgroundColor = "#25283D";
    data1.style.color = "#FFFFE8";
    data1.style.padding = "30px 50px";
    data1.style.width = "60%";
    data2.style.backgroundColor = "#FFFFE8";
    data2.style.color = "#25283D";
    data2.style.padding = "30px 50px";
    data1.innerText = Education[i];
    i++;
    data2.innerHTML = Education[i] + "<br>" + Education[i + 1];
    i++;
    row.appendChild(data1);
    row.appendChild(data2);
    table.appendChild(row);
    content.appendChild(table);
  }
}

function radio() {
  // VARIABLE DECLARATION.
  let pay = document.getElementById("pay");
  pay.removeAttribute("hidden");
}

function blank() {
  // VARIABLE DECLARATION.
  let payRate = document.getElementById("pay");
  if (payRate) {
    payRate.setAttribute("hidden", "");
  }
}
