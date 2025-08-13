import React, { useState, useEffect } from 'react';

const slides = [
  { image: '/images/7.png', caption: 'High School Female Basketball Team', position: 'right center' },
  { image: '/images/3.jpg', caption: 'Middle School Tug of War', position: 'center center' },
  { image: '/images/13.jpg', caption: 'Middle School Female Football Team', position: 'center center' },
  { image: '/images/19.jpg', caption: 'School Carnival Night', position: 'center center' },
  { image: '/images/22.jpg', caption: 'High School Male Basketball Team', position: 'right center' },
  { image: '/images/29.jpg', caption: 'High School Female Volleyball Team', position: 'center center' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-advance slides (only when not paused)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
      setProgress(0); // Reset progress when slide changes
    }, 3500);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Progress bar animation
  useEffect(() => {
    if (isPaused) return;
    
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / 350); // 3500ms / 10ms intervals
      });
    }, 10);
    
    return () => clearInterval(progressInterval);
  }, [currentSlide, isPaused]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <main>
      <div 
        style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: slide.position || 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              zIndex: index === currentSlide ? 1 : 0
            }}
          >
            <div 
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)',
                padding: '60px 40px 40px',
                color: 'white'
              }}
            >
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                margin: '0 0 12px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                lineHeight: '1.2'
              }}>
                {slide.caption}
              </h2>
              <div style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #8B0000, #FF4500)',
                borderRadius: '2px',
                marginTop: '16px'
              }}></div>
            </div>
          </div>
        ))}
        
        {/* Modern Left Arrow */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.9)',
            color: '#333',
            border: 'none',
            borderRadius: '12px',
            width: '56px',
            height: '56px',
            fontSize: '18px',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            opacity: isPaused ? 1 : 0.8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,1)';
            e.target.style.transform = 'translateY(-50%) scale(1.05)';
            e.target.style.boxShadow = '0 6px 25px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.9)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Modern Right Arrow */}
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.9)',
            color: '#333',
            border: 'none',
            borderRadius: '12px',
            width: '56px',
            height: '56px',
            fontSize: '18px',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            opacity: isPaused ? 1 : 0.8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,1)';
            e.target.style.transform = 'translateY(-50%) scale(1.05)';
            e.target.style.boxShadow = '0 6px 25px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.9)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
            e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Progress Bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'rgba(255,255,255,0.2)',
          zIndex: 10
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #8B0000, #FF4500)',
            transition: isPaused ? 'none' : 'width 0.1s linear'
          }}></div>
        </div>

        {/* Modern Navigation Dots */}
        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 10,
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          padding: '8px 16px',
          borderRadius: '20px'
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setProgress(0);
              }}
              style={{
                width: index === currentSlide ? '16px' : '6px',
                height: '6px',
                borderRadius: '3px',
                border: 'none',
                background: index === currentSlide 
                  ? 'linear-gradient(90deg, #8B0000, #FF4500)' 
                  : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: index === currentSlide ? 'scale(1)' : 'scale(0.8)'
              }}
            />
          ))}
        </div>
      </div>
      
 
    </main>
  );
}


