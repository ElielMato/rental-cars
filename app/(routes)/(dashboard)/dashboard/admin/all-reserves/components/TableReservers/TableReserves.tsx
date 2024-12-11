import { formatPrice } from "@/lib/formatPrice";
import { TableReservesProps } from "./TableReserves.types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, order) => {
    return acc + parseFloat(order.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>Lista de todas las reservas de los usuarios.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha de la Orden</TableHead>
          <TableHead>ID del Cliente</TableHead>
          <TableHead>Vehiculo</TableHead>
          <TableHead>Fecha de Inicio</TableHead>
          <TableHead>Fecha de Finalizacion</TableHead>
          <TableHead className="text-right">Precio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</TableCell>
              <TableCell className="font-medium max-w-[100px] truncate">{order.userId}</TableCell>
              <TableCell className="font-medium truncate">{order.carName}</TableCell>
              <TableCell className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</TableCell>
              <TableCell className="font-medium">{new Date(order.orderEndDate).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">${order.totalAmount}</TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
            <TableCell colSpan={5}>
              Total
            </TableCell>
            <TableCell className="text-right">
                {formatPrice(totalAmount)}
            </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
