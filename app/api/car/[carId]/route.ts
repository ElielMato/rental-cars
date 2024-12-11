import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, context: { params: { carId?: string } }) {
    const params = await Promise.resolve(context.params);
    const carId = params.carId;

    try {
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        
        if (!carId) {
            return new NextResponse("Car ID is missing", { status: 400 });
        }

        const deleteCar = await db.car.delete({
            where: { id: carId }
        });

        return NextResponse.json(deleteCar);
    } catch (error) {
        console.log("[CAR ID DELETE]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function PATCH(req: Request, context: { params: { carId?: string } }) {
    const params = await Promise.resolve(context.params);
    const carId = params.carId;

    try {
        const { userId } = await auth();
        const { isPublish } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!carId) {
            return new NextResponse("Car ID is missing", { status: 400 });
        }

        const publishCar = await db.car.update({
            where: { id: carId, userId },
            data: { isPublish },
        });

        return NextResponse.json(publishCar);
    } catch (error) {
        console.log("[CAR ID PATCH]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}