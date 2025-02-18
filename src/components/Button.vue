<template>
  <button
    :class="['button', { 'button--gradient': isGradient }]"
    @click="callback"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ButtonType } from '../types/types';

export interface ButtonProps {
  callback?: (payload: MouseEvent) => void;
  type?: ButtonType;
}

const { type = ButtonType.DEFAULT } = defineProps<ButtonProps>();

const isGradient = computed(() => {
  return type !== ButtonType.DEFAULT;
});
</script>
