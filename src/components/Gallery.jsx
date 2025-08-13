
import React, { useState, useRef } from 'react';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const imageRefs = useRef([]);

  const imgSrcs = [
    'images/20.png',
    'images/2.jpg',
    'images/9.png',
    'images/22.jpg',
    'images/23.jpg',
  ];
  // Add captions for your images
  const imageData = [
    { src: imgSrcs[0], caption: "Modern Library & Study Hall" },
    { src: imgSrcs[1], caption: "Science Fair 2024" },
    { src: imgSrcs[2], caption: "Art & Creative Workshop" },
    { src: imgSrcs[3], caption: "Sports Day Activities" },
    { src: imgSrcs[4], caption: "Music & Performance Hall" },
    // Add more captions as needed for your other images
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imageData.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imageData.length) % imageData.length);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  return (
    <>
      <section className="container-fluid gallery p-5">
        <h2 className="text-center fw-bold social mb-5">LIFE AT SAFFIRE ACADEMY</h2>
        <div className="row p-3">
          <div className="col-lg-6">
            {/* Keep your original structure exactly */}
            <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => openLightbox(0)}>
              <img 
                src={imgSrcs[0]} 
                ref={(el) => (imageRefs.current[0] = el)} 
                alt="library"
                width="90%" 
                height="90%" 
                className="transform-image"
              />
              
              {/* Hover Overlay */}
              <div 
                className="image-overlay"
                style={{
                  position: 'absolute',
                  top: -30,
                  left: -30,
                  right: 30,
                  bottom: -30,
                  background: 'rgba(139, 0, 0, 0.8)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                onMouseLeave={(e) => e.target.style.opacity = '0'}
              >
                <div>
                  <div style={{ marginBottom: '10px', fontSize: '1.4rem' }}>🔍</div>
                  {imageData[0].caption}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              {imgSrcs.slice(1).map((src, i) => (
                <div className="col-lg-6 p-3" key={i}>
                  {/* Keep your original structure exactly */}
                  <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => openLightbox(i + 1)}>
                    <img 
                      src={src} 
                      ref={(el) => (imageRefs.current[i + 1] = el)} 
                      alt=""
                      width="90%"  
                      height="90%" 
                      className="transform-image"
                    />
                    
                    {/* Hover Overlay */}
                    <div 
                      className="image-overlay"
                      style={{
                        position: 'absolute',
                        top: -30,
                        left: -30,
                        right: 0,
                        bottom: -30,
                        background: 'rgba(139, 0, 0, 0.8)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        textAlign: 'center',
                        padding: '15px',
                        borderRadius: '8px'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '1'}
                      onMouseLeave={(e) => e.target.style.opacity = '0'}
                    >
                      <div>
                        <div style={{ marginBottom: '8px', fontSize: '1.1rem' }}>🔍</div>
                        {imageData[i + 1]?.caption || `Gallery Image ${i + 2}`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> 
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            backdropFilter: 'blur(5px)'
          }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              width: '50px',
              height: '50px',
              borderRadius: '25px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: 'absolute',
              left: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              fontSize: '18px',
              width: '50px',
              height: '50px',
              borderRadius: '25px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: 'absolute',
              right: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              fontSize: '18px',
              width: '50px',
              height: '50px',
              borderRadius: '25px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Main Image */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={imageData[currentImage].src}
              alt={imageData[currentImage].caption}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
              }}
            />
            
            {/* Image Caption */}
            <div style={{
              marginTop: '20px',
              color: 'white',
              fontSize: '1.3rem',
              fontWeight: '600',
              textAlign: 'center',
              background: 'linear-gradient(90deg, #8B0000, #FF4500)',
              padding: '12px 24px',
              borderRadius: '25px',
              backdropFilter: 'blur(10px)'
            }}>
              {imageData[currentImage].caption}
            </div>

            {/* Image Counter */}
            <div style={{
              marginTop: '10px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem'
            }}>
              {currentImage + 1} of {imageData.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}