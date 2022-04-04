import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog">
        <h2>What is Context API?</h2>
        <p>
          Context API is actually an alternative of 'props drilling' in React
          App. By using Context API we no longer need to pass data from
          grand-parent to parent to children. We can directly pass data from
          grand-parent to children or any other tree elements.For using Context
          API we need to follow these steps: 1. Call createContext with a
          default value. 2. Set a variable of the context with uppercase. 3.
          Make sure you export the context to use it in other places. 4. Wrap
          your child content using VariableContext.provider 5. Provide a value
          To consume the context from child component. 6. Use useContext hook
          and you will need to pass the context name.
        </p>
      </div>
      <div className="blog">
        <h2>What is Semantic Tag?</h2>
        <p>
          Semantic tag illustrates their meaning to both the browser and the
          developer. Examples of non-semantic elements: div and span - Tells
          nothing about its content. Examples of semantic elements: form, table
          and article - Clearly defines its content. Semantic tag is used
          because of it is easier to use and it has greater
          accessibility.Overall, semantic elements also lead to more consistent
          code.
        </p>
      </div>
      <div className="blog">
        <h2>
          What is the difference between Inline, block and Inline-block
          elements?
        </h2>
        <p>
          Inline displays an element as an inline element. That means that, any
          height and width properties will have no effect. Block displays an
          element as a block element. That means that, it starts with a new line
          and takes whole width. And inline-block displays an element as an
          inline level block container. That means that, we can set height and
          width values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
