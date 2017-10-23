$(document).ready(function(){
    $("#obtener").click(function(e){
        e.preventDefault();
            
            
                $.ajax({
                  url: 'https://jsonplaceholder.typicode.com/posts/' + $('#userId').val(), 
                  type: 'GET',
                 // data: datos,
                  dataType: 'json'
                }) 
              
             .done(function(data) {
                $("#td1").text(data.userId),
                $("#td2").text(data.id),
                $("#td3").text(data.title),
                $("#td4").text(data.body);
               
              })
              .fail(function(data) {
                alert( "error" );
              })
              .always(function(data) {
                alert( "complete" );
                });
     
    });

    $("#Mpost").click(function(e){
        e.preventDefault();
        
        var datos = {
            userId: $("#userId").val(),
            id: $("#id").val(),
            title: $("#title").val(),
            body: $("#body").val(),
        };
        
                $.ajax({
                  url: 'https://jsonplaceholder.typicode.com/posts',
                  type: 'POST',
                  data: datos,
                  dataType: 'json'
                }) 
                .done(function(data){
                    $("#td1").html(data.userId),
                    $("#td2").html(data.id),
                    $("#td3").html(data.title),
                    $("#td4").html(data.body)
                 console.log("Exitoso");  
                })
                .fail(function(data){
                    alert("error");
                })
                .always(function(data){
                    alert("Complete");
                });
    });
    
    $("#Mput").click(function(e){
        e.preventDefault();
        var datos = {
            userId: $("#userId").val(),
            id: $("#id").val(),
            title: $("#td3").text(),
            body: $("#td4").text(),
        };
        
         $.ajax({
                  url: 'https://jsonplaceholder.typicode.com/posts/' + $('#userId').val(),
                  type: 'PUT',
                  data: datos,
                  dataType: 'json'
                }) 
                .done(function(data){
                    $("#td1").html(data.userId),
                    $("#td2").html(data.id),
                    $("#title").html(data.title),
                    $("#body").html(data.body),

                  //console.log("Exitoso"); 
                  console.log(data.body);
                })
                .fail(function(data){
                    alert("error");
                })
                .always(function(data){
                    alert("Complete");
                });
    });
   
   $("#MDelete").click(function(e){
        e.preventDefault();
        var datos = {
            userId: $("#userId").val(),
            id: $("#id").val(),
            title: $("#title").val(),
            body: $("#body").val(),
        };
        
         $.ajax({
                  url: 'https://jsonplaceholder.typicode.com/posts/' + $('#userId').val(),
                  type: 'DELETE',
                  data: datos,
                  dataType: 'json'
                }) 
                .done(function(data){
                  console.log("Exitoso");  
                })
                .fail(function(data){
                    alert("error");
                })
                .always(function(data){
                    alert("Complete");
                });
    }) 
    
    
    
});