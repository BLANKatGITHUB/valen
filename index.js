
document.addEventListener('DOMContentLoaded', function() {
    var aud = new Audio('./Serge Quadrado - Little Princess.mp3');
    document.body.addEventListener('click', function() {
        aud.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
    }, { once: true }); // Ensure the event listener is only triggered once
});

var options = ["are you sure", "it will make me happy", "please reconsider", "please please reconsider", "i beg you", "i beg you on my knees", "i beg you on my knees with tears in my eyes", "i beg you on my knees with tears in my eyes"]

var index = 0;

document.querySelector(".no").addEventListener("click", function() {
    document.querySelector(".chu").style.display = "none";
    document.querySelector(".sad-cat").style.display = "block";
    if(index<options.length) {
    document.querySelector(".no").innerHTML = options[index];
    document.querySelector(".yes").firstChild.style.fontSize = index+2+"rem";

    };  
    document.querySelector(".yes").style.width= (index+1)*10 + "vw";
    document.querySelector(".yes").style.height= (index+1)*10 + "vh";


    index++;
});

document.querySelector(".yes").addEventListener("click", function() {
    document.querySelector(".selected").style.display = "block";
    document.querySelector(".container").style.display = "none";
});