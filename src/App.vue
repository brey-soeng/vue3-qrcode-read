<template>
  <div class="common-layout">
  <el-container>
    <el-header class="qr-header">
     <el-menu 
     :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#606266"
      active-text-color="#ffd04b"
       >
         <el-menu-item index="1">
           <router-link to="/">
              Home
          </router-link>
         </el-menu-item>
         <el-menu-item index="2">
            <router-link to="/about">
              about
          </router-link>
         </el-menu-item>
         <el-menu-item index="3">
            <router-link to="/qr-scanner">
              Scanner
          </router-link>
         </el-menu-item>
         <el-menu-item index="4">
            <router-link to="/qr-upload">
              upload QRCode
          </router-link>
         </el-menu-item>
     </el-menu>
    </el-header>
    <el-main>
       <router-view/>
    </el-main>
  </el-container>
  </div>
 
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: 1
    }
  },
  methods: {
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height:auto;
}
.qr-header {
   background: #fff;
   border-bottom: 1px solid #e4e4e4;
}
ul.qr-menu {
  padding:0px;
  margin:0px;
  list-style-type: none;
}
ul.qr-menu li {
  padding:15px 0px;
  margin:0px 15px 0px 0px;
  float: left;
  text-align: center;
 
}
ul.qr-menu li a {
  text-decoration: none;
}
</style>
