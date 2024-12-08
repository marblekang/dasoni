import { AuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      return { ...session, user: { ...session.user, id: token.sub }, token };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
