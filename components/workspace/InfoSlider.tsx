import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const InfoSlider = () => {
  return (
    <div className='container text-xs'>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        className='h-full'
        loop={true}
        autoHeight={true}
        navigation={false}
      >
        <SwiperSlide className='border-r border-white p-4 h-auto min-h-full'>
          <p className='font-bold'>Serie ID</p>
          <p className=''>SG73</p>
        </SwiperSlide>
        <SwiperSlide className='border-r border-white p-4 h-auto min-h-full'>
          <p className='font-bold'>Título</p>
          <p className=''>Materiales y suministros</p>
        </SwiperSlide>
        <SwiperSlide className='border-r border-white p-4 h-auto min-h-full'>
          <p className='font-bold'>Última fecha</p>
          <p className=''>01/02/2021</p>
        </SwiperSlide>
        <SwiperSlide className='border-r border-white p-4 h-auto min-h-full'>
          <p className='font-bold'>Último valor</p>
          <p className=''>2,104.1</p>
        </SwiperSlide>
        <SwiperSlide className='border-r border-white p-4 h-auto min-h-full'>
          <p className='font-bold'>Unidad</p>
          <p className=''>Millones de Pesos</p>
        </SwiperSlide>
        <SwiperSlide className='border-r border-white p-4 h-auto min-h-full'>
          <p className='font-bold'>Cambio porcentual (%)</p>
          <p className=''>
            <span className='text-green-600'>+</span>146.9%
          </p>
        </SwiperSlide>
        <SwiperSlide className='border-r border-white p-4 h-auto min-h-full'>
          <p className='font-bold'>Fecha Inicio</p>
          <p className=''>01/01/1977</p>
        </SwiperSlide>
        <SwiperSlide className='border-r border-white p-4 h-auto min-h-full'>
          <p className='font-bold'>Fecha Fin</p>
          <p className=''>01/04/2021</p>
        </SwiperSlide>
        <SwiperSlide className='border-r border-white p-4 h-auto min-h-full'>
          <p className='font-bold'>Periodicidad</p>
          <p className=''>Mensual</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
