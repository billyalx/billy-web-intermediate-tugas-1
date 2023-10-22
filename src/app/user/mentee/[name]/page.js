import Button from "@/components/Button";
import Image from "next/image";
import Ronaldo from "../../../../../public/images/ronaldo.jpg";
import "@/app/globals.css";

export default function Mentee({ params }) {
  return (
    <>
      <h1>Ini adalah halaman mentee: {params.name}</h1>
      <div className="image-mentee">
        <Image
          src="https://i.pinimg.com/originals/a3/8a/7f/a38a7fcc90a645c9eb186cd2d7f5ae7a.png"
          alt="Mentee"
          width={250}
          height={250}
        />

        <Image
          src={Ronaldo}
          alt="Mentee"
          width={250}
          height={250}
          placeholder="blur"
          priority
        />
      </div>
      <Button />
    </>
  );
}
