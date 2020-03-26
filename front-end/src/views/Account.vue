<template>
<div class="home">
  <div class="links">
    <AccountView :id='year'/>
    <CommentsView :year='year'/>
  </div>
</div>
</template>
<script>
import AccountView from "../components/AccountView.vue"
import CommentsView from "../components/CommentsView.vue"
export default {
  name: 'Account',
  components: {
     AccountView,
     CommentsView
  },
  computed: {
     year() {
      return this.$route.params.id;
    }
  },
}
</script>
<style scoped>
.home {}
.links {}
</style>
