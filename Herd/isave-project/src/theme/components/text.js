const baseStyle = {
  color: "blue_gray.400",
  fontFamily: "Montserrat",
};
const sizes = {
  xs: {
    fontSize: "8px",
    fontWeight: 500,
  },
  lg: {
    fontSize: "16px",
    fontWeight: 400,
  },
  s: {
    fontSize: "12px",
    fontWeight: 400,
  },
  "2xl": {
    fontSize: "20px",
    fontWeight: 400,
  },
  xl: {
    fontSize: "18px",
    fontWeight: 500,
  },
  md: {
    fontSize: "14px",
    fontWeight: 400,
  },
};
const defaultProps = {
  size: "lg",
};

const Text = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Text;
