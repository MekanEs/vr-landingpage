<script setup lang="ts">
import { ButtonType } from '../types/types';
import Button from './Button.vue';
import Logo from './Logo.vue';
import NavBar from './NavBar.vue';
</script>

<template>
  <div class="header">
    <Logo />
    <NavBar />
    <div class="header__button-container">
      <Button>Contact Us</Button>
      <Button :type="ButtonType.GRADIENT"> Join Hydra </Button>
    </div>
  </div>
</template>
