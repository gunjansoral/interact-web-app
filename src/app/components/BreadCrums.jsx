import React from 'react';

const Breadcrumbs = ({ children }) => {
  const childArray = React.Children.toArray(children);

  return (
    <div className="breadcrumbs">
      {childArray.map((child, index) => (
        <span key={index}>
          {child}
          {index < childArray.length - 1 && <span> / </span>}
        </span>
      ))}
    </div>
  );
};

const Component = () => {
  return (
    <div>
      <Breadcrumbs>
        <span>Home</span>
        <span>Section 1</span>
        <span>Subsection A</span>
        <span>Current Page</span>
      </Breadcrumbs>
      <h1>Welcome to Section 1, Subsection A</h1>
      <p>This is the content of the current page.</p>
    </div>
  );
};

export default Component;
