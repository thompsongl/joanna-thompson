import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import BareLink from "../components/Link";
import Box from '../components/Box'
import Card from '../components/Card'
import Container from '../components/Container'
import Divider from '../components/Divider'
import Expandable from '../components/Expandable'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Text from '../components/Text'
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import theme from "../components/theme.js"
import { Config } from "../config.js";

const List = Flex.withComponent('ul');
const ListItem = Box.withComponent('li');
const Section = Box.withComponent('section');

class Index extends Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=contact`
        );
        const page = await pageRes.json();
        return { page };
    }

    render() {
        return (
            <Layout {...this.props}>
                <Section>
                    <Container py={4}>
                        <iframe src="https://calendly.com/joanna-thompson/?embed_domain=www.joanna-thompson.com&embed_type=Inline" width="100%" height="600px" frameBorder="0"></iframe>
                    </Container>
                </Section>
            </Layout>
        );
    }
}

export default PageWrapper(Index);
