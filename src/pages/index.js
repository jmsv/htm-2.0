import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-flexbox-grid';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../components/layout/layout';

// Styles
import style from './index.module.scss';

// Components
import { HeroHeader } from '../components/hero-header/hero-header';
import { Button } from '../components/button/button';
import { IndexFeatures } from '../components/index-features/index-features'
import { MissionBlock } from '../components/mission-block/mission-block'

const Index = (props) => {
    // Get the site title from the page data
    const siteTitle = get(props, 'data.site.siteMetadata.title');

    return (
        <Layout location={props.location}>
            <div>
                <Helmet title={siteTitle} />

                <HeroHeader className={style.header}>
                    <Grid fluid>
                        <Row center="xs">
                            <Col xs={8}>
                                <h1>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat
                                </p>
                                <Button theme="orange">Get involved</Button>
                            </Col>
                        </Row>
                    </Grid>
                </HeroHeader>

                <IndexFeatures />

                <MissionBlock />

            </div>
        </Layout>
    );
};

export default Index;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
