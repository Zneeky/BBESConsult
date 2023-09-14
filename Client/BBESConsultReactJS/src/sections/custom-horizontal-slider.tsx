import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box} from "@mui/material";
import { Services } from "../helper-objects";

const CustomHorizontalSlider = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    class: "custom-slider",
  };
  return (
    <Box width="92%" sx={{margin:{lg:"0 auto"}}}>
      <Slider {...settings}>
        {Services.map((service) => (
          <div key={service.index}>
            <Box
            key={service.index}
            sx={{
              height: "400px",
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

export default CustomHorizontalSlider;
