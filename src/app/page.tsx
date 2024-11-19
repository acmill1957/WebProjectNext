import Image from "next/image";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import Listings from "../components/Listings";
import CreateListing from "../components/CreateListing";
import ItemDetails from "../components/ItemDetails";
import NavBar from "../components/NavBar";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Apples",
      description: "Fresh apples available",
      imageSrc:
        "https://assets.bonappetit.com/photos/57daf2c35a14a530086efae5/16:9/w_1920,c_limit/green-apple-640.jpg",
    },
    {
      id: 2,
      title: "Bananas",
      description: "Organic bananas for donation",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/1920px-Cavendish_Banana_DS.jpg",
    },
    {
      id: 3,
      title: "Bread",
      description: "Whole wheat bread packs",
      imageSrc:
        "https://www.melskitchencafe.com/wp-content/uploads/french-bread1.webp",
    },
  ]);

  const addListing = (newListing) => {
    setListings([...listings, { id: listings.length + 1, ...newListing }]);
  };
  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
      <Routes>
        <Route path="/" element={<HomePage listings={listings} />} />
        <Route path="/listings" element={<Listings listings={listings} />} />
        <Route
          path="/CreateListing"
          element={<CreateListing addListing={addListing} />}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/details/:id"
          element={<ItemDetails listings={listings} />}
        />
      </Routes>
    </Router>
  );
}
