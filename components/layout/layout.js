import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>{router.pathname === "/404" ? <>404</> : <main>{children}</main>}</div>
  );
}
