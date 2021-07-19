// sidebar open close
function openSidebar() {
  document.getElementById("leftSidebar").style.width = "50%";
}

function closeSidebar() {
  document.getElementById("leftSidebar").style.width = "0";
}

function backSidebar() {
  document.getElementById("leftSidebar").style.width = "0";
}

// document.querySelector("option").addEventListener("click", (e) => {
//   console.log(e);document.getElementsByTagName("option").style.transition = "0.5s";
// });

// function openOptions() {
//   document.querySelectorAll("option").style.transition = "all 0.5s";
// }

// browse file
function browseFile() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
    let files = Array.from(input.files);
    // console.log(files);
    document.getElementById("inputFile").value = files[0].name;
  };
  input.click();
}
