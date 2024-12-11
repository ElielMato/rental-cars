import { auth } from "@clerk/nextjs/server";
import { ButtonAddCar } from "./components/ButtonAddCar";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { ListCars } from "./components/ListCars";
import { isAdministrator } from "@/lib/isAdministrator";

export default async function CarManagerPage() {
  const { userId } = await auth();

  if (!userId || !isAdministrator(userId)) {
    return redirect("/");
  }

  const car = await db.car.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Gestiona tus Vehiculos</h2>
        <ButtonAddCar />
      </div>
      <ListCars cars={car} />
    </div>
  );
}
