const titulo = document.querySelectorAll(`.titulo`).classList;


titulo.forEach((titulo) =>{
    titulo.addEventListener(`click`, () =>{
        if (titulo.classList.contains(`open`)){
            titulo.classList.remove(`open`);
        }
        else {
            const tituloOpen = document.querySelectorAll(`.open`);
            tituloOpen.forEach((tituloOpen) => {
                tituloOpen.addEventListener(`click`, ()=>{
                    if(tituloOpen.classList.contains(`open`)){
                        titulo.classList.remove(`open`);
                    };
                });
            });
            titulo.classList.add(`open`);
        };
    });
});