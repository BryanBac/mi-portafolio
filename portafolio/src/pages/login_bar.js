import Link from "next/link";

export default function LoginBar() {
  return (
    <div className="grilla">
      <Link href="/login"  className="lgnBar">
        <p>Login</p>
      </Link>
    </div>
  );
}
