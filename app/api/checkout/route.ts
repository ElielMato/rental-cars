/* eslint-disable @typescript-eslint/no-unused-vars */
import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { stripe } from '@/lib/stripe'

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export async function POST(req: Request, { params }: {
    params: {
        carId: string,
        priceDay: string,
        startDate: Date,
        endDate: Date,
        carName: string,
    }
}) {
    const { userId } = await auth()
    const { carId, priceDay, startDate, endDate, carName } = await req.json()

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!carId) {
        return new NextResponse("Car id are required", { status: 400 })
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    const numberOfDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

    const totalAmount = numberOfDays * Number(priceDay)
    const totalAmountStripe = Math.round(Number(priceDay) * 100 * numberOfDays)

    console.log(totalAmountStripe, priceDay, numberOfDays)

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
        {
            quantity: 1,
            price_data: {
                currency: 'usd',
                product_data: {
                    name: carName,
                },
                unit_amount: totalAmountStripe,
            }
        }
    ]

    const order = await db.order.create({
        data: {
            carId,
            carName: carName,
            userId: userId,
            status: 'Confirmado',
            totalAmount: totalAmount.toString(),
            orderDate: startDate,
            orderEndDate: endDate,
        },
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        billing_address_collection: 'required',
        phone_number_collection: {
            enabled: true,
        },
        success_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-confirmation`,
        cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-error`,
        metadata: {
            orderId: order.id,
            carId: carId,
            startDate,
            endDate,
            numberOfDays
        }
    })


    return NextResponse.json({ url: session.url }, { headers: corsHeaders })
}