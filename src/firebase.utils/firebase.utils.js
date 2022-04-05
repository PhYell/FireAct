import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    setDoc,
    doc,
    setData,
    updateDoc,
    arrayUnion,
    arrayRemove,
    getDoc,
} from "firebase/firestore";

const config = {
    apiKey: "AIzaSyA44vs2faTV-IQjcOkGy6BOUBnJvxr9d18",
    authDomain: "fir-react-test-e4930.firebaseapp.com",
    projectId: "fir-react-test-e4930",
    storageBucket: "fir-react-test-e4930.appspot.com",
    messagingSenderId: "638757298708",
    appId: "1:638757298708:web:4c9d0be365e7af46283d01",
    measurementId: "G-5R1BBFRL5Z",
};

let currentUserId;

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const { id } = await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
export const logout = () => {
    signOut(auth);
};

export const addToReadingList = async (user, section, itemId) => {
    await updateDoc(doc(db, "users", user.uid), {
        readingList: arrayUnion(itemId),
    });
};

export const getReadingList = async (user) => {
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().readingList;
    }
    return null;
};

export const removeFromReadingList = async (user, itemId) => {
    await updateDoc(doc(db, "users", user.uid), {
        readingList: arrayRemove(itemId),
    });
};
