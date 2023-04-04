import Link from "next/link";

export default function LoginBar() {
  return (
    <div className="grilla">
      <Link href="#" replace className="lgnBar">
        <p>Login</p>
      </Link>
    </div>
  );
}
