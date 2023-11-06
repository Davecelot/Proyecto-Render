import React from "react";
import PrincipalContent from "./PrincipalContent";
import ContentRowCenter from "./ContentRowCenter";
import SideBar from "./SideBar";
import '../styles/ContentWrapper.css'

function ContentWrapper() {
  return (
    <React.Fragment>

      <div className="container-dashboard">
        <SideBar/>

        <PrincipalContent/>

        <ContentRowCenter/>

      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;
