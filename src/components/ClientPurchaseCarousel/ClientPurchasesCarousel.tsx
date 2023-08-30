/* eslint-disable react/no-array-index-key */

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { addWeeks, format } from 'date-fns';
import { useState } from 'react';
import {
  CarouselTitle,
  Container,
  SlideRow,
  SlideRowText,
  SlideTitle,
} from './styles';
import UserTitleModal from '../UserTitleModal/UserTitleModal';

const ClientPurchasesCarousel = () => {
  const [selectedTitleNumber, setSelectedTitleNumber] = useState('');

  return (
    <Container>
      <CarouselTitle>Compras por sorteio</CarouselTitle>
      <Swiper
        navigation
        pagination
        modules={[Pagination, Navigation, EffectCoverflow]}
        className="swiper-client-purchases"
        slidesPerView="auto"
        coverflowEffect={{
          scale: 0.75,
          slideShadows: false,
        }}
        effect="coverflow"
        centeredSlides
        initialSlide={12}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <SwiperSlide key={index}>
            <SlideTitle>
              Sorteio {172 + index} -{' '}
              {format(addWeeks(new Date(2023, 5, 4), index), 'dd/MM/yyyy')}
            </SlideTitle>
            <SlideRow
              style={{
                borderBottom: '1px solid #dcdcdc',
                padding: '0.25rem',
                marginBottom: '1rem',
                marginTop: '0.5rem',
              }}
            >
              <SlideTitle>Título</SlideTitle>
              <SlideTitle>Nº Loteria Federal</SlideTitle>
            </SlideRow>

            <SlideRow>
              <SlideRowText
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedTitleNumber('12345')}
              >
                12345
              </SlideRowText>
              <SlideRowText>9876543210</SlideRowText>
            </SlideRow>
            <SlideRow>
              <SlideRowText
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedTitleNumber('12345')}
              >
                12345
              </SlideRowText>
              <SlideRowText>9876543210</SlideRowText>
            </SlideRow>
            <SlideRow>
              <SlideRowText
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedTitleNumber('12345')}
              >
                12345
              </SlideRowText>
              <SlideRowText>9876543210</SlideRowText>
            </SlideRow>
            <SlideRow>
              <SlideRowText
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedTitleNumber('12345')}
              >
                12345
              </SlideRowText>
              <SlideRowText>9876543210</SlideRowText>
            </SlideRow>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedTitleNumber && (
        <UserTitleModal
          onClose={() => setSelectedTitleNumber('')}
          titleNumber={selectedTitleNumber}
        />
      )}
    </Container>
  );
};

export default ClientPurchasesCarousel;
