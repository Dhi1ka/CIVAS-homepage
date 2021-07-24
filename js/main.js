// sidebar open close
function openSidebar() {
  document.getElementById("leftSidebar").style.width = "50%";
};

function closeSidebar() {
  document.getElementById("leftSidebar").style.width = "0";
};

function backSidebar() {
  document.getElementById("leftSidebar").style.width = "0";
};

function openCollection() {
  document.querySelector(".sidebar-sublist-collection").style.height = "70px";
  document.querySelector(".sidebar-sublist-collection").style.display = "block";
  document.querySelector(".dropdown-arrow-collection").style.transform = "rotate(180deg)";
};

function openBlog() {
  document.querySelector(".sidebar-sublist-blog").style.height = "110px";
  document.querySelector(".sidebar-sublist-blog").style.display = "block";
  document.querySelector(".dropdown-arrow-blog").style.transform = "rotate(180deg)";
};

openCollection;
openBlog;

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
