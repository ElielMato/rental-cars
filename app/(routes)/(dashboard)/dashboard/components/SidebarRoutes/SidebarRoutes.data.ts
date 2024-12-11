import { Calendar, Car, Heart, Newspaper } from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon: Car,
        label: "Vehiculos",
        href: "/dashboard"
    },
    {
        icon: Calendar,
        label: "Reservar",
        href: "/reserves"
    },
    {
        icon: Heart,
        label: "Favoritos",
        href: "/loved-cars"
    },
]

export const dataAdminSidebar = [
    {
        icon: Newspaper,
        label: "Gestiona los Coches",
        href: "/dashboard/admin/cars-manager"
    },
    {
        icon: Calendar,
        label: "Todas las Reservas",
        href: "/dashboard/admin/all-reserves"
    }
]