import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export class Firebase {
  private app;
  private auth;
  private static instance: Firebase;

  private constructor() {
    const firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    };

    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
  }

  private static getInstance(): Firebase {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase();
    }

    return Firebase.instance;
  }

  public static get auth() {
    return Firebase.getInstance().auth;
  }
}
