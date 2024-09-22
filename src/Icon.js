import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from './SvgIcon';

export const Icon = ({ style = {}, className = '', icon, size = 16, tag: Tag = 'i', ...others }) => {
    return (
        <Tag {...others} style={{ display: 'inline-block', ...style }} className={className}>
            <SvgIcon size={size} icon={icon} />
        </Tag>
    );
};

export const withBaseIcon = (defaultProps) => (props) => {
    const propsToUse = { ...defaultProps };
    return <Icon {...propsToUse} {...props} />;
};

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.object,
    tag: PropTypes.oneOf(['i', 'span', 'div']),
    className: PropTypes.string,
};

export default Icon;
