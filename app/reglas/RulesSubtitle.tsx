import React from 'react';

interface RulesSubtitleProps {
  children: React.ReactNode;
  margin?: boolean;
  id?: string;
}

const RulesSubtitle: React.FC<RulesSubtitleProps> = ({ children, margin, id }) => {
  return (
    <h3 id={id ? id : undefined} className={`text-xl font-medium text-foreground ${margin && 'mt-2'}`}>{children}</h3>
  );
};

export default RulesSubtitle;
