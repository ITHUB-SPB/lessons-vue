# Day 1: Mastering 
# Components in Vue.js

Welcome to Chapter 1 of our journey to master Vue.js in just six days. 
During this first day, we will delve into the world of Vue.js, starting by 
understanding why it is so powerful and exploring its key concept, the 
Virtual DOM. We will then follow a step-by-step process to create our first 
Vue.js application, guiding you through the installation of Node.js and Vue 
CLI, as well as examining the default files generated in a Vue.js application.
We will also explore the structure of a Vue.js application, examining 
configuration files, directories, and essential components. Additionally, 
we will demonstrate how to break down an application into Vue.js 
components, adhering to naming conventions and creating our first 
component.
Finally, we will delve into fundamental aspects such as reactivity 
usage, defining methods and computed properties in a Vue.js component, 
and managing the lifecycle.

# Why Use Vue.js

When it comes to choosing a JavaScript framework for modern and 
interactive web development, Vue.js stands out among the most popular 
and compelling choices. With its simple and reactive approach, Vue.js 
offers a smooth and enjoyable development experience, suitable for both 
beginners and experienced developers.
In this section, we will explore five essential reasons why Vue.js is 
a wise choice for your development projects. From its ease of learning 
to optimal performance, innovative Composition API, and dynamic 
ecosystem, let’s quickly discover why Vue.js rightfully deserves its place 
among modern development frameworks.
We will, of course, have the opportunity to explore these different 
facets in depth later in the book.

1. **Ease of Learning and Implementation**
Vue.js is renowned for its gentle learning curve. 
Its simple and declarative syntax, along with 
comprehensive and user-friendly documentation, 
makes it an excellent choice for both novice web 
developers and experienced professionals. Concepts 
such as components, directives, and composables 
are intuitive and easy to grasp, speeding up the 
learning and development process.

2. **Reactivity and Efficient Rendering**
Reactivity is at the core of Vue.js. With its 
bidirectional data binding system and the ability 
to track changes in the application’s state, Vue.
js ensures reactive and efficient rendering. User 
interface updates are handled optimally, resulting in 
a smooth and performant user experience, even for 
complex applications.

3. **Composition API for Better Code Organization**
With the introduction of the Composition API 
(starting from Vue.js version 3, as used in this book), 
Vue.js provides a more structured and modular way 
to organize code. Instead of dividing logic by options 
in components (as proposed in Vue.js version 2), 
the Composition API allows grouping logic by 
functionality, making the code more readable, 
maintainable, and scalable. It also facilitates logic 
sharing between components.

4. **Extensive Ecosystem of Libraries and Tools**
Vue.js benefits from a dynamic ecosystem composed 
of many third-party libraries and complementary 
tools. Whether it’s state management with Vuex, 
routing with Vue Router, or integration with other 
libraries and frameworks, Vue.js offers flexible 
options to meet various development needs.

5. **Optimal Performance and Lightweight Size**
Vue.js is designed to be lightweight and fast. With 
its compact size and optimized performance, 
Vue.js applications load quickly in the browser, 
enhancing the overall user experience. Additionally, 
Vue.js allows server-side rendering (SSR) for even 
better performance in terms of SEO and initial 
loading time.
Vue.js distinguishes itself through its simplicity, 
reactivity, flexibility, performance, and ecosystem, 
making it a wise choice for developing modern and 
dynamic web applications.

# Virtual DOM
The Virtual DOM (Document Object Model) is a key concept in many 
modern JavaScript frameworks, including Vue.js. It is a lightweight and 
efficient abstraction of the real DOM, which represents the structure of 
a web page in the browser’s memory. The goal of the Virtual DOM is to 
improve performance and the efficiency of DOM updates by minimizing 
direct manipulations, which can be time-consuming.
Let’s now explore how the binding between the browser’s DOM and 
Vue.js’s Virtual DOM works.

# Step 1: Virtual DOM Operation
Here’s how the Virtual DOM operates in Vue.js:
1. **Virtual DOM Creation:** When a Vue.js component 
is created, it generates an internal Virtual DOM 
that reflects the current structure of the DOM. This 
Virtual DOM is a virtual and lightweight copy of the 
actual DOM tree.
2. **Initial Rendering:** At startup, the component 
generates the Virtual DOM using the data and 
templates defined in the Vue.js code.
3. **Change Detection:** When a component’s data 
changes (due to user interaction, such as clicking 
a button), Vue.js uses a process called “reactivity” 
to detect data changes. This triggers a Virtual DOM 
update process.

