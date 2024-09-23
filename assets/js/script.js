document.getElementById("submitButton").addEventListener("click", function(event) {
    // Evita que el formulario se envíe inmediatamente
    event.preventDefault();
  
    // Obtener los campos
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();
  
    // Verificar que los campos estén llenos
    if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
    } else {
      // Verificar la longitud de los campos
      if (nombre.length >= 3 && email.length >= 8 && telefono.length >= 8 && mensaje.length >= 10) {
        // Mostrar alerta y enviar formulario
        alert("¡Formulario enviado correctamente!");
        document.getElementById("contactForm").submit();
      } else {
        alert("Asegúrate de que todos los campos cumplan con la longitud mínima.");
      }
    }
  });