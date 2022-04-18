import {useWindowDimensions} from "./WindowDim";
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

export function Speaker() {

    const dim = useWindowDimensions();

    if (dim.width > 700) {
        return (
            <Spline scene="https://draft.spline.design/D2Hg1SGkYE6O77C1/scene.spline"/>
        )
    }
    return (
        <Spline scene="https://draft.spline.design/A37b-vI1tdqb7N21/scene.spline" />
    )

}
