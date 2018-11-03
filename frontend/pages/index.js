import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Box from '../components/Box'
import BareLink from '../components/Link'
import Button from '../components/Button'
import Container from '../components/Container'
import Divider from '../components/Divider'
import Expandable from '../components/Expandable'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Input from '../components/Input'
import LazyBackground from "../components/LazyBackground";
import Menu from "../components/Menu";
import PageWrapper from "../components/PageWrapper";
import Social from "../components/Social";
import Testimonials from "../components/Testimonials";
import Text from '../components/Text'
import theme from "../components/theme.js"
import { Config } from "../config.js";

const List = Flex.withComponent('ul');
const ListItem = Box.withComponent('li');
const Section = Box.withComponent('section');

class Index extends Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=welcome`
        );
        const page = await pageRes.json();
        return { page };
    }

    render() {
        return (
            <Layout {...this.props}>
                <Section bg={'green.2'}>
                    <Container px={[3, 4]} py={[8, 9]}>
                        <Text as="h1" fontSize={5} textAlign='center' fontFamily={1} color='black'>
                            Coming Soon!
                        </Text>
                        <Container py={8} maxWidth={0}>
                            <Text textAlign='center'>{"Sign up to recieve updates."}</Text>
                            <Text textAlign='center' mb={3}>{"You'll also get a checklist of ten quick and easy ways to declutter!"}</Text>
                                {/*<!-- Begin Mailchimp Signup Form -->*/}
                                <div id="mc_embed_signup">
                                    <form action="https://now.us19.list-manage.com/subscribe/post?u=4549ea4a5d992521b24443fe6&amp;id=a3aa572a1b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                        <Flex id="mc_embed_signup_scroll">
                                            <label className="visually-hidden" htmlFor="mce-EMAIL">Email Address</label>
                                        	<Input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Email Address" defaultValue="" required />
                                            {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_4549ea4a5d992521b24443fe6_a3aa572a1b" tabIndex="-1" defaultValue="" /></div>
                                            <Button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" ml={2} />
                                        </Flex>
                                    </form>
                                </div>
                                {/*<!--End mc_embed_signup-->*/}
                        </Container>
                        {this.props.businessData && (
                            <Flex alignItems='center' justifyContent='center' mt={2}>
                                <Social businessData={this.props.businessData} theme={theme} />
                            </Flex>
                        )}
                    </Container>
                </Section>
                <Section>
                    <Container py={6}>
                        <Text width="100%" textAlign="center">
                            <img
                                src="https://wp.joanna-thompson.com/wp-content/uploads/2018/10/boxes.jpg"
                                alt="Joanna sitting with her arms crossed, feet propped on a stack of books"
                            />
                        </Text>

                        <Divider my={6} />

                        <Heading as='h2'>How I Can Help</Heading>
                        <List flexWrap='wrap' justifyContent='center' mt={2}>
                            {this.props.businessData && this.props.businessData.acf.services.map((item, key) => (
                                <ListItem key={key} py={2} px={3}>
                                    <Text as='span' color="gray.8">{item.service_name}</Text>
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                </Section>
            </Layout>
        );
    }
}

export default PageWrapper(Index);
