import Button from "@/components/Button";
import Image from "next/image";
import Messi from "../../../../../public/images/messi.jpg";
import "@/app/globals.css";

export default function Mentor({ params }) {
  return (
    <>
      <h1>Ini adalah halaman mentor: {params.name}</h1>
      <div className="image-user">
        <Image
          src="https://howtowriteabookthatsells.com/wp-content/uploads/2013/07/mentor_istock.jpg"
          alt="Mentee"
          width={250}
          height={250}
          className="image-mentor"
        />

        <Image
          src={Messi}
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
