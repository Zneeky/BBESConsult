import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box} from "@mui/material";
import { Services } from "../helper-objects";

const Bervices = 
[
{
    image:"/images/AccountsImageBlueLayer.png",
    title:"Service 1",
    link:"",
    index:1
},
{
    image:"/images/BW-table-consult.png",
    title:"Service 2",
    link:"",
    index:2
},
{
    image:"/images/BI_ITC-Consult-1.jpg",
    title:"Service 3",
    link:"",
    index:3
},
]

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
    <Box width="90%" sx={{margin:{lg:"0 auto"}}}>
      <Slider {...settings}>
        {Bervices.map((service) => (
          <div key={service.index}>
            <Box
            key={service.index}
            sx={{
              position: 'relative',  // Add this
              height: "400px",
              m: "1rem",
              boxShadow: 3,
              borderRadius: "25px",
              overflow: 'hidden'
            }}
          >
            <Box
              component="img"
              src={service.image}
              sx={{
                position: 'absolute',  // Make the image take the full space of its parent
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: "cover"
              }}
            />
          </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomHorizontalSlider;
