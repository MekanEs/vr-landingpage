<script setup lang="ts">
import Header from './components/Header.vue';
import TextBlock from './components/TextBlock.vue';
import Welcome from './components/Welcome.vue';
</script>

<template>
  <div class="app">
    <Header />
    <Welcome />
    <TextBlock>
      <template #bold-text> INTRODUCTION </template>
      <template #thin-text> TO HYDRA VR </template>
      <template #regular-text>
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
        Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet
        mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget
        sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna
        fringilla urna porttitor rhoncus vitae.
      </template>
    </TextBlock>
  </div>
</template>

<style scoped></style>
