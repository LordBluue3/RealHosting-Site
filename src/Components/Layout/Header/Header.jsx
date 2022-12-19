import './Header.css'
import hamburguer from './../../../Img/hamburguer.svg'
import logo from './../../../Img/logo.svg'
import user from './../../../Img/user.svg'
import user2 from './../../../Img/user2.svg'
import discord from './../../../Img/discord.svg'
import termos from './../../../Img/termos.svg'
import Paragraph from '../../Paragraph/Paragraph'

export const Header = () => {
    return (
        <header>
            <div className="header_disclosure">
                <div className='container_warns'>
                    <div>
                        <img src={discord} alt="Icone do discord" />
                        <Paragraph color="white" size={14} text="Atendimento via Discord RealHosting"/>     
                    </div>
                    <div>
                        <img src={termos} alt="Termos e Políticas" />
                        <Paragraph color="white" size={14} text="Termos e Políticas"/>
                    </div>
                </div>
            </div>
            <nav>
                <div className='container_nav'>
                    <div>
                        <img src={hamburguer} alt="menu hamburguer responsivo" className='hamburguer' />
                        <img src={logo} alt="logo tipo da Real Hosting" className='logo' />
                        <Paragraph color="orange" size={20} text="Real Hosting"/>
                    </div>
                    <ul>
                        <li>Inicio</li>
                        <li>Hospedagem</li>
                        <li>Servidores</li>
                        <li>Suporte</li>
                    </ul>
                    <div className='container_nav-desk'>
                        <Paragraph color="orange" size={14} text="Registre-se"/>
                        <div className='container_button'>
                        <img src={user2} alt="área do cliente" className='icon_user2' />
                        <Paragraph color="white" size={14} text="Minha conta"/>
                        </div>
                    </div>
                    <img src={user} alt="área do cliente" className='icon_user' />
                </div>
            </nav>
        </header>
    )
}

export default Header