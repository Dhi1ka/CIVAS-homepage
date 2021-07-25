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
  var colls = [];

  if(colls) {
    document.querySelector(".sidebar-sublist-collection").style.height = "70px";
    document.querySelector(".sidebar-sublist-collection").style.display = "block";
    document.querySelector(".dropdown-arrow-collection").style.transform = "rotate(180deg)";
  } else {
    document.querySelector(".sidebar-sublist-collection").style.height = "0";
    document.querySelector(".sidebar-sublist-collection").style.display = "none";
    document.querySelector(".dropdown-arrow-collection").style.transform = "rotate(0deg)";
  }  
};

function openBlog() {
  var blog = [];

  if(blog) {
    document.querySelector(".sidebar-sublist-blog").style.height = "110px";
    document.querySelector(".sidebar-sublist-blog").style.display = "block";
    document.querySelector(".dropdown-arrow-blog").style.transform = "rotate(180deg)";
  } else {
    document.querySelector(".sidebar-sublist-blog").style.height = "110px";
    document.querySelector(".sidebar-sublist-blog").style.display = "block";
    document.querySelector(".dropdown-arrow-blog").style.transform = "rotate(180deg)";
  }
};

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
