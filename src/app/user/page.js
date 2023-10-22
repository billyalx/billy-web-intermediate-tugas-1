export default function User() {
  console.log("Host:", process.env.DB_HOST);
  console.log("Username:", process.env.DB_USER);
  return (
    <>
      <h1>Selamat Datang di Halaman User!</h1>
    </>
  );
}
