import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: "700895793992-flf69dn2lto0tqfol22mqnklnmn13fqi.apps.googleusercontent.com",
        clientSecret: "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"
      })
  ],
}

export default NextAuth(authOptions)