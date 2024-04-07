const baseStyle = {
  color: "gray.900_04",
  fontFamily: "Montserrat",
};
const sizes = {
  "3xl": {
    fontSize: '{"md":"34px","base":"30px","sm":"32px"}',
    fontWeight: 700,
  },
  "2xl": {
    fontSize: '{"md":"32px","base":"28px","sm":"30px"}',
    fontWeight: 700,
  },
  xl: {
    fontSize: '{"md":"28px","base":"24px","sm":"26px"}',
    fontWeight: 700,
  },
  "5xl": {
    fontSize: '{"md":"48px","base":"38px","sm":"44px"}',
    fontWeight: 700,
  },
  "4xl": {
    fontSize: '{"md":"40px","base":"36px","sm":"38px"}',
    fontWeight: 700,
  },
  s: {
    fontSize: "16px",
    fontWeight: 600,
  },
  md: {
    fontSize: "20px",
    fontWeight: 700,
  },
  "6xl": {
    fontSize: '{"md":"54px","base":"40px","sm":"46px"}',
    fontWeight: 700,
  },
  xs: {
    fontSize: "14px",
    fontWeight: 600,
  },
  lg: {
    fontSize: '{"md":"24px","base":"24px","sm":"22px"}',
    fontWeight: 600,
  },
};
const defaultProps = {
  size: "md",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
