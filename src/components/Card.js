import Image from "next/image";
import RonaldoImage from "../../public/images/ronaldo.jpg";
import MessiImage from "../../public/images/messi.jpg";

export default function Card() {
  return (
    <div className="max-w-md mx-auto my-5 overflow-hidden bg-white shadow-md rounded-xl">
      <div className="">
        <div className="image">
          <picture>
            <img src={RonaldoImage} alt="Ronaldo" width={200} height={200} />
          </picture>

          {/* <Image src={RonaldoImage} alt="Ronaldo" width={200} height={200} /> */}
          <Image src={MessiImage} alt="Messi" width={250} height={200} />
        </div>
        <div className="p-8">
          <a
            href="#"
            className="block mt-1 text-lg font-medium leading-tight text-black hover:underline"
          >
            Host Profile
          </a>
          <p className="mt-2 text-gray-500">
            Host: {process.env.NEXT_PUBLIC_DB_HOST}
          </p>
          <p className="mt-2 text-gray-500">
            Username: {process.env.NEXT_PUBLIC_DB_USER}
          </p>
        </div>
      </div>
    </div>
  );
}
