import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Link from "next/link";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);

  return (
    <div className="my-5">
      <h1>
        Total <span className="font-bold">{searchParams.category}</span> news:{" "}
        {data.length}
      </h1>
      {/*  */}
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Link href={`/${news.category.toLowerCase}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      alt="top news"
                      width={800}
                      height={800}
                    ></Image>
                  </CardMedia>
                  <CardContent>
                    <span className=" my-3 rounded px-2 bg-red-500 text-white">
                      {news.category}
                    </span>
                    <Typography gutterBottom variant="h6">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom className="my-2">
                      By {news.author.name} - {news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
