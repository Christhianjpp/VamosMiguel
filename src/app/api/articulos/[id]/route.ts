import { ITag } from "@/interface/article";
import { IUser } from "@/interface/user";
import { prisma } from "@/libs/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
interface Params {
    params: { id: number }
}
// export async function GET(request: Request, { params }: Params) {
//     try {
//         const { slug } = params;
//         const articulo = await prisma.post.findFirst({
//             where: {
//                 slug: slug
//             },
//             include: {
//                 category: true,
//                 tags: true,
//             },
//         })

//         if (!articulo) return NextResponse.json({
//             message: "Articulo no encontrado"
//         }, { status: 404 });

//         return NextResponse.json(articulo)
//     } catch (error) {
//         if (error instanceof Error) {
//             console.log({ error })
//             return NextResponse.json({
//                 message: error.message
//             }, { status: 400 });
//         }
//     }
// }
export async function PUT(req: NextRequest, { params }: Params) {

    const token = await getToken({ req })

    if (!token) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
    const userToken = token.user as IUser

    if (userToken.role !== 'Admin') {
        return NextResponse.json({ message: 'Usuario no autorizado' }, { status: 401 })
    }


    try {
        const { id } = params;
        const articuloDB = await prisma.post.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                tags: true
            }
        })
        if (!articuloDB) return NextResponse.json({
            message: "Articulo no encontrado"
        }, { status: 404 });

        const data = await req.json()
        console.log(data.tags.connect)
        const articulo = await prisma.post.update({
            where: {
                id: Number(id)
            },
            data: {
                tags: {
                    set: [],
                    connect: data.tags.connect.map((tagId: ITag) => ({ id: tagId.id })),
                },
                ...data,
            }
        })

        return NextResponse.json(articulo)
    } catch (error) {
        if (error instanceof Error) {

            return NextResponse.json({
                message: error.message
            }, { status: 400 });
        }
    }
}

// data: {
//     tags: {
//         set: data.tags.connect.map((tagId: ITag) => ({ id: tagId.id })),
//     },
//     ...data,


export async function DELETE(req: NextRequest, { params }: Params) {

    const token = await getToken({ req })


    if (!token) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
    const userToken = token.user as IUser

    if (userToken.role !== 'Admin') {
        return NextResponse.json({ message: 'Usuario no autorizado' }, { status: 401 })
    }


    try {
        const { id } = params;



        const articulo = await prisma.post.delete({
            where: {
                id: Number(id)
            }
        })

        if (!articulo) return NextResponse.json({
            message: "Articulo no encontrado"
        }, { status: 404 });

        return NextResponse.json({ message: 'Articulo eliminado' })
    } catch (error) {
        if (error instanceof Error) {

            return NextResponse.json({
                message: error.message
            }, { status: 400 });
        }
    }
}