import { render } from '@testing-library/react';
import LinkButton from './LinkButton';

describe('Link Button', () => {
  it('should work as expected', () => {
    const tree = render(
      <LinkButton href="http://www.foo.com" variant="void">
        Dummy value
      </LinkButton>,
    );
    expect(tree).toMatchSnapshot();
  });
});
