import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { BreweryData, BreweryDetail } from "../../misc/type";
import useFetch from "../../hook/useFetch";

const BreweryDetails = ({ id }: BreweryDetail) => {
  const url = `https://api.openbrewerydb.org/v1/breweries/${id}`;
  const { data } = useFetch<BreweryData>(url);

  return (
    <Box sx={{ textAlign: "center", minHeight: "100vh", paddingTop: "40px" }}>
      <Box sx={{ width: "60vw", margin: "auto" }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {data?.name}
        </Typography>
        {data?.brewery_type && (
          <Typography variant="subtitle1">Brew type: {data?.brewery_type}</Typography>
        )}
        {data?.address_1 && data?.postal_code && data?.city && (
          <Typography variant="subtitle1">Address: {data?.address_1}, {data?.postal_code}, {data?.city} city</Typography>
        )}
        {data?.country && (
          <Typography variant="subtitle1">Country: {data?.country}</Typography>
        )}
        {data?.phone && (
          <Typography variant="subtitle1">Phone number: {data?.phone}</Typography>
        )}
        {data?.website_url && (
          <Typography variant="subtitle1">
            Website: <a href={data?.website_url} target="_blank" rel="noreferrer">{data?.website_url}</a>
          </Typography>
        )}
        <Box mt={4}>
          <Button component={Link} to="/" variant="contained">Go back</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BreweryDetails;