4. **Comparison and Update:** Once data changes are 
detected, Vue.js compares the new state of the 
Virtual DOM with the previous state, identifying 
differences between the two versions.

5. **Patch Generation:** Vue.js generates a set of 
instructions (reconciliation process) describing 
the modifications to be made to the real DOM to 
reflect the changes. These instructions are created 
efficiently, minimizing the number of direct DOM 
manipulations.
6. **DOM Update:** Finally, Vue.js applies the 
reconciliation process to the real DOM in an 
optimized manner. Only the parts of the DOM that 
have changed are updated, significantly reducing 
performance compared to a full DOM update.

The major contribution of the Virtual DOM lies in the efficiency 
and speed of updates. Instead of directly manipulating the DOM with 
each data change, Vue.js uses the Virtual DOM to minimize actual DOM 
modifications, resulting in improved performance and a better user 
experience. This allows developers to focus on application logic rather 
than complex DOM manipulations. Vue.js’s Virtual DOM is therefore a 
crucial technique that optimizes browser performance by intelligently 
detecting changes and efficiently updating the DOM, enhancing reactivity 
and the user experience.

# Step 2: Concrete Example
Here is a concrete example to illustrate how the Virtual DOM works in Vue.
js through a simple case: incrementing a counter by clicking a button.

Suppose we have a Vue.js component called MyCounter that displays a 
counter and a button to increment it. Here is how it could be implemented 
(this code example will be explained later in this chapter; the key here is 
to explain how the DOM is updated with each click on the “Increment” 
button). The MyCounter component is associated with a MyCounter.vue
file described as follows:

**File MyCounter.vue**

This component is displayed in a browser as follows:

**_Figure 1-1._** _First display of the Vue.js application_

Upon clicking the “Increment” button once, the counter value 
increments from 0 to 1:

**_Figure 1-2._** _Incrementing the counter from 0 to 1_

Let’s examine how Vue.js’s Virtual DOM handles updates when 
clicking the button to increment the counter:

1. Upon startup, the MyCounter component is 
mounted, and the Virtual DOM is created based on 
the template and initial data.

2. When clicking the “Increment” button, the 
increment() method is called. This changes the 
value of the count variable in the component.

3. Vue.js detects the data change through its 
reactivity system.

4. The Virtual DOM is updated to reflect the new value 
of count. Vue.js compares the old and new Virtual 
DOM to determine differences.

5. Vue.js generates a set of instructions describing 
the modification to be made to the real DOM. In 
this case, the instructions simply indicate that the 
counter text should be updated.

6. The real DOM is updated with the executed 
instructions. Only the part of the DOM 
corresponding to the counter is modified, 
minimizing direct DOM manipulations.

This example illustrates how Vue.js’s Virtual DOM optimizes DOM 
updates by detecting changes, then generating efficient instructions to 
selectively update the real DOM. This provides a reactive user experience 
while optimizing performance.

# Creating a First Vue.js Application
Creating a Vue.js application requires installing the Vue CLI utility, 
downloadable after installing the npm utility from the Node.js server.

