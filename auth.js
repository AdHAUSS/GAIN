import { auth, db } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const provider = new GoogleAuthProvider();

document
  .getElementById("googleLogin")
  .addEventListener("click", async () => {

    try {

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const email = user.email;

      const userRef = doc(db, "authorizedUsers", email);

      const userSnap = await getDoc(userRef);

      if (
        userSnap.exists() &&
        userSnap.data().active === true
      ) {

        window.location.href = "./dashboard.html";

      } else {

        alert("Você não possui autorização.");

        await signOut(auth);

      }

    } catch (error) {

      console.error(error);

      alert("Erro ao fazer login.");

    }

});
