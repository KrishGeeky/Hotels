import { useState } from "react";
import { Building2 } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export default function ImageWithFallback({ 
  src, 
  alt, 
  className = "", 
  fallbackText 
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className={`${className} bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 flex items-center justify-center`}>
        <div className="text-center text-gray-400 p-8">
          <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
          {fallbackText && <p className="text-sm font-light">{fallbackText}</p>}
        </div>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className={`${className} absolute inset-0 bg-gray-200 animate-pulse`} />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        loading="lazy"
      />
    </>
  );
}

