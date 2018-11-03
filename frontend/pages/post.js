import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import Box from "../components/Box";
import PageWrapper from "../components/PageWrapper";
import Text from "../components/Text";
import { Config } from "../config.js";

class Post extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
        );
        const post = await res.json();
        return { post };
    }

    render() {
        if (!this.props.post.title) return <Error statusCode={404} />;

        return (
            <Layout {...this.props}>
                <Box mb={10} pt={3} pb={5}>
                    <h1>{this.props.post.title.rendered}</h1>
                    <Text
                        lineHeight="1.65"
                        dangerouslySetInnerHTML={{
                            __html: this.props.post.content.rendered
                        }}
                    />
                </Box>
            </Layout>
        );
    }
}

export default PageWrapper(Post);
