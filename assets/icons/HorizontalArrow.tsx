import React from 'react';
import type { SVGProps } from 'react';

export function HorizontalArrow(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 9c-.607.59-3 2.16-3 3s2.393 2.41 3 3m14-6c.607.59 3 2.16 3 3s-2.393 2.41-3 3M2.423 11.98h19.445" color="currentColor"></path></svg>);
}