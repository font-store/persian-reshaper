  $("document").ready(function(){
            $("#input").keypress(function(){
               var otext = $(this).val();
               //otext = _arabicChar(otext);
               var text =  PersianReshaper.convertArabic(otext);

               $("#output").val(text); 
            });
               
               
               
        });