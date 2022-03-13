import styled from "styled-components"

export const MainBG = styled.main`
  font-family: 'Poppins', sans-serif;
  min-height: 91.1vh;
  display: flex;
    justify-content: space-around;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.image});
   
    @media (max-width: 1024px){
        overflow: hidden;
        background-size: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    @media (max-width: 768px){
        max-width: 100%;
    }
   `
export const Container = styled.div`
    display: flex;
    @media (max-width: 1024px){
        min-width: 100%;
        display: flex;
        margin: 0px 0rem 0px 4rem;
    }
    .information{
        max-width: 70%;
        max-height: 100%;
        h1{
            font-size: 5rem;
            @media (max-width: 1024px){
                font-size: 3rem;
                max-width: 200px;
            }
            @media (max-width: 425px){
                font-size: 1.5rem;
            }
        }
        p{
            margin-top: 0.5rem;
            color:#A9A9A9;
            font-size: 13px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
    
`
export const PhotoProduct = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    @media (max-width: 425px){
        margin-top: 0;

    }
    div{
        border: 6px solid #005000;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover{
            transform: scale(1.2);
            transition: all 0.5s ease;
        }
        img{
            max-width: 150px;
            border-radius: 50%;
            background: transparent;
            @media (max-width: 425px){
                max-width: 70px;
            }
            &:hover{
                opacity: 0.8;
            }
        }
    }
`