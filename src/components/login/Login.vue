<template>
  <el-row
    type="flex"
    justify="center"
    align="middle"
  >
    <el-col :span='8'>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <!-- 登录部分 -->
        <el-form-item>
          <el-button
            type='danger'
            @click="startLogin"
          >登录</el-button>
          <el-button @click="resetForm">重置</el-button>

        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'

      },
      rules: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    startLogin () {
      // 校验
      this.$refs.loginForm.validate((valid) => {
        if (!valid) {
          this.$message({

            message: '校验错误',
            type: 'error',
            duration: 800
          })
          return
        }
        axios.post('http://localhost:8888/api/private/v1/login', this.loginForm).then(res => {
          console.log(res)
          if (res.data.meta.status === 200) {
            localStorage.setItem('token', res.data.data.token)
            this.$message({

              message: '登录成功',
              type: 'success',
              duration: 800
            })
            this.$router.push('/home')
          } else {
            this.$message({

              message: '登录失败',
              type: 'error',
              duration: 800
            })
          }
        })
      })
    },
    resetForm () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style scoped>
.el-row {
  height: 100%;
  background-color: #2d434c;
}
.el-form {
  background: #fff;
  padding: 20px 30px;
  border-radius: 15px;
}
</style>
