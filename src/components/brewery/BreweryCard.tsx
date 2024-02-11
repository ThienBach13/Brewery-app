import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BreweryCardData } from "../../misc/type";

const BreweryCard = ({brewery}: BreweryCardData) => {
    return (
        <Card sx={{ width: "100%", bgcolor: "#CCC9C4" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              minHeight: 200,
              padding: "8px",
            }}
          >
            <Typography variant="h5">{brewery.name}</Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>Brewery type: {brewery.brewery_type}</Typography>
            <Link to={`/breweries/${brewery.id}`}>
              <Button variant="outlined" sx={{ marginTop: "20px" }}>More information</Button>
            </Link>
          </CardContent>
        </Card>
      );
};

export default BreweryCard;
