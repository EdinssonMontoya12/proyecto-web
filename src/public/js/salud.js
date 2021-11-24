const imc = document.getElementById('IMC')
const icc = document.getElementById('ICC')
const resultImc = document.getElementById('msgIMC')
const resultIcc = document.getElementById('msgICC')

const outputIMC = [[18.5 , 24.9 , "Normal", "Promedio"],
                   [25 , 29.9, "Sobrepeso" , "Aumentado"],   
                   [30 , 34.9 , "Obesidad Grado 1" , "Moderado"],
                   [35 , 39.9 , "Obesidad Grado 2" , "Severo"],
                   [40 , Infinity , "Obesidad Grado 3" , "Muy Severo"]]

const outputIccWomen = [[0, 0.80 , "Bajo"] , [0.81, 0.85, "Moderado"] , [0.86, Infinity, "Alto"]]      
const outputIccMen = [[0, 0.95, "Bajo"] , [0.96, 1, "Moderado"] , [1, Infinity, "Alto"]]                   

imc.addEventListener('click', (e) =>{
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    let resultIMC= peso/(altura*altura);
    if(isNaN(resultIMC)){
        resultImc.innerHTML =  "Verifique que los datos ingresados sean correctos" 
        document.getElementById('tablaIMC').classList.add('show')
    }
    else{
        decideOutputImc(resultIMC.toFixed(1)) 
        resultImc.innerHTML = "";
    }
});

icc.addEventListener('click' , (e) =>{
    const select = document.getElementById('gender')
    const gender = select.options[select.selectedIndex].value
    const struct = (gender == '1'?outputIccMen:outputIccWomen)
    const cintura = parseFloat(document.getElementById('cintura').value)
    const cadera =  parseFloat(document.getElementById('cadera').value)
    let iccR = cintura / cadera
    let resultICC = iccR.toFixed(2)
    if((gender=='1' || gender == '2') &&  !isNaN(resultICC)){
        resultIcc.innerHTML = "";
        decideOutputIcc(struct, resultICC)

    }
    else{
        document.getElementById('tablaICC').classList.add('show')
        resultIcc.innerHTML = "Verifique que los datos ingresados sean correctos"
    }
})


function decideOutputIcc(struct, iccR){
    document.getElementById('tablaICC').classList.remove('show')
    const iccShow = document.getElementById('resultadoICC')
    const riesgo = document.getElementById('riesgoSalud')
    for(const x of struct){
        if(iccR>=x[0] && iccR<=x[1]){
            iccShow.innerHTML = iccR
            riesgo.innerHTML = x[2]
            break;
        }
    }
}

function decideOutputImc(imc){
    document.getElementById('tablaIMC').classList.remove('show')
    const imcR = document.getElementById('resultadoIMC')
    const clasificacion = document.getElementById('clasificacion')
    const riesgo = document.getElementById('riesgo')
    for(const x of outputIMC){
        if(imc>=x[0] && imc<=x[1]){
            imcR.innerHTML = imc
            clasificacion.innerHTML = x[2]
            riesgo.innerHTML = x[3]
            break;
        }
    }
}