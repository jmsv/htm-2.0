// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import styles from './live-discord.module.scss';

// Image imports
import Background from './assets/background.svg';

/**
 * Live Discord components
 * @param props
 * @returns {*}
 * @constructor
 */
export const LiveDiscord = (props) => (
    <div className={styles.discord}>
        <div className={styles.background} style={{ backgroundImage: `url(${Background})` }} />
        <iframe
            src="https://discordapp.com/widget?id=304313295165325323&theme=dark"
            width="350"
            height="300"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className={styles.iFrame}
        />
    </div>
);

// Prop definitions
LiveDiscord.propTypes = {};

// Default props
LiveDiscord.defaultProps = {};