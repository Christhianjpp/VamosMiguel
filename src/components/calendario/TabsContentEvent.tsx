import React, { useEffect, useState } from "react";
import { IEventDetails } from "@/app/api/data/EventDays";
import { ViewYoutube } from "./tabscontent/ViewYoutube";
import { ViewInstagram } from "./tabscontent/ViewInstagram";
import ViewImagen from "./tabscontent/ViewImagen";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const TabsContentEvent = ({ event }: { event?: IEventDetails }) => {
  // Verifica si hay IDs válidos de YouTube
  const hasValidIdsYoutube = (idsYoutube: string[] | undefined): boolean => {
    return idsYoutube?.some(id => id.trim().length > 0) ?? false;
  };

  // Verifica si hay URLs válidas de Instagram
  const hasValidInstagramLinks = (linksInstagram: string[] | undefined): boolean => {
    return linksInstagram?.some(link => link.trim().length > 0) ?? false;
  };

  // Verifica si hay imágenes válidas
  const hasValidEventImages = (eventImages: { linkImagen: string[]; titulo: string; descripcion?: string }[] | undefined): boolean => {
    return eventImages?.some(image => image.linkImagen.some(link => link.trim().length > 0)) ?? false;
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Actualiza los slides cuando cambie el evento
    const updatedSlides = [
      hasValidIdsYoutube(event?.idsYoutube) ? <ViewYoutube idsYoutube={event?.idsYoutube} /> : null,
      hasValidInstagramLinks(event?.linkInstagram) ? <ViewInstagram linkInstagram={event?.linkInstagram} /> : null,
      hasValidEventImages(event?.eventoImagen) ? <ViewImagen eventoImagen={event?.eventoImagen} /> : null,
    ].filter(Boolean);

    setSlides(updatedSlides);
    // Resetear el slide actual al primer slide si hay datos
    setCurrentSlide(0);
  }, [event]);

  const slideCount = slides.length;

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideCount - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideCount - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative">
      {/* Contenedor para los botones de navegación */}
      <div className="absolute top-[-38px] left-1/2 transform -translate-x-1/2 flex justify-between w-full px-4 z-20">
        {slideCount > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="bg-gray-100 rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300 w-8 h-8 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
            </button>

            <button
              onClick={goToNext}
              className="bg-gray-100 rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300 w-8 h-8 flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-4 h-4 text-gray-600" />
            </button>
          </>
        )}
      </div>

      {/* Contenedor del slider */}
      <div className="overflow-hidden relative mt-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.length > 0 ? (
            slides.map((slide, index) => (
              <div key={index} className="min-w-full">
                {slide}
              </div>
            ))
          ) : (
            <div className="min-w-full text-center">No hay datos disponibles.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsContentEvent;
