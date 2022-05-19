import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { firestoreDb } from "../../../firebase-config";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirebaseAdapter(firestoreDb),
});
