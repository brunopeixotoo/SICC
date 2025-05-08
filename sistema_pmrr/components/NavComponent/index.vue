<template>
  <section class="p-1">
    <nav class="flex fixed bg-white bottom-0 left-0 right-0 z-50 p-4 justify-between items-center border-t border-blue-900 shadow-md">
      <NuxtLink
        v-for="item in navigation"
        :key="item.id"
        :to="item.href"
        :class="[
          'flex flex-col items-center text-md font-semibold transition',
          item.current ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
        ]"
      >
        <i :class="item.icon" class="text-xl mb-1"></i>
        {{ item.name }}
      </NuxtLink>
    </nav>
  </section>
</template>

<script setup>
  const navigation = ref([
    { id: 0, name: 'Início', href: '/home', icon: 'fas fa-home', current: true },
    { id: 1, name: 'Registro', href: '/home', icon: 'fas fa-edit', current: false },
    { id: 2, name: 'Categoria', href: '/home', icon: 'fas fa-list', current: false },
    { id: 3, name: 'Sobre', href: '/home', icon: 'fas fa-info-circle', current: false },
  ])
</script>

<style scoped>
  nav a {
    transition: color 0.3s ease, transform 0.3s ease;
  }

  nav a:hover {
    transform: translateY(-3px);
  }
</style>