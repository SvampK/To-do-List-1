$(document).ready(function(){
    //check off specific item by clicking
    $('li').on("click",function(){ 
      //if li is gray
        if (($(this).css) === "rgb(128, 128, 128)"){
       //turn it black
        //else
          //trun it gray
        }
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        })
    })
    





    
});