import Head from "next/head";
import Link from "next/link";

import LoginBar from "@/pages/login_bar";
import Menu from "@/pages/menu";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="loginContainer">
        <div className="loginLeft">
          <Link href="/blog" className="botones">
            <p>Login</p>
          </Link>
        </div>
        <div className="loginRight">
          <div className="hijoRight">
            <h1>Inicie Sesión</h1>
            <div>
              <input type="" name="" placeholder="Username" />
            </div>
            <div>
              <input type="" name="" placeholder="Password" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
