import React, { useState } from "react";
export const TouchableOpacity = ({ onPress, children, style }) => {
  const [opacity, setOpacity] = useState(1);

  const handlePressIn = () => {
    setOpacity(0.7);
  };

  const handlePressOut = () => {
    setOpacity(1);
  };

  return (
    <div
      style={{
        opacity: opacity,
        cursor: "pointer",
        borderStyle: style?.borderWidth ? "solid" : "none",
        ...style,
      }}
      onClick={onPress}
      onMouseDown={handlePressIn}
      onMouseUp={handlePressOut}
      onMouseLeave={handlePressOut}
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
    >
      {children}
    </div>
  );
};
