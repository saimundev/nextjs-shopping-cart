import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const feachCategorys = async () => {
  try {
    const response = await axios.get(
      "https://intern-neii.onrender.com/api/get-category"
    );
    return response.data;
  } catch (error) {
    throw new Error("something went wrong");
  }
};

const Categorys = async () => {
  const category = await feachCategorys();

  return (
    <div className="mt-20 container mx-auto">
        <h1 className="text-2xl font-medium text-gray-600">Categorys</h1>
        <div className="grid grid-cols-5 gap-6 mt-4">
      {category?.map((item) => (
        <Link href={`/${item.name}`} key={item._id}>
        <div className="border border-gray-300 p-3 cursor-pointer rounded hover:scale-105 duration-300 hover:shadow-lg">
          <Image width={300} height={200} alt="category" src={item.image} className="w-[50%] h-[100px] mx-auto" />
          <h1 className="text-center text-gray-500 mt-4">{item.name}</h1>
        </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Categorys;
