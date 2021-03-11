# React Basics 1
## JSX 
JSX is the stuff in React that looks like HTML. It provides the structure of the UI. Most React components return JSX. Any valid HTML can find its home in JSX.
```jsx
const MySimpleComponent = () => <h1>I'm JSX</h1>
```
Other components can also be put in JSX
```jsx
const MyOtherComponent = () => <MySimpleComponent/>
```

JSX is nestable
```jsx
<section>
    <Component1/>
    <Component2>
        <p>Even more JSX</p>
    </Component2>
</section>
```
A small note:
`class` and `for` are reserved words in JS. If you want to use them with your JSX elements, use `className` and `htmlFor`.

Any JavaScript expression can be put inside of JSX so long as it is inside `{` and `}`

**OK**
```jsx
const title = 'This is my title'
const shouldHaveGreeting = true
const shouldHaveFarewell = false

const MyComponentWithExpressions = () => {
    return <main>
        <h1>{title}</h1>
        {shouldHaveGreeting && <p>Hi!</p>}
        <p>{shouldHaveFarewell ? 'Goodbye!' : 'some other text instead'}</p>
        <p>You can even loop within brackets:</p>
        {
            [1, 2, 3].map((number, i) => <p key={i}>{number}</p>)
        }
    </main>
}
```

**Not OK**
```jsx
const MyFailureOfAComponent = () => {
    return <article>
    {const name = "Dylan"}
    {
        for(let i = 0; i < name.length; i++) {
            <p>name[i]</p>
        }
    }
    </article>
}
```

###	React Fragments
A React component needs to return a single child, _i.e._ one JSX element wrapping everything. It can't return two children at once. Almost all of your nested JSX and expressions eventually become nodes in the DOM, so it can quickly become cluttered when you wrap all of your JSX in a `<div>` tag. To get around this you can use a Fragment to wrap your children. This doesn't add another node to the DOM. Use it with `React.Fragment` or by using the named import from the React dependency. 

##	Components
Components are the building blocks of the UI of a React app. They often (but not always) return JSX. There are two main kinds of components: class and function. If you wanted a component to be stateful you used to have to use a class component. Times have changed, and with them the tools React offers. Class components are a thing of the past, but you're still going to see them.
### Class Components
```jsx
import React, { Component } from 'react'

export default class Title extends Component {
    constructor(props){
        super(props)
        this.state= {...}
    }

    componentDidMount(){ }
    
    render() {
        return ...
    }
}
```
These functions use a constructor and usually tie props to state. We'll get to props in a minute. There are **lifecycle methods** that execute code when certain events happen, like the component mounting for the first time. Class components have a render method that returns JSX.
### Function Components
```jsx
import React from 'react'

export default function Title() {
    return ...
}
```
Function components do not have the same ammeneties like state or explicit lifecycle methods. Just like the render method of a class component they return JSX. How do you make a stateful function component? That's a story for another day, but the short answer is **React Hooks**

**A note on functions**
You may be wondering why some arrow functions have a parenthesis and some have curly braces, or why some use the `return` keyword and others don't.

An arrow funciton has something called an implicit return. Meaning, if the immediate subsequent character after `=>` is not an open curly brace, it will return the expression.

**Returning JSX**
```jsx
const MyComponent = () => <p>No return keyword necessary</p>
```
If you include a parnthesis you can have a clean, multiline return
```jsx
const MyComponent = () => (
    <p>
        No return keyword necessary
    </p>
)
```
If you include curly braces you need to use `return`
```jsx
const MyComponent = () => {
    return <p>Return keyword is necessary
}
```

If you want to return an object you need parenthesis and a curly braces
```js
const getProps = () => ({number: 1, name: 'Bill'})
```
###	Passing Props
Props are variables, functions, and even other components that are passed from one component to another. They are a parameter for function components and used in the constructor of class components.

Passing props to a component looks similar to HTML attributes.
```jsx
<ParentComponent>
    <ChildComponent someNumber={1} someName="Bill">
</ParentComponent>
```
In the example above these props can be accessed in the ChildComponent using `props.someNumber` or `props.someName`

