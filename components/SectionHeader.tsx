import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-artea-green mb-2">{title}</h2>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
