interface HelloWorldProps {
  name: string;
  age?: number; // 可选属性
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>Age: {age}</p>}
    </div>
  );
};

export default HelloWorld;