export default function Card() {
  return (
    <div className="max-w-md mx-auto my-5 overflow-hidden bg-white shadow-md rounded-xl">
      <div className="">
        <div className="">
          {/* <img className="object-cover w-full h-48 md:w-48" src="/your-image.jpg" alt="Card image" /> */}
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
