import axios from "axios";
import HomeProdect from "./HomeProdect";

const feachProdect = async () => {
  try {
    const response = await axios.get(
      "https://intern-neii.onrender.com/api/random-category"
    );
    return response.data;
  } catch (error) {}
};

const Prodect = async () => {
  const prodectData = await feachProdect();
  return <div>
     <h1 className="text-2xl text-gray-700 font-semibold mt-32 container mx-auto">Prodect List</h1>
    {
        prodectData.map(item =>(
           <HomeProdect catItem={item} key={item._id}/>
        ))
    }
  </div>;
};

export default Prodect;
