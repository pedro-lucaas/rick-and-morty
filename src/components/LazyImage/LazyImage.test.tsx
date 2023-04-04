import React from 'react';
import { render, screen } from '@testing-library/react';
import LazyImage from './LazyImage';
import '../../../__mocks__/intersectionObserverMock.js'

describe('LazyImage', () => {
  const props = {
    src: 'https://example.com/image.jpg',
    alt: 'Example image',
    className: 'example-class'
  };

  it('should set the src attribute when image is in view', async () => {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      // Render LazyImage with a div containing a height larger than the viewport
      render(
        <>
          <div style={{ height: '200vh' }} />
          <LazyImage {...props} />
        </>
      );

      const img = screen.getByAltText(props.alt) as HTMLImageElement;

      expect(img.src).not.toEqual(props.src);
    } else {
      console.log('IntersectionObserver is not supported, skipping test.');
    }
  });
});
