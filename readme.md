# Chat Bot


## Funcionalidades

#### Ideia 1 - FLuxo 1 (visao do chat)
[
    FuiInstalado:{
        descri:{
            depois de 10 segs eu vou Comprimentar o cara q me adicionou.
            vou me apresentar dizendo q sou OptmusTruck seu robo pessoal e dizer as coisas q eu posso fazer por ele 
        }
        euFalo:{
            "Ola (nome do cara) eu sou OptmusTruk sou robo pessoal! [emoticon]"
            "Eu estou aqui pra facilitar sua vida e te ajudar em varias coisas, basta vc abrir nossa conversa e perguntar algo. Vamos ver um exemplo?"
            "pergunte me por exemplo: como ta o clima ? "
        }
        eleRespondeo:{
            Aqui varias coisas podem ocorrer como o jeito q ele vai responder as resposta em si mas no geral ele vai devolver a pergunta ate com algumas simples variações facilmente tratadas "como ta o clima?" a principio vou me basear   nesse comportamento padrao. 
            euRetorno:{
                "Voce qer saber o clima de algum estado especifico ou aqui da regiao onde vc esta mesmo?"
            }
            eleRetorna
        }
            
    }
]


   -> Ele respondeo (
            Aqui varias coisas podem ocorrer como o jeito q ele vai responder as resposta em si mas no geral ele vai devolver a pergunta ate com algumas simples variações facilmente tratadas "como ta o clima?" a principio vou me basear nesse comportamento padrao.
        ) -> eu vou perguntar 
        ex:[
            
        ]-> ele responde ("o nome do estado tipo 'Sao paulo ou SP' ")=>{
            eu retorno=[
                "A previsao para os prosximos dias em Sao paulo é :"
                "hj -> 25g chuva forte"
                "amanha -> 27g sol e chuva"
                "deois de amanha -> 26g sol"
            ]
        } ou  (ele responde "de outro lugar + variações")=>{
            eu retorno=[
                lista-"UF"
                "qual estado vc quer saber como ta o clima?"
            ]-> ele responde ("o nome do estado tipo 'Sao paulo ou SP' ")=>{
                eu retorno=[
                    "A previsao para os prosximos dias em Sao paulo é :"
                    "hj -> 25g chuva forte"
                    "amanha -> 27g sol e chuva"
                    "deois de amanha -> 26g sol"
                ]
            }

    apos isso eu digo = "Viu como é facil ? " e listo ele algumas de minhas funcionalidades
    ex:[
        "Viu como é Facil ?"
        "Mas devo confessar q eu ainda nao estou na minha melhor forma depois do ataque dos decepticons, /n
        entao estou com minhas funcionalidades reduzidas. Vou alista abaixo algumas delas"
        listaResumidaFN-OT
        "essas sao algumas de minhas principais funcoes para saber todas minhas funcionalidades digite funcionalidades"
    ] ->ele responde ("funcionalidades"){
        eu retorno[
            listaCompletaFN-OT
        ]
    } 
    

}

listaCompletaFN-OT = {
    fn:{
        nome: Feed de noticias das estradas (verificar fontes de conteudos)
        description:{
            Voce pode ativar essa função dizendo pra mim q quer ativar o feed de news simplesmente digitando "at fedd" para ativar e "dt feed" para ativar
            por padrao ele vai te mandar noticias de 1 em 1 hora. voce pode compartilhar alguma noticia q gostou em seus grupo simples me pedindo "manda pros grupos truckbrasil, caminhoesBR, familia1, amigos da estrada [nome dos grupos separdos por virgula]"
            lembrando q vc acumula pontos sempre q compartilha uma noticia com seus amigos =D
        }
        function:{
            busca na nossa programação a lista de feeds e exibe a proxima do index
            codigos:{
                "at feed" - ativa o feed com comportamento padrao de 1 hora
                "at feed (tempo em Horas))" - ativa o feed com padrao de tempo determinado
                "dt feed" - desativa o feed
                facilitadores:{
                    "ativar feed"
                    "ativar noticias"
                    "ver noticias"
                    "ver feed"
                    ...
                }
            }
        }
       
    }
    fn:{
        nome:Clima/Tempo meteorologia
        description:{
           Com seu comando eu consigo buscar o clima do seu local ou de algum estado especifico para ate os proximos 5 dias mas vc pode escolher só de hj ou a qtd q quiser ate no maximo 5
           vc pode ja me dizer direto exemplo "ver o clima de (nome do estado)" ou "ver o clima da minha regiao" ou "ver o clima de outro lugar" - nesse caso eu te retorno a lista de todos estados brasileiros para vc escolher
        }
        function:{
            apos receber o local da pesquisa pesquiso a localização em alguma api e retorno para ele
            codigos:{
                "clima" - retorna o clima da sua localização por padrao para os proximos dias
                "clima [dias a partir da data atual + 5]" - retonar o clima da regiao atual o numero de dias indicado
                "clima [uf]" - retorna o clima do estado indicado
                "clima [uf] [dias a partir da data atual + 5]" - retonar o clima do estado indicado o numero de dias indicado
                facilitadores:{
                    "ver clima"
                    "ver clima de outro lugar"
                    "clima amanha"
                    "clima hj"
                    ...
                }
            }
        }
    }
    fn:{
        nome: Pré consulta online
        description:{
            eu posso conectar vc com algum medico ou enfermeiro para poder te fazer uma pre avaliação e te passar um parecer concelhos e dicas
            basta vc me chamar dizendo "quero uma consulta rapida"
            eu lhe farei uma serie de perguntas e depois enviarei suas resposta para um de nossos medicos cadastrados 
            que avaliaram suas resposta e te aconcelharam lembrando q isso nao serve como uma consulta oficial 
            em muitos dos casos o melhor a se fazer é direto em um medico 
            mas isso ja pode te ajudar entender melhor qualquer coisa q vc esteja sentindo
        }
        function:{
            pegar e gravar respostas da avaliação do usuario e conectar com algum profissional da saude
            codigos:{
                "quero me consultar" - abre etapa de qesionario
                facilitadores:{
                    "consulta"
                    "consultar"
                    "medico"
                    ...
                }
            }
        }
    }
    fn:{
        nome: Memoria virtual
        description:{
            eu posso te ajudar a nao se esqecer das coisas como lembrar seu horario para tomar algum remedio 
            ou se ja dirigiu por uma quantidade de horas q vc pre determinou e agora vai descansar 
            posso te lembrar de fazer exercicios 
            ou ate coisas como nome de alguem ou numero de telefone
        }
        function:{
            gravar informações onde o usuario possa resgatalas depois
            codigos:{
                "lembra [oq ele qer lembrar] [informação]" - guarda na memoria algum lembrete ex: lembra rua do joao rua ari barbosa 56
                facilitadores:{
                    lembra [infomalçao direta] - lembra ficar em casa
                }
            }
        }
    }
}



Depois da mentoria de hoje pensamos em algumas coisa 

Chatbot individual funções - 
Perguntas e respostas;
Dicas de exercícios.
Tudo isso vai resultar em pontos dentro do app 

Assim que ele fizer o cadastro no app (vai ter lá o campo para ele colocar o número de celular dele) com isso vamos mandar o bot no wpp dele.