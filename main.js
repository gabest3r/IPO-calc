// Program Title
console.log("hi");

//Button clicker
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Input
  let a = +document.getElementById("client-in").value;
  let b = +document.getElementById("structure-in").value;

  //process
  let grade = Math.sqrt(a ** 2 + b ** 2);
  //output
  document.getElementById("output").innerHTML = grade;
}
