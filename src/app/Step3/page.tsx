import ContactForm from '@/components/ContactForm';

export default function Step3Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header 
        className="relative mx-auto"
        style={{
          width: '1440px',
          height: '1330px',
          maxWidth: '100vw'
        }}
      >
        {/* Main Text */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: '177px'
          }}
        >
          <h1 
            className="text-center whitespace-nowrap"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '97.5px'
            }}
          >
            <span style={{ color: '#3A3A3A' }}>Step 3: </span>
            <span 
              style={{
                background: 'linear-gradient(75deg, #D5A6D8 9.75%, #A674C4 33.03%, #66417B 87.51%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Client
            </span>
          </h1>
        </div>
        
        {/* Homepage PS Logo SVG */}
        <div 
          className="absolute"
          style={{
            left: '440px', // Left edge positioned exactly 519.42px from left side of page
            top: '350px', // 177px (text position) + 80px = 257px
            zIndex: 3 // Ensures it appears above both background SVGs
          }}
        >
          <img 
            src="images/Client_Staricase.png" 
            alt="Product School Logo"
            style={{
              width: '688px',
              height: '627px'
            }}
          />
        </div>
        
        {/* Homepage Background SVG */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: '717px', // 177px (text position) + 540px = 717px
            zIndex: 2 // Ensures it appears below the gradient SVG
          }}
        >
          <img 
            src="/images/homepage_background.svg" 
            alt="Homepage Background"
            style={{
              transform: 'scale(2.2)', // This will make it 2x bigger
              transformOrigin: 'center' // Scale from the center
            }}
          />
        </div>
        
        {/* Homepage Background Gradient SVG - Layer Above */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            top: '717px', // Same position as background SVG
            zIndex: 1 // Ensures it appears above the background SVG
          }}
        >
          <img 
            src="/images/homepage_bg_gradient.svg" 
            alt="Homepage Background Gradient"
            style={{
              transform: 'scale(2.1)', // This will make it 2x bigger
              transformOrigin: 'center' // Scale from the center
            }}
          />
        </div>
      </header>

      {/* Coming Soon Section */}
      <section 
        className="relative mx-auto"
        style={{
          width: '1480px',
          height: '1005px',
          maxWidth: '100vw'
        }}
      >
        <img 
          src="/images/Funny/Board/coming_soon.png" 
          alt="Client Projects Coming Soon"
          style={{
            width: '1480px',
            height: '1005px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </section>

      {/* Contact Form Section */}
      <section 
        className="relative"
        style={{
          width: '100vw',
          height: 'auto',
          paddingTop: '150px',
          paddingBottom: '120px',
          backgroundColor: '#FAF6FC'
        }}
      >
        {/* Contact Form */}
        <ContactForm />
      </section>
    </div>
  );
}
