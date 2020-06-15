# Chapa Bot
## Descrição 
O Chapa é um chatbot, criado em homenagem aos antigos chapas dos caminhoneiros que os orientavam, quando estes chegavam em um destino desconhecido. 

O Chapa após adicionado como contato no WhatsApp, começa a cumprir com sua missão de manter os caminhoneiros mais informados sobre acontecimentos que os impactam diretamente. Além disso, eletem como importante tarefa, recrutar novos membros para a comunidade, chamada Truck Care!


## Funcionalidades
1. "clima" para receber a meteorologia dos proximos 3 dias 
2. "news" para receber de tempo em tempo noticias sobre as estradas do brasil
3. "gasolina" indica postos de gasolina mais proximos de vc
4. "ponto de apoio" indica os pontos de apoio mais proximos a vc e suas avaliações
5. "farmacia"  indica farmacia mais proximos de vc
6. "hospital"  indica hospital mais proximos de vc
7. "policia"   indica policia mais proximos de vc
8. "ok" encerra uma conversa e coloca o Chapa em espera
9. "ajuda" lista os comandos para o usuario

_Todas essas funcionalidades foram arquitetadas nesse codigo de maneira a aberta para facil implementação delas. De fato oq vc ira encontrar aqui é a estrutura do fluxo do bot pronta para ser implementada essas funçoes e mais outras como interação com grupos, compartilhamento de msg, etc_


## Como funciona para o usuario? 
Apos um usuario baixar o aplicativo ele fará seu cadastro e sera indicado a comprimentar o Chapa bot.
Nessa etapa ele passara por um pequeno tutorial para lhe apresentar as funcionalidades. 

Caso o usuario adicione o Chapa sem nem se quer conhecer nossa plataforma TruckCare, ainda assim o Chapa lhe ajudará porem sempre vai lembra-lo de baixar o app e fazer seu cadastro para ter um melhor controle de sua rotina nas estradas e ainda ganhar pontos para serem trocados.

# Dev
## Como funciona?
O bot ficará conectado a aparelho ativo no whatsapp com um numero propio para ele. Atualmente ele esta ativo no numero *+55 79 9649-0554*. Adicionando esse contato em seu telefone vc já pode comprimentar o Chapa Bot e ver sua estrutura funcionando. Infelizmente por falta de tempo abio para conclusao oq por se só é bem divertido =D! Todas sua funcionalidades estao no ponto de implementação, que seria as requisições de api e a devolução dos dados.


## Como rodar no seu computador esse projeto em forma de teste
Apos clonar o projeto rodar em seu terminal dentro da pasta do projeto  rode `npm start`. 
O chapa bot sera inicializado e pedira para vc sincronizar uma conta de whatsapp com **QRCode**.
Espere a autentificação e pronto o Chapa Bot esta ativo nesse numero.

## Tecnologias usadas
Gostaria de ter me aprofundado na twilio mas pela correria eu usei uma q ja conhecia 

`@open-wa/wa-automate` versão `^1.9.69`

E javascript.
o backend sendo feito em php a principio.



# Obrigado
##  Equipe Shawee, meu time, todos jurados, mentores e participantes

Rafael Costa Stramp - Marcelo Massao
