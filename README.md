# 🎨 Sadrix Vue Color
This package created to make using colors easier inside vue application.

## How to use
1. Install package in your project with this command:

npm i sadrix-vue-color

2. Import package inside your Vuejs application config file and let Vue() instance use it as a plugin:

import SadrixVueColor from 'sadrix-vue-color';
Vue.use(SadrixVueColor);

3. Your done! Now easily can use `vueColor(material_color_name, opacity)` any where inside your application:

example #1:

``` html
<div v-else :style="{color: vueColor('red-500')}">
    loading
</div>
```

example #2 (with color opacity):

``` javascript
mounted() {
    console.log(this.vueColor('blue-800', 0.3));
}
```

## How to use material color pallets inside sass files

You can easily use all material color pallets inside your stylesheet files.
Import All.scss file to add all color pallets or simply add onlu pallets that you need to use in your project:

example:

``` css
@import '~sadrix-vue-color/dist/styles/all';

#and use it like this

body {
    background-color: $red-100;
}
```

Enjoy using colors! 😉

