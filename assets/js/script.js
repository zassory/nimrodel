
var aComuniquemonos = document.getElementById("aComuniquemonos");


aComuniquemonos.addEventListener("click", function(){
    var divForm1 = document.getElementById("divForm1");    
    divForm1.setAttribute("class" ,"mt-2 mb-2 size_1 mx-auto bg-dark texto-blanco rounded text-center d-lg-block d-md-block d-sm-block");    
    divForm1.style.width="100%";
    
});
aReserva.addEventListener("click", function(){
    var divForm2 = document.getElementById("divForm2");
    divForm2.setAttribute("class" , "row size_2 mx-auto bg-dark texto-blanco rounded text-center d-lg-block d-md-block d-sm-block")
    divForm2.style.width="100%";
});

var btnEnviar = document.getElementById("btnEnviar");


 btnEnviar.addEventListener("click", function(){
    var nombre = document.getElementById("txtNombre").value;
    var correo = document.getElementById("txtCorreo").value;
    var telefono = document.getElementById("txtTelefono").value;
    var motivo = document.getElementById("txtMotivo").value;
    var comentario = document.getElementById("txtComentario").value;

    if(nombre == "" || correo == "" || telefono == "" || motivo == "" || comentario == ""){
    alert("Todos los campos son obligatorios");        
    }else{
    alert(`Gracias ${nombre} , te hemos enviado un correo \n a ${correo} , te llamaremos al
    numero de telefono ${telefono} \n por el motivo ${motivo} y comentario: ${comentario}`);
    }
 });

 $(document).ready(function(){
    

    $("#btnReserva").click(function(){
        let nombre_reserva = $("#nombre-reserva").val();
        let correo_reserva = $("#correo-reserva").val();
        let telefono_reserva = $("#telefono-reserva").val();
        let fecha_reserva = $("#fecha-reserva").val();
        let hora_reserva = $("#hora-reserva").val();
        let cantidad_asistentes = $("#cantidad-asistentes").val();        
        alert(`Estimado ${nombre_reserva} agradecemos por reservar con nosotros. Hemos registrado ${cantidad_asistentes} asistentes. Se ha enviado el código de confirmación al correo ${correo_reserva} Gracias por preferirnos`);
    });

    //Img1

    $("#img1").click(function(){        
        let url = $(this).attr('src');
        let titulo1 = $("#card1 h5").text();                
        let p1 = $("#card1 p").text();        
        
        $("#modal img").attr('src', url);
        $("#modal h5").text(titulo1);
        $("#modal img").css("height","50%");
        $("#modal img").css("width","50%");

        $("#modal h5").css("background-color","#1A1615");
        $("#modal h5").css("color","white");        
        $("#modal h5").css("margin","0 auto");                
        $("#modal h5").css("text-align","center");
        $("#modal h5").css("height","50%");
        $("#modal h5").css("width","50%");

        $("#modal p").text(p1);
        $("#modal p").css("background-color","#1A1615");
        $("#modal p").css("color","white");
        $("#modal p").css("margin","0 auto");
        $("#modal p").css("text-align","center");
        $("#modal p").css("height","50%");
        $("#modal p").css("width","50%");
        $("#modal p").css("padding-bottom","1rem");

        $("#modal").show();        
    });
     $("#modal").click(function(){
         $("#modal").hide();
     });
     //Img2

     $("#img2").click(function(){        
        let url = $(this).attr('src');
        let titulo2 = $("#card2 h5").text();
        let p2 = $("#card2 p").text();        
        $("#modal img").attr('src', url);
        $("#modal h5").text(titulo2);
        $("#modal img").css("height","50%");
        $("#modal img").css("width","50%");
        $("#modal h5").css("background-color","#1A1615");
        $("#modal h5").css("color","white");        
        $("#modal h5").css("margin","0 auto");
        
        
        $("#modal h5").css("text-align","center");
        $("#modal h5").css("height","50%");
        $("#modal h5").css("width","50%");

        $("#modal p").text(p2);
        $("#modal p").css("background-color","#1A1615");
        $("#modal p").css("color","white");
        $("#modal p").css("margin","0 auto");
        $("#modal p").css("text-align","center");
        $("#modal p").css("height","50%");
        $("#modal p").css("width","50%");
        $("#modal p").css("padding-bottom","1rem");

        $("#modal").show();        
    });
     $("#modal").click(function(){
         $("#modal").hide();
     });
     //Img3

    $("#img3").click(function(){        
        let url = $(this).attr('src');
        let titulo3 = $("#card3 h5").text();
        let p3 = $("#card3 p").text();
        console.log(titulo3);
        $("#modal img").attr('src', url);
        $("#modal h5").text(titulo3);
        $("#modal img").css("height","50%");
        $("#modal img").css("width","50%");
        $("#modal h5").css("background-color","#1A1615");
        $("#modal h5").css("color","white");        
        $("#modal h5").css("margin","0 auto");
        
        
        $("#modal h5").css("text-align","center");
        $("#modal h5").css("height","50%");
        $("#modal h5").css("width","50%");

        $("#modal p").text(p3);
        $("#modal p").css("background-color","#1A1615");
        $("#modal p").css("color","white");
        $("#modal p").css("margin","0 auto");
        $("#modal p").css("text-align","center");
        $("#modal p").css("height","50%");
        $("#modal p").css("width","50%");
        $("#modal p").css("padding-bottom","1rem");

        $("#modal").show();        
    });
     $("#modal").click(function(){
         $("#modal").hide();
     });
 });

 function mostrarModal(){
    var modal = document.getElementById("myModal2");
    modal.style.display = "block";    
    modal.setAttribute("class","modal animate__animated animate__fadeIn");
 }
 function cerrarModal(){
    var modal = document.getElementById("myModal2");
    modal.style.display = "none";
    modal.setAttribute("class","modal animate__fadeIn animate__animated ");
 }

 var aModal = document.getElementById("aModal");

 aModal.addEventListener("click", function(){
    mostrarModal();
 })

 var btnCerrarModal = document.getElementById("btnCerrarModal");
 btnCerrarModal.addEventListener("click", function(){
    cerrarModal();
 })

 



