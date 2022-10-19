import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Price(props) {
  // Our api key from coinapi.io
  const apiKey = "B048A484-D035-4652-A3D9-DF2A179F5754";

  // Grabbing the Currency symbol from the URL Params
  const params = useParams();
  const symbol = useParams(params.symbol);

  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = useState("null");

  //function to fetch coin data
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin && coin.rate ? loaded() : loading();
}

export default Price;
