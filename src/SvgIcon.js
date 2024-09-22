import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import camelcase from 'camel-case';

function notNullOrUndef(val) {
    return val !== null && val !== undefined;
}

function expandStyle(style = '') {
    return style.split(';').reduce((partial, next) => {
        const [key, val] = next.split(':');
        if (notNullOrUndef(key) && notNullOrUndef(val)) {
            partial[camelcase(key)] = val;
        }
        return partial;
    }, {});
}

const walkChildren = (children) => {
    return children.map((child, idx) => {
        const { name, attribs: attribsMap, children: gchildren = null } = child;

        const attribs = Object.keys(attribsMap)
            .filter((key) => key !== 'fill' && key !== 'stroke' && attribsMap[key] !== 'none')
            .reduce((partial, key) => {
                if (key === 'style') {
                    partial.style = expandStyle(attribsMap[key]);
                } else {
                    partial[camelcase(key)] = attribsMap[key];
                }
                return partial;
            }, {});

        let merge = {};
        if (attribsMap.fill === 'none' && attribsMap.stroke) {
            merge = { fill: 'none', stroke: 'currentColor' };
        } else if (attribsMap.fill === 'none') {
            merge = { fill: 'none' };
        }

        return createElement(
            name,
            { key: idx, ...attribs, ...merge },
            gchildren === null ? gchildren : walkChildren(gchildren)
        );
    });
};

export const SvgIcon = ({ size = 16, icon, title }) => {
    const { children, viewBox, attribs: svgAttribs = {} } = icon;

    const camelCasedAttribs = Object.keys(svgAttribs).reduce((partial, key) => {
        partial[camelcase(key)] = svgAttribs[key];
        return partial;
    }, {});

    return (
        <svg
            fill="currentColor"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
            height={size}
            width={size}
            viewBox={viewBox}
            {...camelCasedAttribs}
        >
            {title ? <title>{title}</title> : null}
            {walkChildren(children)}
        </svg>
    );
};

SvgIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
};

export default SvgIcon;
