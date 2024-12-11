import { db } from '@/lib/db'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import { TableReserves } from './components/TableReservers'
import { isAdministrator } from "@/lib/isAdministrator";

export default async function AllReservesPage() {
    const {userId} = await auth()
    const user = await currentUser()

    if (!userId || !isAdministrator(userId)) {
      return redirect("/");
    }
    
    const orders = await db.order.findMany({
        orderBy: { createdAt: 'desc' },
    })
    
  return (
    <div>
        <h1 className='mb-4 text-3xl'>Todas las Reservas</h1>
        <TableReserves orders={orders} />
    </div>
  )
}
