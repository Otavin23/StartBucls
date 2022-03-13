import React from "react"
import * as S from './style'
import Logo from "../../assets/logo.png"
import Menu from "../../assets/menu.png"
import Lupa from "../../assets/loupe.png"

const Header = ()=>{
    return (
        <S.BgHeader>
            <S.Logo>
                <img src={Logo} alt="Icone-StarBucks" />
            </S.Logo>
            <S.SearchMenu>
                <div className="input-search">
                    <input 
                        type="text"
                        placeholder="Search"
                    />
                    <img src={Lupa} alt="lupa"/>
                </div>
                <div className="selector-menu">
                    <button>
                        <img src={Menu} alt="menu-bar"/>
                    </button>
                </div>
            </S.SearchMenu>
        </S.BgHeader>
    )
}
export default Header 