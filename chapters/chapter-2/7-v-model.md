# Mastering Directives in Vue.js

## v-model Directive

The `v-bind` directive we studied earlier allows updating an attribute associated with a reactive variable when that variable is modified. For example, the instruction `<input v-bind:value="count" />` updates the `value` attribute of the input field when the reactive variable `count` is
changed. Therefore, the content of the input field is automatically updated.

Conversely, modifying the `value` attribute of the input field does not update the associated reactive variable `count`. To achieve this, the `v-model` directive is used.

The `v-model` directive enables two-way binding (attribute to variable and variable to attribute), while the `v-bind` directive allows modification in only one direction (variable to attribute).

### Step 1: Difference Between v-bind and v-model Directives

To observe the behavioral difference between the `v-bind` and `v-model` directives, let’s use the `MyCounter` component, which displays the reactive variable `count` and two input fields:

- The first input field is managed by `v-bind`.
- The second input field is managed by `v-model`.

The `MyCounter` component is directly inserted into the `App` component:

**App component (file src/App.vue)**

```vue
<script setup>
import MyCounter from './components/MyCounter.vue'
</script>

<template>
<MyCounter />
</template>
```

The `MyCounter` component becomes the following:

**MyCounter component (file src/components/MyCounter.vue)**

```vue
<script setup>
import { ref, computed } from "vue"
const count = ref(0);
const doubleCount = computed(() => count.value * 2);
</script>

<template>
  <h3> MyCounter Component </h3>
  Reactive variable count : <b>{{ count }}</b>
  <br />
  Computed variable doubleCount : <b>{{ doubleCount }}</b>
  <br /><br />
   Input for count (using v-bind): <input type="text"
:value="count" />
   <br/><br/>
   Input for count (using v-model): <input type="text"
v-model="count" />
</template>
```

Indeed, to use the `v-bind` directive, you can simplify the syntax by writing `:value="count"` instead of `v-bind:value="count"`. During program execution, the value of the reactive variable (here, `0`) initializes
the content of both input fields. This is achieved through the functionality of the `v-bind` directive, and it’s worth noting that the `v-model` directive also incorporates the behavior of `v-bind`.

The distinction between the `v-bind` and `v-model` directives becomes apparent when modifying the values in the input fields. If you modify the first input field using the `v-bind` directive, the reactive variable `count` does not get updated:

Indeed, an attribute managed by the `v-bind` directive is updated if the associated reactive variable is modified, but not vice versa. Therefore, modifying the `value` attribute of the input field does not alter the
associated reactive variable `count`.

On the other hand, if you modify the second input field using the `v-model` directive, the reactive variable `count` updates (thanks to `v-model`), leading to the modification of the first input field using `v-bind` (due to the behavior of the `v-bind` directive).

### Step 2: Using the v-model Directive in Forms

We have seen the usefulness of the `v-model` directive in managing an input field, automatically capturing the content of the input field in a reactive variable.

The `v-model` directive is widely employed in input forms to easily retrieve the values entered/checked/selected in the form. Each form field is simply connected to a reactive variable using the `v-model` directive.

Let’s use the `v-model` directive to retrieve and display information entered in a form, allowing the input of information displayed in various forms:

- An input field for the person’s name
- A selection list to choose the year of birth
- Radio buttons to choose marital status
- Finally, check boxes to validate terms of use and general sales conditions

The advantage of using the `v-model` directive with the fields in this form is that modifying each field immediately updates the reactive variable associated with that field. The values of the reactive variables associated
with each field are displayed below the form.

The fact that each form field is linked to a reactive variable through `v-model` allows for retrieving the current input or selection in the form. Let’s explore how to manage each form field based on its type (input field,
selection list, radio buttons, or check boxes).

A new component called `MyForm` is used, which will contain the previous display. The component file `MyForm.vue` is created in the `src/components` directory. The `MyForm` component is inserted into the `App` component:

**App component using the MyForm component (file src/App.vue)**

```vue
<script setup>
import MyForm from "./components/MyForm.vue"
</script>

<template>
<MyForm />
</template>
```

### Step 3: Managing Input Fields with `v-model`

This case is the one we previously studied, which served as an introduction to the `v-model` directive. The `MyForm` component becomes the following:

**Input field in the MyForm component (file src/components/MyForm.vue)**

```vue
<script setup>
import { ref } from "vue"
const name = ref("");
</script>

<template>
<h3>Input Form</h3>
Name: <input type="text" v-model="name" />
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

After entering data into the field, you get:

### Step 4: Managing Selection Lists with `v-model`

Now, let’s see how to retrieve the selected value in a list, for example, the year of birth.

**Selection list in the `MyForm` component (file src/components/MyForm.vue)**

```
<script setup>
import { ref } from "vue"
const name = ref("");
let dates = [];
for (let year=2023; year > 1900; year--) dates.push(year);
const birthdate = ref("");
</script>

