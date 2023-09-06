import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col">
      This is a protected route.
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
