import React from 'react';
import { Config } from '../config';

const PageWrapper = Comp => (
  class extends React.Component {
    state = {
      shouldShowBanner: false,
      shouldShowPopout: false,
    }

    static async getInitialProps(args) {
      const headerMenuRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`,
      );
      const headerMenu = await headerMenuRes.json();
      const businessDataRes = await fetch(
        `${Config.apiUrl}/wp-json/acf/v3/options/business-settings`,
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
            messagesMatch = message === this.props.businessData.acf.banner_text;
            shouldShowBanner = !!this.props.businessData.acf.banner_text.length && (shouldShow === 'true' || !messagesMatch);
        }
        if (typeof shouldShow !== 'undefined' || !messagesMatch) {
            storage.setItem('shouldShowBanner', shouldShowBanner);
            storage.setItem('bannerMessage', this.props.businessData.acf.banner_text);
        }
        this.updateShouldShowBanner(shouldShowBanner);

        // Mailchimp Modal
        const session = window.sessionStorage;
        const sessionShouldShow = session.getItem('shouldShowPopout');
        let shouldShowPopout = true;
        if (typeof sessionShouldShow !== 'undefined' && sessionShouldShow != null) {
            shouldShowPopout = sessionShouldShow === 'true';
        }
        this.updateShouldShowPopout(shouldShowPopout);
    }

    updateShouldShowBanner = (shouldShowBanner) => {
        this.setState({
            shouldShowBanner,
        });
        window.localStorage.setItem('shouldShowBanner', shouldShowBanner);
    }

    updateShouldShowPopout = (shouldShowPopout) => {
        this.setState({
            shouldShowPopout,
        });
        window.sessionStorage.setItem('shouldShowPopout', shouldShowPopout);
    }

    render() {
      return (
        <Comp
          shouldShowBanner={this.state.shouldShowBanner}
          updateShouldShowBanner={this.updateShouldShowBanner}
          shouldShowPopout={this.state.shouldShowPopout}
          updateShouldShowPopout={this.updateShouldShowPopout}
          {...this.props}
        />
      );
    }
  }
);

export default PageWrapper;
