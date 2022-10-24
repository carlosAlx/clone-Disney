import { List__menu, Menu } from "./styles";


export function Footer() {
    return(
        <footer>
            <div>
                <img  className="logo" src="./img/logo.png" alt="" />
                <List__menu>
                    <Menu>Português</Menu>
                    <Menu>Termos e Condições de Uso</Menu>
                    <Menu>Política de privacidade</Menu>
                    <Menu>Proteção de Dados no Brasil</Menu>
                    <Menu>Anúncios personaMenuzados</Menu>
                    <Menu>Dispositivos compatíveis</Menu>
                    <Menu>Ajuda</Menu>                  
                </List__menu>
                <a href="">Sobre o Disney+</a>
                <p>® 2022 Disney, Disney+ e The Walt Disney Company. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</p>
                <p>Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP – CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20</p>
            </div>

        </footer>  
    )
}