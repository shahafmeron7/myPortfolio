$(document).ready(() => {
  $(".toggle").click(() => {
    $(".toggle").toggleClass("active");

    $("nav").toggleClass("active");
  });

  $("#nav-ul").children().click(()=>{
    $(".toggle").toggleClass("active");

    $("nav").toggleClass("active");
  })
});

