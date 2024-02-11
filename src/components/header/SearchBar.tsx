import { useState } from "react";
import {
  TextField,
  Box,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Search, BreweryData } from "../../misc/type";
import useFetchName from "../../hook/useFetchName";


const SearchBar = ({ onSearch}: Search) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: suggestions, loading, error } = useFetchName(searchQuery);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setShowSuggestions(true); // Show suggestions when input changes
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
      setShowSuggestions(false); // Hide suggestions when search is triggered
    }
  };

  const handleClickSuggestion = (brewery: BreweryData) => {
    setSearchQuery(brewery.name);
    onSearch(brewery.name);
    setShowSuggestions(false); // Hide suggestions when suggestion is clicked
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        maxWidth: "250px",
        position: "relative",
        marginTop: "15px",
        marginLeft: "15px",
      }}
    >
      <TextField
        label="Search by Name"
        variant="outlined"
        value={searchQuery}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {showSuggestions && searchQuery && (
        <List
          sx={{
            maxHeight: "200px",
            overflowY: "auto",
            background: "white",
            border: "1px solid #ccc",
            padding: 1,
            position: "absolute",
            zIndex: 1,
            top: "48px",
          }}
        >
          {loading && (
            <ListItem>
              <ListItemText primary="Loading suggestions..." />
            </ListItem>
          )}
          {error && (
            <ListItem>
              <Alert variant="outlined" severity="error">
                Error fetching suggestions: {error}
              </Alert>
            </ListItem>
          )}
          {!loading &&
            !error &&
            suggestions.map((brewery) => (
              <ListItem
                key={brewery.id}
                sx={{ cursor: "pointer" }}
                onClick={() => handleClickSuggestion(brewery)}
              >
                <ListItemText
                  primary={brewery.name}
                />
              </ListItem>
            ))}
        </List>
      )}
    </Box>
  );
};

export default SearchBar;
