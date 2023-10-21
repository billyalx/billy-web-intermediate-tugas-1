'use client';
export default function Home() {
  return (
    <>
      <h1>Welcome to My Webpage</h1>
      <p>Host: {process.env.NEXT_PUBLIC_DB_HOST}</p>
      <p>Username: {process.env.NEXT_PUBLIC_DB_USER}</p>
      <a href="https://billy-alexander.vercel.app/">My Portofilio</a>
    </>
  );
}
