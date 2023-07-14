const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1', 'post2', 'post3'];
            const error = true;

            if (error) {
                reject('Hubo un error al intentar obtener los posts');
            } else {
                resolve(posts);
            }
        }, 2000)
        
    });
};

const mostrarPost = async() => {
    try{
        const posts = await fetchPosts();
        // Hasta que await fetchPosts() muestre el resultado no seguiran los comandos
        // Mas lineas de comando
        console.log(posts);
    } catch(error){
        console.log(error);
    }

};
mostrarPost()