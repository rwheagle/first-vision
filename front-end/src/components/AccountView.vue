<template>
<div class="main">
  <div class="historical">
    <h2>Historical Context:</h2>
    <p>{{account.context}}</p>
  </div>

  <div class="account">
    <h2>Text of Account:</h2>
    <p>{{account.text}}</p>
  </div>

  <div class="commentary">
    <h2>My Commentary:</h2>
    <div class="comment" v-for="comment in account.commentary" :key=" comment.id">
      <p>{{comment.comment}}</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'AccountView',
  props: {
    id: String
  },
  computed: {
    account() {
      return this.$root.$data.account.find(account => account.year === this.$route.params.id);
    }

  },
  methods: {

  }
}
</script>
<style scoped>
.account p {
  margin-left: 10%;
  margin-right: 10%;
  background-color: #fff5f5;
}
</style>
