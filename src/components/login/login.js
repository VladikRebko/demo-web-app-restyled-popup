import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";

import './login.css';

const ADMIN = 'admin';
const GRID_PATH = '/grid';

class Login extends Component {

  _onSubmit = event => {
		const { history } = this.props;
		
		event.preventDefault();
		
		const formData = new FormData(this.form).getAll('loginFormElement');

    if ( formData[0] === ADMIN && formData[1] === ADMIN ) {
      history.push(GRID_PATH);
    }
  };  

  render(){
    return(
      <div className= 'login-page'>
				<form 
					className='login-form' 
					onSubmit={this._onSubmit}
					ref={(form) => { this.form = form }}	
				>
					<div className='input-fields-container'>
						<div className='input-login-field'>
							<input 
								type='text'
								name='loginFormElement'
								placeholder='Last Name'
								autoComplete='off'
								defaultValue={ADMIN}
							/>
						</div>
						<div className ='input-login-field'>
							<input 
								type='password'
								name='loginFormElement'
								placeholder='Password'
								autoComplete='off'
								defaultValue={ADMIN}
							/>
						</div>
					</div>
					<div className='submit-buttons'>
						<Button
							className='submit-button' 
							type='submit'
							variant='contained' 
							color='primary'>
							Log in
						</Button>
					</div>
				</form>
      </div>
    );
  }
}
  
export default withRouter(Login);