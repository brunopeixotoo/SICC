<template>
  <section class="min-h-screen p-4 bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-white p-4 flex justify-between items-center rounded shadow-md mb-6">
      <NuxtLink to="/muder" class="font-bold text-2xl text-blue-800 hover:text-blue-600 transition">
        {{ title }}
      </NuxtLink>
      <NuxtImg src="https://upload.wikimedia.org/wikipedia/commons/1/11/Pmrr.GIF" height="50" width="60" class="rounded" />
    </nav>

    <CardComponent class="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      <div class="flex justify-center">
        <NuxtImg
          src="data:image/jpeg;base64,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"
          class="rounded-lg border border-gray-300 shadow-md"
          height="150"
          width="150"
        />
      </div>

      <div class="flex flex-col gap-6">
        <div class="flex flex-col items-start">
          <p class="text-blue-900 font-semibold">Nome:</p>
          <span class="text-gray-900">{{ nameRegister }}</span>
        </div>

        <div class="flex flex-col items-start">
          <p class="text-blue-900 font-semibold">Apelido:</p>
          <span class="text-gray-900">Pombo</span>
        </div>

        <div class="flex flex-col items-start">
          <p class="text-blue-900 font-semibold">Data de nascimento:</p>
          <div class="flex gap-2">
            <span class="text-gray-900">10/04/1990</span>
            <span class="text-gray-500">(35 anos)</span>
          </div>
        </div>

        <div class="flex flex-col items-start">
          <p class="text-blue-900 font-semibold">Nome da mãe:</p>
          <span class="text-gray-900">Maria da Silva Henrique</span>
        </div>

        <div class="flex flex-col items-start">
          <p class="text-blue-900 font-semibold">Endereço:</p>
          <span class="text-gray-900">Rua das Camélias, 386, Liberdade</span>
        </div>

        <div class="flex flex-col items-start">
          <p class="text-blue-900 font-semibold">Observação:</p>
          <span class="text-gray-900 text-justify">
            Atuante no tráfico de drogas. Segundo investigações, inicia a circulação e atividades de venda por volta das 23 horas.
          </span>
        </div>

        <div class="flex flex-col items-start">
          <p class="text-blue-900 font-semibold">Status:</p>
          <span v-if="!statusRegister" class="text-gray-900 text-justify">
            Aberto
          </span>

          <span v-else class="text-gray-900 text-justify">
            Concluído
          </span>
        </div>
      </div>
    </CardComponent>

    <div class="mt-6 mb-12 mx-5 flex justify-center">
      <ButtonComponent
        v-if="!statusRegister"
        class="bg-green-600 hover:bg-green-500 text-white font-semibold shadow-md transition"
        label="Concluir registro"
      />

      <ButtonComponent
        v-else
        class="bg-red-600 hover:bg-red-500 text-white font-semibold shadow-md transition"
        label="Apagar registro"
      />
    </div>
  </section>

  <NavComponent
    :path="`/muder`"
  />
</template>

<script setup>
  import {
    CardComponent,
    NavComponent,
    ButtonComponent
  } from '#components';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const statusRegister = route.query.completed === 'true';
  const nameRegister = route.query.name || '';

  const title = ref('Detalhamento de Registro');

</script>