import { JSX } from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ion-icon': {
                name: string;
                class?: string;
                style?: React.CSSProperties;
                'stroke-width'?: number | string;
                'aria-hidden'?: boolean | 'true' | 'false';
                ref?: React.Ref<HTMLElement>;
            }
        }
    }
}