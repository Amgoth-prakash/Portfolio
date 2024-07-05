import React from 'react';

const ResumeDownload = () => {
//   const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';

  return (
    <section className="bg-white py-16 px-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Download Resume</h2>
        <a
        //  href={resumeUrl}
          download="resume.pdf"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg inline-block"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default ResumeDownload;


