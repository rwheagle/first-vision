<template>
<div class="home">
  <h1>Other Accounts</h1>
  <div class="comments">
    <CommentsView :year='"other"'/>
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
};
</script>
<style scoped>
.home {}
.links {}
</style>
