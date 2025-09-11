/*   
1-  Crie uma lista vazia, com o nome listaGenerica.
  
2-Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
  
3-Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
  4-  Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
    5-Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
    6-Crie uma lista com 3 nomes e exiba no console apenas o último elemento. */

    let lista = [];

    let linguagensDeProgramacao = ['Java Script','C','C++','Kotlin','Python'];

    linguagensDeProgramacao.push('Java');
    linguagensDeProgramacao.push('Ruby');
    linguagensDeProgramacao.push('GoLang');
    console.log(linguagensDeProgramacao);

    let nomes = ['Jeferson' ,'Ana', 'Halyna'];

    console.log(nomes[0]);
    console.log(nomes[1]);
    console.log(nomes[2]);