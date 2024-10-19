import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: "1090533316877-i9o94k7eqp3k536s5mc5ue3b0g7pgrv1.apps.googleusercontent.com",
        clientSecret: "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"
      }),
   
  ],
     secret: "process.env.NEXTAUTH_SECRET"
}

export default NextAuth(authOptions)