"use client";

import { useState } from "react";

interface Project {
  name: string;
  teamMembers: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Project Alpha",
    teamMembers: "names of people who, made the, product shown",
    description: "An immersive eight-week program that challenges students to develop innovative solutions for real-world problems.",
    image: "/images/project-alpha.png"
  },
  {
    name: "Project Beta",
    teamMembers: "names of people who, made the, product shown",
    description: "An immersive eight-week program that challenges students to develop innovative solutions for real-world problems.",
    image: "/images/project-beta.png"
  },
  {
    name: "Project Gamma",
    teamMembers: "names of people who, made the, product shown",
    description: "An immersive eight-week program that challenges students to develop innovative solutions for real-world problems.",
    image: "/images/project-gamma.png"
  }
];

export default function Spring25Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  const goToPrevious = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentProjectIndex((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div 
        style={{
          width: '1440px',
          height: '670px',
          flexShrink: 0,
          background: '#FAF6FC',
          position: 'relative'
        }}
      >
        {/* Title - 90px from top, 270px margins */}
        <div 
          style={{
            position: 'absolute',
            top: '90px',
            left: '270px',
            right: '270px',
            textAlign: 'center'
          }}
        >
          <h2 
            style={{
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '48.75px'
            }}
          >
            Our Spring 2025 Projects
          </h2>
        </div>

        {/* Prompt text - 25px below title */}
        <div 
          style={{
            position: 'absolute',
            top: '149px', // 90 + 25 + 34 (title height)
            left: '270px',
            right: '270px',
            textAlign: 'center'
          }}
        >
          <p 
            style={{
              color: '#3A3A3A',
              textAlign: 'center',
              fontFamily: '"M PLUS 1"',
              fontSize: '22.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px'
            }}
          >
            Prompt: Develop a product XXXXXXX XXXXXX XXXX XXXXXXXX XXXXX XXX
          </p>
        </div>

        {/* Left Column - Large Grey Box */}
        <div 
          style={{
            position: 'absolute',
            top: '200px', // 149 + 34 (exactly 34px below prompt)
            left: '200px',
            width: '644px',
            height: '350px',
            flexShrink: 0,
            borderRadius: '10px',
            background: '#D9D9D9',
            border: '1px solid #87CEEB'
          }}
        >
          {/* Project image placeholder */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Project Image
          </div>
        </div>

        {/* Right Column - Text and Buttons */}
        <div 
          style={{
            position: 'absolute',
            top: '183px', // Same as left column
            left: '877px', // 143 + 644 + 90 (gap)
            width: '500px'
          }}
        >

          {/* Project Name */}
          <h3 
            style={{
              color: '#3A3A3A',
              fontFamily: 'Inter',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '48.75px',
              marginBottom: '21px',
              marginTop: '55px'
            }}
          >
            {currentProject.name}
          </h3>

          {/* Team Members */}
          <p 
            style={{
              color: '#3A3A3A',
              fontFamily: 'Inter',
              fontSize: '17.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '28px',
              marginBottom: '21px'
            }}
          >
            {currentProject.teamMembers}
          </p>

          {/* Description */}
          <p 
            style={{
                color: '#3A3A3A',
                fontFamily: "M PLUS 1",
                fontSize: '22.5px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '32px' /* 142.222% */
            }}
          >
            {currentProject.description}
          </p>

          {/* Navigation Buttons */}
          <div 
            style={{
              display: 'flex',
              gap: '25px',
              marginTop: '25px'
            }}
          >
            <button
              onClick={goToPrevious}
              style={{
                width: '100px',
                height: '30px',
                borderRadius: '1px',
                background: '#D9D9D9',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
              className="hover:bg-gray-300 transition-colors"
            >
              ← Previous
            </button>
            <button
              onClick={goToNext}
              style={{
                width: '100px',
                height: '30px',
                borderRadius: '1px',
                background: '#D9D9D9',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
              className="hover:bg-gray-300 transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
