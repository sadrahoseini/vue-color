// mixins
import SadrixVueColorMixin from "./mixins/colors"

export default {
    install(Vue, options) {
        let defaultColor = '#000000';
        let customColors = {};
        if (typeof options == 'object') {
            if (options.hasOwnProperty('defaultColor') && typeof options.defaultColor == 'string')
                defaultColor = options.defaultColor;
            if (options.hasOwnProperty('customColors') && typeof options.customColors == 'object')
                customColors = options.customColors;
        }
        Vue.mixin(SadrixVueColorMixin(defaultColor, customColors));
    }
}