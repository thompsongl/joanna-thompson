import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Box from '../components/Box'
import Container from '../components/Container'
import Expandable from '../components/Expandable'
import Heading from '../components/Heading'
import PageWrapper from "../components/PageWrapper.js";
import theme from "../components/theme.js"
import { Config } from "../config.js";

const Section = Box.withComponent('section');

class Faq extends Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=faq`
        );
        const page = await pageRes.json();
        return { page };
    }

    render() {
        return (
            <Layout {...this.props}>
                <Section bg={'brand'}>
                    <Container py={[9, 10]}>
                        <Heading fontSize={[4, 5]}>{this.props.page.title && this.props.page.title.rendered}</Heading>
                    </Container>
                </Section>
                <Section>
                    <Container py={6} maxWidth={0}>
                        <Box mt={3}>
                            {this.props.businessData && this.props.businessData.acf.faq.map((item, key) => (
                                <Expandable key={key} title={item.question}>
                                    {item.answer}
                                </Expandable>
                            ))}
                        </Box>
                    </Container>
                </Section>
            </Layout>
        );
    }
}

export default PageWrapper(Faq);
