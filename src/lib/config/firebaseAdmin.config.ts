import admin from "firebase-admin";

const app = admin.initializeApp({
  credential: admin.credential.cert(process.env.SERVICE_ACCOUNT || ""),
});

const auth = app.auth();
const db = app.firestore();

const FirebaseAdmin = {
  app,
  auth,
  db,
};

export default FirebaseAdmin;
