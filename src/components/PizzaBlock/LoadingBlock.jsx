import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
      <ContentLoader 
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="124" r="115" /> 
        <rect x="12" y="251" rx="12" ry="12" width="259" height="35" /> 
        <rect x="12" y="303" rx="12" ry="12" width="263" height="82" /> 
        <rect x="11" y="407" rx="15" ry="15" width="116" height="45" /> 
        <rect x="151" y="407" rx="15" ry="15" width="124" height="45" />
      </ContentLoader>
    )
}

export default LoadingBlock;

