
import React from 'react';

const ProfessorPhoto = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        <img 
          src="/lovable-uploads/756b83ce-f956-4fdb-9f8c-121a22f1c9cc.png"
          alt="Prof. Luís Cláudio Oliveira Lopes"
          className="w-48 h-48 rounded-full object-cover border-4 border-ufu-light shadow-lg"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-ufu-navy/10"></div>
      </div>
    </div>
  );
};

export default ProfessorPhoto;
