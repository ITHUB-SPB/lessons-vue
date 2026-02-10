# Mastering Directives in Vue.js

## v-bind Directive

The `v-bind` directive allows using attribute values that will be reactive,
similar to reactive variables used in HTML.

For example, let’s use the previous counter, where the value
increments upon clicking the “count+1” button. Suppose we want to
display the counter value in an input field. For this, we would like to write something like `<input type="text" value="{{count}}" />`. Indeed, it is hoped that, thanks to the reactivity of the count variable, the value of the input field will be updated when the counter is incremented.

Let’s write this in the template of the `MyCounter` component. The
`MyCounter` component becomes as follows:

**Display the count variable in the value attribute of an input field (file
src/components/MyCounter.vue)**

```vue
<script setup>
import { ref, computed } from "vue"
const count = ref(0);
const doubleCount = computed(() => count.value * 2);
const increment = () => {
  count.value++;
};
</script>

<template>
  <h3>MyCounter Component</h3>
  Reactive variable count : <b>{{ count }}</b>
  <br />
  Computed variable doubleCount : <b>{{ doubleCount }}</b>
  <br/>
  Input : 
  <input type="text" value="{{count}}" /> // [!code highlight]
  <br/><br/>
  <button @click="increment()">count+1</button>
</template>
```

The `App` component that displays the `MyCounter` component is as
follows:

**App component (file src/App.vue)**

```vue{6}
<script setup>
import MyCounter from "./components/MyCounter.vue"
</script>

<template>
<MyCounter />
</template>
```

After several clicks on the “count+1” button, the displayed result is as
follows:

The counter increments, but the value displayed in the input field does
not reflect this change.

The use of `{{count}}` in the value attribute does not update the content of
the input field, which remains fixed with the string "`{{count}}`". To initialize and update the value attribute of the input field with the value of the reactive variable count, a directive called `v-bind` must be used. The `v-bind` directive allows binding the value of an attribute to that of a reactive variable.

Therefore, one would write `<input type="text" v-bind:value="count" />`, which binds the value attribute of the input field to the value of a reactive variable, in this case, the count variable.

The template of the MyCounter component becomes the following:

**Display the count variable in the value attribute of an input field (file src/components/MyCounter.vue)**

Now, we obtain correct initialization and updates of the input field based on the changes in the reactive variable `count`.

The input field is now initialized with the value of the reactive variable `count`, which is 0.

As the `count` variable is reactive, incrementing it causes the update of its display wherever it is used, including in the input field.

Let’s click the “count+1” button several times:

The value displayed in the input field is updated to reflect the value of the reactive variable count.

The `v-bind` directive is commonly used in templates. For this reason, Vue.js allows simplifying the syntax by writing `:value="count"` instead of `v-bind:value="count"`.

We had already used this simplified form of the v-bind directive by writing `:init="10"` or `:init="init"` in the previous pages.

One could also write `v-bind:value="count+3"` because the value `"count+3"` is a JavaScript expression interpreted by `v-bind`.

Additionally, one can write the shorthand form `:value="count+3"`, which is equivalent to `v-bind:value="count+3"`.

### Refreshing a Component by Modifying Its Attributes

The following example demonstrates how to update a component by transmitting new values to its attributes.

In this scenario, we want the “count+1” button to be integrated into the `App` component rather than the `MyCounter` component. This means that the `App` component should handle the incrementation of the counter and transmit this counter value to the `MyCounter` component through attributes. With each increment of the counter value in the `App` component, the `MyCounter` component refreshes to display the new value.

The App component becomes as follows:

**App component (file src/App.vue)**

```ts-vue
<script setup>
import MyCounter from "./components/MyCounter.vue"
</script>

<template>
<MyCounter />
</template>
```

The logic for incrementing the counter is implemented in the `App` component. The counter values (`count` and `doubleCount`) are transmitted in the attributes of the `MyCounter` component, which then displays them.

The `MyCounter` component is refreshed each time one of its attributes is modified.

### Step 1: Using Attributes in the `<template>` Section of the MyCounter Component

The `MyCounter` component, which utilizes the transmitted attributes, becomes as follows:

**MyCounter component (file src/components/MyCounter.vue)**

```vue
<script setup>
import { defineProps } from "vue";

// Enabling access to the attributes count and doubleCount in the template
defineProps(["count", "doubleCount"]);
</script>

<template>
  <h3>MyCounter Component</h3>
  Reactive variable count : <b>{{ count }}</b>
  <br />
  Computed variable doubleCount : <b>{{ doubleCount }}</b>
  <br/>
  Input : <input type="text" v-bind:value="count" />
</template>
```

The `defineProps(["count", "doubleCount"])` method identifies the attributes `count` and `doubleCount`, which will then be directly used by their names in the `<template>` section.

Note that the `props` variable typically returned by `defineProps()` is unnecessary here. It would be useful if you wanted to use the attribute values in the `<script setup>` section.

Let’s verify that everything is working:

### Step 2: Using Attributes in th `<script setup>` Section of the MyCounter Component

If you want to use the transmitted `count` and `doubleCount` attributes in the `<script setup>` section of the `MyCounter` component, you need to access them directly using the `props` variable, in the form of `props.count` and `props.doubleCount`. The variables `count` and `doubleCount`, corresponding to the attributes, can only be used under these names in the `<template>` section.

Let’s use `props.count` in the `<script setup>` section. As this value is updated with each increment, we display its value in the `onUpdated()` lifecycle method.

Using `props.count` in `<script setup>` (file src/components/MyCounter.vue)


We display the value of `props.count` in the `<script setup>` section of the component (creation) and then with each update in the `onUpdated()` method.

Through this example, we can observe that updating at least one of the attributes of a component refreshes the entire component.
