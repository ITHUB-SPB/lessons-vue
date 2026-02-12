# Mastering Directives in Vue.js

## v-for Directive

The `v-for` directive allows for looping, enabling the insertion of the directive-containing element into the HTML page multiple times.

The value of the `v-for` directive can be written in several ways, depending on the need:
1. First Form of Writing: `v-for="i in n"`. This form of writing allows for a loop from `1` to the value `n`.
2. Second Form of Writing: `v-for="item, i in items"`. This form of writing allows for traversing the items array and performing an operation for each element item in the array.

Let’s start by studying the writing form `v-for="i in n"`, which allows for a loop from `1` to the value `n`.

### Step 1: v-for Directive in the Form v-for=“i in n”

The variable `i` corresponds to the index in the loop (starting from `1`), while the variable `n` corresponds to the final value of the index in the loop.

To use this form of the `v-for` directive, suppose we want to display multiple counters like the previous one. We would then have a new `MyCounters` component that incorporates several `MyCounter` components using a `v-for` directive. For example, we would write `<MyCounters :nb="3" />` to indicate that we want to display three `MyCounter` components on the page. The `nb` attribute indicates how many `MyCounter` components we want to display in the HTML page.

The App component is modified to display the `MyCounters` component:

**App component displaying the MyCounters component (file src/App.vue)**

Notice that if we specify `:nb="3"` instead of `nb="3"`, it allows us to transmit the numeric value `3` to the `MyCounters` component rather than the string “3”. Indeed, if an attribute is preceded by the `“:”` sign, it means that we should interpret the following value (in quotes or not) as a JavaScript expression.

The `MyCounters` component uses the `v-for` directive to display the `MyCounter` components:

MyCounters component (file src/components/MyCounters.vue)

The `v-for` directive placed on an element allows displaying that element as many times as indicated in the value of the directive (here, from `1` to the value of the `nb` variable).

The MyCounter component is the same as before:
MyCounter component (file src/components/MyCounter.vue)

Let’s look at the result obtained:

We encounter two errors:
1. It is necessary to use the `v-bind:key` directive when using the `v-for` directive.
2. The variable `i` used in the `v-for="i in nb"` directive is defined but not used.

These errors are quite common when starting to develop Vue.js applications. We explain how to resolve these errors in the following section. It is sufficient to use an attribute named `key` in the `v-for` directive.

### Step 2: Use the Key Attribute with the v-for Directive

The previous error shows that the use of the `v-for` directive must be accompanied by the use of the `v-bind:key` directive. This `v-bind:key` directive allows defining a special attribute reserved for Vue.js (`key` attribute) that provides a unique key to each repetitively inserted element.

The `key` attribute is an attribute used internally by Vue.js and cannot be used by us in the component on which it is positioned.

To resolve the previous error, it is sufficient to specify a `key` attribute with the value of the variable `i`. As the variable `i` varies from `1` to `nb`, the `key` attribute of each inserted `MyCounter` component will thus have a different value, which is what we want.

By using the `key` attribute in this way, we solve both of the previous errors at the same time.

Use of the key attribute (file src/components/MyCounters.vue)

The `v-bind:key="i"` directive can be simplified by simply writing `:key="i"`. We had explained this writing simplification previously when using the `v-bind` directive.

Now we have the following:

### Step 3: Rules Regarding the Key Attribute

The `key` attribute is mandatory when using a `v-for` directive, regardless of the form of the directive. Here are two rules regarding this attribute:

1. The value of the key attribute must be unique in the list.
2. And this value should never be modified (in the case where the list is updated).

Indeed, if a value of the `key` attribute is assigned to a list item, this value must always be retained for that item. Vue.js uses this value to determine if a list item is still present in the list, in order to refresh the
list correctly (in the case of additions and deletions of items in the list).

Therefore, if, as in our previous example, the index of the list item is used in the `key` attribute, it will only work if the list is static (as is the case in our
example).

To build dynamic lists, it is generally recommended to use a unique ID identifier associated with each list item.

### Step 4: Use an Index in the Component That Uses v-for

Suppose we want to number the previous counters, here from 1 to 3. The `key` attribute contains this value from `1` to `3` but cannot be used directly in the component because it is prohibited by Vue.js and produces an error. The `key` attribute is indeed for internal use by Vue.js.

To remedy this, simply create a new attribute, named, for example, `index`, which will have the same value. The `index` attribute can be used directly in the `MyCounter` component.

The `MyCounters` component is modified to set the `index` attribute following the `v-for` directive:

Index attribute positioned following the v-for directive (file src/components/MyCounters.vue)

The index attribute is positioned on the `MyCounter` component following the `v-for` directive. Its value will be that of the variable `i` and will thus be `1`, then `2`, and finally `3`.

The `index` attribute is usable within the `MyCounter`
component. It is sufficient to retrieve this attribute using the `defineProps(["index"])` method.

Note that if you write `defineProps(["key"])`, this will result in an error, as explained earlier.

Usage of the index attribute in the MyCounter component (file src/components/MyCounter.vue)

The counters are now numbered:

The counters are now numbered starting from 1. Of course, each counter starts and stops independently. For example, let’s start the second counter:

We have previously seen how to use the `v-for` directive in the form `v-for="i in n"`, which allows looping from `1` to `n`. Now, let’s explore how to loop through an array of elements using another form of the `v-for`
directive, namely, `v-for="(item, i) in items"`.

### Step 5: v-for Directive in the Form v-for=“(item, i) in items”

The second form of the `v-for` directive enables looping through an array of elements represented by the variable `items`. Each element in the array is represented by the variable `item`. The variable `i` corresponds to the index
of the element in the array, starting from `0` (unlike the previous form of the directive where it started from `1`).

It is possible to omit the parentheses and write the directive as `v-for="item, i in items"` and also as `v-for="item in items"` if the index `i` is not being used.

Let’s assume the variable `items` is an array indicating, for each counter, the starting value (`init` property) and the end value of that counter (`end` property). In the following component code, the variable `items` is referred
to as `limits`:

The App component is as follows:

**App component (file src/App.vue)**

The `limits` array is an array of objects `{ init, end }`, indicating for each counter its initial value (`init`) and final value (`end`):

- If the initial value `init` is not specified, it is considered to be `0`.
- If the final value `end` is not specified, it is considered infinite (the counter has no end limit).

The `App` component incorporates the `MyCounters` component in the form of `<MyCounters :limits="limits" />`. This way, the limits array is passed to the `MyCounters` component as the `limits` attribute, which will be utilized within the component.

The `MyCounters` component displays `MyCounter` components based on the content of the `limits` array:

MyCounters component (file src/components/MyCounters.vue)

The MyCounter component receives the attributes `index` and `limit`:

- The `index` attribute represents the index of the element in the list, starting from 0.
- The `limit` attribute corresponds to an object `{ init, end }`, as defined in the `limits` array.

The `MyCounter` component is slightly modified to display the `init` and `end` parameters it receives through the `limit` attribute. If an initial value (`init`) is not transmitted, it is displayed as `0`. If a final value (`end`) is not transmitted, “infinity” is displayed.

MyCounter component (file src/components/MyCounter.vue)

The three counters are displayed here:

Each counter now has the `init` and `end` attributes displayed, retrieved from the `limit` attribute of the MyCounter component.