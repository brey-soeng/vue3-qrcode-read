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
        <el-submenu index="2">
            <template #title>Daily worked</template>
            <el-menu-item index="2-1">
              <router-link to="/sort-table-js">
                 Sorttable
            </router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
               <router-link to="/qr-scanner"> Scanner</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
               <router-link to="/qr-upload"> upload QRCode </router-link>
            </el-menu-item>
            <el-menu-item index="2-4">
               <router-link to="/table-drag-drop"> Table Drag Drop </router-link>
            </el-menu-item>
            <el-menu-item index="2-5">
               <router-link to="/clipboard"> Cliboard</router-link>
            </el-menu-item>
            <!-- <el-submenu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-submenu> -->
          </el-submenu>
         <el-menu-item index="3">
          <router-link to="/about">
                   about
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
.el-menu-demo  .el-menu-item a {
  text-decoration: none;
}

</style>
