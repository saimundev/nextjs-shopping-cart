import Banner from "./components/Banner";
import Categorys from "./components/Categorys";
import { Suspense } from "react";
import Spiner from "./components/Spiner";
import Prodect from "./components/Prodect";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Suspense fallback={<Spiner/>}>
        <Categorys />
      </Suspense>
      <Suspense fallback={<Spiner/>}>
        <Prodect/>
      </Suspense>
      
    </main>
  );
}
