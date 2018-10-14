import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import Link from "next/link";
import Box from '../components/Box'
import Button from '../components/Button'
import Card from '../components/Card'
import Container from '../components/Container'
import Divider from '../components/Divider'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Menu from "../components/Menu.js";
import PageWrapper from "../components/PageWrapper.js";
import Text from '../components/Text'
import { Config } from "../config.js";

const BlogCard = Box.withComponent('a');

class Blog extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=blog`
        );
        const page = await res.json();
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`
        );
        const posts = await postsRes.json();
        return { page, posts };
    }

    render() {
        return (
            <Layout {...this.props}>
                <Heading>{this.props.page.title && this.props.page.title.rendered}</Heading>
                <Container>
                    <Flex mt={5} mb={8} flexWrap='wrap' justifyContent='center'>
                        {!!this.props.posts.length ? (
                            this.props.posts.map((post) => (
                                <Link
                                    key={post.id}
                                    as={`/post/${post.slug}`}
                                    href={`/post?slug=${post.slug}&apiRoute=post`}
                                >
                                    <BlogCard width={'100%'}>
                                        <Flex width={'100%'} py={2} flexWrap='wrap'>
                                            <Flex width={['100%', '40%']} flexDirection='column' justifyContent='space-between'>
                                                <Box>
                                                    <Heading textAlign={['center', 'left']} fontSize={3} lineHeight='1'>{post.title.rendered}</Heading>
                                                    <Text fontSize={2} textAlign={['center', 'left']} pt={1}><em>{new Date(post.date).toLocaleDateString("en-US")}</em></Text>
                                                </Box>
                                            </Flex>
                                            <Box width={['100%', '60%']} pl={['0', 4]}>
                                                <Text fontSize={1} lineHeight={1} textAlign={['center', 'left']} mb={2} color={'gray.7'}
                                                    dangerouslySetInnerHTML={{
                                                        __html: post.excerpt.rendered
                                                    }} />
                                            </Box>
                                        </Flex>
                                        <Divider />
                                    </BlogCard>
                                </Link>
                            ))
                        ) : (
                            <Heading>Coming soon</Heading>
                        )}
                    </Flex>
                </Container>
            </Layout>
        );
    }
}

export default PageWrapper(Blog);
