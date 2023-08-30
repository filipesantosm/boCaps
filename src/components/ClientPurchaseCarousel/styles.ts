import styled from 'styled-components';

export const Container = styled.div`
  width: 30vw;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    margin: 0.5rem 0rem;
    width: 20rem;
    height: 40vh;
    border-radius: 0.5rem;

    background: #fff;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }

  * {
    -webkit-filter: blur(0) !important;
    filter: blur(0) !important;
  }
`;

export const CarouselTitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  font-weight: 700;
`;

export const SlideTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const SlideRow = styled.div`
  width: 100%;

  padding: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SlideRowTitle = styled.p``;

export const SlideRowText = styled.p``;
