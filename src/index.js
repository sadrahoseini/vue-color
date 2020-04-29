// mixins
import SadrixVueColorMixin from "./mixins/colors"

export default {
    install(Vue, options) {
        let defaultColor = '#000000';
        let customColors = {};
        if (typeof options == 'object') {
            if (options.hasOwnProperty('defaultColor'))
                if (typeof options.defaultColor == 'string')
                    defaultColor = options.defaultColor;
                else 
                    console.warn('[sadrix-vue-color]', 'defaultColor option should be a [string] of your colors. You pass [' + typeof options.customColors + ']');
            if (options.hasOwnProperty('customColors')) {
                if (typeof options.customColors == 'object')
                    customColors = options.customColors;
                else
                    console.warn('[sadrix-vue-color]', 'customColors option should be an [object] of your colors. You pass [' + typeof options.customColors + ']');
            }
        }
        Vue.mixin(SadrixVueColorMixin(defaultColor, customColors));
    }
}