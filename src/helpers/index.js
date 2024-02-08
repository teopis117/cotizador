export function obtenerDiferenciaYear(year)
{

    return new Date().getFullYear()-year;
}

export function calcularMarca(marca)
{
    let incremento=0;

    switch(marca)
    {
        case "Europeo": incremento = 1.3; break;
    case "Americano": incremento = 1.15; break;
    case "Asiatico": incremento = 1.05; break;
        default:break;

    }
    return incremento;
}

export function calcularPlan(plan)
{

    return (plan === '1') ? 1.20:1.5;
}

export function formatearDiner(cantidad)
{
    return cantidad.toLocaleString('en-US',
    {
        style:'currency',
        currency:'USD'
    });
}