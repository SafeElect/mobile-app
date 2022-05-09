import React from "react";
import * as Progress from "react-native-progress";

 const Loading = ({ size = 100 }) => {
  return (
    <Progress.Circle color='#00a8ff'
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -50 }, { translateY: -50 }],
      }}
      indeterminate
      size={size}
    />
  );
};

export default Loading;
