const obtenerPostDeUsuario = (usuario, callback) => {
    console.log(`Obteniendo los post de ${usuario}`);

    setTimeout(() => {
        let posts = ['post1', 'post2', 'post3'];
        callback(posts);

    }, 5000);
}


obtenerPostDeUsuario('carlos', (posts) => {
    console.log(posts);
});



