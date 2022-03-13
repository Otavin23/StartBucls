import styled from "styled-components"


export const BgHeader = styled.header`
    background: white;
    min-height: 4rem;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0px 4px 10px #F8F8FF;
`
export const Logo = styled.div`
    margin-left: 10%;
    img{
        max-width: 60px;
        max-height: 60px;
    }
 `
export const SearchMenu = styled.div`
    display: flex;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
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
    
            &:focus{
                border: 2px solid #A9A9A9;
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