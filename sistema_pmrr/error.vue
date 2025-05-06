<template>
  <div class="flex gap-1 min-h-screen bg-gradient-to-b from-cyan-900 to-blue-900 items-center text-center text-3xl">
    <div class="flex flex-col gap-4 m-5">
      <span class="text-white">
        Ops! Não foi possível encontrar essa página.
      </span>

      <ButtonComponent label="Ir para tela inicial" @click="getIndex" />
    </div>
  </div>
</template>

<script setup>

function getIndex() {
  navigateTo('/');
};

</script>