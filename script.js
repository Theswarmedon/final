document.addEventListener("DOMContentLoaded", () => {
    
    // ===== LÓGICA DEL SLIDER (SÓLO PARA LA PÁGINA PRINCIPAL) =====
    const track = document.querySelector('.slider-track');
    const nextBtn = document.querySelector('.arrow.right');
    const prevBtn = document.querySelector('.arrow.left');

    if (track && nextBtn && prevBtn) {
        // Al hacer clic en la flecha derecha, avanza el scroll 370px (ancho tarjeta + gap)
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: 370, behavior: 'smooth' });
        });

        // Al hacer clic en la flecha izquierda, retrocede el scroll
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -370, behavior: 'smooth' });
        });
    }

    // ===== CONTROL DE SESIÓN LOCAL DE USUARIO MOCK (SIMULADO) =====
    const userNameDisplay = document.getElementById("userName");
    
    // Comprobamos si hay sesión guardada en el navegador
    const savedUser = localStorage.getItem("activeUser");
    if (savedUser && userNameDisplay) {
        userNameDisplay.textContent = "Bienvenido, " + savedUser.split("@")[0];
    }

    // ===== ACCIONES DEL FORMULARIO DE INICIAR SESIÓN =====
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const statusMsg = document.getElementById("message");
        
        const loginBtn = document.getElementById("login");
        const registerBtn = document.getElementById("register");
        const logoutBtn = document.getElementById("logout");

        // Acción Iniciar Sesión
        if (loginBtn) {
            loginBtn.addEventListener("click", (e) => {
                e.preventDefault();
                if (!emailInput.value || !passwordInput.value) {
                    statusMsg.textContent = "Por favor, rellena todos los campos.";
                    return;
                }
                localStorage.setItem("activeUser", emailInput.value);
                statusMsg.textContent = "¡Inicio de sesión correcto!";
                if (userNameDisplay) userNameDisplay.textContent = "Bienvenido, " + emailInput.value.split("@")[0];
                loginForm.reset();
            });
        }

        // Acción Registrarse
        if (registerBtn) {
            registerBtn.addEventListener("click", (e) => {
                e.preventDefault();
                if (!emailInput.value || !passwordInput.value) {
                    statusMsg.textContent = "Por favor, rellena todos los campos.";
                    return;
                }
                statusMsg.textContent = "Usuario registrado con éxito de forma segura.";
                loginForm.reset();
            });
        }

        // Acción Cerrar Sesión
        if (logoutBtn) {
            logoutBtn.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("activeUser");
                statusMsg.textContent = "Sesión cerrada de forma segura.";
                if (userNameDisplay) userNameDisplay.textContent = "";
            });
        }
    }

    // ===== ACCIONES DEL FORMULARIO DE CONTACTO =====
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Verificación simulada de login obligatorio para enviar mensaje
            const activeSession = localStorage.getItem("activeUser");
            if (!activeSession) {
                alert("Debes iniciar sesión de forma segura antes de enviar un mensaje.");
                window.location.href = "login.html";
                return;
            }

            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;

            if (!nombre || !email || !mensaje) {
                alert("Completa obligatoriamente nombre, email y mensaje.");
                return;
            }

            alert("¡Mensaje enviado de forma cifrada y segura! Te responderemos en menos de 24h.");
            contactForm.reset();
        });
    }
});
