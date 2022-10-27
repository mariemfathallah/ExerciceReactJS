import React, { Component } from 'react'
import image from '../../assets/images/undraw_Processing_re_tbdu.png'
import './About.css'
 class About extends Component {
  state={
    titre:'Qui somme nous?',
    contact:{
      nom:'InfoMariem',
      email:'InfoMariem.contact@gmail.com',
      logo:<img src={image} className='image'></img>
    }
}
  render() {
   
    return (
      <div>
        <h2 style={{textAlign:'center',margin:'30px'}}>{this.state.titre}</h2>
        <table  className="table table-striped table-hover">
          <tbody>
          <tr  className="table-success">     
     <td>
    {this.state.contact.logo}
      </td>
      </tr> 
            <tr>
              <td>
                <li key={Math.random()} style={{textDecoration:'underline',fontSize:'30px',fontWeight:'700'}} className='list'>{this.state.contact.nom}</li>
                </td>
              </tr>
              <tr>
              <td><li key={Math.random()} className='list'>{this.state.contact.email}</li></td>
              </tr>
    
          </tbody>
        </table>
      </div>
    )
  }
}
export default About;