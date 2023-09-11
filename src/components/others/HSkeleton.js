import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HSkeleton = (props) => {
  return (
    <Skeleton
      baseColor="var(--gray-strong)"
      highlightColor="var(--gray)"
      {...props}
    />
  );
};

export default HSkeleton;
