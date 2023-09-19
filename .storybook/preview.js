/** @type { import('@storybook/react').Preview } */

// Tailwinds CSS styles.
import "../src/app/globals.css";

const preview = {
  parameters: {
    backgrounds: {
      // Prevent ugly default repeating background gradient.
      default: "black",
      values: [
        { name: "light", value: "#F8F8F8" },
        { name: "dark", value: "#333333" },
        { name: "black", value: "#000000" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
