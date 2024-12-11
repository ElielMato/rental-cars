"use client";
import { Button } from "@/components/ui/button";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { useAuth } from "@clerk/nextjs";
import { Car } from "@prisma/client";
import Link from "next/link";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { ListCarsProps } from "./ListCars.types";
import { SkeletonCars } from "@/components/Shared/SkeletonCars";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { addLovedItem, lovedItems, removeLovedItem } = useLovedCars();
  const { userId } = useAuth();

  if (!cars) {
    return <SkeletonCars />;
  }

  return (
    <>
      {cars.length === 0 && (
        <p>No se han encontrado vehiculos con estos filtros</p>
      )}
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {cars.map((car) => {
          const {
            id,
            name,
            photo,
            priceDay,
            engine,
            people,
            cv,
            transmission,
            type,
          } = car;

          const likedCar = lovedItems.some((item) => item.id === id);

          return (
            <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
              <Image
                src={photo}
                alt={name}
                width={400}
                height={600}
                className="rounded-lg"
              />
              <div className="p-3">
                <div className="flex flex-col mb-3 gap-x-4">
                  <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                  <p>${priceDay}/día</p>
                </div>
                <p className="flex items-center">
                  <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                  {type}
                </p>
                <p className="flex items-center">
                  <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                  {transmission}
                </p>
                <p className="flex items-center">
                  <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                  {people}
                </p>
                <p className="flex items-center">
                  <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
                  {engine}
                </p>
                <p className="flex items-center">
                  <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                  {cv} CV
                </p>
                {userId ? (
                  <div className="flex items-center justify-center gap-x-3">
                    <ModalAddReservation car={car} />
                    <Heart
                      className={`t-2 cursor-pointer ${
                        likedCar && "fill-red-600"
                      }`}
                      onClick={
                        likedCar
                          ? () => removeLovedItem(car.id)
                          : () => addLovedItem(car)
                      }
                    />
                  </div>
                ) : (
                  <div className="w-full mt-2 text-center">
                    <Link href="/sign-in">
                      <Button variant="outline">
                        Inicia sesión para reservar
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
