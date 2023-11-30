import { LoginForm } from "~/components/forms/login";

export default async function HomePage() {
  return (
    <div className="w-full m-auto">
      <LoginForm />
    </div>
  );
}
