import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Car } from "@prisma/client";
import { CalendarSelector } from "./CalendarSelector";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export function ModalAddReservation(props: ModalAddReservationProps) {
  const { car } = props;
  const [dateSelected, setSateSelected] = useState<{from: Date | undefined; to: Date | undefined}>({
    from: new Date(),
    to: addDays(new Date(), 5)
  })


  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const response = await axios.post('api/checkout', {
      carId: car.id,
      carName: car.name,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
    })

    window.location = response.data.url
    toast({
      title: "Reserva realizada con éxito ✅",
    })
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full mt-3">
          Reserver vehiculo
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Selecciona las fechas en las que quieras alquilar el vehiculo
          </AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector setDateSelected={setSateSelected} carPriceDay={car.priceDay}/>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>
            Reservar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
