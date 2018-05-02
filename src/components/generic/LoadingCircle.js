import React from "react";
import CircularProgress from "material-ui/CircularProgress";

const LoadingCircle = ({ size = 60, thickness = 6 }) => (
  <CircularProgress size={size} thickness={thickness} />
);

export default LoadingCircle;
