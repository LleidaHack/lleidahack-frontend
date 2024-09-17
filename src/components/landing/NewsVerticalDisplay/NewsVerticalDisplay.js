import React from "react";
import NewsEventDisplay from "../NewsEventDisplay/NewsEventDisplay";

const NewsVerticalDisplay = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-2">
        <h2 className="bg-secondaryLanding text-CTALanding text-center p-1">
          NOTICIES
        </h2>
        <NewsEventDisplay
          title="Lleidahack celebra les seves primeres colonies"
          imgPath="hackers_group.jpg"
          name="test"
        />
        <NewsEventDisplay
          title="Lleidahack celebra les seves primeres colonies"
          imgPath="hackers_group.jpg"
          name="test"
        />
        <NewsEventDisplay
          title="Lleidahack celebra les seves primeres colonies"
          imgPath="hackers_group.jpg"
          name="test"
        />
        <a href="/news" className="text-primaryLanding no-underline">
          Veure més...
        </a>
      </div>
    </div>
  );
};

export default NewsVerticalDisplay;
