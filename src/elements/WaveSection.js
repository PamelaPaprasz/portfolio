import React, { useEffect, useState } from 'react';

function WaveSection() {

  return (
    <div className='absolute w-screen h-24'>
      <svg
        className="absolute"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#FF2800" fill-opacity="0.6" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,170.7C672,171,768,181,864,170.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,58.7C384,53,480,75,576,90.7C672,107,768,117,864,112C960,107,1056,85,1152,106.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <svg
        className="absolute"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#FF2800" d="M0,64L48,64C96,64,192,64,288,96C384,128,480,192,576,186.7C672,181,768,107,864,106.7C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF2800" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,176C384,192,480,160,576,165.3C672,171,768,213,864,224C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <svg
        className="absolute"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#FF2800" d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,101.3C672,107,768,149,864,181.3C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <svg
        className="absolute"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#FF2800" fillOpacity="0.8" d="M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,122.7C672,171,768,245,864,266.7C960,288,1056,256,1152,234.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,245.3C384,224,480,192,576,154.7C672,117,768,75,864,85.3C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
}

export default WaveSection;
