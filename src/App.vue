<template>
  <div class="flex flex-col gap-16 w-screen p-16 items-center" v-if="!cameraUnavailable">
    <Button @click="() => isActive ? pause() : resume()" :type="isActive ? 'warning' : 'success'">
      {{ isActive ? 'STOP CAPTURE' : 'START CAPTURE' }}
    </Button>
    <div class="w-full grid grid-cols-7 gap-8">
      <img v-for="(image, index) in photos" :src="image" :key="index" class="w-full h-auto" />
    </div>
  </div>
  <div v-else class="m-16 w-full flex items-center justify-center text-xl font-bold bg-red-300 text-red-500">
    ERROR : Unable to access your camera
  </div>
</template>

<script setup>
import { useIntervalCapture } from './useIntervalCapture';
import Button from './Button.vue';


const { cameraUnavailable, cameraStream, photos, pause, resume, isActive } = useIntervalCapture()
</script>