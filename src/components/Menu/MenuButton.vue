<template>
    <button @click="$parent.toggle()" v-click-outside="() => $parent.close()">
        <slot />
    </button>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  }
};
</script>