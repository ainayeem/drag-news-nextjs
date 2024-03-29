import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

import sideBarNews from "@/assets/side-top-news.png";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card className="mb-2">
        <CardActionArea>
          <CardMedia>
            <Image
              src={sideBarNews}
              alt="top news"
              width={800}
              height={800}
            ></Image>
          </CardMedia>
          <CardContent>
            <p className="w-[100px] my-5 rounded px-2 bg-red-500 text-white">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Jon Mon - mar 18 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bitcoin are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="mb-2">
        <CardActionArea>
          <CardMedia>
            <Image
              src={sideBarNews}
              alt="top news"
              width={800}
              height={800}
            ></Image>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="mb-2">
        <CardActionArea>
          <CardMedia>
            <Image
              src={sideBarNews}
              alt="top news"
              width={800}
              height={800}
            ></Image>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="mb-2">
        <CardActionArea>
          <CardMedia>
            <Image
              src={sideBarNews}
              alt="top news"
              width={800}
              height={800}
            ></Image>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
