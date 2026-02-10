# Mastering Directives in Vue.js

## v-show Directive

The `v-show` directive is similar to the `v-if` directive. The difference is that `v-if` inserts the element into the page if the condition specified in the directive is `true` whereas `v-show` inserts it in all cases but only displays it if the condition is `true` (the `v-show` directive uses the element’s style to hide or show it as needed).

Using the v-show directive in the previous template, we write the following:

Using the v-show directive (file src/components/MyCounter.vue)

The `v-show` directive, being used with a condition, requires writing the negation of the first condition in the second `v-show` directive. Using `v-if` and `v-else` avoids writing two conditions (only one condition will be
written in the `v-if` directive).

The result obtained is the same as the previous one.
