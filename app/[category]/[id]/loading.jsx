import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className="grid grid-cols-2 gap-6 container mx-auto">
      <div className="mx-auto">
        <Skeleton height="450px" width="400px" />
      </div>
      <div className="">
        <Skeleton width="350px" height="40px"  />
        <Skeleton width="200px" height="30px" className="mt-4"/>
        <Skeleton width="350px" height="30px" className="mt-4"/>
        <Skeleton width="200px" height="30px" className="mt-4"/>
        <Skeleton height="100px" className="mt-4"/>
        <Skeleton height="50px" width="100px" className="mt-6" />
      </div>
    </div>
  );
};

export default loading;
