import * as React from 'react';
import StyleSheet from '../../stylesheet/index';
import normalizeNativeEvent from './normalize'

function normalizeHandler(handler) {
  if (!handler) {
    return undefined;
  }
  return (e) => {
    /* eslint no-param-reassign: 0 */
    if (e.nativeEvent.pageX === undefined) {
      e.nativeEvent = normalizeNativeEvent(e.nativeEvent);
    }
    handler(e);
  };
}

const VIEW_CLASSNAME = 'rp_View';

class View extends React.Component {
    props:any

    render() {
        const {
            pointerEvents,
            style,
            accessibilityRole,
          } = this.props;
        
          const passedStyle = !pointerEvents ? style : [style, { pointerEvents }];
        
          const resolvedStyle = StyleSheet.resolve(passedStyle, VIEW_CLASSNAME);
          const props = {
            className: resolvedStyle.className,
            style: resolvedStyle.style,
            children: this.props.children,
          };
        
          if (
            this.props.onClick ||
            this.props.onResponderGrant ||
            this.props.onTouchStart
          ) {
            Object.assign(props, {
              onClick: this.props.onClick,
              onClickCapture: this.props.onClickCapture,
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
              onScroll: this.props.onScroll,
              onTouchCancel: normalizeHandler(this.props.onTouchCancel),
              onTouchCancelCapture: normalizeHandler(this.props.onTouchCancelCapture),
              onTouchEnd: normalizeHandler(this.props.onTouchEnd),
              onTouchEndCapture: normalizeHandler(this.props.onTouchEndCapture),
              onTouchMove: normalizeHandler(this.props.onTouchMove),
              onTouchMoveCapture: normalizeHandler(this.props.onTouchMoveCapture),
              onTouchStart: normalizeHandler(this.props.onTouchStart),
              onTouchStartCapture: normalizeHandler(this.props.onTouchStartCapture),
            });
          }
        
          return <div {...props }></div>
    }
}

export default View;
