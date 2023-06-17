import React from 'react';
import './ques_and.css'
const QuesAns = () => {
    return (
        <div className='ques-ans'>
            <h2 style={{ color: 'brown' }}> Question and Answers</h2>
            <h3>1. What is the difference between Props and State?</h3>
            <p><b>Props:</b> Props are properties that are passed down to a component from its parent component. They are read-only and are not editable within the component. Props pass data that is intended to be utilized for rendering or configuring a component. Props are used to tweak a component's functionality and make it reusable across the application.
                <br></br>
                <b>State:</b> A component's internal state is managed using state. It is mutable and changeable within the component. State should be used to process the data that changes regularly or to control the component's behavior. State is specific to a component and is not shared with other components.</p>
            <hr></hr>
            <h3>2. How does useState work?</h3>
            <p>useState is used to manage state in functional components. It takes an initial value and returns an array with two elements: the current state value and a function to update the state.
                <br></br>
                Here's how it works:
                <br></br>
                <b>i.</b> Firstly we have to import the useState hook from the React library.</p>
            <pre>import React, &#123; useState &#125;  from 'react';</pre>

            <p><b>ii.</b> Then we have to call the useState hook and pass in an initial state value in the functional component. The initial state can be any type of data, such as a string, number, array, object, etc.</p>
            <pre>const [count, setCount] = useState(0);</pre>
            The useState hook returns an array with has two elements and they are the current state value and a function to update the state value.

            <p><b>iii.</b> We can use the state in the component just like any other variable, after setting up the state using useState.</p>
            <pre>
                function Counter() &#123;
                <br></br>
                const [count, setCount] = useState(0);
                <br></br>
                return (<br></br>
                &lt;div&gt; <br></br>
                &lt;p&gt;Count:&#123;count&#125;&lt;/p&gt; <br></br>
                &lt;button onClick=&#123;()=&gt;
                <br></br>setCount(count + 1)&#125; &gt; Increment &lt;/button&gt; <br></br>
                &lt;button onClick=&#123;()=&gt;
                <br></br>setCount(count - 1)&#125; &gt; Decrement &lt;/button&gt; <br></br>
                &lt;/div&gt; <br></br>
                ); <br></br>
                &#125;
            </pre>
            <hr></hr>
            <h3>3. Apart from data loading what else can useEffect() do?</h3>
            <p>React's useEffect() hook allows us to perform side effects in a functional component. While getting data from an API or database is one of the most common uses for useEffect(), it may also be used for a variety of other things. Some examples are given below:</p>
            <p><b>For updating the title of the document:</b>  We can use useEffect() to update the title of the document when a component is mounted or updated.</p>
            <pre>
                useEffect(() = &gt; &#123; <br></br>
                document.title = `Page $&#123;pageNumber&#125;`; <br></br>
                &#125;, [pageNumber]);
            </pre>

            <p><b>Timers and intervals:</b> We can use useEffect() to set timers and intervals for running code at specific intervals.
            </p>
            <pre>
                useEffect(() = &gt; &#123; <br></br>
                const intervalValue = setInterval(() = &gt; &#123;
                <br></br>
                &#125;, 3000);
                <br></br>
                return () = &gt; &#123;
                clearInterval(intervalValue);
                &#125;; <br></br>
                &#125;, []);
            </pre>

            <p><b>State managing outside of a component:</b> We can use useEffect() to update state outside of a component.</p>
            <pre>
                useEffect(() =&gt;  &#123; <br></br>
                dispatch( &#123; type: 'UPDATE_DATA', <br></br>
                payload: newData  &#125;); <br></br>
                &#125;, [newData]);
            </pre>
            <hr></hr>
            <h3>4. How does React work?</h3>
            <p>React is a JavaScript library for building user interfaces. It works by providing a set of APIs that allow developers to build UI components using a declarative syntax.
                Here's a high-level overview of how React works:
                <br></br><br></br>

                <b>Component tree:</b> React applications are built using a tree-like structure of components. Each component is a self-contained piece of UI that can be composed with other components to form more complex UIs. Components can be divided into two types: functional components and class components.
                <br></br><br></br>

                <b>Declarative syntax:</b> Using React, we can describe the UI using a declarative syntax. This means that we describe what we want the UI to look like, rather than how to achieve that look.
                <br></br><br></br>

                <b>Virtual DOM:</b> React uses a virtual DOM to keep track of changes to the UI. When a component's state changes, React re-renders the component and updates the virtual DOM. It then compares the updated virtual DOM to the previous virtual DOM to determine what changes need to be made to the actual DOM.
                <br></br><br></br>

                <b>Reconciliation:</b> Once React has determined what changes need to be made to the DOM, it performs a process called reconciliation. During reconciliation, React updates the actual DOM with the changes that were made to the virtual DOM. However, React is smart about how it updates the DOM, and only updates the parts of the DOM that need to be changed.
                <br></br><br></br>

                <b>Event handling:</b> React provides a declarative syntax for handling events, such as mouse clicks or keyboard input. When an event occurs, React updates the component's state and re-renders the component, which triggers the reconciliation process.
                <br></br><br></br>
                Lastly, React provides a powerful and intuitive way to build user interfaces using a declarative syntax and a tree-like structure of components.</p>
            <hr></hr>
        </div>
    );
};

export default QuesAns;