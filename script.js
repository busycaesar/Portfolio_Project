const Navigation=[
    "HOME","ABOUT","CONTACT"
];

window.onload = () => {
    // VARIABLE DECLARATION.
  let x = document.getElementById("topnav");
  console.log("here");//===========================================================
  Navigation.forEach((i) => {
    let button = document.createElement("button");
    button.setAttribute("id",i);  
    button.setAttribute("onclick","clk(id)");
    button.innerHTML = i;
    console.log(button);//=============================================================
    x.appendChild(button);
});
console.log(x);//===========================================
  };
  
  function clk(id) {

}  