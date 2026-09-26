import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    sendPasswordResetEmail,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    updatePassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    getDocs,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBR49WEI0FFXjmt-yCE5-9fxudrKU_ELPY",
    authDomain: "perfume-store-8f0fe.firebaseapp.com",
    projectId: "perfume-store-8f0fe",
    storageBucket: "perfume-store-8f0fe.firebasestorage.app",
    messagingSenderId: "990271556023",
    appId: "1:990271556023:web:62542b8c49799782ab0032"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
let currentFirebaseUser = null;

onAuthStateChanged(auth, (user) => {
    currentFirebaseUser = user;
    window.firebaseCurrentUser = user;

    if (user) {
        // Real-time synchronization of customer orders with Firestore
        try {
            const userRef = doc(db, "users", user.uid);
            onSnapshot(userRef, (docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data.orders) {
                        localStorage.setItem("orders", JSON.stringify(data.orders));
                        
                        // Update lastOrder if matching
                        const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
                        if (lastOrder) {
                            const updatedLast = data.orders.find(o => String(o.id) === String(lastOrder.id));
                            if (updatedLast) {
                                localStorage.setItem("lastOrder", JSON.stringify(updatedLast));
                            }
                        }

                        if (typeof window.displayOrders === "function") {
                            window.displayOrders(true);
                        }
                        if (typeof window.displayOrderDetails === "function") {
                            window.displayOrderDetails();
                        }
                    }
                }
            });
        } catch (e) {
            console.warn("User orders snapshot listener error:", e);
        }
    }
});

window.firebaseReady = new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
        currentFirebaseUser = user;
        window.firebaseCurrentUser = user;
        resolve(user);
    });
});

window.getUserCart = async function () {
    await window.firebaseReady;

    if (!currentFirebaseUser) {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }

    const userRef = doc(db, "users", currentFirebaseUser.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) return [];

    const cart = userSnap.data().cart || [];
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
};

window.saveUserCart = async function (cartData) {
    await window.firebaseReady;
    localStorage.setItem("cart", JSON.stringify(cartData));

    if (!currentFirebaseUser) return;

    const userRef = doc(db, "users", currentFirebaseUser.uid);

    await setDoc(
        userRef,
        {
            cart: cartData
        },
        { merge: true }
    );
};

window.getUserWishlist = async function () {
    await window.firebaseReady;

    if (!currentFirebaseUser) {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
    }

    const userRef = doc(db, "users", currentFirebaseUser.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) return [];

    const wishlist = userSnap.data().wishlist || [];
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    return wishlist;
};

window.saveUserWishlist = async function (wishlistData) {
    await window.firebaseReady;
    localStorage.setItem("wishlist", JSON.stringify(wishlistData));

    if (!currentFirebaseUser) return;

    const userRef = doc(db, "users", currentFirebaseUser.uid);

    await setDoc(
        userRef,
        {
            wishlist: wishlistData
        },
        { merge: true }
    );
};

// ================= ORDERS (FIRESTORE) =================
window.saveUserOrder = async function (orderData) {
    await window.firebaseReady;

    // Save locally
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("lastOrder", JSON.stringify(orderData));

    // Save to Firestore
    try {
        if (currentFirebaseUser) {
            const userRef = doc(db, "users", currentFirebaseUser.uid);
            const userSnap = await getDoc(userRef);
            const userOrders = (userSnap.exists() && userSnap.data().orders) ? userSnap.data().orders : [];
            userOrders.push(orderData);
            await setDoc(userRef, { orders: userOrders }, { merge: true });
        }

        // Global orders collection for store administration (BOTH guest and logged-in)
        const ordersCol = collection(db, "orders");
        await addDoc(ordersCol, {
            ...orderData,
            userId: currentFirebaseUser ? currentFirebaseUser.uid : null,
            userEmail: currentFirebaseUser ? (currentFirebaseUser.email || "") : (orderData.customer?.email || "")
        });
    } catch (error) {
        console.error("Firestore Order Save Error:", error);
    }
};

window.getUserOrders = async function () {
    await window.firebaseReady;

    if (!currentFirebaseUser) {
        return JSON.parse(localStorage.getItem("orders")) || [];
    }

    try {
        const userRef = doc(db, "users", currentFirebaseUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists() && userSnap.data().orders) {
            const firestoreOrders = userSnap.data().orders;
            localStorage.setItem("orders", JSON.stringify(firestoreOrders));
            return firestoreOrders;
        }
    } catch (error) {
        console.error("Firestore Get Orders Error:", error);
    }

    return JSON.parse(localStorage.getItem("orders")) || [];
};

