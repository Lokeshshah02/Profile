import React from 'react';
import EducationCard from '../layouts/EducationCard';

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">Education</h1>

      <div className="bg-white p-5 rounded-md">
        <EducationCard
          title="Jyothy Institute of Technology"
          description="University : Visvesvaraya Technological University (VTU)"
          year="Year: 2020-2023"
        />
        <EducationCard
          title="The Oxford Polytechnic"
          description="Board of Technical Examination - Department of Technical Education"
          year="Year: 2017-2020"
        />
      </div>
    </div>
  );
};

export default Education;
