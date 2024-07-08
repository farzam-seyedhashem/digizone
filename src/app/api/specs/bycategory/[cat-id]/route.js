import {getByCatId} from '@backend/_controller/ProductSpecController';

export async function GET(request,{ params }) {
    // const body = await req.json();
    console.log(await getByCatId(params["cat-id"]))
    return Response.json(await getByCatId(params["cat-id"]));
}

// module.exports = {
//     GET: getById
// }