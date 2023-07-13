const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1', 'post2', 'post3'];
            const error = false;

            if (error) {
                reject('Hubo un error al intentar obtener los posts');
            } else {
                resolve(posts);
            }
        }, 2000)
        
    });
};

fetchPosts().then((posts) => {
    console.log(posts);
}).catch((error) => {
    console.log(error);
}); //asi se trabajaria para el clg por ejemplo



