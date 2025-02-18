<template>
  <div class="title">
    <h2 class="title-bold-36">
      <slot name="bold-text" />
    </h2>
    <h2 :class="['title-thin-36', { arrowed: isArrowed }]">
      <slot name="thin-text" />
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { TitleType } from '../types/types';

const { isArrowed = false } = defineProps<TitleType>();
</script>
