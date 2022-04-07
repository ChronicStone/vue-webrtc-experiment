import { onMounted, ref } from "vue"
import { useIntervalFn, useDevicesList, usePermission } from '@vueuse/core'

export const useIntervalCapture = (interval = 1000) => {
    const cameraUnavailable = ref(false)
    const cameraAccess = usePermission('camera')
    const cameraStream = ref(null)
    const photos = ref([])

    console.log({ navigator })

    onMounted(async () => {
        try {
            cameraStream.value = await navigator.mediaDevices.getUserMedia({ video: true })
        } catch(err) {
            console.log('ERROR CAM', err)
            cameraUnavailable.value = true
        }
    })



    const { pause, resume, isActive } = useIntervalFn(() => {
        if(!cameraStream.value) return
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        const video = document.querySelector('video')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        context.drawImage(video, 0, 0, canvas.width, canvas.height)
        photos.value.push(canvas.toDataURL('image/jpeg'))
    },  interval, { immediate: false })

    return {
        cameraUnavailable,
        cameraStream,
        cameraAccess,
        photos,
        pause, 
        resume, 
        isActive 
    }
}

function TakePhotoFromUserDevice() {

}