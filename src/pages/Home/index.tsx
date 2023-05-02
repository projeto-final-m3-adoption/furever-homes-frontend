import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { StyledHome } from "./style";

export function Home() {
  return (
    <>
      <Header />
      <StyledHome>
        <Carousel/>
        {/* <div className="swiperCards"></div> */}
        {/* <CardList /> */}
        {/* <footer className="homeFooter"></footer> */}
      </StyledHome>
    </>
  );
}
