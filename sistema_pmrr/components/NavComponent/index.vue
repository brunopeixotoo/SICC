<template>
  <section class="p-1">
    <nav class="flex fixed bg-white bottom-0 left-0 right-0 z-50 p-4 justify-between items-center border-t-1 border-blue-900">
      <NuxtLink
        v-for="item in navigation"
        :key="item.id"
        :to="item.href"
        class="text-xl font-semibold text-blue-900"
      >
        {{ item.name }}
      </NuxtLink>
    </nav>

    <section>

    </section>
  </section>
</template>

<script setup>

const navigation = ref([
  { id: 0, name: 'Início', href: '/home', current: true },
  { id: 1, name: 'Registro', href: '#', current: false },
  { id: 2, name: 'Categoria', href: '#', current: false },
  { id: 3, name: 'Sobre', href: '#', current: false },
])

// function logout() {
// // Lógica para logout
//   console.log('Usuário deslogado')
// }

</script>