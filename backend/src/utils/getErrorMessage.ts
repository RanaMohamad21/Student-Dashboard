function getErrorMessage(error:unknown){
    if(error instanceof Error){
        console.log(error.message);
    }else{
        console.log(String(error));
    }
}

export default getErrorMessage;