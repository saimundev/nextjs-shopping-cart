import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const feachItem = async (category) => {
  try {
    const response = await axios.get(
      `https://intern-neii.onrender.com/api/get-catprodect/${category}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const page = async ({ params }) => {
  const category = params.category;

  const item = await feachItem(category);
  return (
    <div className="grid grid-cols-5 gap-6 container mx-auto mt-4">
      {item?.map((item) => (
       <Link href={`/${category}/${item._id}`} key={item._id}>
        <div
          className="p-3 border border-gray-300 rounded hover:shadow-xl cursor-pointer"
          key={item._id}
        >
          <Image
            width={300}
            height={300}
            alt="image"
            src={item.image}
            className="rounded"
            
          />
          <h2 className="text-lg text-gray-700 font-medium text-center mt-4">
            {item.name}
          </h2>
        </div>
       </Link>
      ))}
    </div>
  );
};

export default page;
