import { auth, googleProvider } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// ===============================
// NAVBAR AUTHENTICATION
// ===============================

let currentUser = null;

function updateNavbar() {

    const guestMenu = document.getElementById("guestMenu");
    const userMenu = document.getElementById("userMenu");

    if (!guestMenu || !userMenu) return;

    if (currentUser) {

        guestMenu.classList.add("d-none");

        userMenu.classList.remove("d-none");
        userMenu.classList.add("d-flex");

        const name = currentUser.displayName ||
            currentUser.email.split("@")[0];

        document.getElementById("userName").textContent = name;

        document.getElementById("profileName").textContent = name;

        document.getElementById("profileEmail").textContent =
            currentUser.email;

        document.getElementById("userPhoto").src =
            currentUser.photoURL || "https://placehold.co/40x40";

    } else {

        guestMenu.classList.remove("d-none");

        userMenu.classList.add("d-none");
        userMenu.classList.remove("d-flex");
    }

    // Logout
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.onclick = async () => {
            try {
                await signOut(auth);
                window.location.href = "index.html";
            } catch (error) {
                alert(error.message);
            }
        };
    }
}


// Check Login State
onAuthStateChanged(auth, (user) => {

    currentUser = user;

    updateNavbar();

});


// Update navbar after navbar.html loads
document.addEventListener("navbarLoaded", updateNavbar);


// ===============================
// EMAIL REGISTER
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        try {

            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            await updateProfile(result.user, {
                displayName: name
            });

            alert("Register Successful!");

            window.location.href = "index.html";

        } catch (error) {

            document.getElementById("registerError").textContent =
                error.message;

        }

    });

}


// ===============================
// EMAIL LOGIN
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            window.location.href = "index.html";

        } catch (error) {

            document.getElementById("loginError").textContent =
                error.message;

        }

    });

}


// ===============================
// GOOGLE LOGIN
// ===============================

const googleLogin = document.getElementById("googleLogin");

if (googleLogin) {

    googleLogin.addEventListener("click", async () => {

        try {

            await signInWithPopup(auth, googleProvider);

            window.location.href = "index.html";

        } catch (error) {

            alert(error.message);

        }

    });

}


// ===============================
// GOOGLE REGISTER
// ===============================

const googleRegister = document.getElementById("googleRegister");

if (googleRegister) {

    googleRegister.addEventListener("click", async () => {

        try {

            await signInWithPopup(auth, googleProvider);

            window.location.href = "index.html";

        } catch (error) {

            alert(error.message);

        }

    });

}