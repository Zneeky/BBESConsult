import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box} from "@mui/material";
import { Services } from "../helper-objects";

const CustomVerticalSlider = () => {
  const settings = {
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    swipeToSlide: true,
    class: "custom-slider",
  };
  return (
    <Box width="92%" sx={{ margin: { xs: "0 auto" } }}>
      <Slider {...settings}>
        {Services.map((service) => (
          <div key={service.index}>
            <Box
              sx={{
                height: "200px",
                m: "1rem",
                boxShadow: 3,
                borderRadius: "25px",
              }}
            >
              <Box
                component="img"
                src={service.image}
                sx={{ objectFit: "cover", height: "400px" }}
              />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomVerticalSlider;
