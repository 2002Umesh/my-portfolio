"use client";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";

//required modules
import { Pagination } from "swiper/modules";

const reviewData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thomson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magnam illum! Nostrum accusamus minus laboriosam!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Jessica Smith",
    job: "Baker",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magnam illum! Nostrum accusamus minus laboriosam!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Michael Johnson",
    job: "Sommelier",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magnam illum! Nostrum accusamus minus laboriosam!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily Davis",
    job: "Pastry Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magnam illum! Nostrum accusamus minus laboriosam!",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "David Martinez",
    job: "Sushi Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magnam illum! Nostrum accusamus minus laboriosam!",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Olivia Brown",
    job: "Mixologist",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magnam illum! Nostrum accusamus minus laboriosam!",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          className="h-[350px] "
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {/* show reviews */}
          {reviewData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] ">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col dark:text-white">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
