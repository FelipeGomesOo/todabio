"use client";
/* import React, { useEffect, useState, useRef } from "react";
import { usePapaParse } from "react-papaparse";
import CanvasJSReact from "@canvasjs/react-charts";
import { getDataPoints } from "@/lib/utils"; */
//const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function CandlestickChart() {
  /*  const { readRemoteFile } = usePapaParse();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    //const url = "https://www.felipe-gomes.com/sample-curve.csv"; // URL do CSV
    const url =
      "https://www.felipe-gomes.com/16S-DAPC-probabilities-predefined-tresirmaos.csv"; // URL do CSV

    const fetchCsv = () => {
      readRemoteFile(url, {
        complete: (results) => {
          console.log("Results:", results);
          //let treatedDataPoints = getDataPoints(results.data);
          //setData(treatedDataPoints);
        },
        download: true,
      });
    };

    fetchCsv();
  }, [readRemoteFile]);
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("state data", data);
  const dataPoints = data;
  const chartRef = useRef(null);

  const options = {
    theme: "light2",
    animationEnabled: true,
    toolTip: {
      shared: true,
    },

    axisX: {
      crosshair: {
        enabled: true,
        color: "orange",
        labelFontColor: "#F8F8F8",
      },
    },
    axisY: {
      title: "Features",
      interval: 10,
    },
    data: [
      {
        type: "candlestick",
        showInLegend: true,
        name: "Sequencing Depth",
        dataPoints: dataPoints,
      },
    ],
  }; */
  return (
    <>
      {/* <div className="w-[70%] h-full grow flex items-center self-center">
      <CanvasJSChart
        options={options}
        onRef={(ref: null) => (chartRef.current = ref)}
      />
    </div> */}
      a
    </>
  );
}
