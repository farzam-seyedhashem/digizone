import {store as storeImage, store} from '@backend/_controller/ImageController';

export async function POST(request) {
    // const body = await req.json();
    console.log(await request)
    const formData = await request.formData()
    // console.log(formData)
    const image = await storeImage(formData.getAll('file')[0])
    return Response.json(image)
}

// module.exports = {
//     GET: getById
// }