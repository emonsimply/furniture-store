"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-02/sdc-363-komol---.jpg",
  "https://dmau.imgix.net/media/wysiwyg/group-pages/furniture-outdoor-bbqs/GP1157185-hero_image-h.png",
  "https://furnicher.com/media/wysiwyg/collection/new-collection-contemporary-chic-website.webp",
  "https://admin.hatimfurniturebd.com/images/category/319-room-View-720x300-pixel.jpg",
];

const Hero: React.FC = () => {
  return (
    <section className="w-full mt-26">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="h-[70vh] md:h-[85vh]"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Furniture slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
