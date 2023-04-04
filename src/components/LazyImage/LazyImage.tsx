import React, { useState, useEffect, useRef } from 'react';

const LazyImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && src) {
          imgRef.current!.src = src;
          setLoaded(true);
          observer.unobserve(imgRef.current!);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px 0px 0px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      loading="lazy"
      style={{ opacity: loaded ? 1 : 0 }}
      {...rest}
    />
  );
};

export default LazyImage;
