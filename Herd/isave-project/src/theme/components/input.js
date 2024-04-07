import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: {} });

const sizes = {
  sm: defineStyle({
    field: {
      fontSize: "16px",
      height: "57px",
      px: "16px",
    },
  }),
  md: defineStyle({
    field: {
      fontSize: "16px",
      px: "17px",
      height: "64px",
    },
  }),
  xs: defineStyle({
    field: {
      fontSize: "16px",
      height: "52px",
      px: "16px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_100: {
        field: {
          bg: "gray.100",
          color: "gray.700",
        },
      },
      white_A700: {
        field: {
          bg: "white.A700",
          color: "blue_gray.300",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["white_A700"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Input;
