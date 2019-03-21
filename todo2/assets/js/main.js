    //check off specific item by clicking
    $("ul").on("click","li", function(){ 
      $(this).toggleClass("completed");
    });

    //click on X to delet todo
    $("ul").on("click", "span", function(event){
      $(this).parent().fadeOut(500, function(){
        $(this).remove();
      });
      event.stopPropagation();
    });
    
    $("input[type='text']").keypress(function(event){
      //which === 13(because enter keycode is 13
      if(event.which === 13){
      //grabbing new todo text from input
        var todoText = $(this).val();
      //clear the input after enter key
      $(this).val("");
      //create a new li and add to ul
      $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"+ todoText+ "</li>");
      }
    });




