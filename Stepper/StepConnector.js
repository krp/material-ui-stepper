'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainStepConnector = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Override the inline-style of the root element.
   */
  style: _react.PropTypes.object
};

var contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired,
  stepper: _react.PropTypes.object
};

var StepConnector = function StepConnector(props, context) {
  var muiTheme = context.muiTheme;
  var stepper = context.stepper;


  var styles = {
    wrapper: {
      flex: '1 1 auto'
    },
    line: {
      display: 'block',
      borderColor: muiTheme.stepper.connectorLineColor
    }
  };

  /**
   * Clean up once we can use CSS pseudo elements
   */
  if (stepper.orientation === 'horizontal') {
    styles.line.marginLeft = -6;
    styles.line.borderTopStyle = 'solid';
    styles.line.borderTopWidth = 1;
  } else if (stepper.orientation === 'vertical') {
    styles.wrapper.marginLeft = 22; // padding + 1/2 icon
    styles.wrapper.marginTop = -8;
    styles.wrapper.marginBottom = 6;
    styles.line.borderLeftStyle = 'solid';
    styles.line.borderLeftWidth = 1;
    styles.line.minHeight = 18;
  }

  var prepareStyles = muiTheme.prepareStyles;


  return _react2.default.createElement(
    'div',
    { style: prepareStyles(styles.wrapper) },
    _react2.default.createElement('span', { style: prepareStyles(styles.line) })
  );
};

StepConnector.propTypes = propTypes;
StepConnector.contextTypes = contextTypes;

exports.PlainStepConnector = StepConnector;
exports.default = (0, _pure2.default)(StepConnector);
