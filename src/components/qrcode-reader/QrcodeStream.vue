<template>
    <div class="qrcode-stream">
        <div> result: {{ data }}</div>
        <qrcodestream @decode="onDecode" :track="paintOutline"/>
    </div>
</template>
<script>
import { QrcodeStream } from 'vue3-qrcode-reader'
export default {
    name:'QrcodeStream',
    components: {
        qrcodestream: QrcodeStream
    },
    data() {
        return {
            data:''
        }
    },
    methods: {
        onDecode(decodeString) {
            this.data = decodeString
        },
        paintOutline(detectCode, context) {

            const points = []

            for(var code in detectCode) {
                switch(code) {
                    case "topLeftCorner":
                        points[0] = detectCode[code]
                        break;
                    case "topRightCorner":
                        points[1] = detectCode[code]
                        break;
                    case "bottomRightCorner":
                        points[2] = detectCode[code]
                        break;
                    case "bottomLeftCorner":
                        points[3] = detectCode[code]
                        break;
                    default:
                        break;
                }
            }
        context.lineWidth = 2
         context.strokeStyle = 'green'
         context.beginPath()
         context.moveTo(points[0].x, points[0].y)

         for(const {x, y} of points) {
             context.lineTo(x,y)
         }

         context.lineTo(points[0].x, points[0].y)
         context.closePath()
         context.stroke()
        }
    }
}
</script>
<style  scoped>
.qrcode-stream{
    width: 300px;
    height: 300px;
    text-align: center;
    margin: auto;
    /* position: absolute;
    top: 10%;
    left: 50%; */
}
</style>