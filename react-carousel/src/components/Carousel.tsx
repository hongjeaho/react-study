import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled/macro'
import {RiArrowDropLeftLine, RiArrowDropRightLine} from 'react-icons/ri'
interface Props {

}

const Container = styled.div`
  position: relative;
`
const ArrowButton = styled.button<{pos: 'left' | 'right'}>`
  position: absolute;
  top: 40%;
  z-index: 1;
  padding: 8px 12px;
  font-size: 48px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  ${({pos}) => pos === 'left' ? `left: 0`: `right: 0`}  
`

const CarouselList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  width: 100%;
  max-height: 690px;
`

const CarouselItem = styled.li<{activeIndex:number}>`
  width: 100%;
  flex: 1 0 100%;
  transform: translate(-${({activeIndex})=> activeIndex * 100}%);
  transition: 250ms ease;
`

const NavItem = styled.li`
  display: inline-block;
`
const NavButton = styled.button<{isActive:boolean}>`
  width: 4px;
  height: 4px;
  background-color: #000;
  opacity: ${({isActive}) => isActive ? 0.3 : 0.1};
`

const Nav = styled.ul`
  ${NavItem}  ${NavButton} {
    margin-left: 4px;
  }

  list-style: none;
  padding: 0;
  width: 460px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  
`

const Carousel: React.FC<Props> = () => {
  const banner = [
    {
        "title": "타임어택",
        "imagePath": "https://image-dev.pediz.co.kr/exhibition/2022/4/28/dac20097-ad87-46a2-ad45-f95be157d779.jpg",
    },
    {
        "title": "강아지고양이 메인배너(3)_적립금 이관 및 추가 포인트 지급",
        "imagePath": "https://image-dev.pediz.co.kr/exhibition/2022/4/28/825f58a2-b8ea-4854-afd3-625aab99fd00.jpg",
    },
    {
        "title": "강아지고양이 메인배너(2)_웰컴쿠폰북",
        "imagePath": "https://image-dev.pediz.co.kr/exhibition/2022/4/28/00aa5d3f-9a61-4e60-a55e-50ee34279dc3.jpg",
    },
    {
        
        "title": "강아지고양이 메인배너(1)_도서산간 추가 배송비 무료 안내",
        "imagePath": "https://image-dev.pediz.co.kr/exhibition/2022/4/28/d7fce7a1-1d67-4c47-aec7-ae43b3a0d59e.jpg",
    },
    {
        
        "title": "강아지고양이 메인배너(4)_반려동물 등록",
        "imagePath": "https://image-dev.pediz.co.kr/exhibition/2022/3/29/f097bb2f-e968-4ae2-91a2-00fbb893d95b.png",
    },
    {
        "title": "강아지 메인배너(5)_촉촉 파인스킨 출시",
        "imagePath": "https://image-dev.pediz.co.kr/exhibition/2022/4/28/6260f301-9da0-4a93-a2e9-8af4cb37b41c.jpg",
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [running, setRunning] = useState(true)

  const doNext = () => setActiveIndex(pre => (pre + 1) % banner.length)
  const doPre = () => setActiveIndex(pre => (pre - 1 + banner.length) % banner.length)
  const doMouseEnter = () => setRunning(false)
  const doMouseLave = () => setRunning(true)

  useEffect(() => {
    let interval:NodeJS.Timeout
    
    if(running) {
      interval = setInterval(() => doNext() , 3000)
    }
    
    return () => {
      clearInterval(interval)
    }

  }, [running])


  return (
    <>
        <Container onMouseEnter={doMouseEnter} onMouseLeave={doMouseLave}>
          <ArrowButton pos='left' onClick={doPre}>
            <RiArrowDropLeftLine />
          </ArrowButton>
          <CarouselList>
            {banner.map((item, index) => <CarouselItem activeIndex={activeIndex} key={index}>
              <img src={item.imagePath} alt={item.title}  />
            </CarouselItem>)}
          </CarouselList>
          <ArrowButton pos='right' onClick={doNext}>
            <RiArrowDropRightLine />
          </ArrowButton>
          <Nav>
            {banner.map((_, index) => (
            <NavItem key={index}>
              <NavButton isActive={activeIndex === index} onClick={() => setActiveIndex(index)}/>
            </NavItem>))}
          </Nav>
        </Container>
    </>
  )
}

export default Carousel