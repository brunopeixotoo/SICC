<template>
  <div class="flex w-full justify-center bg-red-500 rounded p-2">
    <span class="text-white">
      {{ label }}
    </span>
  </div>
</template>

<script setup>

defineProps({
  label: { // definir o texto exibido para o error
    type: String,
    default: '',
  },
});

</script>