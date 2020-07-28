var person = document.getElementsByClassName("person");
var testimonial = document.getElementsByClassName("testimonial");
var slideIndex = 1;

function slide(n)
{
    showSlides(slideIndex += n);
}
function showSlides(n) 
{
    var i;
    if (n > person.length)
     {
         slideIndex = 1;
     }
    if (n < 1)
     {
         slideIndex = person.length;
     }
    for (i = 0; i < person.length; i++) 
    {
        person[i].style.display = "none";
        testimonial[i].style.display = "none";
    }
    person[slideIndex-1].style.display = "block";
    testimonial[slideIndex-1].style.display = "block";

  }