import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="141" cy="136" r="125" />
    <rect x="0" y="272" rx="0" ry="0" width="280" height="30" />
    <rect x="0" y="312" rx="0" ry="0" width="280" height="88" />
    <rect x="0" y="422" rx="10" ry="10" width="95" height="30" />
    <rect x="129" y="422" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default CardSkeleton;
