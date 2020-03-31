const ConvertDataURLtoFile = (dataurl, filename) => {

    // console.log("dataurl document : ", dataurl);

    if(dataurl !== '' || dataurl !== null){

        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            
            // return new FormData([u8arr], filename, {type:mime} );
            return new File([u8arr], filename, {type:mime});
    };

    
};

export default ConvertDataURLtoFile;

/*

    `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
    https://stackoverflow.com/questions/35940290/how-to-convert-base64-string-to-javascript-file-object-like-as-from-file-input-f

    `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

*/