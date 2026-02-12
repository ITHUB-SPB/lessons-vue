# Mastering Directives in Vue.js

## Using Attributes in Vue.js Components

A component is similar to an HTML element and can have attributes (also
called props, meaning properties).

Let’s use two new attributes, named `init` and `end`, in the `MyCounter` component:

- The `init` attribute indicates the initialization value of
the counter. If this attribute is not specified, its starting
value is considered as 0.
- The `end` attribute indicates the final value of the
counter. If this attribute is not specified, the counter
does not stop.

As long as the counter value (incremented every second) is between
the `init` and `end` values, the counter continues to increment. Once the end value is reached (if specified in the attributes), the counter stops.

### Step 1: Using the init and end Attributes in the MyCounter Component

An example of using the `MyCounter` component with the `init` and `end`
attributes could be the following:

**Counter from 10 to 20**

```vue
<MyCounter init="10" end="20" /> 
```

In this case, the numeric values 10 and 20 are passed to the `MyCounter`
component. To indicate a counter that starts at 10 but never stops, the end attribute is omitted in the `MyCounter` component’s definition:

**Counter from 10 to infinity**

```vue
<MyCounter init=10 />
```

Finally, to indicate a counter that counts from 0 to infinity, no
attributes are specified in the `MyCounter` component:


**Counter from 0 to infinity**

```vue
<MyCounter />
```

It is also possible to set the value of an attribute based on the value of
a variable initialized in the program. For example, if we define the variable `init` initialized to the value `10`:

**Counter initialized from the init variable (file src/App.vue)**

```vue{3,7}
<script setup>
  import MyCounter from './components/MyCounter.vue'
  const init = 10;
</script>

<template>
    <MyCounter :init="init" />
</template>
```

The `init` variable is defined in the `<script>` section of the component.
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

**Initialize the init attribute to the numeric value 10**

```
<MyCounter :init="10" />
```

Indeed, specifying `:init` instead of just `init` for the attribute `name`
indicates that the following value is a JavaScript expression, specifically the numeric value 10 and not the string “10”.

We have seen how to write and use the `MyCounter` component in
various forms with the `init` and end attributes. Let’s now explore how the MyCounter component is written to make use of these attributes.

### Step 2: Writing the MyCounter Component That Utilizes the init and end Attributes

The code associated with the MyCounter component must consider the
various possible forms for writing the attributes.

The attributes will be defined in the `<script setup>` section of the
component, using Vue.js’s `defineProps()` method.

**MyCounter component with init and end attributes (file src/components/MyCounter.vue)**

<<< @/../snippets/chapter-2/using-attributes/MyCounterStep0.vue{7,11,13,14,46}

The `defineProps()` method is used by specifying, in an array, the
name of each attribute.

When retrieving the value of the attribute by writing `const init =
props.init`, it is mandatory to provide a default value for the attribute
(here, `0`, by writing `props.init || 0`). Otherwise, the retrieval into a
variable cannot be performed. In such a case, one would be forced to use
the `init` attribute in the form `props.init` throughout the program, which
would not be convenient.

The values of the attributes, retrieved into the variables `init` and `end`,
are then displayed in the template using `{{init}}` and `{{end}}`.
For example, suppose the `MyCounter` component is used as follows:

**Counter from 10 to 20 (file src/App.vue)**

```vue
<script setup>
import MyCounter from "./components/MyCounter.vue"
</script>

<template>
<MyCounter init=10 end=20 />
</template>
```

<script setup>
import MyCounterStep0 from '../../snippets/chapter-2/using-attributes/MyCounterStep0.vue'
</script>

<MyCounterStep0 init=10 end=20 />

The counter starts at the value `10` and ends at the value `20`. Let’s run the program:

The counter starts from the value `10` and will stop when it reaches the value `20`.

## Passing an Object As Attributes

Instead of passing the `init` and `end` attributes individually to the
MyCounter component, these values can also be transmitted within a
JavaScript object.

Let’s call the new attribute `limits`, which will replace the init and
end attributes. The `limits` attribute will take the form `{init: 10, end: 20}`. Let’s demonstrate how to use this attribute within the `MyCounter` component.

The App component, which uses the `MyCounter` component, is
modified as follows:

**App component using the MyCounter component and its limits attribute (file src/App.vue)**

```vue
<script setup>
import MyCounter from "./components/MyCounter.vue"
</script>

<template>
<MyCounter :limits="{init:10, end:20}" />
</template>
```

The value of the `limits` attribute is specified as an object `{init: 10,end: 20}`. Adding a string around the object is optional if the following
value does not contain spaces (here, the string is required because there is a space before the `end` attribute).

To ensure that Vue.js interprets the specified value as a JavaScript value (here, an object), it must be indicated by writing the attribute as `:limits` rather than just `limits`.

Let’s see how the code of the `MyCounter` component is modified to
accommodate the new `limits` attribute.

**MyCounter component using the limits attribute (file src/components/
MyCounter.vue)**

```
<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps }
from 'vue';
let timer;
const props = defineProps(["limits"]);
const init = props.limits.init || 0;
const end = props.limits.end || 0;
const count = ref(parseInt(init));
const doubleCount = computed(() => count.value * 2);
const increment = () => {
  if (!end || count.value < parseInt(end)) count.value++;
  else stop();
};
const start = () => {
  timer = setInterval(() => {
    increment();
  }, 1000);
};
const stop = () => {
  clearInterval(timer);
};
onMounted(() => {
  start();
});
onUnmounted(() => {
  stop();
});
</script>
<template>
  <h3>MyCounter Component</h3>
  init : {{init}} => end : {{end}}
  <br /><br />
  Reactive variable count : <b>{{ count }}</b>
  <br />
  Computed variable doubleCount : <b>{{ doubleCount }}</b>
</template>
```

The `limits` attribute is defined in the `defineProps()` method as
`["limits"]`. The `init` value is retrieved from `props.limits.init`, and
the `end` value is retrieved from `props.limits.end`. When the `end` value is
reached, the counter stops:



We have seen how to define attributes for Vue.js components. Vue.js
also allows the use of another form of attributes called directives. These
are powerful tools. Let’s now explore how to use the standard directives
provided by Vue.js. In Chapter 5, we will learn how to create our own
directives, extending Vue.js’s capabilities.

## Differences Between Directives and Attributes in Vue.js

A Vue.js directive is used similarly to an attribute. What then is the
difference between the two?

1. An attribute represents a static value, information transmitted to the component or HTML element on which it is positioned. In the previous examples, we used the init and end attributes to statically indicate the starting and ending values of the counter. The same applies to HTML attributes associated with HTML elements. For example, the class attribute allows specifying a CSS class for the HTML element on which it is positioned.

2. On the other hand, Vue.js directives are used to add dynamic logic to an HTML element or Vue.js component, reacting to changes in data or performing specific actions in response to events. Directives allow binding HTML elements to the state of the Vue.js application, making the user interface responsive and interactive based on application data and logic.

A simple example of a Vue.js directive, which will be explained in the following, is the `v-show` directive. It is used in the form `v-show="condition"`. This directive shows or hides the element on
which it is positioned based on the value specified in the condition. If
the condition evaluates to `true`, the element is displayed; otherwise, it is
hidden. This demonstrates the dynamic aspect of the directive, as opposed
to static attributes.

To differentiate Vue.js directives from regular attributes (HTML
attributes or those created in our components, such as the `init` and `end`
attributes mentioned earlier), Vue.js directives all start with the prefix "`v-`". Examples include `v-if`, `v-show`, `v-bind`, `v-on`, etc., which we will explain in the following.

Let’s start with the `v-bind` directive.
