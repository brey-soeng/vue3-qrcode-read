<template>
 <div class="qr-catpure">
     <div>
         <p class="decode-result">Last result: <b>{{ result }}</b></p>
     </div>
      <qrcode @decode="onDecode" />
 </div>
</template>
<script>
import { QrcodeCapture} from 'vue3-qrcode-reader'
export default {
    name:'QrcodeCapture',
    components:{qrcode : QrcodeCapture },
    data() {
        return {
            result: ''
        }
    },
    methods: {
        onDecode(decodeString) {
            this.result = decodeString
        }
    }
}
</script>