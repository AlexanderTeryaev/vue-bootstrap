<template>
  <div>
    <HeaderNav />
    <HeaderBefore />
    <HeaderTop />
  </div>
</template>

<script>
import HeaderNav from './HeaderNav'
import HeaderBefore from './HeaderBefore'
import HeaderTop from './HeaderTop'
export default {
  name: 'Header',
  components: {
    HeaderNav,
    HeaderBefore,
    HeaderTop
  }
}
</script>