# Step 1: Installing Node.js and Vue CLI
Ensure that you have Node.js installed on your system, which you can 
download from the official Node.js website (https://nodejs.org/). Next, 
install Vue CLI using the `npm install -g @vue/cli` command in your 
terminal:

**_Figure 1-3._** _Vue CLI installation_

Once Vue CLI is installed, you can use the vue create command to 
create the Vue.js application.

# Step 2: Creating the Vue.js Application
After installing Vue CLI, you can create a new Vue.js project by running the 
command vue create vueapp. This will create the vueapp application in 
the newly created vueapp directory:

**_Figure 1-4._** _Creating the Vue.js application with Vue CLI_

The system prompts for the desired version of Vue.js. We retain the 
default selection of the current version 3 by pressing the Enter key on the 
keyboard.
The Vue.js application named vueapp begins to be created:

**_Figure 1-5._** _Creating the Vue.js application in progress_

Once the application creation process is complete, it will be displayed 
on the screen:

**_Figure 1-6._** _Completion of Vue.js application creation_

Once the Vue.js application is created, the next step is to start it.

# Step 3: Launching the Vue.js Application

To start the previously created Vue.js application, simply type the two 
commands in the terminal window as indicated: cd vueapp, then npm 
run serve.

**_Figure 1-7._** _Launching the Vue.js application_

The npm run serve command starts a Node.js server on which the 
Vue.js application will run.
Once the Node.js server is launched, the terminal screen becomes the 
following:

**_Figure 1-8._** _Completion of the server launch process with the Vue.js_ 
application

The terminal window indicates that the Vue.js application is accessible 
at the URL http://localhost:8080.
Let’s enter this URL in a browser:

**_Figure 1-9._** Default_ Vue.js application created_

We now have access to the previously created Vue.js application.

# Analyzing the Files Created by Default 
in the Vue.js Application
The vue create vueapp command created a vueapp directory containing 
configuration files and directories containing the source code for our Vue.
js application.

**_Figure 1-10._** _Contents of the “vueapp” directory in the Vue.js 
application_

We can see that the Vue.js application directory primarily contains 
configuration files and three main directories (node_modules, public, and 
src). Let’s now explain their role and contents.

# Step 1: Configuration Files (with .js and 
# .json Extensions)

The configuration files are directly attached to the root of the application. 
They serve, among other things, to enable the execution of the Vue.js 
application on a Node.js server. For example, here is the content of the 
package.json file, which is traditionally used to configure an application 
to run on a Node.js server:

**File package.json**

In this file, you’ll find the list of dependencies that our application 
needs to run, along with their respective versions.
The “scripts” key allows the execution of commands such as npm run 
serve, which launches the development server on port 8080.
Additional scripts can be added. For example, let’s insert a new script 
“start” in the “scripts” section that starts the Vue.js application on port 
3000 instead of the default port 8080.

**Adding the "start" script (package.json file)**

The command npm run start starts the server on port 3000.

**_Figure 1-11._** _Execution of the “start” script_

The Vue.js application is now accessible at the URL http://
localhost:3000, thanks to the server launched on port 3000.
We briefly examined the configuration files of the Vue.js application. 
Let’s now look at the application directories, starting with the node_
modules directory.

# Step 2: node_modules Directory
The node_modules directory contains external dependencies necessary 
for the proper functioning of the Vue.js application (those specified in the 
package.json file), as well as other libraries and modules that may be 
added to the project later.
Here is a partial content of this directory shortly after creating the 
application.

**_Figure 1-12._** _Partial content of the node_modules directory_

# Step 3: public Directory
The public directory contains the static files of the application. This 
public directory typically includes the following two files:
- The `favicon.png` file, which specifies the application’s 
icon to be displayed in the browser tabs.
- The `index.html` file, which is the starting file of the 
Vue.js application.

Let’s see the content of the index.html file. This content is rarely 
modified as it incorporates a crucial `<div>` HTML element for the 
functioning of the Vue.js application.

**File public/index.html**

The `index.html` file contains a single `<div>` element, which has 
been assigned the default identifier "app". This convention allows us to 
insert the Vue.js components of our application into this `<div>` element, 
visualizing the Vue.js application in the browser. We will see here how this 
is achieved.

Now let’s examine the content of the src directory, which will help us 
understand the purpose of the previous `<div>` element.

# Step 4: src Directory
The src directory of the application is the most widely used and modified 
when building our Vue.js applications. It contains the source code for our 
Vue.js components as well as static files such as images or CSS style files.
It consists of the following files and directories:

**_Figure 1-13._** _Content of the src directory_

Let’s examine in detail each file and directory listed in the src
directory. We’ll start with the main.js file.

# Step 5: src/main.js
The main.js file is crucial for starting a Vue.js application. Let’s see its 
content:

**File src/main.js**

Here’s an explanation of the previous code:

1. The first statement `import { createApp }` from 
'vue' imports the `createApp()` function from the 
“vue” package. The “vue” package is located in the 
`node_modules` directory of the application. The 
`createApp()` function will be used later to create a 
Vue.js application instance.

2. The second statement `import App from './App.
vue'` imports the `App` component from the `App.vue`
file. The `App` component will be the root component 
of the application.

3. Finally, the statement `createApp(App)`.
`mount('#app')` first calls the `createApp(App)`
function to create a Vue.js application instance 
using the previously imported App component. 
Then the `mount('#app')` method is called on 
this instance. This mounts the application onto 
the DOM element with the id `"app"`. This `"app"`
element was present in the `index.html` file seen 
earlier. This element serves as the main container in 
which the Vue.js application will be displayed.

In summary, the code in the main.js file creates an instance of the Vue.
js application using the App component as the root component and then 
mounts this instance on an element with the id "app" in the DOM. This 
effectively initializes the Vue.js application and makes it ready to be 
displayed and used in the browser.

# Step 6: src/App.vue
We explained previously that the App.vue file is associated with the App
component, which will be displayed in the HTML page. The App component 
describes the structure of our Vue.js application using the syntax provided 
by the Vue.js framework. Here is the content of the App.vue file:

**App component (src/App.vue file)**

The `App.vue` file is a Vue.js component that defines the structure 
(`<template>` section), logic (`<script>` section), and style (`<style>` section) 
of the main part of the application. Here is a concise explanation of the 
content:

1. **`<template>` section**
- The content between the `<template>` tags defines 
the HTML structure of the component.
- It includes an `<img>` tag displaying a Vue.js logo and 
a `<HelloWorld>` component with a "msg" property.

2. **`<script>` section**
- The `<script>` section contains the JavaScript logic 
of the component.
- It imports the HelloWorld component from the 
HelloWorld.vue file.
- The exported object (via the export default
statement) defines the name of the component 
(here, "App") and the components it uses (in this 
case, "HelloWorld").

3. `<style>` section
- The `<style>` section contains CSS style rules for the 
component.
- The element with the id "app" is styled with various 
CSS properties for formatting the application. 
Recall that the element with the id "app" is the one 
on which the Vue.js application is “mounted.”

In summary, the App.vue file combines HTML structure, JavaScript logic, 
and CSS styles to define the main component of the application. It imports 
the HelloWorld component and displays a Vue.js logo and a message inside 
this component. The style is applied to the main container with the id "app". 
This file forms the visual and functional basis of the application.
This App.vue file (associated with the App component) will need to be 
modified later to display our own Vue.js application.
We have described the two main files in the src directory, namely, the 
main.js file and the App.vue file. We have seen that the App component 
uses another component named HelloWorld. This new component is 
located in the components directory of the application. Let’s describe the 
contents of the components directory, specifically the HelloWorld.vue file 
associated with the HelloWorld component.

# Step 7: src/components Directory
The `src/components` directory contains files describing the internal 
components of our Vue.js application. Subdirectories can be added if a 
more structured organization is desired.
Let’s examine the file currently present in this directory. It is the 
`HelloWorld.vue` file associated with the `HelloWorld` component.

**HelloWorld component (src/components/HelloWorld.vue file)**

We find the three sections of a Vue.js component, as we discussed in 
the previous section when describing the App component:
- The `<template>` section defines the HTML structure of 
the component.
- The `<script>` section describes the JavaScript logic of 
the component.
- The `<style>` section describes the styles used in the 
component. The scoped attribute indicated here 
localizes the styles defined only for the `HelloWorld`
component.

We will have the opportunity in the following pages to explain in 
detail the possible content of a Vue.js component. We already know that it 
contains the three sections mentioned earlier.

# Step 8: src/assets Directory
The `src/assets` directory is used to store static files of the application, 
such as images or globally applied CSS files for the entire Vue.js 
application. In our case, it contains only the logo.png file corresponding to 
the image displayed in the Vue.js application.
We have now completed the quick description of each of the files and 
directories created in the default Vue.js application "vueapp" using the 
vue create vueapp command. We have seen that the files describing our 
application are mainly located in the src directory and its subdirectories.
We will now explain how to design a Vue.js application by breaking it 
down into different components according to what we want to achieve.

# Decomposition of a Vue.js Application 
into Components
Breaking down an application into components, as Vue.js suggests, is a 
common approach in software development. This methodology promotes 
the creation of a modular structure that simplifies code maintenance, 
reuse, and clarity.
Here is a simple example of breaking down an application into 
components.
Let’s imagine that we want to design an application that displays a 
list of tasks to be done, each accompanied by a check box to indicate 
its status (completed or not). To do this, we would start by segmenting 
the application into two main components: a parent component called 
“TaskList” and a child component named “TaskItem.”
The parent component “TaskList” would be responsible for managing 
the complete list of tasks to be done. Its responsibility would involve 
retrieving the list data from a data source (such as an API or a database), 
performing sorting and filtering operations, and then passing this data to 
the child component “TaskItem.”

**_Figure 1-14._** _TaskList and TaskItem components_

The child component “TaskItem,” on the other hand, would be 
responsible for displaying an individual task. It would show the task’s 
name and a check box to indicate its status (completed or not). This 
component would be versatile and display each task whenever it is called 
by the parent component “TaskList.”
Next, we could further fragment the “TaskList” component into 
subcomponents. For example, “TaskListHeader” could handle the header 
of the list, “TaskListFooter” the bottom of the list, and “TaskListFilter” 
the management of filters within the list. Each subcomponent would be 
responsible for a specific part of the task list, contributing to code clarity 
and reusability.

**_Figure 1-15._** _TaskList, TaskListHeader, TaskListFilter, and 
TaskListFooter components_
Finally, we could also subdivide the “TaskItem” component into 
additional subcomponents. For example, “TaskName” could focus on 
displaying the task’s name, “TaskCheckbox” on showing the check box, 
and “TaskDueDate” on displaying the task’s due date. Each of these 
subcomponents would play a specific role in displaying an individual 
task, bringing more modularity to the design and simplifying code 
management.

**_Figure 1-16._** _TaskItem, TaskName, TaskCheckbox, and TaskDueDate 
components_

By decomposing our application into components, we’ve established a 
modular architecture, simplifying code readability, update management, 
and the potential for reuse. Moreover, since each component is responsible 
for a well-defined task, the debugging process is greatly facilitated, as each 
component can be addressed independently.

# Naming Conventions for Vue.js Components
A Vue.js component name is written in PascalCase, with an initial capital 
letter for each word in the component’s name. To avoid assigning a 
component name that might also be associated with an HTML element, 
the Vue.js component name must be defined with a minimum of two 
words. HTML elements are all defined with a single word, such as `<img>`, 
`<p>`, `<span>`, etc. Therefore, if Vue.js component names are defined 
with a minimum of two words, there is no risk of confusion with HTML 
tag names.
Thus, you can create the `MyCounter` component in Vue.js, but you 
cannot create the Counter component because it consists of a single word, 
while `MyCounter` consists of two words.

The only exception to this rule is the App component, which is the only 
one written with a single word.
Once the `MyCounter` component is created, it can be used in the 
`<template>` sections as `<MyCounter>` or `<my-counter>`. Both forms of 
writing are equivalent in Vue.js, although the `<MyCounter>` syntax is 
recommended.

# Creating a First Component with Vue.js

A component is defined using a .vue extension file and must be in the 
form of components like `App` and `HelloWorld`, defined in the `App.vue` and 
`HelloWorld.vue` files described earlier. It will thus include the `<script>`, 
`<template>`, and `<style>` sections, which will be filled in according to 
the component’s needs. If one of the sections has no elements, it can be 
omitted. This is often the case for the `<style>` section.

Here is an example of the `MyCounter.vue` component, which simply 
displays the text “MyCounter Component” in an `<h1>` tag. The MyCounter.
vue file will be located in the components directory of the src directory in 
the application.

**File src/components/MyCounter.vue**

The `<script>` and `<style>` sections are not necessary but are present 
as they may contain added instructions later. The `MyCounter` component 
needs to be inserted into the `App` component to be displayed within it. 
Indeed, the `App` component currently uses the `HelloWorld` component 
seen previously. Let’s modify the `App` component to incorporate the 
`MyCounter` component.

The `App` component can be written in two ways, depending on the Vue.
js syntax one wishes to use:

- Options API syntax (available from Vue.js version 2)
- Composition API syntax (available from Vue.js version 3)

Using the Options API syntax, the App.vue file becomes the following:
**Using the Options API syntax (file src/App.vue)**

The `MyCounter.vue` file is imported into the `App` component using the 
`import` statement in the `<script>` section of the component. Then, the 
`MyCounter` component is displayed in the `<template>` section using the 
`<MyCounter />` tag.
In the `<script>` section, we added the export `default` statement of 
an object with the components option describing the components used 
in the `App` component. This is the traditional way of using the syntax with 
options, proposed in version 2 of Vue.js. It is called the Options API syntax.
Another syntax is possible, introduced from version 3 of Vue.js. It is 
called the Composition API syntax.
Let’s use the Composition API syntax to write the App component in 
the `App.vue` file:

**Using the Composition API syntax (file src/App.vue)**