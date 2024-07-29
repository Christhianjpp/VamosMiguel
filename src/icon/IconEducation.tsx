import React from 'react';

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
    width?: string | number;
    height?: string | number;
    color?: string; // Nueva propiedad de color
}

export const IconEducation: React.FC<SvgComponentProps> = ({
    width = '1em',
    height = '1em',
    color = '#e8eaed', // Valor predeterminado
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={color} // Usar la propiedad color
        viewBox="0 -960 960 960"
        {...props}
    >
        <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
    </svg>
);

