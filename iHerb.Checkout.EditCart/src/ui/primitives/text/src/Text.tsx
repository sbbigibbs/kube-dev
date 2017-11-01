import * as React from 'react';
import StyleSheet from '../../stylesheet/index';

const TEXT_CLASSNAME = 'rp_Text';

class Text extends React.Component {
  props: any

  render() {
    const {
      accessibilityRole,
      style,
      numberOfLines,
    } = this.props;

    const passedStyle = numberOfLines === 1 ? [style, styles.singleLineStyle] : style;
    const resolvedStyle = StyleSheet.resolve(passedStyle, TEXT_CLASSNAME);

    const props = {
      className: resolvedStyle.className,
      style: resolvedStyle.style,
      children: this.props.children,
    };

    if (this.props.testID) {
      props['data-testid'] = this.props.testID;
    }

    if (
      this.props.onResponderGrant
    ) {
      Object.assign(props, {
        onMoveShouldSetResponder: this.props.onMoveShouldSetResponder,
        onMoveShouldSetResponderCapture: this.props.onMoveShouldSetResponderCapture,
        onResponderGrant: this.props.onResponderGrant,
        onResponderMove: this.props.onResponderMove,
        onResponderReject: this.props.onResponderReject,
        onResponderRelease: this.props.onResponderRelease,
        onResponderTerminate: this.props.onResponderTerminate,
        onResponderTerminationRequest: this.props.onResponderTerminationRequest,
        onStartShouldSetResponder: this.props.onStartShouldSetResponder,
        onStartShouldSetResponderCapture: this.props.onStartShouldSetResponderCapture,
      });
    }

  return <span {...props}></span> 
  }
}

const styles = StyleSheet.create({
  singleLineStyle: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

export default Text