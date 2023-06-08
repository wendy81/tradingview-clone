import { ColorType, createChart } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const params = useParams();
  const { id } = params;

  const [history, setHistory] = useState();

  const newHistory = [];

  const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
  ];

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
      .then((data) => setHistory(data.data.history));

    //history ? console.log(history) : console.log("çalışmıyor")

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
      },
      width: 500,
      height: 200,
    });

    const newSeries = chart.addAreaSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    //history ? newSeries.setData(history) : newSeries.setData(initialData)

    newSeries.setData(newHistory)

    return () => {
      chart.remove()
    }

  }, []);

  const converter = (date) => {
    let newDate = new Date(Math.round(Number(date)));
    let formattedDate =
      newDate.getUTCFullYear() +
      "-" +
      newDate.getUTCMonth() +
      "-" +
      newDate.getUTCDate();
    return formattedDate;
  };

  const newConverter = (date) => {
    let d = new Date(Number(date) * 1000);
    let resultFormat = d.toISOString().split("T")[0];
    return resultFormat;
  };

  history?.map((data) =>
    newHistory.push({
      time: newConverter(data.timestamp),
      price: data.price,
    })
  );

  //console.log(newHistory.reverse());

  const chartContainerRef = useRef();

  return <div ref={chartContainerRef}></div>;
};

export default CoinDetail;
