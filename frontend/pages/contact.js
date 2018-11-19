import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import BareLink from "../components/Link";
import Box from '../components/Box'
import Container from '../components/Container'
import Divider from '../components/Divider'
import Heading from '../components/Heading'
import Text from '../components/Text'
import PageWrapper from "../components/PageWrapper.js";
import theme from "../components/theme.js"
import { Config } from "../config.js";

const Section = Box.withComponent('section');

class Contact extends Component {
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
                <Section bg={'brand'}>
                    <Container py={[9, 10]}>
                        <Heading fontSize={[4, 5]}>{this.props.page.title && this.props.page.title.rendered}</Heading>
                        <Box mt={3} maxWidth={0} mx='auto'>
                            {this.props.businessData && <Text fontSize={1} textAlign='center'>For any other questions, press inquiries or collaboration opportunities, please email <BareLink fontFamily={0} px={0} href={`mailto:${this.props.businessData.acf.email}`}>{this.props.businessData.acf.email}</BareLink>.</Text>}
                        </Box>
                    </Container>
                </Section>
                <Section>
                    <Container py={4}>
                        <Box mt={3} maxWidth={0} mx='auto'>
                            {this.props.page && <Text
                                textAlign='center'
                                dangerouslySetInnerHTML={{
                                    __html: this.props.page.content.rendered
                                }}
                            />}
                        </Box>
                        <Divider mt={6} mb={4} />
                        <iframe src="https://calendly.com/joanna-thompson/?embed_domain=www.joanna-thompson.com&embed_type=Inline" width="100%" height="600px" frameBorder="0"></iframe>
                    </Container>
                </Section>
            </Layout>
        );
    }
}

export default PageWrapper(Contact);