window.updateUserOrderStatus = async function (orderId, newStatus) {
    await window.firebaseReady;
    const strId = String(orderId);
    const numId = Number(orderId);
    try {
        if (currentFirebaseUser) {
            const userRef = doc(db, "users", currentFirebaseUser.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists() && userSnap.data().orders) {
                const updatedOrders = userSnap.data().orders.map(o => {
                    if (String(o.id) === strId || Number(o.id) === numId) {
                        return { ...o, status: newStatus };
                    }
                    return o;
                });
                await setDoc(userRef, { orders: updatedOrders }, { merge: true });
            }
        }

        // Sync with global "orders" collection for admin dashboard
        const ordersCol = collection(db, "orders");
        const allOrdersSnap = await getDocs(ordersCol);
        for (const orderDoc of allOrdersSnap.docs) {
            const d = orderDoc.data();
            if (String(d.id) === strId || Number(d.id) === numId || orderDoc.id === strId) {
                await updateDoc(doc(db, "orders", orderDoc.id), { status: newStatus });
            }
        }
    } catch (error) {
        console.error("Firestore Update Order Status Error:", error);
    }
};

window.deleteUserOrderFirebase = async function (orderId) {
    await window.firebaseReady;
    const strId = String(orderId);
    const numId = Number(orderId);
    try {
        if (currentFirebaseUser) {
            const userRef = doc(db, "users", currentFirebaseUser.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists() && userSnap.data().orders) {
                const updatedOrders = userSnap.data().orders.filter(o => String(o.id) !== strId && Number(o.id) !== numId);
                await setDoc(userRef, { orders: updatedOrders }, { merge: true });
            }
        }

        // Delete from global "orders" collection for admin dashboard
        const ordersCol = collection(db, "orders");
        const allOrdersSnap = await getDocs(ordersCol);
        for (const orderDoc of allOrdersSnap.docs) {
            const d = orderDoc.data();
            if (String(d.id) === strId || Number(d.id) === numId || orderDoc.id === strId) {
                await deleteDoc(doc(db, "orders", orderDoc.id));
            }
        }
    } catch (error) {
        console.error("Firestore Delete Order Error:", error);
    }
};

window.clearAllUserOrdersFirebase = async function () {
    await window.firebaseReady;
    if (currentFirebaseUser) {
        try {
            const userRef = doc(db, "users", currentFirebaseUser.uid);
            await setDoc(userRef, { orders: [] }, { merge: true });

            const ordersCol = collection(db, "orders");
            const snap = await getDocs(ordersCol);
            for (const d of snap.docs) {
                const data = d.data();
                if (data.userId === currentFirebaseUser.uid || data.userEmail === currentFirebaseUser.email) {
                    await deleteDoc(doc(db, "orders", d.id));
                }
            }
        } catch (error) {
            console.error("Firestore Clear Orders Error:", error);
        }
    }
};

// ================= CONTACT MESSAGES (FIRESTORE) =================
window.sendContactMessage = async function (messageData) {
    try {
        const messagesCol = collection(db, "contact_messages");
        await addDoc(messagesCol, {
            ...messageData,
            createdAt: new Date().toISOString()
        });
        return true;
    } catch (error) {
        console.error("Contact message error:", error);
        return false;
    }
};

// ================= PROFILE UPDATES (AUTH + FIRESTORE) =================
window.updateUserProfile = async function (newName) {
    await window.firebaseReady;
    if (!currentFirebaseUser) throw new Error("No user logged in");

    await updateProfile(currentFirebaseUser, { displayName: newName });

    const userRef = doc(db, "users", currentFirebaseUser.uid);
    await setDoc(userRef, { name: newName }, { merge: true });

    const savedUser = JSON.parse(localStorage.getItem("user")) || {};
    savedUser.name = newName;
    localStorage.setItem("user", JSON.stringify(savedUser));
    return true;
};

window.changeUserPassword = async function (newPassword) {
    await window.firebaseReady;
    if (!currentFirebaseUser) throw new Error("No user logged in");
    await updatePassword(currentFirebaseUser, newPassword);
    return true;
};

console.log("🔥 Firestore connected:", db);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "login"
});

// Handle Redirect Sign-In result on page load
getRedirectResult(auth).then(async (result) => {
    if (result && result.user) {
        const user = result.user;
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            name: user.displayName || "User",
            email: user.email || "",
            photo: user.photoURL || ""
        }, { merge: true });

        localStorage.setItem("user", JSON.stringify({
            name: user.displayName || "User",
            email: user.email || "",
            photo: user.photoURL || "",
            provider: "google"
        }));

        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "products.html";
    }
}).catch((error) => {
    console.error("Redirect Result Error:", error);
});


