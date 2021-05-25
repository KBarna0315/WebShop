export const parseRequestUrl=()=>{
    const url = document.location.hash.toLowerCase();
    //"/termek/:id": ezt kell feldarabolni
    const request = url.split("/");
    return{
        resource: request[1], //termek/"
        id: request[2], //termék idje "/:id":
        action: request[3],
    };
};