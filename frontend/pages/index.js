import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import BareLink from "../components/Link";
import Box from '../components/Box'
import Button from '../components/Button'
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
                        <Text.p fontSize={4} textAlign='center' fontFamily={1} color='black'>
                            {this.props.page.acf.intro_text}
                        </Text.p>
                    </Container>
                </Section>
                <Section>
                    <Container py={6}>
                        <Flex flexWrap="wrap">
                            <Box width={['0%', '40%']} display="inline-block">
                                <img
                                    src="/static/images/joanna.jpg"
                                    alt="Joanna sitting with her arms crossed, feet propped on a stack of books"
                                />
                            </Box>
                            <Flex width={['100%', '60%']} flexDirection='column' justifyContent='space-between' pl={[0, 3]}>
                                <Box>
                                    <Heading textAlign={['center', 'left']}>About Me</Heading>
                                    <Text.p color='bodytext' textAlign={['center', 'left']}>
                                        {this.props.page.acf.about_me}
                                    </Text.p>
                                </Box>
                                {this.props.businessData && (
                                    <Flex alignItems='center' justifyContent={['center', 'flex-start']} mt={2}>
                                        {this.props.businessData.acf.instagram && <BareLink href={this.props.businessData.acf.instagram} target="_blank" pl={[1, '0']}><img src={`https:icon.now.sh/instagram/${theme.colors.iconColor}`} alt='Follow me on Instagram' /></BareLink>}
                                        {this.props.businessData.acf.facebook && <BareLink href={this.props.businessData.acf.facebook} target="_blank"><img src={`https:icon.now.sh/facebook/${theme.iconColor}`} alt='Friend me on Facbook' /></BareLink>}
                                        {this.props.businessData.acf.twitter && <BareLink href={this.props.businessData.acf.twitter} target="_blank"><img src={`https:icon.now.sh/twitter/${theme.iconColor}`} alt='Follow me on Twitter' /></BareLink>}
                                        {this.props.businessData.acf.pinterest && <BareLink href={this.props.businessData.acf.pinterest} target="_blank"><img src={`https:icon.now.sh/pinterest/${theme.iconColor}`} alt='Follow me on Pinterest' /></BareLink>}
                                    </Flex>
                                )}
                            </Flex>
                        </Flex>

                        <Divider my={6} />

                        <Heading>How I Can Help</Heading>
                        <List flexWrap='wrap' justifyContent='center' mt={2}>
                            {this.props.businessData && this.props.businessData.acf.services.map((item, key) => (
                                <ListItem key={key} py={2} px={3}>
                                    <Text.span color="gray.8">{item.service_name}</Text.span>
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                </Section>
                <Section bg={'green.2'}>
                    <Container py={8}>
                        <Heading>Prices</Heading>
                    </Container>
                </Section>
                <Section>
                    <Container pt={2} pb={8}>
                        {/*<Flex flexWrap='wrap'>
                            {this.props.businessData && this.props.businessData.acf.prices.map((item, key) => (
                                <Box key={key} width={['100%', '50%']} px={2} py={8}>
                                    <Heading textAlign={['center']} fontSize={2}>{item.name}</Heading>
                                    <Text fontSize={2} textAlign={['center']} pb={3}>{item.cost ? `$${item.cost}` : 'Contact me for pricing'}<Text.span fontSize={2}>{item.period && `/${item.period}`}</Text.span ></Text>
                                    {item.notes.length && item.notes.map((note, notekey) => (
                                        <Text key={notekey} fontSize={1} lineHeight={1} color={'gray.8'} textAlign='center'><em>{note.note}</em></Text>
                                    ))}
                                    <Box my={3}>
                                        <Text color={'gray.8'}><em>Includes:</em></Text>
                                        <ul>
                                            {item.details.map((detail, detailkey) => (
                                                <li className="normal"><Text  key={detailkey} fontSize={1} textAlign={['left']} lineHeight={1} mb={2}>{detail.detail}</Text></li>
                                            ))}
                                        </ul>
                                    </Box>
                                    <Text textAlign="center">
                                        <Link as={`/contact`} href={`/contact?slug=contact&apiRoute=pages`}>
                                            <Button.link><Text fontSize={1}>Get Started</Text></Button.link>
                                        </Link>
                                    </Text>
                                </Box>
                            ))}
                        </Flex>*/}
                        <Box flexWrap='wrap'>
                            {this.props.businessData && this.props.businessData.acf.prices.map((item, key) => (
                                <Box py={4}>
                                    <Flex key={key} width={'100%'} py={3} flexWrap='wrap'>
                                        <Flex width={['100%', '40%']} flexDirection='column' justifyContent='space-between'>
                                            <Box>
                                                <Heading textAlign={['center', 'left']} fontSize={3} lineHeight='1'>{item.name}</Heading>
                                                <Text fontSize={2} textAlign={['center', 'left']} pt={1}><em>{item.cost ? `$${item.cost}` : 'Contact me for pricing'}<Text.span fontSize={2}>{item.period && `/${item.period}`}</Text.span ></em></Text>
                                            </Box>
                                            <Box>
                                                {item.notes.length && item.notes.map((note, notekey) => (
                                                    <Text key={notekey} fontSize={1} lineHeight={1} color={'gray.8'} textAlign={['center', 'left']}><em>{note.note}</em></Text>
                                                ))}
                                            </Box>
                                            <Box display={['none', 'block']}>
                                                <Text textAlign={['center', 'left']} mb={2} >
                                                    <Link as={`/contact`} href={`/contact?slug=contact&apiRoute=pages`}>
                                                        <Button.link><Text fontSize={1}>Get Started</Text></Button.link>
                                                    </Link>
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <Box width={['100%', '60%']} pl={4}>
                                            <Text color={'gray.8'}><em>Includes:</em></Text>
                                            <ul>
                                                {item.details.map((detail, detailkey) => (
                                                    <li className="normal"><Text  key={detailkey} fontSize={1} textAlign={['left']} lineHeight={1} mb={2}>{detail.detail}</Text></li>
                                                ))}
                                            </ul>
                                        </Box>
                                    </Flex>
                                    <Divider mt={6} />
                                </Box>
                            ))}
                        </Box>
                        <Box display={['block', 'none']}>
                            <Text textAlign='center' mb={6} >
                                <Link as={`/contact`} href={`/contact?slug=contact&apiRoute=pages`}>
                                    <Button.link><Text fontSize={1}>Get Started</Text></Button.link>
                                </Link>
                            </Text>
                        </Box>
                        {this.props.businessData && <Text color={'gray.8'} textAlign='center'><em>{this.props.businessData.acf.prices_note}</em></Text>}
                    </Container>
                </Section>
                <Section py={'200px'}
                    style={{
                        backgroundImage: 'url("/static/images/rack.jpg")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <Section>
                    <Container py={6} maxWidth={0}>
                        <Heading>FAQ</Heading>
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

export default PageWrapper(Index);
