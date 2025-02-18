<script setup lang="ts">
import DoubleTitle from './DoubleTitle.vue';
</script>

<template>
  <div class="text-block">
    <DoubleTitle :isArrowed="true">
      <template #bold-text>
        <slot name="bold-text" />
      </template>
      <template #thin-text>
        <slot name="thin-text" />
      </template>
    </DoubleTitle>
    <div>
      <p class="text-16 text-block__right">
        <slot name="regular-text" />
      </p>
    </div>
  </div>
</template>
