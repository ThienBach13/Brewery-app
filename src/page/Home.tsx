import { useState, useEffect, useCallback } from "react";
import { Box, Pagination } from "@mui/material";

import useFetch from "../hook/useFetch";
import useFetchName from "../hook/useFetchName";
import { BreweryData } from "../misc/type";
import BreweryList from "../components/brewery/BreweryList";
import SearchBar from "../components/header/SearchBar";

const url = "https://api.openbrewerydb.org/v1/breweries";

const Home = () => {
  // Fetch data for default list of breweries
  const { data: breweriesData } = useFetch<BreweryData[]>(url);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  // State for query
  const [searchQuery, setSearchQuery] = useState("");
  // Fetch data based on search query
  const { data, loading, error } = useFetchName(searchQuery);

  // Pagination logic
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  //Callback function to handle search queries
  const handleSearch = useCallback((query: any) => {
    setSearchQuery(query);
  }, []);

  // Clear search query when it becomes empty
  useEffect(() => {
    if (!searchQuery) {
      setSearchQuery("");
    }
  }, [searchQuery]);

  // Calculate the index range of breweries to show on the current page
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const breweriesToShow =
    (searchQuery && !loading && !error ? data : breweriesData)?.slice(
      startIndex,
      endIndex
    ) || [];

  return (
    <>
      <SearchBar onSearch={handleSearch}  />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          p: 2,
        }}
      >
        <>
          <BreweryList breweries={breweriesToShow} />
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
          >
            <Pagination
              count={Math.ceil(
                ((searchQuery && !loading && !error ? data?.length : breweriesData?.length) || 0) / itemsPerPage
              )}
              color="primary"
              page={currentPage}
              onChange={handlePageChange}
            />
          </Box>
        </>
      </Box>
    </>
  );
};

export default Home;
