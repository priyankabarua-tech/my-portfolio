
$(".navbar .navbar-nav li a").click(function () {
    $(".navbar .navbar-nav li a").removeClass("active");
    $(this).addClass("active");
});

$(document).on('scroll', function () {
    var scrollHeight = $(window).scrollTop();

    if (scrollHeight > 300) {
        $(".navbar").removeClass("bg_nav");
        $(".navbar").addClass("changebg");
    }
    else {
        $(".navbar").removeClass("changebg");
        $(".navbar").addClass("bg_nav");
    }
});

$("#projects #nav-graphic #graphic_designs_body").hide();
$("#projects #nav-graphic #more button").click(function () {
    $("#projects #nav-graphic #graphic_designs_body").slideDown(3000);
    $("#projects #nav-graphic #more").hide();
});

$("#projects #nav-graphic #less button").click(function () {
    $("#projects #nav-graphic #graphic_designs_body").slideUp(500);
    $("#projects #nav-graphic #more").show();
});

//web design
$("#projects #nav-webdesign #web_design_body").hide();
$("#projects #nav-webdesign #more button").click(function () {
    $("#projects #nav-webdesign #web_design_body").slideDown(3000);
    $("#projects #nav-webdesign #more").hide();
});

$("#projects #nav-webdesign #less button").click(function () {
    $("#projects #nav-webdesign #web_design_body").slideUp(500);
    $("#projects #nav-webdesign #more").show();
});

$('#skills .skill-bar').text("");
$(window).on('scroll', function () {
    var hT = $('#skills').offset().top;
    console.log(hT);
    // var hH = $('#skills').height();
    // console.log(hH);
    var wH = $(window).height();
    console.log(wH);
    var wS = $(this).scrollTop();
    console.log(wS);
    var a = (hT - wH + 100);
    console.log(a);

    //triggers when the top of the section enters the bottom of the viewport
    if (wS > a) {
        $('#skills .skill-bar').each(function () {
            var b = $(this).attr('data-width');
            console.log(b);
            $(this).html("<span>" + b + "</span>");
            $(this).animate({
                width: $(this).attr('data-width'),
            }, 2000, 'swing');
        });

        //unbind scroll event so it only animate once
        $(window).off('scroll');
    }

});


function ClearErrors() {
    errors = document.getElementsByClassName('ErrorMsg');
    for (let item of errors) {
        item.innerHTML = "";
        console.log(item);
    }
}


    $("#contact #send_msg").click(function () {

        function ErrorMsg(id,error){
    elem = document.getElementById(id);
    elem.getElementsByClassName('ErrorMsg')[0].innerHTML=error;
}
        var returnVal = true;
        ClearErrors();

        var nameVal = document.getElementById('name').value;
        var emailVal = document.getElementById('email').value;
        var subVal = document.getElementById('sub').value;
        var msgVal = document.getElementById('message').value;

        nameValidate();
        emailValidate();
        subValidate();
        msgValidate();

        function nameValidate() {
            if(nameVal==""){
                ErrorMsg("nameRow","Name must not be empty!");
                returnVal = false;
                return false;
            }
            else if (nameVal.length <= 3) {
                ErrorMsg("nameRow","Name must be greater than letter 3!");
                returnVal = false;
                return false;
            }
        }
        function emailValidate() {

            if (emailVal === "") {
                ErrorMsg("emailRow","Email Address must not be empty!");
                returnVal = false;
                return false;
            }
            else if (emailVal != "") {
                var emailPattern = /^\S+@\S+\.\S+$/;
                var emailCheck = emailPattern.test(emailVal);
                if (emailCheck == false) {
                    ErrorMsg("emailRow","Email Address must be valid it should be like 'xxxxxxxxx@xxxx.com");
                    returnVal = false;
                    return false;
                }
            }

        }

        function subValidate() {
            if (subVal == "") {
                ErrorMsg("subRow","Subject must not be empty!");
                returnVal = false;
                return false;
            }
            else if (subVal.length <= 3) {
                ErrorMsg("subRow","Subject must be valid!");
                returnVal = false;
                return false;
            }
        }

        function msgValidate() {
            if (msgVal == "") {
                ErrorMsg("msgRow","Message must not be empty!");
                returnVal = false;
                return false;
            }
            else if (msgVal.length <=3) {
                ErrorMsg("msgRow","Please, Write some Message!");
                returnVal = false;
                return false;
            }
        }
        console.log(nameVal);
        console.log(emailVal);
        console.log(subVal);

        if(returnVal===true){
           let send_btn= document.getElementById("contact");
           send_btn.getElementsByClassName("send")[0].innerHTML="Message Sent";
           send_btn.getElementsByClassName("send")[0].style.background="green";
           send_btn.getElementsByClassName("send")[0].style.color="white";
           
        }else{
            let send_btn= document.getElementById("contact");
            send_btn.getElementsByClassName("send")[0].innerHTML="Message Error!";
            send_btn.getElementsByClassName("send")[0].style.background="red";
            send_btn.getElementsByClassName("send")[0].style.color="white";
        }
        
        return returnVal;

        

        // console.log(name, email, sub, msg);
    });


$("#lightGallery").lightGallery();



