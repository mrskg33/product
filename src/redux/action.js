export const addProduct = (data) =>{
    console.log("add action called ", data)

    return ({
        type:'Add_Product',
        payload:data
    })
}