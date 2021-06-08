<template>
    <slot></slot>
</template>

<script>

export default {
    name: "MenuIcon",
    inheritAttrs: false,
    setup(props,context){
        const {icon} = context.attrs
        return () => icon()
    },
}
</script>

<style scoped>

</style>
