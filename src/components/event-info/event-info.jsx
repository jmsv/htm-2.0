// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './event-info.module.scss';

// Image imports
import DiagonalLine from './assets/diagonal-line.inline.svg';
import EventPicOne from './assets/evebt-pic-one.jpg';
import EventPicTwo from './assets/event-pic-two.jpg';
import EventPicThree from './assets/event-pic-three.jpg';

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const EventInfo = ({ title, body, children }) => (
    <section className={style.eventSection}>
        <DiagonalLine className={style.line} />
        <Grid fluid style={{ zIndex: 1, position: 'relative' }}>
            <Row>
                <Col lg={5} className={style.textCol}>
                    <h2>{ title }</h2>
                    <p>{ body }</p>
                </Col>
                <Col lg={7} className={style.imageCol}>
                    <Row>
                        <Col md={12} lg={5} className={style.imageColOne}>
                            <img src={EventPicOne} className={style.image} alt="Pic one" />
                            <img src={EventPicThree} className={classNames([style.image, style.imageTwo])} alt="Pic two" />
                        </Col>
                        <Col md={12} lg={7}>
                            <img src={EventPicTwo} className={classNames([style.image, style.imageThree])} alt="Pic two" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
        <div className={style.content}>
            { children }
        </div>
    </section>
);

// Prop definitions
EventInfo.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    children: PropTypes.any,
};

// Default props
EventInfo.defaultProps = {
    title: 'The event',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    children: null,
};
