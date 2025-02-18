<script setup lang="ts">
import { ButtonType } from '../types/types';
import Button from './Button.vue';
</script>

<template>
  <div class="welcome">
    <div class="welcome__container--left">
      <h2 class="title-bold-40 welcome__title">
        <span class="gradient-text">Dive</span> Into The Depths<br />Of
        <span class="gradient-text">Virtual Reality</span>
      </h2>
      <p class="text-16 welcome__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris
        eros in vitae.
      </p>
      <Button className="welcome__button" :type="ButtonType.GRADIENT"
        >Build your world</Button
      >
    </div>
    <div class="welcome__container--right">
      <img
        class="welcome__image"
        src="../assets/images/welcome-image.png"
        alt="banner"
      />
    </div>
  </div>
</template>
