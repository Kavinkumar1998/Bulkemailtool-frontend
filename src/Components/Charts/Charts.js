import React, {useEffect, useRef, useState} from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { Dashboard } from '../Dashboard/Dashboard';
import "./Charts.css"

export const Charts = () => {
  const sdk = new ChartsEmbedSDK({baseUrl: 'https://charts.mongodb.com/charts-project-0-enjmo'});
  const chartDiv = useRef();
  const [rendered, setRendered] = useState(false);
  const [chart] = useState(sdk.createChart({chartId: '642fe80a-930c-4a42-87ad-128c108dbc49', height: "500px", width:"800px", theme: "light"}));

  useEffect(() => {
    chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));
  }, [chart]);



  return (
    <Dashboard title="Sent Mail details">
  <div className="charts" ref={chartDiv}></div>
    </Dashboard>

  );
};


