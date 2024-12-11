"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { dataBrands } from "./SliderBrands.data";
import { Reveal } from "@/components/Shared/Reveal";

export function SliderBrands() {
  return (
    <Reveal
      position="bottom"
      className="flex gap-x-20 justify-center lg:pb-20 mt-5 mb-10"
    >
      <Carousel
        className="w-full max-w-6xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-x-10">
          {dataBrands.map(({ url }) => (
            <CarouselItem
              key={url}
              className="basis-4/4 md:basis-2/4 lg:basis-1/6"
            >
              <Image
                src={`/images/brands/${url}`}
                alt="Brand"
                width={90}
                height={90}
                className="object-contain aspect-[3/2]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
}
