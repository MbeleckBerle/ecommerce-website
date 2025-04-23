import Image from "next/image";

export async function TodayItems() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const items = await res.json();

  return (
    <div className="bg-amber-200 overflow-x-auto overflow-y-hidden w-full h-full">
      <ul className="flex flex-row gap-4 px-4 py-2 w-max">
        {items.map((item: any) => (
          <li
            key={item.id}
            className="flex-col  flex-shrink-0 rounded-md p-2 w-100 h-100 flex items-center justify-center"
          >
            <Image
              src={item.images[0]}
              alt={item.title}
              width={80}
              height={80}
              className="object-coverrounded w-full h-full"
            />
            <h1 className="">{item.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
