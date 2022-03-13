import React from "react"
import * as S from "./style"
import c1 from "../../assets/c1.jpg"
import c2 from "../../assets/c2.jpg"
import c3 from "../../assets/c3.jpg"
import bg from "../../assets/bg.jpg"

const Menu = ()=>{
    return(
        <S.MainBG image={bg}>
            <S.Container>
                <div className="information">
                    <h1>Starbucks Happy Hour</h1>
                    <p>We'll meet you in your inbox Drink deals are on their way.</p>
                    <S.PhotoProduct>        
                        <div>
                            <img src={c1} alt="shakePhoto"/>
                        </div>
                        <div>
                            <img src={c2} alt="shakePhoto" />
                        </div>
                        <div>
                            <img src={c3} alt="shakePhoto" />
                        </div>
                    </S.PhotoProduct>
                </div>
            </S.Container>
        </S.MainBG>
    )
}
export default Menu