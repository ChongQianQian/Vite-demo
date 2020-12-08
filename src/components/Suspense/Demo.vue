<template>
  <Suspense>
    <template #default>
        ;;;
      <div v-for="item in articleList" :key="item.id">
        <article>
          <h2>{{ item.title }}</h2>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </template>
    <template #fallback> Articles loading... </template>
  </Suspense>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
export default {
   setup() { //async
    const articleList = ref([
      {
        body:
          "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostro",
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        userId: 1,
      },
    ]);
    // await fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     articleList = data;
    //   });

    // console.log(articleList);
    return {
      articleList,
    };
  },
};
</script>

<style scoped></style>

