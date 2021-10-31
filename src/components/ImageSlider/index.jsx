// import React from "react";
// import "./imageSlider.scss";
// const ImageSlider = () => {
//   return (
//     <div className="image__slider slide">
//       <div className="prev"></div>
//       <div className="next"></div>
//       <ul>
//         <li>
//           <img src="" alt="" />
//         </li>
//         <li>
//           <img
//             src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"
//             alt=""
//           />
//         </li>{" "}
//         <li>
//           <img
//             src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"
//             alt=""
//           />
//         </li>{" "}
//         <li>
//           <img
//             src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"
//             alt=""
//           />
//         </li>{" "}
//         <li>
//           <img
//             src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"
//             alt=""
//           />
//         </li>{" "}
//         <li>
//           <img
//             alt=""
//           />
//         </li>{" "}
//         <li>
//           <img
//             src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80"
//             alt=""
//           />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default ImageSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./imageSlider.scss";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  return (
    <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo"></div>
        <div className="title_">
          Latest artworks with most valued bids Trending Auctions
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
