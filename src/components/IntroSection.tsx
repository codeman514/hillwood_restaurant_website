import { useEffect } from "react";
import { Carousel } from "bootstrap";
interface IntroSectionProps {
  imgUrl: string;
  content: string;
  reverse?: boolean;
}
export default function IntroSection({
  imgUrl,
  content,
  reverse,
}: IntroSectionProps) {
  useEffect(() => {
    const el = document.getElementById("demoCarousel");
    if (el) {
      // 手動初始化 Carousel
      new Carousel(el, {
        interval: 1000,
        ride: "carousel"
      });
    }
  }, []);
  return (
    <section>
      <div
        className={`d-flex custom-intro-section ${reverse ? "flex-row-reverse" : ""}`}
      >
        {content}
        <img className="col-6" src={imgUrl} />
        <div className="col-6 bg-black text-white mb-0">
          <h1>各式美食</h1>
          <div
            id="demoCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="1000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/西多士.jpg"
                  className="d-block w-100"
                  alt="第一張"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/山林茶餐廳.jpg"
                  className="d-block w-100"
                  alt="第二張"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#demoCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#demoCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
