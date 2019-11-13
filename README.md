# lariflix

Landing page, baseada na página principal do Youtube Music e Netflix.

A página pode ser do tema que o candidato preferir, devendo apenas seguir e a mesma estrutura visual e contendo os itens apresentados nos requisitos a seguir.

## Requisitos:

- [x] 1. Header com logo da aplicação, itens do menu e item de menu do usuário (avatar). O Header deve ter fundo transparente quando o scroll da página estiver no topo e alterar para um fundo opaco quando for realizado o scroll
- [x] 3. Um item principal em destaque
- [x] 4. Listagem dos itens organizados em Carrossel
- [x] 5. Footer contendo informações do desenvolvedor

### Perguntas/Respostas de Javascript

**1. Explique com suas palavras a diferença entre a utilização de var, const e let**

- **R:** a palavra reservada``var`` é utilizada para declaração de variáveis, porém esta utilização tem um problema de escopo:

````javascript
// ex:
function testeDeEscopo() {
	if (true) {
		var variavelDentroDoIf = 'variavelDentroDoIf';
	}

	console.log(variavelDentroDoIf); // Imprime 'variavelDentroDoIf'
}
````

- como podemos ver, mesmo sendo declarada dentro do escopo do if, a variável pode ser acessada fora do escopo em que foi criada.


- a palavra reservada ``let`` também é utilizada para declaração de variáveis, entretanto, esta não tem o mesmo problema de escopo da declaração utilizando ``var``.

````javascript
// ex:
function testeDeEscopo() {
	if (true) {
		let variavelDentroDoIf = 'variavelDentroDoIf';
	}

	console.log(variavelDentroDoIf); // ReferenceError: variavelDentroDoIf is not defined
}
````

- assim como ``let``, ``const`` também é utilizada para a declaração de variáveis e não tem o problema de escopo citado acima. A diferença entre ``let`` e ``const``, é que ``const`` é utilizada para a declaração de variáveis de valor fixo, ou, seja, se declararmos uma variável utilizando ``const`` e depois tentarmos alterar o valor da mesma, receberemos um typeError:
````javascript
// ex:
function testeDeEscopo() {
    const valorFixo = 'valorFixo';
    valorFixo = 'valorAlterado';
}
// TypeError: Assignment to constant variable.
````
---

**2. Assinale a(s) diferença(s) entre Funções normais e Arrow Functions**

 - [ ] Funções normais não guardam escopo  
 - [x] Funções normais guardam escopo  
 - [ ] Arrow function são mais rápidas  
 - [ ] Arrow function podem ser instanciadas  
 - [x] Arrow function não guardam escopo  

---

**3. qual o valor da variavél name após a execução da função?**

```javascript
 content = {
  name: "John",
  getName: function() {
    this.name = "James"
    return this.name
  }
}

userData = {
  name: "Luke",
  getName: content.getName
}
this.name = "Walter"
const name = userData.getName()

```
 - [ ] John
 - [ ] Luke
 - [x] James
 - [ ] Walter

---

**4. Qual o retorno da seguinte função**

```javascript
function Event(name, day) {
  this.date = day
  this.name = name

  this.getName = function() {
    return this.name
  }
  this.getDate = function() {
    return this.date
  }
}

const event = new Event("04/02/2019", "Event Test")

Event.prototype.getTitle = function() {
  return `The event ${this.name} will take place on ${this.date} `
}
event.getTitle()

```

 - [x] The event 04/02/2019 will take place on Event Test
 - [ ] The event undefined will take place on undefined
 - [ ] Uncaught TypeError
 - [ ] The event null will take place on null

---

**5. Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?**

- ``document.getElementById(id): `` obtém um elemento pelo id do mesmo;
- ``document.querySelector(selectors): `` obtém o primeiro elemento encontrado com base nos seletores informados no parâmetro;
-  a diferença entra ambas as formas é que a primeira obtém o elemento apenas pelo id do mesmo, já a segunda forma, podemos buscar pelos seletores CSS separados por vírgulas.
````javascript
// ex:
document.querySelector("div.classeExemplo");
````


---

**6. Como inserir um evento em determinado elemento?**

- **R:** Utilizando o método ``addEventListener``.
````javascript
// ex:
document.getElementById("idDoElemento").addEventListener("click", function() {});
````

---

**7. Como remover um evento em determinado elemento?**
- **R:** Utilizando o método ``removeEventListener``.
````javascript
// ex:
document.getElementById("idDoElemento").removeEventListener("click", function() {});
````
---

**8. Descreva com suas palavras o que é event bubbling?**

---

**9. Descreva qual a diferença nos métodos de declaração de objetos?**

```javascript
const object = {}
const object = new Object()
const object = Object.create()
```

---

**10. Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente ?**

---

**11. O que são Promises ? Como podemos declarar uma promise em javascript ?**

---

**12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?**

---

**13. Quando utilizar map, reduce ou filter ?**

---

**14. Qual o método do Array é mais indicado para remover elementos ?**

---

**15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;**

---

**16. Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage**

---

**17. Qual a melhor forma para definir um cookie utilizando javascript ?**

---

**18. Quais os tipos de Loops existentes em javascript ?**

---

**19. Descreva com suas palavras o que é hoisting ?**

---

**20. Em um ambiente do browser. Qual o valor do this utilizando "use-strict";**

 - [ ] window
 - [ ] global
 - [ ] undefined
 - [ ] null

---

**21. Quando eu posso utilizar o "Use-strict" no meu código ?**

 - [x] No ínicio do meu código
 - [ ] No inicio do block if
 - [ ] No inicio de um loop
 - [x] no inicio de uma função
