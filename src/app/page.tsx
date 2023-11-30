import { LoginForm } from "~/components/login";


export default async function HomePage() {
  return (
    <div className="w-full m-auto">
      <LoginForm />
    </div>
  );
}
