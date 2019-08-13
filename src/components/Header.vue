<template>
  <div>
    <div class="head-nav">
      <el-row type="flex"
              class="row-bg"
              justify="end">
        <el-col>
          客服与投诉热线：95533 |
          <el-link type="primary"
                   :underline="false">建行首页</el-link>
          <el-link type="primary"
                   :underline="false">建行集团</el-link>
          <el-link type="primary"
                   :underline="false">网点及ATM</el-link>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row type="flex"
              class="row-bg head-title"
              justify="space-around">
        <el-col :span="4"></el-col>
        <el-col :span="4">
          <el-image :src=logoUrl></el-image>
        </el-col>
        <el-col :span="6">
          <el-button @click="jumpIndex"
                     type="primary"
                     plain>首页</el-button>
          <el-button type="primary"
                     @click="jumpProductCenter"
                     plain>产品中心</el-button>
          <el-button type="primary"
                     @click="jumpHelpCenter"
                     plain>帮助中心</el-button>
        </el-col>
        <el-col :span="4"></el-col>
        <el-col :span="4">
          <el-link type="primary"
                   @click="jumpRegister"
                   :underline="false">注册</el-link>
          <el-link type="primary"
                   @click="jumpLogin"
                   :underline="false">登录</el-link>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      logoUrl: require('../../public/img/logo.png')
    }
  },
  methods: {
    jumpIndex: function () {
      this.$router.push({ path: '/' })
    },
    jumpLogin: function () {
      this.$router.push({ path: '/login' })
    },
    jumpRegister: function () {
      this.$router.push({ path: '/register' })
    },
    jumpHelpCenter: function () {
      this.$router.push({ path: '/helpCenter' })
    },
    jumpProductCenter: function () {
      this.$router.push({ path: '/productCenter' })
    }
  }
}

</script>

<style>
.head-nav {
  display: flex;
  justify-content: flex-end;
  padding-right: 220px;
  background-color: #0066b3;
  color: #1dd9e2;
  height: 50px;
  line-height: 50px;
}
.head-title {
  height: 80px;
  line-height: 80px;
}
.el-image__inner {
  vertical-align: middle;
}
</style>
