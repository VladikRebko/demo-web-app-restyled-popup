import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import {countries, industries, currency } from './data';

import { changeTableData } from '../../redux/actions/popupActions/popupActions';

import './popup.css';

class TablePopup extends Component {


	getJSONField= (name) => {
		
		const { match, tableData } = this.props;
		const { id } = match.params;
		const tableCurrentRow = tableData[id - 1];
		return tableCurrentRow[name];
	}

	state = {
		valueOfWinChance: this.getJSONField("WinChance")
	};


	_onWinChanceChange = (value) => {
			this.setState({
				valueOfWinChance: value
		 	});
		};
	
	onSubmitForm = (event) =>{
		
		const { tableData } = this.props;
		const { match } = this.props;
		const { id } = match.params;

		const tableCurrentRow = tableData[id - 1];

		event.preventDefault();
		const { history } = this.props;

		let formData = new FormData(this.form).getAll('formElement');
		tableCurrentRow.LastName = formData[0];
		tableCurrentRow.FirstName = formData[1];
		tableCurrentRow.Email = formData[2];
		tableCurrentRow.Phone = formData[3];
		tableCurrentRow.Company = formData[4];
		tableCurrentRow.Country = formData[5];
		tableCurrentRow.Gender = formData[6];
		tableCurrentRow.Industry = formData[7];
		tableCurrentRow.WinChance = formData[8];
		tableCurrentRow.Amount = formData[9];
		tableCurrentRow.Currency = formData[10];

		if(formData.length === 12){
			formData[11] = "TRUE"
			tableCurrentRow.IsActive = formData[11];
		}
		else tableCurrentRow.IsActive = "FALSE"
		
		// console.log(tableCurrentRow);
		history.replace(`/grid`);
		changeTableData(tableCurrentRow);
	};

	_addOptions = (optionList, optionCurrencyForSelect) => {
		optionCurrencyForSelect.forEach(option =>
			optionList.add(
				new Option(option.value, option.label)
			)
		);
	};

	componentDidMount(){

		const { match, tableData } = this.props;
		const { id } = match.params;

		const tableCurrentRow = tableData[id - 1];
		const { 
			Gender
		} = tableCurrentRow;

		const optionListForCurrency = this.selectForCurrency.options; 
		const optionsForCurrency = currency;

		this._addOptions(optionListForCurrency, optionsForCurrency);

		const optionListForIndusties = this.selectForIndustry.options; 
		const optionsForIndustries = industries;
		
		this._addOptions(optionListForIndusties, optionsForIndustries);

		const optionListForCountry = this.selectForCountry.options; 
		const optionsForCountry = countries;
	
		this._addOptions(optionListForCountry, optionsForCountry);

		for (let i = 0; i < this.containerForGenderFields.children.length; i++){

			if(this.containerForGenderFields.children[i].children[0].value === Gender)
			this.containerForGenderFields.children[i].children[0].setAttribute('checked', null);
		}
		
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
			Currency
		} = tableCurrentRow;
 
		let { IsActive } = tableCurrentRow

		if( IsActive === "TRUE" ){
			IsActive = true;
			
		}
		else IsActive = false;

    return(

			<div className={'show-popup'}>
				<div className={'popup-wrapper'}>
					<form className='form-for-popup' ref={(form) => { this.form = form }} onSubmit={this.onSubmitForm}>
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
											ref={(select) => { this.selectForCountry = select }}>
												<option defaultValue={Country} hidden>{Country}</option>

											</select>
									</div>
								</div>

								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Gender</label>
									<div className='field-gender-wrapper' ref={(div) => { this.containerForGenderFields = div }}>
											<label className='label-for-gender-field'>

													<input type="radio" name="formElement" value="Female" />
													{' '}
													Female

											</label>
											<label className='label-for-gender-field'>
	
													<input type="radio" name="formElement" value="Male"  />
													{' '}
													Male

											</label>
											<label className='label-for-gender-field'>

													<input type="radio" name="formElement" value="Other" />
													{' '}
													Other
													
											</label>
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
											ref={(select) => { this.selectForIndustry = select }}>

												<option defaultValue={Industry} hidden>{Industry}</option>

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
												ref={(select) => { this.selectForCurrency = select }}>

												<option defaultValue={Currency} hidden>{Currency}</option>

												</select>
										</div>
									</div>
								</div>
								<div className='input-field-container-for-popup'>
									<label className='label-for-fileld'>Status</label>
									<div className='field-wrapper'>
										<div className='checkbox'>
											<input 
												type="checkbox"
												name="formElement"
												defaultChecked={IsActive}
											/>
											<label>is active</label>
										</div>
									</div>
								</div>
							</div>	
						</div>
						<div className='buttons-wrapper'>
							<div className='buttons-container'>
								<button
									onClick = {() => { history.goBack() } }	
								>
										Close
								</button>
								<button
									onClick = {this.onSubmitForm}
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
		tableData: state.popupReducer.tableData,
		tableCurrentRow: state.popupReducer.tableCurrentRow
	}
}

export default withRouter(connect(
  mapStateToProps,
  {
		changeTableData
  }
)(TablePopup));