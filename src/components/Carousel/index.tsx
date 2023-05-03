import AliceCarousel from "react-alice-carousel";
import { StyledCarousel } from "./style";
import "react-alice-carousel/lib/alice-carousel.css";

export function Carousel() {
  const handleDragStart = (e: any) => e.preventDefault();

  const items = [
    <div className="carousel-container orange-container">
      <p
        className="carousel-paragraph"
        onDragStart={handleDragStart}
        role="presentation"
      >
        Adopting a pet is a purrfect way to add some extra fur to your family!
      </p>
    </div>,
    <div className="carousel-container green-container">
      <p
        className="carousel-paragraph"
        onDragStart={handleDragStart}
        role="presentation"
      >
        Adopting a pet is a pawsome decision!
      </p>
    </div>,
    <div className="carousel-container blue-container">
      <p
        className="carousel-paragraph"
        onDragStart={handleDragStart}
        role="presentation"
      >
        Onde amantes de animais encontram seus novos amigos!
      </p>
    </div>,
  ];

  return (
    <StyledCarousel>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={5000}
        disableButtonsControls={true}
      />
    </StyledCarousel>
  );
}
