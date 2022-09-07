// jest.setup.js
import '@testing-library/jest-dom/extend-expect';
jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children
);
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));
