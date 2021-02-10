
jQuery(document).ready(function($){

//Mettons les valeurs dans le localstorage
        $ ('#Nom, #Mail, #Tel, #NumeroCarte, #Adresse').on('keyup',function(){
            localStorage.setItem($(this).attr('id'), $(this).val());
                });


//Submit pour stocker les infos saisies dans le localstorage
            $('form').submit(function(e){
                       e.preventDefault();
                         console.log('Submiting . . . ');
                            /*$ ('#Nom, #Mail, #Tel, #NumeroCarte, #Adresse').each(function(){
                                    localStorage.removeItem($(this).attr('id'));
                                  });*/
                             
//Message lorsqu'on click sur le boutton 'submit'
                            $('#contact-submit').click(function(){
                          alert('Your order has been received. Thank you for your purchase, and we hope you enjoy our products !');
                          $('#contact').submit();
                         
                        });
                             });


//Refraiche la page'       
                       //$ ('#Nom, #Mail, #Tel, #NumeroCarte, #Adresse').each(function(){
                               console.log('Page refreshed . . . ');
                           //  $(this).val(localStorage.getItem($(this).attr('id')));

           //  });

});
