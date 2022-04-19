import {useEffect, useRef} from 'react'
import {select} from 'd3'
import type {DependencyList} from 'react'

type DOMElement = ElementTagNameMap

const useD3Ref = <K extends keyof DOMElement>(renderFn: (element: DOMElement[K]) => void, deps: DependencyList = []) => {
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

export default useD3Ref