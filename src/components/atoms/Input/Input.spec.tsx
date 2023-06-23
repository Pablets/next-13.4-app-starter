import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  test('should have default value if provided in value prop', () => {
    const { getByDisplayValue } = render(<Input value={'test value'} readOnly />);
    expect(getByDisplayValue('test value')).toBeDefined();
  });

  test('should have default value if provided in defaultValue prop', () => {
    const { getByDisplayValue } = render(<Input defaultValue={'test value'} />);
    expect(getByDisplayValue('test value')).toBeDefined();
  });
});
