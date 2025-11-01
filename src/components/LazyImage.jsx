import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, className, onError, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Reset image source when src prop changes
    setImageSrc(null);

    // Cleanup previous observer if src changes
    if (observerRef.current && imgRef.current) {
      observerRef.current.unobserve(imgRef.current);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only set src when image enters viewport
            setImageSrc(src);
            // Stop observing once loaded
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Start loading slightly before image enters viewport
        rootMargin: "50px",
      }
    );

    observerRef.current = observer;

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && observerRef.current) {
        observerRef.current.unobserve(currentRef);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      className={className}
      src={imageSrc || undefined}
      loading="lazy"
      decoding="async"
      onError={onError}
      {...props}
    />
  );
};

export default LazyImage;

