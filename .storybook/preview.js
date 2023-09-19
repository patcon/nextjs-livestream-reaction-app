/** @type { import('@storybook/react').Preview } */

// Tailwinds CSS styles.
import "../src/app/globals.storybook.css";

const preview = {
  parameters: {
    backgrounds: {
      // Use color closer to background of app.
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
