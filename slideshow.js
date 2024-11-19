var current = 0;
var total = 4;

function next() {
    //(KEN) REPLACE 
    //current++; 
    //if (current >= total) {current = 0;}
    current = (current + 1) % total; 
    
    //Increment the current variable by one
    // current = current + i; SAME as
    //curent +=1; SAME as
    //current++; (means curent + i)

    //If the current variable is greater than the number of slides, reset to 0
    // current %= totalSlideNumber (Aleternative)
    //if (current >= total) {
    //    current = 0;
    //}

   //Create a ref. to all slide divs
   var slides = document.getElementsByClassName("slide")
    //Loop throught all slides
   for (var i = 0; i < slides.length; i++){
        //Hide each secion
        slides[i].style.display = "none";
    }

    //Display the selected slide
    slides[current].style.display = "block";

    console.log("next");
    console.log(current);
}

function previous() {
    // curent --;
    // if (current < 0) { 
    // current = total -1;
    current = (current - 1 + total) % total;  
   
    var slides = document.getElementsByClassName("slide")
   
    //Loop throught all slides (i++)
   for (var i = 0; i < slides.length; i++){
      
        slides[i].style.display = "none";
    }

    //Display the selected slide
    slides[current].style.display = "block";

    console.log("previous");
    console.log(current);
}

setInterval(next, 5000)