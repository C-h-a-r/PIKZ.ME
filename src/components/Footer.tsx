import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800/50 border-t border-zinc-700/50">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">

        {/* Main Logo */}
        <div className="mb-6">
          <svg
            width="150"
            height="100"
            viewBox="0 0 521.55 464.72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              fill="#fff"
              d="M7.45,13.93c45.55,31.57,82.8,57.39,128.14,88.82c1.11,0.77,2.48,1.04,3.79,0.73
              c36.67-8.64,118.82-21.92,199,19.75l45.22,23.57c2.74,1.43,2.91,5.28,0.31,6.94l-92.43,59.23h0
              c-45.46-6.78-92.87-11.61-142.13-13.95c-5.31-0.25-10.59-0.47-15.86-0.66
              c-2.2,89.28-7.82,164.91-10.03,254.19c-0.01,0.58-0.46,12.68-0.22,12.16
              c63.75-138.15,78.54-177.57,78.54-177.57c11.68-3,54.64-6.83,82.93-12.04
              c6.88-0.15,27.28-4.97,54.21-9.5c1.36-0.23,2.69-0.71,3.87-1.42
              c57.81-34.71,115.62-69.43,173.43-104.14c7.25-4.35,7.07-14.93-0.33-19.02
              c-60.97-33.76-121.93-67.51-182.9-101.27c-1.24-0.69-2.61-1.13-4.02-1.3
              C221.83,25.66,114.69,12.86,7.55,0.05C-0.78-0.94-4.07,12.2,7.45,13.93Z"
            />
          </svg>
        </div>

        {/* Spacer line */}
        <div className="w-full border-t border-zinc-700/50 my-4" />

        {/* Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          {/* Left: Maplex Credit */}
          <a
            href="https://maplex.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 372 298" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M286.154 147.572L218.431 197.08L186 258.013L153.569 197.08L85.8461 147.572L140.215 298L54.3692 237.543L0 0H90.6154L186 176.134L281.385 0H372L317.631 237.543L231.785 298L286.154 147.572Z" fill="white"/>
</svg>


            <span>Made by Maplex</span>
          </a>

          {/* Right: Copyright */}
          <p className="mt-4 sm:mt-0">
            © {new Date().getFullYear()} Pikz Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
