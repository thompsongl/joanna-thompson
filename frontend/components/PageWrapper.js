import React from "react";
import { Config } from "../config.js";

const PageWrapper = Comp => (
  class extends React.Component {
    static async getInitialProps(args) {
      const headerMenuRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`
      );
      const headerMenu = await headerMenuRes.json();
      const businessDataRes = await fetch(
        `${Config.apiUrl}/wp-json/acf/v3/options/business-settings`
      );
      const businessData = await businessDataRes.json();
      return {
        headerMenu,
        businessData,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
      };
    }

    render() {
      return (
        <Comp {...this.props} />
      )
    }
  }
)

export default PageWrapper;
