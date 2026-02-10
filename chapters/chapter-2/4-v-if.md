# Mastering Directives in Vue.js

## v-if and v-else Directives

The `v-if` and `v-else` directives make it easy to write conditional tests in a component’s template.

Let’s use the example of the previous counter, adding a Start button to start the counter. Once the counter is started by clicking the Start button, the Start button is replaced by the Stop button, which allows stopping the counter. Therefore, the counter is started or stopped (depending on its state) by alternately clicking on the displayed Start or Stop button.

The `v-if` and `v-else` directives will allow us to alternately display the Start button or the Stop button:
- The `v-if` directive is used by specifying a JavaScript expression that represents a boolean value. If the value of the expression is true, the element using this directive is inserted into the page; otherwise, it is not.
- The `v-else` directive is used on the following element (at the same level). The element using the `v-else` directive will be inserted into the page if the one using
`v-if` is not.

If the `v-else` directive is used, it must follow an element with a `v-if` directive.

In the following, the App component is restored to its initial state:

**App component (file src/App.vue)**

Let’s now write the `MyCounter` component, which alternately displays the Start and Stop buttons. We will first code it in an intuitive way, but it won’t work. Then, we’ll see the modifications needed to achieve the desired result.

### Step 1: Writing the MyCounter Component in an Intuitive (but Nonfunctional) Way

Based on what we have previously explained, it would be natural to code the `MyCounter` component as follows:

**MyCounter component with alternated Start and Stop buttons (file src components/MyCounter.vue)**

The interesting part is the one written with the `v-if` and `v-else` directives:

- The `v-if` directive displays the Start button if the value of the timer variable is `null`, which is the case when the HTML page is initially displayed because the timer variable is initialized to `null`.
- The `v-else` directive displays the Stop button if the timer variable has a different value (i.e., not `null`).

This code looks logical and functional. Let’s try to see the result obtained.

When the program is launched, the counter is at `0`, and the Start button is displayed. This corresponds to the executed `v-if` directive.

Let’s click the Start button. The counter starts, and the Stop button is displayed:

The Stop button is displayed, corresponding to the execution of the `v-else` directive. Everything seems to be working.

Let’s click the Stop button to stop the counter:

Clicking the Stop button has stopped the counter. However, the button label is still “Stop” when it should be “Start.” Additionally, clicking the button again does not restart the counter, which remains stuck at the stopped value.

So there is an issue. Let’s explain why and resolve it now.

### Step 2: Writing the MyCounter Component After Corrections (And Functional!)

The frequently made mistake is using a nonreactive variable in a directive, as seen with the `timer` variable, which is not reactive but is used in the `v-if` directive. Since the `timer` variable is not reactive, its modification is not considered by the `v-if` directive, which observes changes only on reactive variables.

We simply need to transform the `timer` variable into a reactive variable and modify the code where it is used, using `timer.value` instead of just `timer`.

The timer variable is defined as reactive (file src/components/MyCounter.vue)

After stopping the counter, the Start button is now visible, and the counter can restart:

Clicking the Start button restarts the counter:
