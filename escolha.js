const idade = 5;

switch (idade) {
    case 9:
    case 10:
        console.log("Excelente");
        break;
    case 8:
    case 7:
        console.log("Bom");
        break;
    case 6:
    case 5:
    case 4:
        console.log("Média");
        break;
    default:
        console.log("Nota abaixo da média");
        break;
}