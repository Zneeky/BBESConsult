import React from "react";
import { Grid, Box, CardMedia, Typography } from "@mui/material";

interface PersonProps {
  name: string;
  title: string;
  img: string;
  hoverImg: string;
}

const Person: React.FC<PersonProps> = ({ name, title, img, hoverImg }) => {
  const [currentImg, setCurrentImg] = React.useState(img);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        onMouseOver={() => setCurrentImg(hoverImg)}
        onMouseOut={() => setCurrentImg(img)}
        sx={{
          overflow: "hidden",
          transition: "0.3s",
          // "&:hover": {
          //   boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
          // },
        }}
        
      >
        <CardMedia component="img" image={currentImg} alt={name} title={name} />
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {title}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

const Leadership: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Person
        name="Mike Cannon-Brookes"
        title="Co-founder & Co-CEO"
        img="https://wac-cdn.atlassian.com/dam/jcr:c5457492-5937-493d-bcd1-4d97311752ba/Mike.jpg?cdnVersion=1223"
        hoverImg="https://wac-cdn.atlassian.com/dam/jcr:18003964-321c-45f0-aede-27fbcd916740/Mike-hover.jpg?cdnVersion=1223"
      />
      <Person
        name="Amy Glancey"
        title="CHIEF OF STAFF"
        img="https://wac-cdn.atlassian.com/dam/jcr:84330bfe-93bc-4b3c-8f6a-c43ded9b429f/Amy.jpg?cdnVersion=1223"
        hoverImg="	https://wac-cdn.atlassian.com/dam/jcr:5106cb9d-0cf…4-847d-cf0a24c090fd/Amy-hover.jpg?cdnVersion=1223"
      />
      <Person
        name="Mike Cannon-Brookes"
        title="Co-founder & Co-CEO"
        img="https://wac-cdn.atlassian.com/dam/jcr:c5457492-5937-493d-bcd1-4d97311752ba/Mike.jpg?cdnVersion=1223"
        hoverImg="https://wac-cdn.atlassian.com/dam/jcr:18003964-321c-45f0-aede-27fbcd916740/Mike-hover.jpg?cdnVersion=1223"
      />
      <Person
        name="Mike Cannon-Brookes"
        title="Co-founder & Co-CEO"
        img="https://wac-cdn.atlassian.com/dam/jcr:c5457492-5937-493d-bcd1-4d97311752ba/Mike.jpg?cdnVersion=1223"
        hoverImg="https://wac-cdn.atlassian.com/dam/jcr:18003964-321c-45f0-aede-27fbcd916740/Mike-hover.jpg?cdnVersion=1223"
      />
      <Person
        name="Mike Cannon-Brookes"
        title="Co-founder & Co-CEO"
        img="https://wac-cdn.atlassian.com/dam/jcr:c5457492-5937-493d-bcd1-4d97311752ba/Mike.jpg?cdnVersion=1223"
        hoverImg="https://wac-cdn.atlassian.com/dam/jcr:18003964-321c-45f0-aede-27fbcd916740/Mike-hover.jpg?cdnVersion=1223"
      />
      <Person
        name="Mike Cannon-Brookes"
        title="Co-founder & Co-CEO"
        img="https://wac-cdn.atlassian.com/dam/jcr:c5457492-5937-493d-bcd1-4d97311752ba/Mike.jpg?cdnVersion=1223"
        hoverImg="https://wac-cdn.atlassian.com/dam/jcr:18003964-321c-45f0-aede-27fbcd916740/Mike-hover.jpg?cdnVersion=1223"
      />
    </Grid>
  );
};

export default Leadership;
