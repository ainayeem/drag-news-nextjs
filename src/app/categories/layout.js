import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Container, Grid } from "@mui/material";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {/* <h1>Catogories</h1> */}
            <CategoryList></CategoryList>
          </Grid>
          <Grid item xs={9}>
            {/* <h1>News</h1> */}
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