<template>
<h3>Input Form</h3>
Name: <input type="text" v-model="name" />
<br/><br/>
Date of Birth:
  <select v-model="birthdate" >
     <option v-for="date in dates" :value="date"
:key="date">{{date}}</option>
  </select>
<br/><br/>
<h3>Reactive Variables</h3>
name: <b>{{name}}</b>
<br/><br/>
birthdate: <b>{{birthdate}}</b>
<br/><br/>
</template>

<style scoped>
h3 {
  background-color: gainsboro;
  padding: 5px;
}
</style>
```

The `v-model` directive is used on the `<select>` element. Each year in the list is displayed using a `v-for` directive, iterating over `"date in dates"`. The dates array has been previously populated in the `<script setup>` section of the component. If a date is chosen from the list, the selected date is displayed in the reactive variable `birthdate`:

### Step 5: Managing Radio Buttons with v-model

Now, let’s see how to retrieve the value of the selected radio button. Here, radio buttons are used to choose marital status: Married, Single, Divorced, Widowed. Only one radio button at a time is selected in the list.

**Managing radio buttons in the form (file src/components/MyForm.vue)**

```vue
<script setup>
import { ref } from "vue"
const name = ref("");
let dates = [];
for (let year=2023; year > 1900; year--) dates.push(year);
const birthdate = ref("");
const maritalStatus = ref("");
</script>

<template>
<h3>Input Form</h3>
Name: <input type="text" v-model="name" />
<br/><br/>
Date of Birth:
  <select v-model="birthdate" >
     <option v-for="date in dates" :value="date" :key="date">
{{date}}</option>
  </select>
<br/><br/>
Marital Status:
  <input type="radio" value="M" id="maried"
v-model="maritalStatus">
   <label for="maried">Married</label>
   <input type="radio" value="S" id="single"
v-model="maritalStatus">
   <label for="single">Single</label>
   <input type="radio" value="D" id="divorced"
v-model="maritalStatus">
  <label for="divorced">Divorced</label>
   <input type="radio" value="W" id="widower"
v-model="maritalStatus">
  <label for="widower">Widowed</label>
  <br/><br/>
  <h3>Reactive Variables</h3>
  name: <b>{{name}}</b>
  <br/><br/>
  birthdate: <b>{{birthdate}}</b>
  <br/><br/>
  maritalStatus: <b>{{maritalStatus}}</b>
  <br/><br/>
</template>

<style scoped>
h3 {
  background-color: gainsboro;
  padding: 5px;
}
</style>
```

The `v-model` directive is applied to each `<input type="radio">` element. The same reactive variable, `maritalStatus`, is associated with each element.

### Step 6: Managing Check Boxes with v-model

Finally, let’s see how to handle check boxes in forms. Here, two check boxes are used, which can be checked independently:

- The first one indicates that the terms of use have been read.
- The second one indicates that the general terms and conditions of sale have been accepted.

**Managing check boxes in the form (file src/components/MyForm.vue)**

```vue
<script setup>
import { ref } from "vue"
const name = ref("");
let dates = [];
for (let year=2023; year > 1900; year--) dates.push(year);
const birthdate = ref("");
const maritalStatus = ref("");
const acceptConditions = ref([]);
</script>

<template>
<h3>Input Form</h3>
Name: <input type="text" v-model="name" />
<br/><br/>
Date of Birth:
  <select v-model="birthdate" >
     <option v-for="date in dates" :value="date" :key="date">
{{date}}</option>
  </select>
<br/><br/>
Marital Status:
   <input type="radio" value="M" id="maried"
v-model="maritalStatus">
   <label for="maried">Married</label>
   <input type="radio" value="S" id="single"
v-model="maritalStatus">
   <label for="single">Single</label>
   <input type="radio" value="D" id="divorced"
v-model="maritalStatus">
   <label for="divorced">Divorced</label>
   <input type="radio" value="W" id="widower"
v-model="maritalStatus">
   <label for="widower">Widowed</label>
<br/><br/>
<input type="checkbox" id="read" value="read"
            v-model="acceptConditions" />
<label for="read">I have read the terms of use.</label>
<br/><br/>
<input type="checkbox" id="accept" value="accept"
            v-model="acceptConditions" />
<label for="accept">I accept the general terms and conditions
of sale.</label>
<br/><br/>
<h3>Reactive Variables</h3>
name: <b>{{name}}</b>
<br/><br/>
birthdate: <b>{{birthdate}}</b>
<br/><br/>
maritalStatus: <b>{{maritalStatus}}</b>
<br/><br/>
acceptConditions: <b>{{acceptConditions}}</b>
<br/><br/>
</template>

<style scoped>
h3 {
    background-color: gainsboro;
  padding: 5px;
}
</style>
```

The reactive variable `acceptConditions`, which can contain the values of two check boxes, is initialized as an empty array `[]`. Depending on which check box is checked, its value will automatically be added to the
`acceptConditions` array.
