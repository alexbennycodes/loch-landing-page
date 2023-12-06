import React from "react";

const Input = ({ className, type, ...props }) => {
  return <input type={type} className={className} {...props} />;
};
Input.displayName = "Input";

export { Input };
