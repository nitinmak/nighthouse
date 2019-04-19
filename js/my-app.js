// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    // my_toast();


        // myApp.alert('Here comes About page');
                // window.localStorage.setItem("login",0);
        var islogin = window.localStorage.getItem("login");
// alert(islogin); 

if(islogin == 1){
    $$('#home').trigger("click");
 // window.location.href = "home.html"
  }
    $(document).on('click', '#login_user', function(){  

  $('#login_form').validate({ // initialize the plugin
        errorLabelContainer: "#cs-error-note",
   
     errorClass: 'errors',
    rules: {
     
       
        email: {
           
            required: true,
            email:true,
            
        },
         password: {
           
            required: true,
            
        },
        
    },
    messages: {
       
        
         email: {
           
            required: "Please enter  Email.",
            email:"Please Enter Proper Email",
            
        },
         password: {
           
            required: "Please enter  Password.",
            
            
        },
        
       
         
    },
        submitHandler: function (form) { // for demo
          form =$('#login_form').serialize();
          var  action = $('#action').val();
          var  email = $('#email').val();
         $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
                
     $.ajax({
            url: "https://digitalbcards.in/api/login/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              if(data.status == 0){
               $('.snackbar').html(data.message);
                my_toast();
                
    $('.loader').css('display','none');
    
                // alert(data.message);
              }else{

                window.localStorage.setItem("login",1);
                window.localStorage.setItem("email",email);

               // alert(data.message);
               $('.snackbar').html(data.message);
  // setTimeout(function(){ $('.snackbar').show(); }, 3000);
                my_toast();
    $$('#home').trigger("click");
    $('.loader').css('display','none');

              // $('#home').click();
              // $('#icon').html('<i class="fa fa-check font-30 icon-circle icon-l color-green-dark bg-white shadow-icon-large"></i>');
              // $('#error_msg_title').html('Login Succes');            
        // $('#error_msg').html(data.message);            
// $('#attention').addClass('active-menu-box-modal');
 // window.location.href = "home.html"
              }
            //location.reload();
          }
        })
            return false; // for demo
        }
    });
})

});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="home"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    $('.navbar').show();
    $('.back').hide();
     var email =  window.localStorage.getItem("email");
    // myApp.alert(email);
                        // alert('fdfd');
                         
      $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
                     $.ajax({
            url: "https://digitalbcards.in/api/user_profile/", 
            method: "POST",
            data:{email:email,secrete:"virus"}, 
            dataType:"json",            
           
            success: function(data) {
                // var data = JSON.stringify(data);
               window.localStorage.setItem("user_id",data.id);
               window.localStorage.setItem("language",data.language);
               window.localStorage.setItem("referral",data.Refferal_id);
               window.localStorage.setItem("name",data.name);
               //window.localStorage.setItem("username",data.name);
               window.localStorage.setItem("user_image",data.profile_img);
               // alert(data.name);
                $('#user').html(data.name);
                $('#user_image').attr("src",'https://digitalbcards.in/upload/'+data.profile_img);
                // $('#user_image').css("height",'80px');
                // $('#user_image').css("width",'80px');
               // $('#preloader').hide();
    $('.loader').css('display','none');
                
              
            //location.reload();
          }
        })
                   


})
$$(document).on('pageInit', '.page[data-page="register"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //my_toast();
    $(document).on('click', '#login', function(){  
     window.location = "index.html";
 })


    $(document).on('click', '#register_user', function(){  
 
$('#register_form').validate({ // initialize the plugin
        errorLabelContainer: "#cs-error-note",
   
     errorClass: 'errors',
    rules: {
     
        name: {
           
            required: true,
           
            
        },
        mobile: {
           
            required: true,
            number:true,
            maxlength:10,
            minlength:10,
           
            
        },
        email: {
           
            required: true,
            email:true,
            
        },
         password: {
           
            required: true,
            
        },
         re_pass: {
                    equalTo: "#password"
                },
        
    },
    messages: {
       
         name: {
           
            required: "Please enter  Name.",
          
            
        },
         email: {
           
            required: "Please enter  Email.",
            email:"Please Enter Proper Email",
            
        },
         mobile: {
           
            required: "Please enter  Mobile.",
            number:"Please Enter Proper Mobile",
            maxlength:"Please Enter Proper Mobile",
            minlength:"Please Enter Proper Mobile",
            
        },
         password: {
           
            required: "Please enter  Password.",
            
            
        },
        re_pass:{
           equalTo: "Password Not Match.",
        }
        
       
         
    },
        submitHandler: function (form) { // for demo
          form =$('#register_form').serialize();
          var  action = $('#action').val();
          var  email = $('#email').val();
          // var  email = $('#email').val();
           $('.pages').prepend(' <div class="loader justify-content-center "><div class="maxui-roller align-self-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>');
    $('.loader').css('display','flex');
     $.ajax({
            url: "https://digitalbcards.in/api/register/", 
            method: "POST",
            data:form, 
            dataType:"json",            
           
            success: function(data) {
              if(data.status == 0){
               
                // myApp.alert(data.message);
                $('.snackbar').html(data.message);
                my_toast();
    $('.loader').css('display','none');

              }else{

               window.localStorage.setItem("login",1);
               window.localStorage.setItem("email",email);
                // myApp.alert(data.message);
                  $('.snackbar').html(data.message);
// $$('#home').trigger("click");
                my_toast();
    $('.loader').css('display','none');

    
            //window.location.href = "home.html";
            location.reload();
              }
            //location.reload();
          }
        })
            return false; // for demo
        }
    });
})

   // $('.navbar').show();
    //$('.back').hide();
})