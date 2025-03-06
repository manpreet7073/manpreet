import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title">
        <h2>Testimonials</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            />
          </svg>
        </div>
        <p>What our clients say about working with us.</p>
      </div>

      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Exceptional Development Skills</h2>
                  <p>
                    Manpreet delivered a high-performing application that exceeded expectations. His expertise and efficiency made the process seamless.
                  </p>
                  <div className="profile d-flex align-items-center">
                    <img
                      src="assets/img/person/person-m-7.webp"
                      className="profile-img"
                      alt="Saul Goodman - Satisfied Client"
                    />
                    <div className="profile-info">
                      <h3>Saul Goodman</h3>
                      <span>MD</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="featured-img-wrapper">
                    <img
                      src="assets/img/person/person-m-7.webp"
                      className="featured-img"
                      alt="Saul Goodman"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Creative and Reliable</h2>
                  <p>
                    Manpreet transformed my ideas into a stunning, user-friendly website with great attention to detail and problem-solving skills.
                  </p>
                  <div className="profile d-flex align-items-center">
                    <img
                      src="assets/img/person/person-f-8.webp"
                      className="profile-img"
                      alt="Sara Wilsson - Designer"
                    />
                    <div className="profile-info">
                      <h3>Sara Wilsson</h3>
                      <span>Director</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="featured-img-wrapper">
                    <img
                      src="assets/img/person/person-f-8.webp"
                      className="featured-img"
                      alt="Sara Wilsson"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Highly Professional and Skilled</h2>
                  <p>
                    Manpreet delivered a scalable, high-performance solution with clear communication and timely execution.
                  </p>
                  <div className="profile d-flex align-items-center">
                    <img
                      src="assets/img/person/person-m-9.webp"
                      className="profile-img"
                      alt="Matt Brandon - Freelancer"
                    />
                    <div className="profile-info">
                      <h3>Matt Brandon</h3>
                      <span>MD</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="featured-img-wrapper">
                    <img
                      src="assets/img/person/person-m-9.webp"
                      className="featured-img"
                      alt="Matt Brandon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
