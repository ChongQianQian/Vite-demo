<template>
  <Suspense>
      <template #default>
        <AsyncComponent/>
      </template>
      <template #fallback>
        <h1>Loading</h1>
      </template>
    </Suspense>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import AsyncComponent from './Suspense/AsyncComponent.vue';

export default {
   components: {
     AsyncComponent,
   },
};
</script>

<style scoped></style>
