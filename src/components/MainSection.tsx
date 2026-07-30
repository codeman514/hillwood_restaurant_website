import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "bootstrap";
export default function MainSection() {
  useEffect(() => {
    const el = document.getElementById("foodCarousel");
    if (el) {
      new Carousel(el, {
        interval: 10000,
        ride: "carousel",
      });
    }
  }, []);
  return (
    <section className="container">
      <div className="row custom-main-section g-0">
        <img className="col-6" src="/images/山林茶餐廳.jpg" />
        <div className="col-6 h-50 d-flex flex-column align-items-center bg-black text-white mb-0">
          <h1>多年長久歷史,正宗港式茶餐廳</h1>
          <p>
            位於何文田,已為街坊遊客服務數十年
            <br />
            檸檬茶,奶茶,粵菜,西多士等經典茶餐廳美食,應有盡有
          </p>
        </div>
        <div className="col-6 h-50 custom-main-booking bg-black text-white mb-0 d-flex flex-column">
          <h1>各式美食</h1>
          <span>提供快捷便利的外賣/自取服務</span>
          <Link to="/booking" className="btn btn-primary custom-hover-btn">
            立即訂購
          </Link>
        </div>
        <div
          id="foodCarousel"
          className="carousel slide col-6 h-50"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img
                src="/images/西多士.jpg"
                className="h-100 d-block mx-auto"
                alt="第一張"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src="/images/乾炒牛河.jpg"
                className="h-100 d-block mx-auto"
                alt="第二張"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#foodCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#foodCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
