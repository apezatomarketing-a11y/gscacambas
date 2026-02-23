import { GALLERY_IMAGES } from '@/lib/constants';

export default function Gallery() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];
  const duplicatedReverse = [...GALLERY_IMAGES.slice(5), ...GALLERY_IMAGES.slice(0, 5), ...GALLERY_IMAGES.slice(5), ...GALLERY_IMAGES.slice(0, 5)];

  return (
    <div className="w-full overflow-hidden py-6 space-y-6">
      {/* Row 1 - Left to Right */}
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-gallery-slide hover:[animation-play-state:paused] whitespace-nowrap">
            {duplicatedImages.map((img, index) => (
              <div
                key={`row1-${img.id}-${index}`}
                className="flex-shrink-0 w-72 h-52 md:w-96 md:h-64 rounded-[2rem] overflow-hidden border-4 border-card shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-primary/20"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 - Right to Left (reverse) */}
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-gallery-slide-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {duplicatedReverse.map((img, index) => (
              <div
                key={`row2-${img.id}-${index}`}
                className="flex-shrink-0 w-72 h-52 md:w-96 md:h-64 rounded-[2rem] overflow-hidden border-4 border-card shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-primary/20"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
