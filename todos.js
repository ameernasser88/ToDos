$("ul").on("click","li",function(){
    
  //  alert("clicked" +this.textContent );
    if( $(this).css("color")==="rgb(0, 0, 0)" ){
        
    $(this).css("color","gray");
    $(this).css("text-decoration","line-through");
    }
    else
        {
            $(this).css("color","black");
             $(this).css("text-decoration","none");
            
        }
});

$("ul").on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove;
    });
   
});


$("input[type='text'").keypress(function(event){
    
    if(event.which ===13)
        {
           var todoText = $(this).val();
            $(this).val("");
            $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> "+ todoText +"</li>");
        }
      
});