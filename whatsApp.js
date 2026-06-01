document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Agregar 52 y el número correspondiente.
    const numeroAdministracion = "527831159516"; 

    // 2. Capturar solo lo que escribió la persona
    const nombre = document.getElementById('name').value.trim();
    const asunto = document.getElementById('issue').value.trim();

    // 3. Armar el mensaje
    const mensaje = `Hola, envío la información del formulario:%0A%0A` +
                    `*Nombre:* ${nombre}%0A` +
                    `*Asunto:* ${asunto}`;

    // 4. Crear la ruta exacta para que abra WhatsApp
    const url = `https://wa.me/${numeroAdministracion}?text=${mensaje}`;

    // 5. Redirigir automáticamente
    window.location.href = url; 
});