// ================= GOOGLE LOGIN =================
async function handleGoogleLogin() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        // Save in Firestore
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            name: user.displayName || "User",
            email: user.email || "",
            photo: user.photoURL || ""
        }, { merge: true });

        localStorage.setItem("user", JSON.stringify({
            name: user.displayName || "User",
            email: user.email || "",
            photo: user.photoURL || "",
            provider: "google"
        }));

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "products.html";

    } catch (error) {
        console.error("Google Auth Error:", error.code, error.message);
        if (error.code === "auth/unauthorized-domain") {
            alert("⚠️ Domain Not Authorized: Please add 'perfume-store-azure-nine.vercel.app' to Authorized Domains in Firebase Console -> Authentication -> Settings -> Authorized Domains.");
        } else if (error.code === "auth/popup-blocked" || error.code === "auth/popup-closed-by-user") {
            try {
                await signInWithRedirect(auth, googleProvider);
            } catch (redErr) {
                console.error("Redirect login error:", redErr);
            }
        } else if (typeof showNotification === "function") {
            showNotification(error.message || "Failed to sign in with Google", "error");
        } else {
            alert("Google Sign In Error: " + (error.message || error.code));
        }
    }
}

document.addEventListener("click", function (event) {
    const googleBtn = event.target.closest("#googleLogin, .google-btn");
    if (googleBtn) {
        event.preventDefault();
        handleGoogleLogin();
    }
});

// ================= EMAIL / PASSWORD REGISTER =================

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            showNotification(t("passwordsMismatch"), "Error");
            return;
        }

        const name = `${firstName} ${lastName}`;

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            await updateProfile(user, {
                displayName: name
            });

            localStorage.setItem("user", JSON.stringify({
                firstName,
                lastName,
                name,
                email: user.email,
                photo: user.photoURL || "",
                provider: "password"
            }));

            await signOut(auth);

            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("user");
            
            showNotification(t("accountCreated"));
            
            setTimeout(() => {
                window.location.href = "login.html";
            }, 300);

        } catch (error) {
            console.error("Register Error:", error);

            if (error.code === "auth/email-already-in-use") {
                showNotification(
                    "This email is already registered.",
                    "Error"
                );
            } else if (error.code === "auth/weak-password") {
                showNotification(
                    "Password should be at least 6 characters.",
                    "Error"
                );
            } else if (error.code === "auth/invalid-email") {
                showNotification(
                    "Please enter a valid email.",
                    "Error"
                );
            } else {
                showNotification(
                    "Failed to create account.",
                    "Error"
                );
            }
        }
    });
}
// ================= EMAIL / PASSWORD LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            localStorage.setItem("user", JSON.stringify({
                name: user.displayName || "",
                email: user.email || "",
                photo: user.photoURL || "",
                provider: "password"
            }));

            localStorage.setItem("isLoggedIn", "true");

            showNotification(t("loginSuccess"));

            setTimeout(() => {
                window.location.href = "products.html";
            }, 300);

        } catch (error) {
            console.error("Login Error:", error);

            if (
                error.code === "auth/user-not-found" ||
                error.code === "auth/invalid-credential"
            ) {
                showNotification(
                    "Email or password is incorrect.",
                    "Error"
                );
            } else if (error.code === "auth/wrong-password") {
                showNotification(
                    "Email or password is incorrect.",
                    "Error"
                );
            } else {
                showNotification(
                    "Failed to login.",
                    "Error"
                );
            }
        }
    });
}
// ================= FORGOT PASSWORD =================
const forgotPasswordForm =
    document.getElementById("forgotPasswordForm");

if (forgotPasswordForm) {

    forgotPasswordForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email =
            document.getElementById("resetEmail").value.trim();

        if (!email) return;

        try {

            await sendPasswordResetEmail(auth, email);

            showNotification(
                "Password reset email sent successfully!"
            );

            document.getElementById("resetEmail").value = "";

        } catch (error) {

            console.error("Password Reset Error:", error);

            if (error.code === "auth/user-not-found") {

                showNotification(
                    "No account was found with this email.",
                    "Error"
                );

            } else if (error.code === "auth/invalid-email") {

                showNotification(
                    "Please enter a valid email.",
                    "Error"
                );

            } else {

                showNotification(
                    "Failed to send password reset email.",
                    "Error"
                );
            }
        }
    });
}
// ================= FIREBASE LOGOUT =================

document.addEventListener("click", async function (event) {

    console.log("CLICK DETECTED", event.target);

    const logoutButton = event.target.closest("#logoutButton");

    if (!logoutButton) return;

    try {

        await signOut(auth);

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");

        window.location.href = "login.html";

    } catch (error) {

        console.error("Logout Error:", error);

        showNotification(
            "Failed to logout.",
            "Error"
        );
    }
});
console.log("🔥 FIREBASE AUTH JS LOADED");