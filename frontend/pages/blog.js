import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

import Box from '../components/Box'
import Card from '../components/Card'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Text from '../components/Text'

const BlogCard = Card.withComponent('a');

class Post extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}`
        );
        const post = await res.json();
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`
        );
        const posts = await postsRes.json();
        return { post, posts };
    }

    render() {

        return (
            <Layout {...this.props}>
                <Heading>{this.props.post.title && this.props.post.title.rendered}</Heading>
                <Flex mt={5} mb={8} flexWrap='wrap' justifyContent='center'>
                    {!!this.props.posts.length ? (
                        this.props.posts.map((post) => (
                            <Link
                                key={post.id}
                                as={`/post/${post.slug}`}
                                href={`/post?slug=${post.slug}&apiRoute=post`}
                            >
                                <BlogCard width='100%'>
                                    <Heading fontSize={2}>{post.title.rendered}</Heading>
                                    <Box mt={3}>
                                        <Text fontSize={1} textAlign='center' lineHeight={1} mb={2} color={'gray.7'}
                                            dangerouslySetInnerHTML={{
                                                __html: post.excerpt.rendered
                                            }} />
                                    </Box>
                                </BlogCard>
                            </Link>
                        ))
                    ) : (
                        <Heading>Coming soon</Heading>
                    )}
                </Flex>
            </Layout>
        );
    }
}

export default PageWrapper(Post);
