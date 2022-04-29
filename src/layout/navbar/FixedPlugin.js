import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import React from "react";

function FixedPlugin() {
  return (
    <div className="d-flex  flex-column fixed-plugin">
      <a href="https://www.linkedin.com/company/excelsiorites/">
        <LinkedinFilled className="mb-2" style={{ fontSize: "32px" }} />
      </a>
      <a href="https://www.facebook.com/getexcelsior/">
        <FacebookFilled className="mb-2" style={{ fontSize: "32px" }} />
      </a>
      <a href="https://www.instagram.com/get_excelsior/">
        <InstagramFilled className="mb-2" style={{ fontSize: "32px" }} />
      </a>
      <a href="https://www.youtube.com/channel/UCFf6B31OlxBqDubZ1m-cKeg/featured">
        <YoutubeFilled className="mb-2" style={{ fontSize: "32px" }} />
      </a>
      <a href="https://twitter.com/getexcelsior">
        <TwitterSquareFilled className="mb-2" style={{ fontSize: "32px" }} />
      </a>
    </div>
  );
}

export default FixedPlugin;
