import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  xl: defineStyle({
    h: "55px",
  }),
  md: defineStyle({
    h: "48px",
    px: "12px",
  }),
  lg: defineStyle({
    h: "52px",
    fontSize: "16px",
    px: "35px",
  }),
  sm: defineStyle({
    h: "48px",
    fontSize: "20px",
    px: "19px",
  }),
  "2xl": defineStyle({
    h: "68px",
    fontSize: "20px",
    px: "32px",
  }),
  xs: defineStyle({
    h: "40px",
    fontSize: "14px",
    px: "12px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_50: {
        bg: "gray.50",
        color: "deep_purple.A200",
      },
      white_A700: {
        bg: "white.A700",
        color: "gray.900_04",
      },
      deep_purple_A200: {
        bg: "deep_purple.A200",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_50"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      deep_purple_A200: {
        borderColor: "deep_purple.A200",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "deep_purple.A200",
      },
      blue_gray_100: {
        borderColor: "blue_gray.100",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "gray.700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["blue_gray_100"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "outline",
    size: "xs",
  },
});
export default Button;
