import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function reservesPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    where: { userId: userId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
        <h2 className="mb-4 text-3xl">
            Tus Vehiculos Reservados
        </h2>
        {orders.length === 0 ? (
            <div className="flex flex-col justify-center gap-4
             items-center">
                <h2 className="text-xl">No tienes ningun pedido</h2>
                <p>Haz tus pedido a traves de la pagian de vehiculos</p>
                <Link href="/cars">
                    <Button>Lista de Vehiculos</Button>
                </Link>
            </div>
        ): (
            <TableReserves orders={orders} />
        )}

      
    </div>
  );
}
