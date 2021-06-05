import { createApp } from 'vue'

import Clipboard from 'clipboard'

const app = createApp({})


function clipboardSuccess() {
    app.config.globalProperties.onClick = () => {
        this.$message({
            message: 'Copy successfully',
            type:'success'
        })
    }
}

function clipboardError() {
    app.config.globalProperties.$message({
        message: 'Copy Failed',
        type:'error'
    })
}

export default function handleClipboard(text, event) {
    const clipboard = new Clipboard(event.target, {
        text:() => text
    })

    clipboard.on("success", () => {
        clipboardSuccess()
        clipboard.destroy
    })


    clipboard.on("error", () => {
        clipboardError()
        clipboard.destroy()
    })

    clipboard.onClick(event)
}