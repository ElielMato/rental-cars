import { Navbar } from "@/components/Shared/Navbar";
import { db } from "@/lib/db";
import { HeaderCars } from "./components/HeaderCars";
import { FiltersAndListCars } from "./components/FiltersAndListCars";

export default async function carsPage() {
  const cars = await db.car.findMany({
    where: { isPublish: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <Navbar />
      <div className="p-6 mx-12 max-w-7xl">
        <HeaderCars />
      </div>
      <div className="mx-20">
        <FiltersAndListCars cars={cars} />
      </div>
    </div>
  );
}
