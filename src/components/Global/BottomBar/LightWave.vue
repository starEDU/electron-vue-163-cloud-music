<template>
    <div class="LightWave">
        <DownOutlined />
    </div>

</template>

<script>
export default {
    name: "LightWave",
    alias: '动感光波',
}
</script>

<style lang="less" scoped>
.LightWave{
    width: 100vw;
    height: 100vh;
    background-color: #06AF8F;
    background: -webkit-linear-gradient(
        135deg,
        rgb(142, 132, 133) 0%,
        rgb(230, 132, 110) 100%
    );
    background: linear-gradient(
        135deg,
        rgb(142, 132, 133) 0%,
        rgb(230, 132, 110) 100%
    );
}
</style>
