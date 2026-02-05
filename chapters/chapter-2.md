# Mastering Directives in Vue.js

In this chapter, we will delve into directives in Vue.js, a key element
for mastering this front-end library. Directives allow us to add new
functionalities to HTML elements on the page.

We will explore several essential directives, such as `v-bind`, `v-if`,
`v-else`, `v-show`, and `v-for`, providing detailed steps to understand how
they function.

Next, we will focus on the `v-model` directive, which is particularly
useful for two-way data binding in forms.
Finally, we will address the use of modifiers in Vue.js, which allow us to
modify the behavior of directives.

## Using Attributes in Vue.js Components

A component is similar to an HTML element and can have attributes (also
called props, meaning properties).

Let’s use two new attributes, named `init` and `end`, in the `MyCounter`
component:

- The `init` attribute indicates the initialization value of
the counter. If this attribute is not specified, its starting
value is considered as 0.
- The `end` attribute indicates the final value of the
counter. If this attribute is not specified, the counter
does not stop.

As long as the counter value (incremented every second) is between
the `init` and `end` values, the counter continues to increment. Once the end value is reached (if specified in the attributes), the counter stops.

## Step 1: Using the init and end Attributes in the MyCounter Component

An example of using the `MyCounter` component with the `init` and `end`
attributes could be the following:

```vue
// Counter from 10 to 20

<MyCounter init="10" end="20" /> 
```

In this case, the numeric values 10 and 20 are passed to the `MyCounter`
component. To indicate a counter that starts at 10 but never stops, the end
attribute is omitted in the `MyCounter` component’s definition:

```vue
// Counter from 10 to infinity

<MyCounter init=10 />
```

Finally, to indicate a counter that counts from 0 to infinity, no
attributes are specified in the `MyCounter` component:

```vue
// Counter from 0 to infinity

<MyCounter />
```

It is also possible to set the value of an attribute based on the value of
a variable initialized in the program. For example, if we define the variable `init` initialized to the value `10`:

```vue
// Counter initialized from the init variable (file src/App.vue)

<script setup>
import MyCounter from './components/MyCounter.vue'
const init = 10;  // The variable init is equal to 10
</script>

<template>
    <MyCounter :init="init" />
</template>
```

The init variable is defined in the `<script>` section of the component.
It is accessible in the `<template>` section of the component by writing
`:init="init"`. The syntax `:init="init"` signifies that the `init` attribute (indicated as `:init`) is initialized with the value of the init variable (indicated as "init").

The `:` symbol before an attribute name indicates to interpret the following value as a JavaScript expression. One could also write
`<MyCounter :init="init+3" />` to start the counter with the value 13
instead of 10, as "init+3" is a valid JavaScript expression.

The quotes around the value of the JavaScript expression are necessary
if the JavaScript expression contains spaces. Thus, writing ="init" or
=init are equivalent expressions.

To initialize the counter with the numeric value 10, one can also write
the following:

```
// Initialize the init attribute to the numeric value 10

<MyCounter :init="10" />
```

Indeed, specifying :init instead of just init for the attribute name
indicates that the following value is a JavaScript expression, specifically the numeric value 10 and not the string “10”.

We have seen how to write and use the MyCounter component in
various forms with the init and end attributes. Let’s now explore how the
MyCounter component is written to make use of these attributes.