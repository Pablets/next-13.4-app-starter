# Test

Testing is made with jest and react-testing library, there are a lot of resources in the official documentation:

- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)
- [jest](https://jestjs.io/)

The jest config is in jest.config.mjs, if you need to pass custom config to jest be sure to put it in there because this is the default config from next.

An example:

```typescript
import { render, screen } from '@testing-library/react';

describe('Input', () => {
  test('should have default value if provided in value prop', () => {
    const { getByDisplayValue } = render(<Input value={'test value'} readOnly />);
    expect(getByDisplayValue('test value')).toBeDefined();
  });
});
```

If you use snapshots be sure to update them if needed to avoid errors while running pipelines in CI environment.
