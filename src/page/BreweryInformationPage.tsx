import { useParams } from "react-router-dom";

import BreweryInformation from "../components/brewery/BreweryInformation";

const BreweryInformationPage = () => {
  const { id } = useParams();
  return <BreweryInformation id={id}/>;
}

export default BreweryInformationPage;