To pass all of a component's props to a child component you can use ES6 spread operator:
```jsx
<ChildComponent {...parentProps}>
```
Sometimes a change in a child component needs to be used in a parent component. Passing callbacks as props is a helpful way of doing this.

#### props.children
In some cases, you may not know what children will go inside of a certain component. You can indicate that there will be children rendered in the component by using `props.children`

```jsx
const ParentComponent = () => {
    return <article>
        <h1>Here are some children</h1>
        {props.children}
    </article>
}

<ParentComponent>
    <p>Something here.</p>
    <ul>
        <li>List item</li>
    </ul>
</ParentComponent>
```
**What can be a child?**

Valid children can be strings, components, even arrays.

###	Conditional Rendering
Sometimes you may want a component to be styled differently given a condition. Sometimes you may not want the component to render at all. Conditional rendering is a great way to accomplish this.

Conditional rendering must go inside of `{` and `}`. 

You can use the logical operators `&&`:
```jsx
{hasAccount && <WelcomeBanner />}
```
You can also use a ternary operator:
```jsx
{
    hasAccount
        ? <WelcomeBanner/>
        : <SignUpForm/>
}
```

## Importing and Exporting
For our purposes there are two main ways of exporting a component. A `default export` and a `named export` 

**Default exports**

A module can only have **one** default export. You can use a default export on a component like this:
```jsx
export default function MyDefaultExport1(){
    return <p>I am a default export</p>
} 

```
If exporting an anonymous component that's tied to a variable name, like below, the syntax is a little different:
```jsx
const MyDefualtExport2 = () => <p>I'm another default export</p>
export default MyDefaultExport2
```
Why the extra step? Becuase the `default` keyword expects a __hoistable declaration__, a __class declaration__, or an __assignment expression__.

**Named exports**
```jsx
export const MyNamedExport1 = () => <p>I'm a named export</p>

export function MyNamedExport2 { 
    return <p>me too</p>
}
```
Named exports lack the `default` keyword. You can have as many named exports as you want.

**Imports**
```jsx
import MyDefaultExport1 from './my-default-export-1.js'
import MyDefaultExport2, { MyNamedExport1, MyNamedExport2 } from './my-mixed-exports.js'
```
A default export can be imported just by using the name.

A named export can be destructured using `{` and `}`.

You can import a default and named exports in the same line.

You can alias imports using the `as` keyword.

## Mini Project
### Starting the project
```bash
git clone https://github.com/dmkite/React-Basics.git`
cd React-Basics
npm ci
npm start
```
Open a browser to localhost:3000

## Imperative vs. Declarative
In React - the flow of information is unidirectional. What does that mean?

In the view, a user clicks a button, which updates state. Clicking the button has no effect whatsoever on the view - it only changes state. This causes a rerender, which means a new view is created based on the information in state. The information controls the presentation.

The view should be a certain way given a certain state. State is central and a single update can affect multiple portions of the view. Whereas in imperative programming you may have to select individual items and update them accordingly.

The downside is a lot of repeated work. Each time state changes, a new view is generated. Computationally, this is much more expensive than imperative programming. DOM manipulation is very expensive, so we want to touch as little of the DOM as possible. So how is React viable, then? The virtual DOM!

What is a virtual dom?

A virtual DOM is like the DOM, but it doesn't actually render to the screen. On every update, React looks at the virtual DOM, creates a diff with the real DOM, and makes the smallest possible change. It's not as fast as doing it manually, but it's much less likely to have bugs.

## The Task
We need to add an input component so a user can add their name.

The input component should match the styling in this mock
![Screenshot](screenshot.png)

The following critera must be met:
- [ ] A text input w/ label exists
- [ ] The input should "controlled" (__i.e.__ its value should be provided by props, onChange it should fire a callback)
- [ ] When a user types in the input, the 'Placeholder Title' changes to match the content
- [ ] when a user's name is longer than 10 characters, it should flash different colors
- [ ] No uneeded wrapping `div`s are used