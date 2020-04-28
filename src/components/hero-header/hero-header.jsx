import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './hero-header.module.scss';
import DefaultHeroImage from './assets/default-hero.jpg';
import WaveBottomImage from './assets/wave.svg';
import ShapeBackgroundImage from './assets/shape-background.svg';

/**
 * Hero header component
 * @param children
 * @param image
 * @param height
 * @param className
 * @param elStyle
 * @returns {*}
 * @constructor
 */
export const HeroHeader = ({
    children, image, height, className, style: elStyle,
}) => (
    <header className={classNames([style.header, className])} style={{ height, backgroundImage: `url('${image}')`, ...elStyle }}>
        <img src={ShapeBackgroundImage} className={style.shapeBackground} alt="Shape background" />
        <div style={{ position: 'relative' }}>
          { children }
        </div>
        <img src={WaveBottomImage} className={style.wave} alt="Wave at bottom" />
    </header>
);

HeroHeader.propTypes = {
    children: PropTypes.any.isRequired,
    image: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

HeroHeader.defaultProps = {
    image: DefaultHeroImage,
    height: 'auto',
    className: '',
    style: {},
};
