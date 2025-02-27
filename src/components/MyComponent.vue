<template>
    <div class="widget">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "MyComponent",
    data() {
        return {
            title: "Vue 组件",
            message: "我是一个通过 CDN 加载的 Vue 组件！"
        };
    }
};
</script>

<style scoped>
.widget {
    padding: 20px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
}
</style>