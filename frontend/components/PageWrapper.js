import React from "react";
import { Config } from "../config.js";

const PageWrapper = Comp => (
  class extends React.Component {
    state = {
      shouldShowBanner: false
    }
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

    componentDidMount() {
        const storage = window.localStorage;
        const shouldShow = storage.getItem('shouldShowBanner');
        const message = storage.getItem('bannerMessage');
        let shouldShowBanner = true;
        let messagesMatch = true;
        if (typeof shouldShow !== 'undefined') {
            messagesMatch = message === this.props.businessData.acf.newsletter_banner;
            shouldShowBanner = shouldShow === 'true' || !messagesMatch;
        }
        if (typeof shouldShow !== 'undefined' || !messagesMatch) {
            storage.setItem('shouldShowBanner', shouldShowBanner)
            storage.setItem('bannerMessage', this.props.businessData.acf.newsletter_banner)
        }
        this.updateShouldShowBanner(shouldShowBanner);
    }

    updateShouldShowBanner = (shouldShowBanner) => {
        this.setState({
            shouldShowBanner
        })
        window.localStorage.setItem('shouldShowBanner', shouldShowBanner)
    }

    render() {
      return (
        <Comp {...this.props} shouldShowBanner={this.state.shouldShowBanner} updateShouldShowBanner={this.updateShouldShowBanner} />
      )
    }
  }
)

export default PageWrapper;
