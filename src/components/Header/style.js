import styled from "styled-components"


export const BgHeader = styled.header`
    background: white;
    min-height: 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 10px #f5f5f5;

    @media (max-width: 768px){
        justify-content: space-evenly;
    }
    @media (max-width: 425px){
        max-height: 100%;
        align-items: center;
    }
`
export const Logo = styled.div`
    margin-left: 10%;
    img{
        max-width: 60px;
        max-height: 60px;
        cursor: pointer;
    }
 `
export const SearchMenu = styled.div`
    display: flex;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 10%;
    .input-search{
        display: flex;
        align-items: center;
        border: 1px solid #A9A9A9;
        input{
            min-width: 250px;
            min-height: 35px;
            padding-left: 1rem;
            outline: none;
            border: none;
            font-weight: 400;
            @media (max-width:425px){
                min-width: 150px;
            }
        }
        img{
            max-width: 20px;
            max-height: 20px;
            margin-right: 1rem;
        }
    }
    .selector-menu{
        button{
            border: none;
            background: transparent;
            img{
                max-width: 25px;
                max-height: 25px;
            }
            &:hover{
                cursor: pointer;
            }
        }
    }
`