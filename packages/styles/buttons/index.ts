import button from './src/button';

export interface disabled {
    color: string
}

export interface button {
    disabled: disabled;
}

export default button as button;