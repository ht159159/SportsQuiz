<template>
    <div class='solt-child'>
        <slot></slot>
            我是solt的子组件    
            <div :title='title1'></div>
        <div @click = 'click'>
            {{title}}
            <p>{{fromChild}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'children',
        props: {
            fromChild: {
                type: String,
                default: '我说子组件1111111111'
            }
        },
        data() {
            return {
                title: '我说子组件'
            }
        },
        methods: {
            click() {
                this.$emit('childFn', this.title)
            }
        }
    }
</script>