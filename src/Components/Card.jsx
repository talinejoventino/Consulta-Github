import {useState} from 'react';
import '../Styles/card.css';

function Card(){
    const [data, setData] = useState({});
    function handleTextChange(e){
        e.preventDefault()
        fetch(`https://api.github.com/users/${e.target.value}`)
        .then(response => response.json())
        .then(response => setData(response))
    }
    let imagem 
    if(data.message === "Not Found"){
        imagem = "https://toppng.com/uploads/preview/ithub-logo-github-ico-1156316338259iu7t7y7z.png"
    }else{
        imagem = data.avatar_url
    }
    return(
        <section className='container_card'>
            <div>
                <h1>Digite seu user do github:</h1>
                <input type="text" onChange={handleTextChange}></input>
                <img src={imagem} alt='usuario github' />
                <div>
                <h2>{data.name}</h2>
                <p>Bio: {data.bio}</p>
                <p>Localização: {data.location}</p>
                <p>Seguidores: {data.followers}</p>
                </div>
            </div>
        </section>
    )
}

export default Card;

//#########################################################

// Exemplo do codigo com consumo de Api's por meio de classes

//########################################################

// import React from 'react';
// class App extends React.Component {
//   state = {
//     data: {}
//   }
//   handleTextChange(e) {
//     fetch(`https://api.github.com/users/${e.target.value}`)
//       .then(res => res.json())
//       .then(res => {
//         // if(res.)
//         console.log(res)
//         this.setState({
//           data: res
//         })
//       })
//   }
//   render() {
//     return (
//       <div className= 'container'>
//         <div>
//           Digite seu user do github:
//           <input type="text" onChange={this.handleTextChange.bind(this)}></input>
//           <img src = {this.state.data.avatar_url} alt = 'usuario github'/>
//           <h2>{this.state.data.name}</h2>
//           <p>{this.state.data.bio}</p>
//         </div>
//       </div>
//     )
//   }
// }
