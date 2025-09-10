'use client';

import React from 'react';

export function TimelineAnimation() {
  return (
    <div>
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
              transform: 'scale(2)', // This will make it 2x bigger
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
              transform: 'scale(2)', // This will make it 2x bigger
              transformOrigin: 'center' // Scale from the center
            }}
          />
         </div>
         
         {/* Timeline Vertical Lines - Individual Lines with Pixel Control */}
         <div 
           className="absolute"
           style={{
             top: '500px',
             left: '50%',
             transform: 'translateX(-60%)',
             zIndex: 3
           }}
         >
           {/* Applications Open Text - 17.5px above Line 1 */}
           <div 
             style={{
               position: 'absolute',
               left: '-547.5px', // Same x position as Line 1
               top: '-35px', // 17.5px above Line 1 (0px - 17.5px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             Applications Open
           </div>

           <div 
             style={{
               position: 'absolute',
               left: '-547.5px', // Same x position as Line 6
               top: '-55px', // 3px above Interviews (230px - 3px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             TBD
           </div>

           {/* Line 1 - leftmost - Now you can move by exact pixels */}
           <div 
             style={{
               position: 'absolute',
               left: '-547.5px', // Equivalent to x1="470.5" * 2 (scaled)
               top: '0px', // Equivalent to y2="17.5" * 2 (scaled)
               width: '1px',
               height: '340.5px', // Height calculated from y1-y2 scaled
               backgroundColor: 'black'
             }}
           />
           
           {/* Info Sessions Text - 17.5px above Line 2 */}
           <div 
             style={{
               position: 'absolute',
               left: '-388px', // Same x position as Line 2
               top: '30px', // 17.5px above Line 2 (65px - 17.5px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             Info Sessions
           </div>

           <div 
             style={{
               position: 'absolute',
               left: '-388px', // Same x position as Line 6
               top: '10px', // 3px above Interviews (230px - 3px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             TBD
           </div>

           {/* Line 2 */}
           <div 
             style={{
               position: 'absolute',
               left: '-388px', // x1="160" * 2
               top: '65px', // y2="139" * 2
               width: '1px',
               height: '211px', // (350.5-139) * 2
               backgroundColor: 'black'
             }}
           />
           
           {/* Applications Due Text - 35px above Line 3 */}
           <div 
             style={{
               position: 'absolute',
               left: '-197px', // Same x position as Line 3
               top: '85px', // 35px above Line 3 (120px - 35px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             PM Panel & Workshop
           </div>

           <div 
             style={{
               position: 'absolute',
               left: '-197px', // Same x position as Line 6
               top: '65px', // 3px above Interviews (230px - 3px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             TBD
           </div>

           {/* Line 3 */}
           <div 
             style={{
               position: 'absolute',
               left: '-197px', // x1="353" * 2
               top: '120px', // y2="302.5" * 2
               width: '1px',
               height: '234px', // (427-302.5) * 2
               backgroundColor: 'black'
             }}
           />
           
           {/* Product Pitch Text - 35px above Line 4 */}
           <div 
             style={{
               position: 'absolute',
               left: '62px', // Same x position as Line 4
               top: '105px', // 35px above Line 4 (140px - 35px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             Applications Due
           </div>

           <div 
             style={{
               position: 'absolute',
               left: '62px', // Same x position as Line 6
               top: '85px', // 3px above Interviews (230px - 3px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             TBD
           </div>

           {/* Line 4 - center with hover animation */}
           <div 
             className="group relative"
             style={{
               position: 'absolute',
               left: '62px', // x1="596" * 2
               top: '140px', // y2="186" * 2
               width: '1px',
               height: '284px', // (491-186) * 2
               cursor: 'pointer'
             }}
           >
             {/* Original black line */}
             <div
               style={{
                 position: 'absolute',
                 left: '0',
                 top: '0',
                 width: '1px',
                 height: '284px',
                 backgroundColor: 'black',
                 transition: 'opacity 0.3s ease'
               }}
               className="group-hover:opacity-0"
             />
             
             {/* Purple triangular prism animation - Much larger and more visible */}
             <div
               style={{
                 position: 'absolute',
                 left: '-200px', // Center the larger triangle
                 bottom: '0',
                 width: '400px', // Much larger
                 height: '284px', // Fill the entire line height
                 transform: 'scaleY(0)',
                 transformOrigin: 'bottom',
                 transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                 zIndex: 10,
                 backgroundColor: 'rgba(213, 166, 216, 0.9)', // Purple background for visibility
                 clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)', // Triangle shape
                 boxShadow: '0 0 30px rgba(213, 166, 216, 0.8)' // Glow effect
               }}
               className="group-hover:scale-y-100"
             />
             
             {/* Alternative using SVG scaled up */}
             <div
               style={{
                 position: 'absolute',
                 left: '-150px', // Center the triangle
                 bottom: '0',
                 width: '300px',
                 height: '284px',
                 transform: 'scaleY(0) scaleX(1.5)', // Scale up horizontally too
                 transformOrigin: 'bottom center',
                 transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                 zIndex: 9
               }}
               className="group-hover:scale-y-100 group-hover:scale-x-100"
             >
               {/* Glow effect behind - much larger */}
               <img 
                 src="/images/rt_triangle_glow.svg" 
                 alt="Triangle Glow"
                 style={{
                   position: 'absolute',
                   left: '-100px',
                   top: '-50px',
                   width: '500px', // Much larger glow
                   height: '400px',
                   opacity: 0,
                   transition: 'opacity 0.8s ease 0.2s',
                   filter: 'blur(10px) brightness(1.5)'
                 }}
                 className="group-hover:opacity-100"
               />
               
               {/* Main triangle - scaled up */}
               <img 
                 src="/images/rt_triangle.svg" 
                 alt="Triangle"
                 style={{
                   position: 'absolute',
                   left: '50px',
                   top: '50px',
                   width: '200px', // Larger triangle
                   height: '150px',
                   filter: 'hue-rotate(280deg) saturate(2) brightness(1.2)',
                   transform: 'scaleY(1.8)' // Stretch to fill height
                 }}
               />
             </div>
           </div>
           
           {/* (By invite) Text - 35px above Line 5 */}
           <div 
             style={{
               position: 'absolute',
               left: '285px', // Same x position as Line 5
               top: '148px', // 35px above Line 5 (183px - 35px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             (By invite)
           </div>

           {/* Product Pitch Text - 5px above (By invite) */}
           <div 
             style={{
               position: 'absolute',
               left: '285px', // Same x position as Line 5
               top: '115px', // 5px above (By invite) (148px - 5px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             Product Pitch
           </div>

           {/* Date/Time Text - 3px above Product Pitch */}
           <div 
             style={{
               position: 'absolute',
               left: '285px', // Same x position as Line 5
               top: '95px', // 3px above Product Pitch (143px - 3px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             Sat, 8/11 @ 11am
           </div>

           {/* Line 5 */}
           <div 
             style={{
               position: 'absolute',
               left: '285px', // x1="814.5" * 2
               top: '183px', // y2="328" * 2
               width: '1px',
               height: '265px', // (546-328) * 2
               backgroundColor: 'black'
             }}
           />
           
           {/* (By invite) Text - 35px above Line 6 */}
           <div 
             style={{
               position: 'absolute',
               left: '550px', // Same x position as Line 6
               top: '235px', // 35px above Line 6 (270px - 35px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             (By invite)
           </div>

           {/* Interviews Text - 5px above (By invite) */}
           <div 
             style={{
               position: 'absolute',
               left: '550px', // Same x position as Line 6
               top: '202px', // 5px above (By invite) (235px - 5px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '22.5px',
               fontStyle: 'normal',
               fontWeight: 700,
               lineHeight: '32px',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             Interviews
           </div>

           {/* TBD Text - 3px above Interviews */}
           <div 
             style={{
               position: 'absolute',
               left: '550px', // Same x position as Line 6
               top: '182px', // 3px above Interviews (230px - 3px)
               transform: 'translateX(-50%)', // Centers the text div on the line
               alignSelf: 'stretch',
               color: '#3A3A3A',
               textAlign: 'center',
               fontFamily: '"M PLUS 1"',
               fontSize: '16px',
               fontStyle: 'normal',
               fontWeight: 400,
               lineHeight: 'normal',
               whiteSpace: 'nowrap' // Prevents text wrapping
             }}
           >
             TBD
           </div>

           {/* Line 6 */}
           <div 
             style={{
               position: 'absolute',
               left: '550px', // x1="953" * 2
               top: '270px', // y2="110" * 2
               width: '1px',
               height: '211px', // (377.5-110) * 2
               backgroundColor: 'black'
             }}
           />
         </div>
      </div>
    );
}

export default TimelineAnimation;
