<template>
    <div>
        <h2> The count IS: {{ count }}</h2>
        <p>
            <button @click="count += 1"> Increment by 1 </button>
        </p>
    </div>
</template>




<script>
export default {
    data() {
        return { count: 0};
    }
}
</script>
