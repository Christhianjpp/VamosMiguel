'use server';

import { IArticle } from "@/interface/article";
import connectDB from "@/lib/mongodb";
import { Article } from "@/models/Article";
import { CategoryArticle } from "@/models/CategoryArticle";



export const createArticle = async (data: IArticle) => {

    try {
        const articulo = new Article(data);
        const result = await articulo.save();
        if (result) {
            return JSON.stringify({ status: 200, message: 'Articulo creado correctamente' });
        }
        return JSON.stringify({ status: 400, message: 'Error al crear articulo' });
    } catch (error) {
        return JSON.stringify({ error: 'Internal Server Error' })

    }
}
export const getArticle = async () => {

    try {
        const result = await Article.find();
        if (result) {
            return JSON.stringify({ status: 200, result });
        }
        return JSON.stringify({ status: 400, message: 'Error al crear articulo' });
    } catch (error) {
        return JSON.stringify({ error: 'Internal Server Error' })

    }
}


export const createCategory = async (name: string) => {

    try {
        // Conectamos a la base de datos antes de usar el modelo
        await connectDB();
        // Creamos una nueva instancia del modelo
        const categoria = new CategoryArticle({ name });
        // Guardamos la nueva categoría
        const result = await categoria.save();
        // Verificamos si se guardó correctamente
        if (result) {
            return { status: 200, message: 'Categoria creada correctamente' };
        }
        return { status: 400, message: 'Error al crear categoria' };

    } catch (error) {
        console.log('Error', error);
        return { status: 500, message: 'Error en el servidor' };
    }
};


export const getCategories = async () => {
    try {
        // Conectamos a la base de datos antes de usar el modelo
        await connectDB();

        const result = await CategoryArticle.find();
        // Verificamos si se guardó correctamente
        console.log('result', result)
        if (result) {
            return JSON.stringify(result);
        }
        return JSON.stringify({ error: 'no se encontraron categorias' })

    } catch (error) {
        console.log('Error', error);
        return JSON.stringify({ error: 'Internal Server Error' })
    }
}