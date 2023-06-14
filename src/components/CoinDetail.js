import { ColorType, createChart } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const chartContainerRef = useRef();

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
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
      },
      width: 500,
      height: 200,
    });

    const newSeries = chart.addAreaSeries({
      lineColor: "#2963FF",
      topColor: "#2963FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    if (priceHistory.length > 0) {
      newSeries.setData(priceHistory);
    }
    else {
      newSeries.setData(initialData);
    }

    return () => {
      if (chart) {
        chart.remove();
      }
    };
  }, [priceHistory]);

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
  }, [id, options]);

  const convertData = (apiResponse) => {
    return apiResponse
      .map((item) => {
        const date = new Date(item.timestamp * 1000);
        const formattedDate = date.toISOString().slice(0, 10);
        const value = parseFloat(item.price);
        return { time: formattedDate, value };
      })
      .sort((a, b) => a.time.localeCompare(b.time));
  };

  const initialData = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];

  priceHistory ? console.log(priceHistory) : console.log("calismiyor");

  return (
    <div>
      <div ref={chartContainerRef}></div>
    </div>
  );
};

export default CoinDetail;
