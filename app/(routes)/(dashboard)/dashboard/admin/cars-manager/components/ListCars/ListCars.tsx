import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.types";
import { CardCar } from "./CardCar";

export function ListCars(props: ListCarsProps) {
    const { cars } = props;

    return (
        <div className="grid grid-cols-2 gap-6 my-4 lg:grid-cols-4">
          {cars.map((car: Car) => (
            <CardCar car={car} key={car.id} />
          ))}
        </div>
    );
}
