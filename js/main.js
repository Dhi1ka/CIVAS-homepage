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

// dropdown menu
$('.sidebar-sublist-collection li').hide();
$(".dropdown-collection-link").click(function () {
	$(".sidebar-sublist-collection li").slideToggle("100");
  if( $(".dropdown-arrow-collection").css("transform") == 'none' ) {
    $(".dropdown-arrow-collection").css("transform", "rotate(180deg)");
  } else {
    $(".dropdown-arrow-collection").css("transform", "");
  }
	
});

$('.sidebar-sublist-blog li').hide();
$(".dropdown-blog-link").click(function () {
	$(".sidebar-sublist-blog li").slideToggle("100");
  if( $(".dropdown-arrow-blog").css("transform") == 'none' ) {
    $(".dropdown-arrow-blog").css("transform", "rotate(180deg)");
  } else {
    $(".dropdown-arrow-blog").css("transform", "");
  }
});

// modal toggle
$('.modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('.modal').toggleClass('is-visible');
});

// modal toggle list
$('.modal-toggle-list').on('click', function(e) {
  e.preventDefault();
  $('.modal-list').toggleClass('is-visible');
});

// modal toggle accept
$('.modal-toggle-accept').on('click', function(e) {
  e.preventDefault();
  $('.modal-accept').toggleClass('is-visible');
});

// modal toggle decline
$('.modal-toggle-decline').on('click', function(e) {
  e.preventDefault();
  $('.modal-decline').toggleClass('is-visible');
});

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
