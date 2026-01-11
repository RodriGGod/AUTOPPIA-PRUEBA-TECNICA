"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import type { Hotel } from "@/types/hotel";

interface TrendingDestinationsProps {
  hotels: Hotel[];
  onHotelClick: (hotel: Hotel) => void;
}

export function TrendingDestinations({ hotels, onHotelClick }: TrendingDestinationsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Filtrar hoteles con rating >= 4.9 (trending destinations)
  const trendingHotels = hotels.filter((hotel) => hotel.rating >= 4.9);

  // Auto-scroll del carrusel
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isHovered) return;

    // Intervalo para hacer scroll automático cada 3 segundos
    const intervalId = setInterval(() => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;

      // Si llegamos al final, volver al inicio
      if (currentScroll >= maxScrollLeft - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll hacia la derecha (300px)
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); // Cada 3 segundos

    // Limpiar intervalo cuando el componente se desmonte o cuando isHovered cambie
    return () => clearInterval(intervalId);
  }, [isHovered]);

  // Función para hacer scroll hacia la izquierda
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Función para hacer scroll hacia la derecha
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Si no hay hoteles trending, no mostrar la sección
  if (trendingHotels.length === 0) {
    return null;
  }

  return (
    <section className="w-full mt-8 mb-6">
      {/* Header de la sección */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-[#616882]" />
          <h2 className="text-2xl font-bold text-neutral-800">Trending Destinations</h2>
        </div>
        <p className="text-sm text-neutral-500">Our top-rated stays</p>
      </div>

      {/* Contenedor del carrusel con botones de navegación */}
      <div className="relative group">
        {/* Botón de navegación izquierda */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-700" />
        </button>

        {/* Contenedor con scroll horizontal */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}  // Pausar auto-scroll al hacer hover
          onMouseLeave={() => setIsHovered(false)} // Reanudar auto-scroll al quitar hover
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trendingHotels.map((hotel) => (
            <div
              key={hotel.id}
              onClick={() => onHotelClick(hotel)}
              className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group/card overflow-hidden"
            >
              {/* Imagen del hotel */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-300"
                />
                {/* Badge de rating */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <span className="text-yellow-500 text-sm">⭐</span>
                  <span className="text-sm font-bold text-neutral-800">{hotel.rating}</span>
                </div>
              </div>

              {/* Información del hotel */}
              <div className="p-4">
                <h3 className="font-semibold text-neutral-800 text-lg mb-1 truncate">
                  {hotel.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-2 flex items-center gap-1">
                  <span>📍</span>
                  <span className="truncate">{hotel.location}</span>
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    {hotel.reviews} reviews
                  </span>
                  <span className="text-lg font-bold text-[#616882]">
                    ${hotel.price}
                    <span className="text-xs font-normal text-neutral-500">/night</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de navegación derecha */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-neutral-700" />
        </button>
      </div>
    </section>
  );
}
