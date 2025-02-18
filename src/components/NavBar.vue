<script setup lang="ts">
import Link from './Link.vue';
</script>

<template>
  <div class="navbar">
    <Link class-name="navbar__link" path="#about">About</Link>
    <Link class-name="navbar__link" path="#service">Services</Link>
    <Link class-name="navbar__link" path="#technologies">Technologies</Link>
    <Link class-name="navbar__link" path="#how_to">How to</Link>
  </div>
</template>
