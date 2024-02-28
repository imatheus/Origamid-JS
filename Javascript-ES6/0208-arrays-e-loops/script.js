var capital = ['recife', 'sao paulo', 'belo horizonte'];

for (var capitais = 0; capitais <capital.length; capitais++){
    console.log(capital[capitais])

    if(capital[capitais]==='sao paulo'){
        break;
    }
};

capital.forEach(function(i, index, array){
    console.log(i, index, array)
});



var vitoriasCopa = ['1959', '1962', '1970', '1994', '2002'];

for(var vitorias = 0; vitorias <vitoriasCopa.length; vitorias++){
    console.log(`O Brasil ganhou a copa de ${vitoriasCopa[vitorias]} `)
};

