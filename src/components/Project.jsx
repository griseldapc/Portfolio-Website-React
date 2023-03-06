import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/a.png";
import project2 from "../assets/images/dg.jpg";
import project3 from "../assets/images/mobil.png";
import project4 from "../assets/images/tokobangunan.png";
import project5 from "../assets/images/Laundry.png";
import project_person from "../assets/images/hooh.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "UI / UX Designer",
    },
    {
      img: project2,
      name: "Graphic Design",
    },
    {
      img: project3,
      name: "Low Poly Blender",
    },
    {
      img: project4,
      name: "Online Store Application",
    },
    {
      img: project5,
      name: "Laundry Application",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">some of the projects I've made</p>
      </div>
      <br />
      <div className="flex w-full max-w-screen-xl mx-auto px-5 items-center relative">
  <div className="w-full sm:w-1/2 lg:w-2/3">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,

            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:block">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
