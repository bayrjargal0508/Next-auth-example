import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from 'next-auth/providers/credentials';

if (!process.env.GOOGLE_CLIENT_ID) {
  throw new Error('Missing GOOGLE_CLIENT_ID in .env.local');
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error('Missing GOOGLE_CLIENT_SECRET in .env.local');
}
if (!process.env.FACEBOOK_CLIENT_ID) {
  throw new Error('Missing FACEBOOK_CLIENT_ID in .env.local');
}
if (!process.env.FACEBOOK_CLIENT_SECRET) {
  throw new Error('Missing FACEBOOK_CLIENT_SECRET in .env.local');
}
// if (!process.env.APPLE_ID) {
//   throw new Error('Missing APPLE_ID in .env.local');
// }
// if (!process.env.APPLE_SECRET) {
//   throw new Error('Missing APPLE_SECRET in .env.local');
// }

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };