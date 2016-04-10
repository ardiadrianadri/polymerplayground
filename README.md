#Polymer Playground

##Introduction:
To understand how polymerjs works, I've coded one simple example of each basic features that the framework has. I
plubish this job to help the front developers who, like me, are trying to learn polymerjs

##Requeriments:
The app has its own web server that publishes the polymer examples in the port 3000. To run the server, make sure that
you have installed:

* [nodejs](https://nodejs.org/en/)
* [bower](http://bower.io/)
* [git](https://git-scm.com/)

It is also important that no service is running in the port 3000 when you start Polymer Playground.

Polymer Playground has a developer mode which run with [nodemon](https://github.com/remy/nodemon).
I use this mode for the changes that I make on the code, are updated automatically.
In that way I don't need to restart the server each time I change a file. Install nodemon if you are planning run this
mode.

##Installation:

1. Clone this repository to your local:
```
git clone https://github.com/ardiadrianadri/polymerplayground

```
2. Install npm dependencies
```
npm install

```
3. Install bower dependencies
```
bower install

```
4. Start the server
```
npm start

```
5. If you has installed the nodemon, you can run the server in develop mode
```
npm run dev

```

##Examples description:
### Hello world:
The most basic example. It is an text input which its value is printed on a label

###Life cycle:
This example tries to demonstrate how the polymer life cycle works. There is a different function for each fase in the
life cycle that prints a message in the javascript console. By the order that the messages appears in the console it is
possible to deduce when a fase was run and how many times. The last fase is run when the button is clicked

###CSS in polymer
This example shows how it is possible declare isolated styles for a component. We have three business cards with,
exactly, the same html code. Two of them have style and one doesn't. It is because the css declared inside a polymer
webcomponent only affect its component. In addition, we can declare css variables to configure the style of the
component when we use it.

The first of the business card with style is the "bussines-card" component. This component has four style variables
which are:

* **--card-background-color**: Configure the background of the business card
* **--line1-color**: Configure the color of the name in the business card
* **--line2-color**: Configure the color of the job in the business card
* **--contact-color**: Configure the color of the contact data

The second component, "my-card", use the first one but changing the values of this variables. In consequence it seems a
different component when, in fact, it's the same.

###Extended native html
With this example, I try to show how it is possible to add new functionality to a native html tag. In the result of the
code, we can see two button tags; one is extended to change the color each time that someone do click on it and the
other do nothing. The only difference is, the extended button, has the "is" attribute which gives the functionality of
the "ext-button" component

###Basic properties
This example shows how we can declare properties for a polymer web component. It is possible to declare a simple
property to receive a value with a type (name property), we can have a property with a default value (email property) or
the property with the value as result of a function (job property)

###Data Binding
In this example we can find a piece of code with each kind of data binding that can be used in the relationship between
polymer web components. The example is always the same, There are two input text, one inside of the parent component and
, the other inside of the child component. The parent component use the child component. Dependending of how the
properties are coded in both components, the value of the parent input pass to the child input or not. The same goes in
the opposite direction. We can pass information from child to parent or the data never leaves the child.

###Element observer
Here, we can find an example of how it is possible to add an observer function to a property to run a code when its
value changes

###Event listener
This example show the two differents types that Polymer has to define events on html tags. The annotated event is linked
to an tag by an attribute. The listener event is defined in the "listeners" object of Polymer

###Custom events
This example shows how to use the function "fire" to create custom events on our web components

###Dom reapeat
Finally, this example shows how to use the "dom-repeat" to iterate in a array and generate html tags depending on its
values
