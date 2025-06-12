import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div className="greeting">
      <h2>Hello, {name}!</h2>
      <p>Welcome to our React TypeScript application</p>
    </div>
  );
};

export default Greeting;
