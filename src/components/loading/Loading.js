import React from "react";
import { LineWave } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading">
      <LineWave
        height="200"
        width="200"
        color="#396afc"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default Loading;
