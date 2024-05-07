# S206Lab1
Repositório do laboratório de Qualidade de Software 


## Como executar o projeto

1. Clone o repo na sua máquina;

2. Instalar o Cypress:

```
npm install cypress
```
3. Para abrir o Cypress, execute um dos comandos a seguir:

```
./node_modules/.bin/cypress open
```

## Relatório de testes 

- Instale a dependência pelo comando:

```
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

- Para rodar os testes:

```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```