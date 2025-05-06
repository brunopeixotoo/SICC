<template>
  <section class="flex items-center min-h-screen">
    <CardComponent>
      <NuxtImg
        src="https://upload.wikimedia.org/wikipedia/commons/1/11/Pmrr.GIF"
        height="100"
        width="100"
        class="mt-2"
      />
      
      <div class="flex flex-col gap-5 text-center">
        <div class="flex flex-col gap-2 p-3">
          <p class="font-bold text-4xl">
            SICC
          </p>
          <p class="font-semibold">
            Sistema de Identificação e Classificação Criminal
          </p>
        </div>

        <span class="text-md">
          Bem vindo(a) ao SICC. Faça login com seus dados.
        </span>
      </div>

      <div class="flex flex-col w-full gap-4 items-center">
        <InputComponent
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
          v-model="cpf"
        />

        <InputComponent
          label="Senha"
          placeholder="Senha"
          type="password"
          v-model="password"
        />

        <ButtonComponent
          label="Entrar"
          type="submit"
          @click="loginValidator()"
        />

        <ErrorComponent
          v-if="acessValidator"
          label="CPF ou Senha incorretos!"
        />

      </div>
    </CardComponent>
  </section>
</template>

<script setup>
  import {
    ButtonComponent,
    InputComponent,
    CardComponent,
    ErrorComponent
  } from '#components';

  const cpf = ref('');
  const password = ref('');
  const acessValidator = ref(false);


  function loginValidator() {
    if(!cpf.value.trim() || !password.value.trim()) {
      menssegeError();
    } else {
      navigateTo('/home');
    }
  }

  function menssegeError() {
    acessValidator.value = !acessValidator.value;

    setTimeout(() => {
      acessValidator.value = false;
    }, 3500);
  }

</script>