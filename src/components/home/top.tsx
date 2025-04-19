"use client";
import { useRouter } from "next/navigation";
import "tailwindcss";
import Image from "next/image";
import image from "../../../public/home/image.png";
export function Top() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const router = useRouter();
  return (
    <div className="h-90 bg-white flex ">
      <div className="border-r-2 border-gray-200 w-60 h-80">
        <ul className=" text-3xl">
          {categories.map((category) => (
            <li className="mt-2" key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full place-content-center m-10">
        <Image className="place-self-center" src={image} alt="image" />
      </div>
    </div>
  );
}
