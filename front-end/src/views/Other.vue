<template>
<div class="home">
  <h1>Other Accounts</h1>
  <div class="others">
    <div class="other" v-for="other in others" :key=" other.id">
      <div class="historical">
        <h2>{{other.name}} - {{other.year}}</h2>
        <h3>Historical Context:</h3>
        <p>{{other.context}}</p>
      </div>
      <div class="account">
        <h3>Text of Account:</h3>
        <p>{{other.text}}</p>
      </div>
      <div class="commentary">
        <h3>My Commentary:</h3>
        <div class="comment" v-for="comment in other.commentary" :key=" comment.id">
          <p>{{comment.comment}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="comments">
    <CommentsView :year='"other"' />
  </div>
</div>
</template>
<script>
import CommentsView from "../components/CommentsView.vue"
export default {
  name: 'Other',
  components: {
    CommentsView
  },
  computed: {
    others() {
      return this.$root.$data.other;
    }
  }
};
</script>
<style scoped>
.account p {
  margin-left: 10%;
  margin-right: 10%;
  background-color: #fff5f5;
}

.historical p {
  margin-left: 15%;
  margin-right: 15%;
  background-color: #fff5f5;
}
.commentary p {
  margin-left: 15%;
  margin-right: 15%;
  background-color: #fff5f5;
}
</style>
