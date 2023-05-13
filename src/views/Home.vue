<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>Welcome to Rfly-create</span>
      </div>
      <div><el-button @click="getDataList">Click me</el-button></div>
    </el-card>
  </div>
</template>
<script>
import HomeApi from "@/api/modules/HomeApi";
export default {
  name: "Home",
  components: {},
  computed: {},
  data: () => ({}),
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {}, //when keep-alive
  deactivated() {}, //when keep-alive
  beforeDestroy() {},
  destroyed() {},
  methods: {
    getDataList(){
      HomeApi.getDataList().then(response => {
        // 处理请求成功的返回结果
      }).catch(error => {
        // 处理请求失败的错误信息
      })
    }
  },
};
</script>
