import { Box, Grid } from "@mui/material";
import { BreweryListData } from "../../misc/type";
import BreweryCard from "./BreweryCard";

const BreweryList = ({ breweries }: BreweryListData) => {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        {breweries.map((brewery, index) => (
          <Grid item key={brewery.id} xs={12} sm={6} md={4} lg={4} sx={{ width: "100px", height: "200px", display: "flex", justifyContent: "center", p: 2 }}>
            <BreweryCard brewery={brewery} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BreweryList;
