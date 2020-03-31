const getID = () => {


        // console.log("path: ", window.location.href)

        const queryString = new URL(window.location.href);
        const searchParams = new URLSearchParams(queryString.search)
        const id = searchParams.get('id');

        return id;
}

export default getID