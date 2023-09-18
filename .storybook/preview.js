/** @type { import('@storybook/react').Preview } */

// Tailwinds CSS styles.
import "../src/app/globals.css";

const preview = {
  parameters: {
    backgrounds: {
      // Prevent ugly default repeating background gradient.
      default: "light",
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
