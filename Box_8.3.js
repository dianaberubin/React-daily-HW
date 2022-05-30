import React from 'react';

const Box = (props) => {
    return <div className="box" style={{ background: props.Box_color, borderRadius: props.Box_shape }}></div>;
}
export default Box;