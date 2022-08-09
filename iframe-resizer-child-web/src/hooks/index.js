import { useEffect } from "react"

const useScript = (url,
                   // integrity,
                   async = true, crossOrigin = "anonymous") => {
    useEffect(() => {
        const script = document.createElement("script")

        script.src = url

        script.async = async

        // if (integrity) {
        //     script.integrity = integrity
        // }

        script.crossOrigin = crossOrigin

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [url, async, crossOrigin,
        // integrity
    ])
}

export default useScript
