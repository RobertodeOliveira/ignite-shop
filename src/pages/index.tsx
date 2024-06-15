import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import camiseta1 from "../assets/1.png";
import camiseta2 from "../assets/2.png";
import camiseta3 from "../assets/3.png";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef, instaceRef] = useKeenSlider({
    slideChanged() {
      console.log("slide changed");
    },
    slides: {},
  });
  return (
    <HomeContainer ref={sliderRef}>
      <Product className="keen-slider">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider">
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

// <Image src={camiseta2} width={520} height={480} alt="" />
//         <Image src={camiseta3} width={520} height={480} alt="" />
