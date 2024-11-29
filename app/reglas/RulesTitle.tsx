import React from 'react';

interface RulesTitleProps {
  children: React.ReactNode;
  margin?: boolean;
}

const RulesTitle: React.FC<RulesTitleProps> = ({ children, margin }) => {
  return (
    <h3 className={`text-2xl font-semibold text-foreground ${margin && 'mt-8'}`}>{children}</h3>
  );
};

export default RulesTitle;
