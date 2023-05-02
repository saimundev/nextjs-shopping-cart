import ShowDetails from "@/app/components/ShowDetails";
import axios from "axios";

const feachProdect = async (id) => {
  try {
    const response = await axios.get(
      `https://intern-neii.onrender.com/api/get-singleprodect/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("something went wrong")
  }
};

const page = async ({ params }) => {
  const id = params.id;
  const itemData = await feachProdect(id);

  // const handleCart = () => {
  //   dispatch(addToCart(itemData));
  // };

  return (
    <ShowDetails itemData={itemData}/>
  );
};

export default page;
