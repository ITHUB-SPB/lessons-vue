# Mastering Directives in Vue.js

## Using Modifiers in Vue.js

Some directives in Vue.js can have what are called modifiers. These modifiers allow modifying the default behavior of the directive.

Take the example of the `v-model` directive mentioned earlier. It has the following modifiers:

- `lazy`: The `lazy` modifier changes the behavior of updating the reactive variable associated with the directive. It updates the variable only when exiting the input field, rather than updating it for every character entered. When the `lazy` modifier is used, Vue.js considers the change event (for updating the associated reactive variable) instead of the input event.
- `trim`: The `trim` modifier removes any leading or trailing spaces from the input field when updating the associated reactive variable.

A modifier is used after the name of the associated directive, prefixed with the “`.`” character. For example, you write `v-model.trim="count"` or `v-model.lazy="count"`. Additionally, you can combine multiple modifiers by writing `v-model.trim.lazy="count"`.

Let’s use the `lazy` modifier with the `v-model` directive, taking the name input field from the previous example. The `MyForm` component is modified to accommodate the lazy modifier in the directive.

**Using the lazy modifier (file src/components/MyForm.vue)**

```vue
<script setup>
import { ref } from "vue"
const name = ref("");
</script>

<template>
<h3>Input Form</h3>
Name: <input type="text" v-model.lazy="name" />
<br/><br/>
<h3>Reactive Variables</h3>
name: <b>{{name}}</b>
<br/><br/>
</template>

<style scoped>
h3 {
  background-color: gainsboro;
  padding: 5px;
}
</style>
```

Let’s enter a name in the input field associated with `v-model`:

Now, we can see that the reactive variable no longer updates as we type, contrary to the usual behavior of the `v-model` directive. However, as soon as we exit the input field, the reactive variable name updates.

There are many modifiers available depending on the directives used. It is also possible to create new modifiers (see Chapter 5).
