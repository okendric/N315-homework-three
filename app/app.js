function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    //console.log(hashTag + " " + pageID);


    if (pageID != "") {
       $.get(`pages/${pageID}/${pageID}.html`, function(data){
        //console.log("data " + data);

        $("#app").html(data);
 
        $(".button").click(function(e) {
            let buttonID = e.currentTarget.id;
            alert("The name of the button is:  " + buttonID);
            console.log("The name of the button is: " + buttonID);
        })

        });

    } else {
        $.get(`pages/home/home.html`, function(data){
            //console.log("data " + data);
            $("#app").html(data);

            $(".button").click(function(e) {
                let buttonID = e.currentTarget.id;
                alert("The name of the button is:  " + buttonID);
                console.log("The name of the button is: " + buttonID);
            })

            });
    }

}


function initListeners() {

    $(".bars").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    })

    $(".links a").click(function(e) {
        $(".bars").removeClass("active");
        $(".links").removeClass("active");
    })

    $(".button").click(function(e) {
        let buttonID = e.currentTarget.id;
        alert("The name of the button is:  " + buttonID);
        console.log("The name of the button is: " + buttonID);
    })
    

    $(window).on("hashchange", changeRoute);
    changeRoute();

}


$(document).ready(function() {
    initListeners();
});