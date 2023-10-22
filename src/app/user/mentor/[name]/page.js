import Button from "components/Button";
import "@/app/globals.css";

export default function Mentor({ params }) {
  return (
    <>
      <h1>Ini adalah halaman mentor: {params.name}</h1>
      <Button />
    </>
  );
}
