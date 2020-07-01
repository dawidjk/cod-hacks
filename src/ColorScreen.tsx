import React from 'react';
export const colors = ["red", "blue", "green", "yellow"];

type Props = {
    index: number;
}

const ColorScreen = (props: Props) => {
    const { index } = props;
    return (
        <div style={{ backgroundColor: colors[index], height: '100vh', width: '100vw' }}>

        </div>
    );
}

export default ColorScreen;