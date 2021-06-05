<template>
    <div class="clipboard">
         <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
        <el-button @click="doCopy" type="primary" icon="el-icon-document">
          copy
        </el-button>
    </div>
</template>

<script>

// import clip from '@/utils/clipboard'
import clipboard from './js/index'
 import { copyText } from 'vue3-clipboard'
export default {
    name:'Clipbaord',
     directives: {
        clipboard
  },
    data() {
        return {
            inputData : "Hello world"
        }
    },
    methods: {
        doCopy(){
            copyText(this.inputData,undefined,(error,event) => {
                if(error) {
                    this.$message({
                        message:'Copy failed, Please try again!',
                        type:'error'
                    })
                }else {
                    this.$message({
                        message:'Copy successfully !',
                        type:'success',
                        duration:1500
                    })
                    console.log(event)
                }
            })
        }
    }
}
</script>