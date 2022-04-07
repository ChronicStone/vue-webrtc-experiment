<template>
    <button 
        type="button" 
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 w-fit"
        :class="[
            { 'bg-green-600 hover:bg-green-700 focus:ring-green-500': type === 'success'},
            { 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500': type === 'warning'},
            { 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500': type === 'default'},
        ]"
    >
        <slot/>
    </button>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'default'
    }
})
</script>