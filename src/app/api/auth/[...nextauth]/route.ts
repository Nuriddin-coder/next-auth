import NextAuth from "next-auth";
import { authOptions } from "@/config/auth-options";

const handleAuth = NextAuth(authOptions);

export { handleAuth as GET, handleAuth as POST };
