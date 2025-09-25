export default function Step4Page() {
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
              <span style={{ color: '#3A3A3A' }}>Step 4: </span>
              <span 
                style={{
                  background: 'linear-gradient(75deg, #D5A6D8 9.75%, #A674C4 33.03%, #66417B 87.51%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Product
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
            src="images/Product_Staricase.svg" 
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
        
        {/* Company Logos */}
        <section 
          className="relative w-full"
          style={{
            height: '675px',
            background: '#FAF6FC',
            display: 'flex',
            padding: '150px 0',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '25px',
            alignSelf: 'stretch'
          }}
        >
          {/* Where We've Gone Text */}
          <div 
            style={{
              alignSelf: 'stretch',
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '48.75px'
            }}
          >
            Where We've Gone
          </div>
          
          {/* Company Logos Row */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px',
              width: '100%',
              marginTop: '65px'
            }}
          >
            <img 
              src="/images/CompanyLogos/tesla.png" 
              alt="Tesla"
              style={{ height: '75px', width: 'auto' }}
            />
            <img 
              src="/images/CompanyLogos/northrop.png" 
              alt="Northrop Grumman"
              style={{ height: '50px', width: 'auto' }}
            />
            <img 
              src="/images/CompanyLogos/amazon.png" 
              alt="Amazon"
              style={{ height: '50px', width: 'auto' }}
            />
            <img 
              src="/images/CompanyLogos/oracle.png" 
              alt="Oracle"
              style={{ height: '50px', width: 'auto' }}
            />
            <img 
              src="/images/CompanyLogos/servicenow.png" 
              alt="ServiceNow"
              style={{ height: '50px', width: 'auto' }}
            />
          </div>
          
          {/* Second Row Company Logos */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px',
              width: '100%',
              marginTop: '90px'
            }}
          >
            <img 
              src="/images/CompanyLogos/visa.png" 
              alt="Visa"
              style={{ height: '50px', width: 'auto' }}
            />
            <img 
              src="/images/CompanyLogos/deloitte.png" 
              alt="Deloitte"
              style={{ height: '40px', width: 'auto' }}
            />
            <img 
              src="/images/CompanyLogos/americanex.png" 
              alt="American Express"
              style={{ height: '60px', width: 'auto' }}
            />
            <img 
              src="/images/CompanyLogos/cisco.png" 
              alt="Cisco"
              style={{ height: '50px', width: 'auto' }}
            />
            <img 
              src="/images/CompanyLogos/walmart.png" 
              alt="Walmart"
              style={{ height: '50px', width: 'auto' }}
            />
          </div>
        </section>
        
        {/* New Section */}
        <section 
          className="w-full"
          style={{
            height: '538px',
            background: 'white'
          }}
        >
          {/* Community Card */}
          <div 
            className="mx-auto"
            style={{
              width: 'fit-content',
              maxWidth: '800px',
              marginTop: '150px',
              borderRadius: '30px',
              background: '#FAF6FC',
              boxShadow: '0 6px 6px 0 rgba(0, 0, 0, 0.25)',
              display: 'flex',
              padding: '50px',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              alignSelf: 'stretch'
            }}
          >
            <h2 
              style={{
                color: '#3A3A3A',
                fontFamily: 'Inter, sans-serif',
                fontSize: '32px',
                fontWeight: 600,
                lineHeight: '1.2',
                margin: '0 0 25px 0',
                textAlign: 'center'
              }}
            >
              Join a Community of Product
            </h2>
            <p 
              style={{
                color: '#666666',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                lineHeight: '1.5',
                margin: '0',
                textAlign: 'center'
              }}
            >
              Learn from industry professionals on how to start your career in product management, and meet students who have landed roles at top companies.
            </p>
          </div>
        </section>
      </div>
    );
  }