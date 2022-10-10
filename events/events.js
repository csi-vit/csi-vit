$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});


$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

function openModal(x){
    console.log("hello");
    var doc1 = document.getElementsByClassName(x)[0].innerHTML;
    var doc2 = document.getElementsByClassName(x)[1].innerHTML;
    var doc3 = document.getElementsByClassName(x)[2].innerHTML;
    var doc4 = document.getElementsByClassName(x)[3].innerHTML;
    // var doc = document.getElementsByClassName(x)[0].innerHTML;
    // console.log(doc);
    document.getElementById("modal").style.display="block";
    document.getElementsByClassName("eventName")[0].innerHTML=doc1;
    document.getElementsByClassName("eventdate")[0].innerHTML=doc2;
    document.getElementsByClassName("eventtime")[0].innerHTML=doc3;
    document.getElementsByTagName("iframe")[0].src=doc4;
    document.getElementsByClassName("main")[0].style.display="none";
    // document.getElementsByClassName("eventtime")[0].innerHTML=doc;   
}

function closeModal(){
    // console.log("ada");
    document.getElementById("modal").style.display="none";
    document.getElementsByClassName("main")[0].style.display="block";
}