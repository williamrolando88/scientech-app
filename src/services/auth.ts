import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "../lib/config/auth.config";
import { Firebase } from "../lib/config/firebase.config";

export const logIn = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      Firebase.auth,
      email,
      password
    );
    const { displayName: name, uid: id } = userCredentials.user;
    return { id, email, name };
  } catch (error) {
    return null;
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await logIn(email, password);

          return user;
        }

        return null;
      },
    }),
  ],
});
