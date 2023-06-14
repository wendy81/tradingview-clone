import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const params = useParams();
  const { id } = params;

  const [priceHistory, setPriceHistory] = useState([]);

  const options = {
    headers: {
      "x-access-token":
        "coinrankingffd88d7f1f3ded6efdd4294f69bc4947eaeea7a7afd17f66",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.coinranking.com/v2/coin/${id}/history?timePeriod=1y`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const apiResponse = data.data.history;
        setPriceHistory(convertData(apiResponse));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const convertData = (apiResponse) => {
    return apiResponse.map((item) => {
      const date = new Date(item.timestamp * 1000);
      const formattedDate = date.toISOString().slice(0, 10);
      const value = parseFloat(item.price);
      return { time: formattedDate, value };
    });
  };

  priceHistory ? console.log(priceHistory) : console.log("calismiyor");

  return <div>anasi sikik component</div>;
};

export default CoinDetail;
