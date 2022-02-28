// Checking if the document is loaded!!!
$(function(){

  $('.txtb').on('keyup', function(e){

    if(e.which == 13 && $(".txtb").val() != ""){

      let value = $("<div class='bg-white w-25 mx-auto rounded my-2 task py-2'></div>").text($(".txtb").val());

      let del = $("<button class='btn btn-danger mx-1'><i class='fa-solid fa-trash'></i></button>").click(function(){
        let p = $(this).parent();
        console.log(p);
        p.fadeOut(function(){
          p.remove();
        });
      });

      // <button class='btn btn-danger'><i class='fa-solid fa-trash'></i></button>
      let check = $("<button class='btn btn-success mx-1'><i class='fa-solid fa-check'></i></button>").click(function(){
        let p = $(this).parent();
        console.log(p);
        p.fadeOut(function(){
          $(".comp").append(p);
          p.fadeIn();
        });
        $(this).remove();
      });


      value.append(del,check);
      $(".notcomp").append(value);
      $(".txtb").val("");

    };

  });


});