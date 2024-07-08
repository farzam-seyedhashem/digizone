export const ContentConvertor = (description) => {
    let pContent = "";

    {
        description && JSON.parse(description).blocks.map((item, i) => {
            // console.log('l',`${convertContentType(item)}`)

            item?.data?.items?.map((itemd, i) => {
                pContent += itemd
            })

            if (item?.data?.text) {
                pContent += item.data.text.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ')
            }
        })
    }
    return pContent;
}