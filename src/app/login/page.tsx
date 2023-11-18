import LoginForm from "@/src/components/Public/LoginPage/LoginForm";
import LoginLogo from "@/src/components/Public/LoginPage/LoginLogo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginLogo />
        <LoginForm />
      </div>
    </main>
  );
}
