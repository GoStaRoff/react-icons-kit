"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iosSpeedometer = void 0;
var iosSpeedometer = {
  "viewBox": "0 0 512 512",
  "children": [{
    "name": "g",
    "attribs": {},
    "children": [{
      "name": "path",
      "attribs": {
        "d": "M417,278.742V278h29.814c-0.931-23-6.056-45.609-14.831-66.151c-8.643-20.228-20.503-38.665-35.257-54.562l-24.867,24.646\r\n\t\tl-11.229-10.992l24.788-24.679c-16.187-14.836-34.86-26.742-55.515-35.392C308.479,101.897,286,97.092,263,96.186V130h-1.008H248\r\n\t\tV96.186c-23,0.894-44.95,5.699-66.404,14.685c-20.353,8.523-38.958,20.457-55.315,35.471l24.796,24.583l-0.549,0.549l0.001,0.006\r\n\t\tl-0.29,0.335l-10.27,10.203l-24.779-24.479c-14.77,15.932-26.604,34.243-35.176,54.309C71.241,232.388,66.117,255,65.187,278H94v16\r\n\t\th-0.776H65.187c0.926,22,5.915,44.432,14.829,65.297c7.689,18.001,18.398,34.664,31.831,49.926\r\n\t\tc38.785-37.377,89.958-57.928,144.154-57.928c54.113,0,105.286,20.676,144.154,58.135c13.354-15.175,24.061-31.979,31.83-50.166\r\n\t\tC440.9,338.396,445.889,316,446.814,294H417V278.742z M304,287.938c0,26.467-21.533,48-48,48c-10.223,0-19.701-3.223-27.496-8.691\r\n\t\tl-12.033,12.033l-11.312-11.313l11.948-11.948c-5.722-7.902-9.106-17.602-9.106-28.08c0-26.467,21.533-48,48-48\r\n\t\tc10.002,0,19.297,3.079,26.994,8.334l73.484-65.727l1.414,1.414l-62.849,76.11C300.673,267.933,304,277.551,304,287.938z"
      },
      "children": [{
        "name": "path",
        "attribs": {
          "d": "M417,278.742V278h29.814c-0.931-23-6.056-45.609-14.831-66.151c-8.643-20.228-20.503-38.665-35.257-54.562l-24.867,24.646\r\n\t\tl-11.229-10.992l24.788-24.679c-16.187-14.836-34.86-26.742-55.515-35.392C308.479,101.897,286,97.092,263,96.186V130h-1.008H248\r\n\t\tV96.186c-23,0.894-44.95,5.699-66.404,14.685c-20.353,8.523-38.958,20.457-55.315,35.471l24.796,24.583l-0.549,0.549l0.001,0.006\r\n\t\tl-0.29,0.335l-10.27,10.203l-24.779-24.479c-14.77,15.932-26.604,34.243-35.176,54.309C71.241,232.388,66.117,255,65.187,278H94v16\r\n\t\th-0.776H65.187c0.926,22,5.915,44.432,14.829,65.297c7.689,18.001,18.398,34.664,31.831,49.926\r\n\t\tc38.785-37.377,89.958-57.928,144.154-57.928c54.113,0,105.286,20.676,144.154,58.135c13.354-15.175,24.061-31.979,31.83-50.166\r\n\t\tC440.9,338.396,445.889,316,446.814,294H417V278.742z M304,287.938c0,26.467-21.533,48-48,48c-10.223,0-19.701-3.223-27.496-8.691\r\n\t\tl-12.033,12.033l-11.312-11.313l11.948-11.948c-5.722-7.902-9.106-17.602-9.106-28.08c0-26.467,21.533-48,48-48\r\n\t\tc10.002,0,19.297,3.079,26.994,8.334l73.484-65.727l1.414,1.414l-62.849,76.11C300.673,267.933,304,277.551,304,287.938z"
        },
        "children": []
      }]
    }, {
      "name": "path",
      "attribs": {
        "d": "M256,64C132.288,64,32,164.226,32,287.938c0,56.975,21.283,108.97,56.316,148.5c3.551,4.006,7.241,7.82,11.066,11.562\r\n\t\th22.193c31.713-39.103,80.144-64.096,134.424-64.096S358.711,408.897,390.424,448h22.193c3.825-3.742,7.516-7.557,11.066-11.562\r\n\t\tc35.033-39.53,56.316-91.525,56.316-148.5C480,164.226,379.712,64,256,64z M410.744,420.797\r\n\t\tc-3.051,3.408-6.392,6.863-10.213,10.564l-0.376,0.365l-0.348-0.393c-2.629-2.97-5.493-5.985-8.759-9.22\r\n\t\tc-0.275-0.271-0.555-0.539-0.834-0.807l-0.504-0.485c-17.258-16.766-37.234-29.967-59.375-39.238\r\n\t\tc-23.535-9.856-48.545-14.854-74.336-14.854c-25.791,0-50.801,4.998-74.336,14.854c-22.14,9.271-42.117,22.473-59.375,39.238\r\n\t\tl-0.504,0.485c-0.279,0.268-0.558,0.535-0.833,0.807c-3.266,3.234-6.13,6.25-8.759,9.22l-0.348,0.393l-0.377-0.365\r\n\t\tc-3.821-3.701-7.162-7.156-10.212-10.564c-33.514-37.441-51.971-85.629-51.971-135.685c0-54.666,21.502-106.053,60.545-144.694\r\n\t\tC148.87,101.779,200.781,80.5,256,80.5c55.22,0,107.13,21.279,146.17,59.918c39.043,38.642,60.545,90.029,60.545,144.694\r\n\t\tC462.715,335.168,444.259,383.355,410.744,420.797z"
      },
      "children": [{
        "name": "path",
        "attribs": {
          "d": "M256,64C132.288,64,32,164.226,32,287.938c0,56.975,21.283,108.97,56.316,148.5c3.551,4.006,7.241,7.82,11.066,11.562\r\n\t\th22.193c31.713-39.103,80.144-64.096,134.424-64.096S358.711,408.897,390.424,448h22.193c3.825-3.742,7.516-7.557,11.066-11.562\r\n\t\tc35.033-39.53,56.316-91.525,56.316-148.5C480,164.226,379.712,64,256,64z M410.744,420.797\r\n\t\tc-3.051,3.408-6.392,6.863-10.213,10.564l-0.376,0.365l-0.348-0.393c-2.629-2.97-5.493-5.985-8.759-9.22\r\n\t\tc-0.275-0.271-0.555-0.539-0.834-0.807l-0.504-0.485c-17.258-16.766-37.234-29.967-59.375-39.238\r\n\t\tc-23.535-9.856-48.545-14.854-74.336-14.854c-25.791,0-50.801,4.998-74.336,14.854c-22.14,9.271-42.117,22.473-59.375,39.238\r\n\t\tl-0.504,0.485c-0.279,0.268-0.558,0.535-0.833,0.807c-3.266,3.234-6.13,6.25-8.759,9.22l-0.348,0.393l-0.377-0.365\r\n\t\tc-3.821-3.701-7.162-7.156-10.212-10.564c-33.514-37.441-51.971-85.629-51.971-135.685c0-54.666,21.502-106.053,60.545-144.694\r\n\t\tC148.87,101.779,200.781,80.5,256,80.5c55.22,0,107.13,21.279,146.17,59.918c39.043,38.642,60.545,90.029,60.545,144.694\r\n\t\tC462.715,335.168,444.259,383.355,410.744,420.797z"
        },
        "children": []
      }]
    }, {
      "name": "circle",
      "attribs": {
        "cx": "256",
        "cy": "287.938",
        "r": "32"
      },
      "children": [{
        "name": "circle",
        "attribs": {
          "cx": "256",
          "cy": "287.938",
          "r": "32"
        },
        "children": []
      }]
    }]
  }]
};
exports.iosSpeedometer = iosSpeedometer;