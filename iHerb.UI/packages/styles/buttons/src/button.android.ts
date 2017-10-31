import getDisabled, { disabled } from './states/disabled';

export interface button {
    disabled: disabled;
}

export default {
    disabled: getDisabled('blue')
}