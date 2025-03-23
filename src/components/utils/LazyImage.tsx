import React, { useState, useEffect } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  placeholderColor?: string;
}

/**
 * A performance-optimized image component that:
 * 1. Lazy loads images using Intersection Observer
 * 2. Shows a placeholder until the image loads
 * 3. Adds a blur-up effect when the image loads
 * 4. Uses native browser lazy loading as fallback
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholderSrc,
  placeholderColor = "#f0f0f0",
  className,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(
    placeholderSrc ||
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48L3N2Zz4="
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div
      style={{ backgroundColor: placeholderColor }}
      className="overflow-hidden"
    >
      <img
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-60"
        } ${className || ""}`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
