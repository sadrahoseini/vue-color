import data from './data'
export default (defaultColor, customColors) => {
    return {
        methods: {
            vueColor(name, opacity = 1) {
                let hex = defaultColor;
                let colors = Object.assign(data, customColors);
                if (colors.hasOwnProperty(name))
                    hex = data[name]
                
                let r = parseInt(hex.substring(1, 3), 16)
                let g = parseInt(hex.substring(3, 5), 16)
                let b = parseInt(hex.substring(5, 7), 16)
                let a = parseFloat(opacity)
                if(opacity > 1)
                    a = 1
                else if (opacity < 0)
                    a = 0
                return `rgba(${r}, ${g}, ${b}, ${a})`
            }
        }
    }
}