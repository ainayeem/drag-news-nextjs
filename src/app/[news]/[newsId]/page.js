import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const newsDetailPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  //   console.log(data);

  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              alt="news"
              width={800}
              height={500}
            ></Image>
            {/*  */}
            <Grid container spacing={2} className="mt-2">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  alt="news"
                  width={800}
                  height={500}
                ></Image>
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  alt="news"
                  width={800}
                  height={500}
                ></Image>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            {/* <h1>details</h1> */}
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Avatar alt="author" src={news.author.img} />
              <Typography>By {news.author.name}</Typography>
              <Typography> Publish: {news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px 0px",
                color: "gray",
              }}
            >
              {news.details}
            </Typography>

            {/*  */}
            <Typography variant="h6">
              &apos;&apos;Many desktop publishing packages and web page editors
              now use as their default model text!&apos;&apos;
            </Typography>
            <Typography variant="h6">-- Tomuk Vai</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default newsDetailPage;
