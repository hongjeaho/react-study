import styled from '@emotion/styled/macro'
import { css, keyframes } from '@emotion/react';

interface Props {
    width?:number;
    height?:number;
    circle?:boolean;
    rounded?:boolean;
    animation?:boolean;
    count?:number;
    unit?:string;
    color?:string;
}

const pluseKeyframe = keyframes`
    0%{
        opacity: 1;
    }

    50%{
        opacity: 0.4;
    }

    100%{
        opacity: 1;
    }
`

const pluseAnimation = css`
    animation: ${pluseKeyframe} 1.5s ease-in-out infinite;
`

const Base = styled.span<Props>`
    ${({width, height}) => (width || height) && `display: block`};
    ${({color}) => color && `background-color: ${color}`};
    ${({circle}) => circle && `border-radius: 50%`};
    ${({rounded}) => rounded && `border-radius: 8px`};
    ${({animation}) => animation && pluseAnimation};
    width : ${({width}) => width && `${width}px`};
    height : ${({height}) => height && `${height}px`};
`
const Content = styled.span`
    opacity: 0;
`

const SkeletonComponent: React.FC<Props> = ({width = 80, height = 120, color='#F4F4F4', animation = true, rounded=false, circle=false}) => {
  return (
    <Base color={color} width={width} height={height} animation={animation} rounded={rounded} circle={circle}>
        <Content />
    </Base>
  )
}

export default SkeletonComponent