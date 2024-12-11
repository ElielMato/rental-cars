import * as React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { FiltersCarsProps } from './FiltersCars.types'
import { Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
  
export function FiltersCars(props: FiltersCarsProps) {
    const {clearFilters, setFilters, filters} = props

    const handleFilter = (filter: string, value: string) => {
        setFilters(filter, value )
    };

  return (
    <div className="mt-5 mb-8 gap-x-4 flex">
        <Select onValueChange={(value) => handleFilter("type", value)} value={filters.type}>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder="Tipo de Vehiculo"></SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="Sedan">Sedán</SelectItem>
                    <SelectItem value="SUV">SUV</SelectItem>
                    <SelectItem value="Hatchback">Hatchback</SelectItem>
                    <SelectItem value="Coupe">Coupe</SelectItem>
                    <SelectItem value="Convertible">Convertible</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilter("transmission", value)} value={filters.transmission}>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder="Transmision"></SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="Sedan">Automatico</SelectItem>
                    <SelectItem value="SUV">Manual</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilter("engine", value)} value={filters.engine}>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder="Tipo de Motor"></SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="Electrico">Electrico</SelectItem>
                    <SelectItem value="Gasolina">Gasolina</SelectItem>
                    <SelectItem value="Diesel">Diesel</SelectItem>
                    <SelectItem value="Hibrido">Hibrido</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Select onValueChange={(value) => handleFilter("people", value)} value={filters.people}>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder="Cantidad de Personas"></SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        
        <Button onClick={clearFilters}>
            Quitar Filtro
            <Trash className="w-4 h- ml-2" />
        </Button>
    </div>
  )
}
