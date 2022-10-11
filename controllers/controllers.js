import { getFoods } from "../firebase/firebase";

export const getCategories = async () => {
    const comidas = await getFoods()
    const categorias = comidas.map(comida => comida.categoria)
    const categoriasSinRepetir = [...new Set(categorias)]
    return categoriasSinRepetir
}