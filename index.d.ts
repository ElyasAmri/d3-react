import type {DependencyList, RefObject} from 'react'
import type {Selection} from 'd3'

declare module 'd3-react' {
    type DOMElement = ElementTagNameMap
    const useD3Ref: <K extends keyof DOMElement>(
        render: (element: Selection<K, null, undefined, null>) => void,
        deps: DependencyList) => RefObject<DOMElement[K]>

    export const useD3Ref
}