import React, { Component } from 'react'
import './listDepart.css'
class Presentation extends Component {
    state={
        titre:'Qui somme nous?',
        contact:{
          nom:'InfoMariem',
          email:'InfoMariem.contact@gmail.com',
          logo:<img src="https://www.sam-batiment-auvergne.fr/wp-content/uploads/2020/04/Site-internet.png"></img>
        },
        departs:[{id:1, nom:'commerciale'},
                 {id:2, nom:'developpement'},
                   {id:3, nom:'maintenance'}
        
      ],
      nouveauxDepart:'',
      update:false,
      departToUpdate: null,
      country:''

    }
    handelChange = (event) =>  {

      this.setState({nouveauxDepart: event.target.value});

    }
    addDepart=(event)=>{
      this.refs.myForm.reset()
      event.preventDefault();
      if(!this.state.update){
      let idMax = Math.max(...this.state.departs.map(e=>e.id))
      let newDepart= {
        id: idMax + 1,
        nom:this.state.nouveauxDepart
      }

      this.setState({
        departs:[...this.state.departs,newDepart],
        nouveauxDepart:'',
      })
    }else{
      let indice= this.state.departs.indexOf(this.state.departToUpdate)
      let newDepart=[...this.state.departs]
      newDepart[indice].nom=this.state.nouveauxDepart
      this.setState({
        departs : newDepart,
        nouveauxDepart:'',
        update:false
      })
    }
    }
    deletDepart = (ind)=>{
      let newDeparts =[...this.state.departs]
      newDeparts.splice(ind,1)
      this.setState({departs:newDeparts})
    }
    updateDepart =(d)=>{
      this.setState({
        update: true,
        nouveauxDepart: d.nom,
        departToUpdate:d

      })
    }
handelSelect= (e)=>{
  this.setState({country:e.target.value})
 console.log(e.target.value)
}
  render() {
    return (
      <div>
        
        <h3 style={{margin:'30px'}}>Liste des départements</h3>
        <form onSubmit={this.addDepart} ref="myForm">
          <p>Nouveaux Département {this.state.nouveauxDepart} </p>
          <input type="text" placeholder={this.state.update ? this.state.nouveauxDepart :'Noueau Département'}  onChange={this.handelChange} className="form-control"></input>
          <button className='btn btn-secondary' style={{margin:'30px'}}>{this.state.update ? 'Modifier Département' :'Ajouter Département'}</button>
        </form>
        <br/>
        <table className="table table-striped table-hover">
          <tbody>
            
        {this.state.departs.map((d,i)=>
       <tr>
       <td>{d.id} : {d.nom}</td>
       <td> <button onClick={()=>this.deletDepart(i)} className="btn btn-danger">X</button></td>
       <td> <button onClick={()=>this.updateDepart(d)} className="btn btn-danger">Editer</button></td>
        </tr>
        )}
     
       </tbody>
      </table>



  
      </div>
    )
  }
}
export default  Presentation;