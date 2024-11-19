import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          card: "max-w-[90vw] mx-auto",
          formButtonPrimary: "bg-[#6441A4] hover:bg-[#6441A4]/90",
        },
      }}
    />
  );
}
