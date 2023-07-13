// Calculadora de costos

function cajero(dinero){
    const precioxUnid = 10;
    const unidades = 5

    if((precioxUnid * unidades) > dinero){
        const faltante = ((precioxUnid * unidades) - dinero)
        return "No alanza, faltan: $" + faltante.toFixed(2) + "para realizar la compra."
    }else if((precioxUnid * unidades) < dinero){
            const sobrante = (dinero - (precioxUnid * unidades))
            return "Su compra ha sido exitosa y su vuelto es de $" + sobrante.toFixed(2)
        }else{
            return "Su compra ha sido exitosa."
        }
    }


console.log(cajero(100))