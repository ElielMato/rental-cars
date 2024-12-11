import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "./use-toast";
import { Car } from "@prisma/client";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLovedItem: (car: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );
        if (existingItem) {
          return toast({
            title: "El vehículo ya está en favoritos ❤️",
          });
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

        toast({
          title: "Vehiculo añadido a favoritos ❤️",
        });
      },
      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });

        toast({
          title: "Vehiculo eliminado de favoritos 💔",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
