function insertionSort(lista) {
    let n = lista.length;
        for (let i = 1; i < n; i++) {
            let current = lista[i];
            let j = i-1; 
            while ((j > -1) && (current < lista[j])) {
                lista[j+1] = lista[j];
                j--;
            }
            lista[j+1] = current;
        }
    return lista;
}

let impares = [5,3,7,23,47,55,15,19,99,203,63,73,83,9,97,35,37,39,239,539,137,233,183,173,129,899,839,879,999,333];

insertionSort(impares);
console.log(impares)