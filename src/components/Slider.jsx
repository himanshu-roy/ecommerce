import { useState } from "react"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../data"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX( ${props => props.slideIndex * -100 }vw);
`

const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #${props => props.bg};
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    align-items: center;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    const [ slideIndex, setSlideIndex ] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left")
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        else if(direction === "right")
            setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0);
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                { sliderItems.map(item => 
                    <Slide bg={ item.color } key={ item.id }>
                        <ImageContainer>
                            <Image bg={ item.color } src={ item.img }/>
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{ item.title }</Title>
                            <Desc>{ item.desc }</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>    
                )}
            </Wrapper>
            <Arrow direction = "right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
