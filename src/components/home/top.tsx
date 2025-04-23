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
    <div className="h-1/2 w-full flex pb-50">
      <div className="border-r-2 h-full border-gray-200 w-1/4">
        <ul className="h-full  pt-20 text-4xl">
          {categories.map((category) => (
            <li className="mt-7" key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-full place-content-center m-20">
        <Image
          className="place-self-center"
          src={image}
          alt="image"
          // width={1900}
          // height={1080}
        />
      </div>
    </div>
  );
}
