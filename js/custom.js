function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Property must be filled out");
    return false;
  }
}
jQuery (document).ready(function() {
   jQuery(".owl-carousel").owlCarousel({
       'items' : 5,
       'autoPlay' : 2000,
       'goToFirst': true,
       'goToFirstSpeed': 1000,
   });
});