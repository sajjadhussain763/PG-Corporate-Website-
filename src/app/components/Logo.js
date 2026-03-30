'use client';

// Branded Star Icon component for decorative use
export function StarIcon({ size = 'sm' }) {
  const iconSizes = {
    sm: '40px',
    md: '60px',
    lg: '80px'
  };

  const currentIconSize = iconSizes[size] || iconSizes.sm;

  return (
    <div style={{ position: 'relative', width: currentIconSize, height: currentIconSize }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50, 50)">
          {/* Recreated multi-layer star based on user image */}
          {/* Base Magenta Star */}
          <path d="M0 -45 L12 -12 L45 0 L12 12 L0 45 L-12 12 L-45 0 L-12 -12 Z" fill="#EC008C" opacity="0.8" />
          
          {/* Yellow Star rotated */}
          <path d="M0 -45 L12 -12 L45 0 L12 12 L0 45 L-12 12 L-45 0 L-12 -12 Z" fill="#FFF200" opacity="0.7" transform="rotate(30)" />
          
          {/* Turquoise Star rotated */}
          <path d="M0 -45 L12 -12 L45 0 L12 12 L0 45 L-12 12 L-45 0 L-12 -12 Z" fill="#00A99D" opacity="0.7" transform="rotate(60)" />

          {/* Light Blue Star rotated */}
          <path d="M0 -45 L12 -12 L45 0 L12 12 L0 45 L-12 12 L-45 0 L-12 -12 Z" fill="#00AEEF" opacity="0.7" transform="rotate(90)" />
          
          {/* Orange Star rotated */}
          <path d="M0 -45 L12 -12 L45 0 L12 12 L0 45 L-12 12 L-45 0 L-12 -12 Z" fill="#F7941D" opacity="0.7" transform="rotate(45)" />

          {/* Inner Highlight Layer */}
          <path d="M0 -20 L6 -6 L20 0 L6 6 L0 20 L-6 6 L-20 0 L-6 -6 Z" fill="#FFFFFF" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

// Main Logo Component
export default function Logo({ className = '', inverted = false, horizontal = false, size = 'sm' }) {
  // Brand Colors
  const navy = 'var(--primary-navy)';
  const lightBlue = 'var(--primary-blue)';
  const gray = '#777777';
  
  // Icon size configuration
  const iconSizes = {
    sm: horizontal ? '35px' : '40px',
    md: '60px',
    lg: '80px'
  };

  const currentIconSize = iconSizes[size] || iconSizes.sm;

  if (horizontal) {
    return (
      <div className={`flex items-center gap-3 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <StarIcon size={size} />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: '700', 
            fontSize: '1.2rem', 
            color: inverted ? '#FFFFFF' : navy, 
            letterSpacing: '2px', 
            textTransform: 'uppercase' 
          }}>
            Paragon
          </span>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: '600', 
            fontSize: '0.9rem', 
            color: inverted ? '#FFFFFF' : lightBlue, 
            letterSpacing: '3px', 
            textTransform: 'uppercase'
          }}>
            Europe
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
      <StarIcon size={size} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.1', marginTop: '4px' }}>
        <span style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: '700', 
          fontSize: '1.8rem', 
          color: inverted ? '#FFFFFF' : navy, 
          letterSpacing: '6px', 
          textTransform: 'uppercase' 
        }}>
          Paragon
        </span>
        <span style={{ 
          fontFamily: 'var(--font-heading)', 
          fontWeight: '600', 
          fontSize: '1.4rem', 
          color: inverted ? '#FFFFFF' : lightBlue, 
          letterSpacing: '8px', 
          textTransform: 'uppercase'
        }}>
          Europe
        </span>
        <span style={{ 
          fontFamily: 'var(--font-body)', 
          fontWeight: '400', 
          fontSize: '0.65rem', 
          color: inverted ? 'rgba(255,255,255,0.7)' : gray, 
          letterSpacing: '3px', 
          textTransform: 'uppercase',
          marginTop: '8px',
          borderTop: inverted ? '1px solid rgba(255,255,255,0.2)' : '1px solid #eee',
          paddingTop: '6px',
          width: '100%',
          opacity: 0.8
        }}>
          Realising Excellence
        </span>
      </div>
    </div>
  );
}
