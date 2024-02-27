import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import LowCurrentArea from "./low-current-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";

const LowCurrent = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Low Current Solution" page_title="Low Current Solution" />
        <LowCurrentArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default LowCurrent;
