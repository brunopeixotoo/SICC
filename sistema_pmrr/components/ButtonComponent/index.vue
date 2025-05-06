<template>
  <button
    type="submit"
    class="w-full py-3 mt-2 bg-blue-700 hover:bg-blue-800 rounded text-white text-lg font-semibold transition-all flex items-center justify-center"
    @action="$emit('click')"
  >
    <span>
      {{ label }}
    </span>
  </button>
</template>

<script setup lang="ts">

defineProps({
  label: { // definir o texto exibido para o error
    type: String,
    default: '',
  },
  
  defineClass: { // para edições no button
    type: String,
    default: '',
  },
});

</script>