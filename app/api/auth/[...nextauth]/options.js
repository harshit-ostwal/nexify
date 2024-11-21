import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { rollno, password } = credentials;

                const user = await prisma.user.findUnique({
                    where: {
                        rollno: rollno
                    },
                });

                if (!user) {
                    return null;
                }

                const isPasswordValid = await bcrypt.compare(password, user.password);
                if (!isPasswordValid) {
                    return null;
                }

                return user;
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    callbacks: {
        async jwt({ user, token }) {

            console.log(user);

            if (user) {
                token.userId = user.id;
                token.fullname = user.fullname;
                token.rollno = user.rollno;
                token.email = user.email;
                token.mobileNo = user.mobileNo;
                token.experiences = user.experiences || [];
                token.skills = user.skills || [];
                token.projects = user.projects || [];
                token.followers = user.followers || [];
                token.following = user.following || [];
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.data = {
                    id: token.userId,
                    fullname: token.fullname,
                    rollno: token.rollno,
                    email: token.email,
                    mobileNo: token.mobileNo,
                    experiences: token.experiences,
                    skills: token.skills,
                    projects: token.projects,
                    followers: token.followers,
                    following: token.following,
                };
            }

            return session;
        },
    },
    pages: {
        signIn: "/Auth/SignIn",
        signUp: "/Auth/SignUp",
    },
    secret: process.env.NEXTAUTH_SECRET,
};