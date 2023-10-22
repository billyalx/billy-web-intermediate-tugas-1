import Button from "components/Button";
import "@/app/globals.css";

export default function Mentee({ params }) {
  return (
    <>
      <h1>Ini adalah halaman mentee: {params.name}</h1>
      <Button />
    </>
  );
}
