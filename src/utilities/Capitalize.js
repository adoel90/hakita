const Capitalize = (string) => {
    if(string !== null ){
        if(string !== undefined){

            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
};

export default Capitalize;