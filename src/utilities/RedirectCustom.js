const RedirectCustom = (string) => {

    const currentLocation = window.location;
    // console.log("currentLocation : ", currentLocation.origin);

    window.location = currentLocation.origin + string;

};

export default RedirectCustom;