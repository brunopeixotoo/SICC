<template>
  <section class="p-1">
    <nav class="flex fixed bg-white bottom-0 left-0 right-0 z-50 p-4 justify-between items-center border-t border-gray-200 shadow-md">
      <NuxtLink
        :to="path"
        class="flex flex-col items-center text-xl text-gray-600 font-semibold transition"
      >
        Voltar
      </NuxtLink>

      <NuxtLink
        to="/home"
        class="flex flex-col items-center text-xl text-gray-600 font-semibold transition"
      >
        Início
      </NuxtLink>
    </nav>
  </section>
</template>

<script setup>

  defineProps({
    path: {
      type: String,
      default: ''
    },
  });

</script>

<style scoped>
  nav a {
    transition: color 0.3s ease, transform 0.3s ease;
  }

  nav a:hover {
    transform: translateY(-3px);
  }
</style>