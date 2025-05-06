<template>
  <div class="w-full">
    <label class="block mb-1 font-semibold">
      {{ label }}
    </label>

    <input
      class="w-full p-3 rounded bg-white border border-black text-black focus:outline-none focus:ring-1 focus:ring-black"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>

defineProps({
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue']);

</script>