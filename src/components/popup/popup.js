import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import {
	countries,
	industries,
	currency,
	genders
} from './data';

import './popup.css';

import { changeTableData } from '../../redux/actions/popupActions/popupActions';
import { getAllData } from '../../selectors';

const GRID_ROUTE = `/grid`;
const TRUE = 'TRUE';
const FALSE = 'FALSE';

class TablePopup extends Component {

	constructor(props){
		super(props);
	
		this.state = {
			valueOfWinChance: this._getJSONField("WinChance")
		};
	};

	_getJSONField = (name) => {
		const { match, tableData } = this.props;
		const { id } = match.params;
		const tableCurrentRow = tableData[id - 1];
		
		return tableCurrentRow[name];
	};

	_onWinChanceChange = (value) => {
		this.setState({
			valueOfWinChance: value
	 	});
	};
	
	onSubmitForm = event =>{
		event.preventDefault();

		const { tableData, history, match } = this.props;
		const { id } = match.params;
		const tableCurrentRow = tableData[id - 1];

		const formData = new FormData(this.form).getAll('formElement');
		
		tableCurrentRow.LastName = 	formData[0];
		tableCurrentRow.FirstName = formData[1];
		tableCurrentRow.Email = 		formData[2];
		tableCurrentRow.Phone = 		formData[3];
		tableCurrentRow.Company = 	formData[4];
		tableCurrentRow.Country = 	formData[5];
		tableCurrentRow.Gender = 		formData[6];
		tableCurrentRow.Industry = 	formData[7];
		tableCurrentRow.WinChance = formData[8];
		tableCurrentRow.Amount = 		formData[9];
		tableCurrentRow.Currency = 	formData[10];

		if(formData.length === 12){
			formData[11] = TRUE
			tableCurrentRow.IsActive = formData[11];
		}
		else tableCurrentRow.IsActive = FALSE
		
		history.replace(GRID_ROUTE);
		changeTableData(tableCurrentRow);
	};

	_addOptions = (optionList, optionCurrencyForSelect) => {
		optionCurrencyForSelect.forEach(option =>
			optionList.add(
				new Option(option.value, option.label)
			)
		);
	};

  render(){	
		const {history, match } = this.props;
		const { id } = match.params;
	
		const { tableData } = this.props;

		const tableCurrentRow = tableData[id - 1];
		const { 
			LastName, 
			FirstName, 
			Email, 
			Phone, 
			Company, 
			Country,
			Industry,
			Amount,
			Currency,
			Gender
		} = tableCurrentRow;

		let { IsActive } = tableCurrentRow

		if( IsActive === TRUE ){
			IsActive = true;
			
		}
		else IsActive = false;

    return(

			<div className={'show-popup'}>
				<div className={'popup-wrapper'}>
					<form 
						className='form-for-popup' 
						ref={(form) => { this.form = form }} 
						onSubmit={this.onSubmitForm}
					>
						<div className='edit-fields'>
							<div className='fields-container'>								
								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Last Name</label>
									<div className='field-wrapper'>
										<input 
											type='text'
											name="formElement"
											placeholder="LastName"
											autoComplete="off"
											defaultValue={LastName}
										/>
									</div>
								</div>

								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>First Name</label>
									<div className='field-wrapper'>
										<input 
											type='text'
											name="formElement"
											placeholder="FirstName"
											autoComplete="off"
											defaultValue={FirstName}
										/>
									</div>
								</div>

								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Email</label>
									<div className='field-wrapper'>
										<input 
											type='text'
											name="formElement"
											placeholder="Email"
											autoComplete="off"
											defaultValue={Email}
										/>
									</div>
								</div>

								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Phone</label>
									<div className='field-wrapper'>
										<input 
											type='text'
											name="formElement"
											placeholder="Phone"
											autoComplete="off"
											defaultValue={Phone}
										/>
									</div>
								</div>

								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Company</label>
									<div className='field-wrapper'>
										<input 
											type='text'
											name="formElement"
											placeholder="Company"
											autoComplete="off"
											defaultValue={Company}
										/>
									</div>
								</div>

								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Country</label>
									<div className='field-wrapper'>
										<select 
											className="select-country"
											name="formElement"
										>
											<option defaultValue={Country} hidden>{Country}</option>
											{
												countries.map(value => (
													<option key={value}>{value}</option>
												))
											}
										</select>
									</div>
								</div>

								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Gender</label>
									<div className='field-gender-wrapper'>
										{
											genders.map(value => (
												<label
													key={value}
													className = 'label-for-gender-field'
												>
													<input
													type="radio"
													value={value}
													name='formElement'
													defaultChecked={value === Gender}
												/>
													{' ' + value}
												</label>
											))
										}
									</div>
								</div>
							</div>
							
							<div className='fields-container'>
								<div className='input-field-container-for-popup'>
									<label className='label-for-fileld'>Industries</label>
									<div className='field-wrapper'>
										<select 
											name="formElement"
											className="select-industry" 
										>
											<option defaultValue={Industry[0]} hidden>{Industry[0]}</option>
											{
												industries.map(value => (
													<option key={value}>{value}</option>
												))
											}
										</select>
									</div>
								</div>
								
								<div className='input-field-container-for-popup'>
									<label className='label-for-fileld'>Win chance</label>
									<div className='field-wrapper'>
										<input 
											type="range" 
											name="formElement"
											min={0}
											max={100} 
											step={1} 
											value={this.state.valueOfWinChance}
											onChange={ e => this._onWinChanceChange(e.target.value) }
										/>
										<div className='win-chance-value'>
											{this.state.valueOfWinChance}
										</div>
									</div>
								</div>
								
								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Amount</label>
									<div className='field-wrapper'>
										<div className= "amount-wrapper">
											<input
												className="input-currency"
												type="text"
												name="formElement"
												placeholder="Amount"
												autoComplete="off"
												defaultValue={Amount}
											/>
											<select 
												className="select-currency"
												name="formElement"
											>
												<option defaultValue={Currency} hidden>{Currency}</option>
												{
													currency.map(value => (
														<option key={value}>{value}</option>
													))
												}
											</select>
										</div>
									</div>
								</div>
								
								<div className='input-field-container-for-popup'>
									<label className='label-for-fileld'>Status</label>
									<div className='field-wrapper'>
										<label>
											<input 
												type="checkbox"
												name="formElement"
												defaultChecked={IsActive}
											/>
											is active
										</label>
									</div>
								</div>
							</div>	
						</div>
						
						<div className='buttons-wrapper'>
							<div className='buttons-container'>
								<button
									type='reset'
									onClick = { () => {history.replace(GRID_ROUTE) }}
								>
										Close
								</button>
								<button
									type='submit'
								>
									Save
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tableData: getAllData(state)
	}
}

export default withRouter(connect(
  mapStateToProps,
  {
		changeTableData
  }
)(TablePopup));