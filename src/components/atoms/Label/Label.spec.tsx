import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from './Label';

describe('Label', () => {
  test('should require a label to display', () => {
    const { getByText } = render(<Label>test label</Label>);
    expect(getByText('test label')).toBeDefined();
  });

  test('should change styles if there is a value', () => {
    const { getByText } = render(<Label innerValue="some input value">test label</Label>);
    expect(getByText('test label')).toBeDefined();
  });
});
