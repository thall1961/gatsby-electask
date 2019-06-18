import React from 'react';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                }
            }
        }
    `);
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
            <meta
                name="description"
                content={data.site.siteMetadata.description}
            />
            <meta
                http-equiv="Cache-control"
                content="public"
                max-age="0"
                must-revalidate
            />
        </Helmet>
    );
};
