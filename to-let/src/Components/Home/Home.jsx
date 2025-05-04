import React from 'react'
import Image1 from '../../assets/hero/women.png'
import Image2 from '../../assets/hero/shopping.png'
import Image3 from '../../assets/hero/sale.png'
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Flash Sale: Up to 50% Off on Men's Fashion ",
    description:
        "Step up your style game with our hottest deals on jackets, shirts, and more. Limited time only!",
},
{
    id: 2,
    img: Image2,
    title: "Exclusive: 30% Off All Women's Collection",
    description:
        "From elegant dresses to trendy tops—refresh your wardrobe with our handpicked women's fashion.",
},
{
    id: 3,
    img: Image3,
    title: "Mega Clearance: 70% Off Everything!",
    description:
        "Don't miss the final markdowns of the season. Grab your favorites before they're gone forever!",
}

]

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div>
      
    </div>
  )
}

export default Home
