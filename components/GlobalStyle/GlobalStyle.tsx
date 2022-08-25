import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-magenta: ${theme.color.primary.magenta};
    --color-primary-lavender: ${theme.color.primary.lavender};
    --color-neutral-white: ${theme.color.neutral.white};
    --color-neutral-gray-100: ${theme.color.neutral.gray[100]};
    --color-neutral-gray-300: ${theme.color.neutral.gray[300]};
    --color-neutral-gray-500: ${theme.color.neutral.gray[500]};
    --color-neutral-gray-700: ${theme.color.neutral.gray[700]};
    --color-neutral-gray-900: ${theme.color.neutral.gray[900]};
    --font-family-raleway: ${theme.font.family.raleway};
    --font-weight-medium: ${theme.font.weight.medium};
    --font-weight-semi-bold: ${theme.font.weight.semiBold};
    --font-weight-bold: ${theme.font.weight.bold};
    --font-weight-extra-bold: ${theme.font.weight.extraBold};
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: var(--font-family-raleway);
  }
`;

export default GlobalStyle;
