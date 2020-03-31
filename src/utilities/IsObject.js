

const IsObject =(val) => {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

export default IsObject;