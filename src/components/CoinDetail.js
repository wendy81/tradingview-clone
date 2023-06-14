import { ColorType, createChart } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Badge } from "flowbite-react";

const CoinDetail = () => {
  const chartContainerRef = useRef();

  const params = useParams();
  const { id } = params;

  const [priceHistory, setPriceHistory] = useState([]);
  const [coin, setCoin] = useState({});

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
    });

    const newSeries = chart.addAreaSeries({
      lineColor: "#2963FF",
      topColor: "#2963FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    if (priceHistory.length > 0) {
      newSeries.setData(priceHistory);
    } else {
      newSeries.setData(initialData);
    }

    return () => {
      if (chart) {
        chart.remove();
      }
    };
  }, [priceHistory]);

  useEffect(() => {
    const options = {
      headers: {
        "x-access-token":
          "coinrankingffd88d7f1f3ded6efdd4294f69bc4947eaeea7a7afd17f66",
      },
    };

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

    fetch(`https://api.coinranking.com/v2/coin/${id}`, options)
      .then((response) => response.json())
      .then((result) => setCoin(result.data.coin));
  }, [id]);

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

  console.log(coin);

  return (
    <div>
      <Card className="w-11/12 max-w-screen-xl m-auto my-5" href="#">
        <div className="flex justify-start items-center">
          <img src={coin?.iconUrl} className="w-7"></img>
          <h5 className="mx-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {coin?.name} Price Chart
          </h5>
        </div>

        <div className="w-11/12 m-auto" ref={chartContainerRef}></div>

        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>Description</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {coin?.description}
        </p>

        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>Related Links</p>
        </h5>
        <div className="flex flex-wrap">
          <Badge color="info" className="m-2">
            <a href={coin?.websiteUrl} target="blank">
              Website
            </a>
          </Badge>

          {coin.links?.map((link) => (
            <Badge color="info" className="m-2">
              <a href={link.url} target="blank">
                {link.name}
              </a>
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CoinDetail;
