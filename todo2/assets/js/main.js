    //check off specific item by clicking
    $("li").click(function(){ 
      $(this).toggleClass("completed");
    })

    //click on X to delet todo
    $("span").click(function(){
      $(this).parent().fadeOut(500, function(){
        $(this).remove();
      });
      event.stopPropagation();
    })
    




