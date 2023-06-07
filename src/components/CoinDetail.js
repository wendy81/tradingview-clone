import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const params = useParams();
  const { id } = params;

  const [history, setHistory] = useState();

  useEffect(() => {
    const options = {
      headers: {
        "x-access-token":
          "coinrankingffd88d7f1f3ded6efdd4294f69bc4947eaeea7a7afd17f66",
      },
    };

    fetch(`https://api.coinranking.com/v2/coin/${id}/history`, options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>{id}</div>;
};

export default CoinDetail;
