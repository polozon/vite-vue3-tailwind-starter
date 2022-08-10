<template>
    <button @click="$parent.toggle()">
        <slot />
    </button>
</template>