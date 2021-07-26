

const BtnGenres = (props) => {


    const  showgenres = (id)=>{
        props.showgenresfromchild(id);
    }

    return (


        <>

           

            {props.id}

            <a class="btngenre" title="lien vers demander un devis" onClick={()=>showgenres(props.genre_id)}>{props.genre_name}</a>

        </>

    );
}
export default BtnGenres;