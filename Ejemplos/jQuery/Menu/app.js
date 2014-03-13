$(

   function () {

          $("#menu").hide();

          $("#menubutton").toggle (
          					function () { 
          								
          								$("#menu").fadeIn(2000, 
          								
          								                function(){ 
          										                    $("#menubutton").html("Ocultar menú");
          								                          }
          								                 ) 
          								}, 
          					
          					function () { 
          					
          					            $("#menu").fadeOut(2000, 
          					            
          					                              function(){ 
          					                                        $("#menubutton").html("Mostrar menú");
          					                                        }
          					                              ) 
          					             }
          					              
          					   ); //toggle


          $("#menu > li > ul").hide();  

          $("#menu > li").hover (

					function () { $(this).children("ul").slideDown(600, "easeOutBounce");  },

                    function () { $(this).children("ul").slideUp(400)  }  

				);

});

