<template>
<div  :class="accent?`formula accent`:'formula'" v-if="data.length">
        <h3>{{title}}</h3>
        <div class="table-container">
            <table class="table">
                <tbody>
                    <tr v-for="(v, i) in splitted" :key="i">
                        <td v-for="(v2, j) in v" :key="j" style="border:1px solid #dddd"
                        v-html="boldIndex.includes(breakAt*i+j) ? `<b>${v2}</b>` : v2 "
                        >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br>
</div>
</template>

<script>
export default {
    props:{
        boldIndex: {
            type: Array,
            default:()=>[]
        },
        data:Array,
        breakAt:{
            type:Number,
            default: 12
        },
        title: String,
        accent:{
            type: Boolean,
            default: false
        }
    },

    computed:{
        splitted(){
            let i = [...this.data]
            let x = []
            while (i.length) x.push(i.splice(0,this.breakAt))
            return x
        
        }
    }

}
</script>

<style>

</style>