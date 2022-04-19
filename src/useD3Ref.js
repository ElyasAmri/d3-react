import {useEffect, useRef} from 'react'
import {select} from 'd3'

const useD3Ref = (renderFn, deps = []) => {
    const ref = useRef(null)
    
    useEffect(() => {
        // using ref! will produce a type error, so this is
        // an alternative until this issue is fixed with typescript
        if (ref) {
            renderFn(select(ref))
        }
    }, deps)

    return ref
}

module.exports = useD3Ref