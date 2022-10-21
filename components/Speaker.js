import {useWindowDimensions} from "./WindowDim";

export function Speaker() {

    const dim = useWindowDimensions();

    if (dim.width > 700) {
        return (
            <div scene="https://draft.spline.design/D2Hg1SGkYE6O77C1/scene.spline"/>
        )
    }
    return (
        <div scene="https://draft.spline.design/A37b-vI1tdqb7N21/scene.spline" />
    )

}
