<template>
  <section class="min-h-screen p-4 bg-gray-100">
    <nav class="bg-white p-4 flex justify-between items-center rounded shadow-md mb-6">
      <NuxtLink
        to="/muder"
        class="font-bold text-2xl text-blue-800 hover:text-blue-600 transition"
      >
        {{ title }}
      </NuxtLink>
      <NuxtImg
        src="https://upload.wikimedia.org/wikipedia/commons/1/11/Pmrr.GIF"
        height="50"
        width="60"
        class="rounded"
      />
    </nav>

    <CardComponent class="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6 items-start">
      <div class="grid cl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-full">
        <InputComponent
          label="Nome"
          placeholder="Nome"
          type="text"
          v-model="dataRegister.name.value"
          class="max-w-md text-gray-700"
          required
        />

        
        <InputComponent
          label="Apelido"
          placeholder="Apelido"
          type="text"
          v-model="dataRegister.surname.value"
          class="max-w-md text-gray-700"
          optional
        />

        <InputComponent
          label="Data de nascimento"
          type="date"
          v-model="dataRegister.birthday.value"
          class="max-w-md text-gray-700"
          required
        />

        <InputComponent
          label="Nome da Mãe"
          placeholder="Nome da Mãe"
          type="text"
          v-model="dataRegister.mother_name"
          class="max-w-md text-gray-700"
          required
        />

        <InputComponent
          label="Endereço"
          placeholder="Endereço"
          type="text"
          v-model="dataRegister.address"
          class="max-w-md text-gray-700"
          optional
        />

        <InputComponent
          label="Observação"
          placeholder="Descreva a atividade"
          type="text"
          v-model="dataRegister.observation"
          class="max-w-md text-gray-700"
          optional
        />

        <InputComponent
          label="Foto"
          type="file"
          accept=".pdf, .png, .jpg"
          v-model="dataRegister.photo"
          class="max-w-md text-gray-700"
          optional
        />

        <InputComponent
          label="Grau de urgência"
          placeholder="1, 2 ou 3"
          type="number"
          v-model="dataRegister.grau"
          class="max-w-md text-gray-700"
          required
        />
      </div>
    </CardComponent>

    <div class="mt-6 mb-12 flex justify-center">
      <ButtonComponent
        class="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded shadow-md transition"
        label="Adicionar registro"
        @click="addRegister"
      />
    </div>
  </section>
  <NavComponent/>
</template>

<script setup>
  import {
    CardComponent,
    InputComponent,
    NavComponent
  } from '#components';

  const title = ref('Novo Registro');

  const dataRegister = ref({
    name: '',
    surname: '',
    birthday: '',
    mother_name: '',
    address: '',
    observation: '',
    photo: '',
    grau: 0,
  });

  async function addRegister() {
    const isValid = await validatorRegister();
    if (isValid) {
      console.log('Registro válido:', dataRegister.value);
    } else {
      console.error('Erro: Campos obrigatórios não preenchidos.');
    }
  }

  function validatorRegister() {
    if (!dataRegister.value.name) {
      return false;
    }
    return true;
  }

</script>