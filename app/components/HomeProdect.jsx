import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const feachHomeProdect = async (name) => {
  try {
    const response = await axios.get(
      `https://intern-neii.onrender.com/api/home-prodect/${name}`
    );
    return response.data;
  } catch (error) {}
};

const HomeProdect = async ({ catItem }) => {
  const homeData = await feachHomeProdect(catItem.name);

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-lg text-gray-700 font-medium mb-2 capitalize">
        {catItem.name}
      </h1>
      <div className="grid grid-cols-4 gap-6 ">
        {homeData.map((item) => (
          <Link href={`/${item.name}/${item._id}`} key={item._id}>
            <div className="border border-gray-300 p-3 cursor-pointer hover:shadow-2xl">
              <Image
                src={item.image}
                width={300}
                height={300}
                alt="image"
                className="w-full"
              />
              <h1 className="text-center text-gray-500 mt-4">{item.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeProdect;
