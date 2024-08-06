import React from 'react'
import Slider from 'react-slick';

export default function SliderImg() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img
                        src="https://game8.vn/media/202111/images/gundam-live-action%20(1).jpg"
                        alt="Gundam Live Action"
                        style={{ width: '100%', height: '100vh', opacity: '0.3', objectFit: 'fill' }}
                    />
                </div>
                <div>
                    <img
                        src="https://wallpaperaccess.com/full/2030181.jpg"
                        alt="Gundam Live Action"
                        style={{ width: '100%', height: '100vh', opacity: '0.3', objectFit: 'fill' }}
                    />
                </div>
                <div>
                    <img
                        src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-iron-man-chien-dau-3-17-13-52-52.jpg"
                        alt="Gundam Live Action"
                        style={{ width: '100%', height: '100vh', opacity: '0.3', objectFit: 'fill' }}
                    />
                </div>
            </Slider>
        </div>
    )
}
