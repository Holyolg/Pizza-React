import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="130" r="125" />
    <rect x="25" y="310" rx="10" ry="10" width="265" height="88" />
    <rect x="20" y="425" rx="10" ry="10" width="90" height="30" />
    <rect x="125" y="418" rx="25" ry="25" width="152" height="50" />
  </ContentLoader>
);

export default Skeleton;
