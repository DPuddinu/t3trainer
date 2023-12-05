import { redirect } from "next/navigation";
import { LoginForm } from "~/components/forms/login";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {

  const session = await getServerAuthSession();
  if (session?.user) {
    redirect('/dashboard');
  }
  
  return (
    <div className="w-full m-auto">
      <LoginForm />
    </div>
  );
}
