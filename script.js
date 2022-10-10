var slideId = 1;
showSlides(slideId);

function changeSlideId(n) {
    showSlides(slideId += n);
}

function chooseSlide(n) {
    showSlides(slideId = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideId = 1;
    }
    else if (n < 1) {
        slideId = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideId - 1].style.display = "block";
    dots[slideId - 1].className += " active";
}






var sec = 30 * 60 * 1000;
var enddate = new Date();
enddate.setTime(enddate.getTime() + sec);

var x = setInterval(function () {
    var nowsec = new Date();

    var difference = enddate.getTime() - nowsec.getTime();

    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (hours < 10) { hours = 0 + hours.toString() }
    if (minutes < 10) { minutes = 0 + minutes.toString() }
    if (seconds < 10) { seconds = 0 + seconds.toString() }

    document.getElementById("timer").innerHTML
        = hours + ":" + minutes + ":" + seconds;

    if (enddate < nowsec) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "00:00:00";
        document.getElementById("timer").style.color = "red";
        document.getElementById("old-price")
            .className=document.getElementById("old-price")
            .className.replace("noactual-price", "");
        document.getElementById("new-price")
            .className += " noactual-price";
    }
}, 1000);





function justNumberInInput(input) {
    var value = input.value;
    input.value = value.replace(/\D/g, '');
}


function onclickBtn() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var price = "";
    if (document.getElementById("timer").textContent == "00:00:00") {
        price = document.getElementById("old-price").textContent;
    }
    else {
        price = document.getElementById("new-price").textContent;
    }

    if (name != "" && phone != "") {
        alert("ФИО: " + name + "\n Телефон: " + phone + "\n Цена: " + price);
    }
}