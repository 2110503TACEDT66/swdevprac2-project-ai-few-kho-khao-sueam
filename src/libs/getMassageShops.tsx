

export default async function getMassageShops() {

    await new Promise( (resolve)=>setTimeout(resolve, 2000) )

    const response = await fetch("http://localhost:5001/api/v1/massageShops")
    if(!response.ok){
        throw new Error("Failed to fetch massageShops")
    }

    return await response.json()

}