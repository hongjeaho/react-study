
import styled from '@emotion/styled/macro';
import React, {  useEffect, useState } from 'react';
import SkeletonComponent from './components/SkeletonComponent';

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 15px 0px;
  border-radius: 4px;
`

const ImageWrapper = styled.div`
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
`

const Item: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="https://image-dev.pediz.co.kr/goods/2022/3/18/bc22c5ac-0461-4c4e-91fe-dc78d61fae9c.jpg-1000"/>
      </ImageWrapper>
      <Info>
        <Title>TEST TITLE</Title>
        <Description>TEST DESCRIPTION</Description>
      </Info>
    </Container>
  )
}


const Placeholder: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <SkeletonComponent width={214} height={176} />
      </ImageWrapper>
      <Info>
        <SkeletonComponent width={145} height={29} />
        <div style={{height: '8px'}}></div>
        <SkeletonComponent width={171} height={70} />
      </Info>
    </Container>
  )
}

function App() {
  const [lodding, setLodding]  = useState(false)

  useEffect(() => {
    setTimeout(() => {setLodding(true)}, 3000)
  }, [])

  return (
      <Base>
      {
        lodding ? Array.from({length:25}).map((_, index) => <Item key={index}/>)
          : Array.from({length:25}).map((_, index) => <Placeholder key={index}/>)
      }
      </Base>
  )
}

export default App;