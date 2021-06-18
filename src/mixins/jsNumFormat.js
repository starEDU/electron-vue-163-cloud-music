import {numberFormat} from "js-num-format"
import secondFormat from "second-format"

export default {
    methods: {
        numberFormat,
        secondFormat,
        toWan (num) {
            return num >= 10000 ? (num / 10000).toFixed(1) + "万" : num
        },
    }
}
