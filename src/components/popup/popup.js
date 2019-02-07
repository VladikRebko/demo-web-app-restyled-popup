import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import {countries, industries, currency } from './data';

import { changeTableData, getCurrentRow } from '../../redux/actions/popupActions/popupActions';

import './popup.css';

class TablePopup extends Component {

	// getWinChance = (name) => {
		
	// 	const { history, match } = this.props;
	// 	const { id } = match.params;
	// 	const tableCurrentRow = getCurrentRow(id);
	// 	return tableCurrentRow[name];
	// }

	// state = {
	// 	valueOfWinChance: this.getWinChance("WinChance")
	// };

	// _handleChangeCountry = (selectedCountry) => {
	// 	this.setState( () =>{ return{selectedCountry} });
	// };

	// _handleChangeIndustry = (selectedIndustry) => {
  //   this.setState(() =>{ return{selectedIndustry}});
	// };
	
	// _handleChangeCurrency = (selectedCurrency) => {
	// 	this.setState( () =>{ return{selectedCurrency} });
	// };

	// _onWinChanceChange = (value) => {
	// 	this.setState({
	// 		valueOfWinChance: value
 	// 	});
	// };

	componentDidUpdate(){
		const { match } = this.props;


		const { id } = match.params;

		getCurrentRow(id);
	}

	onSubmitForm = (event) =>{
			const {tableCurrentRow} = this.props;

		console.log(tableCurrentRow);
		// const { history } = this.props;
		// const { tableData, changeTableData } = this.props;

		// // console.log(event.target.children);

		// if( event.IsActive ){
		// 	event.IsActive = "TRUE";
		// }
		// else event.IsActive = "FALSE";

		// event.WinChance = this.state.valueOfWinChance + '';
		// event.Country = this.state.selectedCountry.label;
		// event.Industry = this.state.selectedIndustry.label;		
		// event.Currency = this.state.selectedCurrency.label;

		// // console.log(this.inputCheckBox.checked);
		// // changeTableData(newTableData);
		// // history.replace(`/grid`);
		// // console.log(this.form.elements);
		// // console.log(this.selectForCurrency.options);

		// event.preventDefault();
		// let formData = new FormData(this.form);

		// console.log(formData.getAll('formElement'));
		// changeTableData(event);
		// // history.replace(`/grid`);
		
		// event.stopPropagation();
	};

	// componentDidMount(){

	// 	const { history, match } = this.props;
	// 	const { id } = match.params;
	// 	const tableCurrentRow = getCurrentRow(id);

	// 	const { 
	// 		Gender
	// 	} = tableCurrentRow;

	// 	const optionListForCurrency = this.selectForCurrency.options; 
	// 	const optionsForCurrency = currency;

	// 	optionsForCurrency.forEach(option =>
	// 		optionListForCurrency.add(
	// 			new Option(option.value, option.label)
	// 		)
	// 	);

	// 	// console.log(this.selectForCurrency.options);

	// 	const optionListForIndusties = this.selectForIndustry.options; 
	// 	const optionsForIndustries = industries;
	

	// 	optionsForIndustries.forEach(option =>
	// 		optionListForIndusties.add(
	// 			new Option(option.value, option.label)
	// 		)
	// 	);

	// 	// console.log(this.selectForIndustry.options);

	// 	const optionListForCountry = this.selectForCountry.options; 
	// 	const optionsForCountry = countries;
	

	// 	optionsForCountry.forEach(option =>
	// 		optionListForCountry.add(
	// 			new Option(option.value, option.label)
	// 		)
	// 	);
				
	// 	// this.containerForGenderFields.children.forEach( (item) => {
	// 	// 	console.log(item);
	// 	// })

	// 	// console.log(Country, Industry, Currency, Gender);

	// 	for (let i = 0; i < this.containerForGenderFields.children.length; i++){

	// 		if(this.containerForGenderFields.children[i].children[0].value === Gender)
	// 		this.containerForGenderFields.children[i].children[0].setAttribute('checked', null);
	// 	}
		
	// };

	// componentWillMount(){
	// 	const { history, match, tableCurrentRow } = this.props;


	// 	const { id } = match.params;
	// 	// const { 
	// 	// 	selectedCountry, 
	// 	// 	selectedIndustry, 
	// 	// 	selectedCurrency 
	// 	// } = this.state;

	// 	getCurrentRow(id);
	// }

  render(){
		// const { history, match, tableCurrentRow } = this.props;


		// const { id } = match.params;
		// const { 
		// 	selectedCountry, 
		// 	selectedIndustry, 
		// 	selectedCurrency 
		// } = this.state;

		// getCurrentRow(id);

		// console.log(tableCurrentRow);

		// const { 
		// 	LastName, 
		// 	FirstName, 
		// 	Email, 
		// 	Phone, 
		// 	Company, 
		// 	Amount,
		// 	Currency,
		// 	Industry,
		// 	Country
		// } = tableCurrentRow;
 
		// if( tableCurrentRow.IsActive === "TRUE" ){
		// 	tableCurrentRow.IsActive = true;
			
		// }
		// else tableCurrentRow.IsActive = false;
		
		

	
    return(

			<div className={'show-popup'}>
				<div className={'popup-wrapper'}>
					{/* <form className='form-for-popup' ref={(form) => { this.form = form }} onSubmit={this.onSubmitForm}> */}
						{/* <div className='edit-fields'>
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
											ref={(select) => { this.selectForCountry = select }}
											onChange = { (event) => { console.log(event.target.value) }}>
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
								<div className='input-field-container-for-popup'>
									<label className='label-for-fileld'>Status</label>
									<div className='field-wrapper'>

										<input 
											type="checkbox"
											name="formElement"
											defaultChecked={tableCurrentRow.IsActive}
										/>
										<label>is active</label>
									</div>
								</div>
								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Amount</label>
									<div className='field-wrapper'>
										<div className= "amount-wrapper">

												<input
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
							</div>	
						</div> */}
						<div className='buttons-wrapper'>
							<div className='buttons-container'>
								<button>
										Close
								</button>
								<button
									type="submit"
									color="primary"
									onClick = {this.onSubmitForm}
									>
									Save
								</button>
							</div>
						</div>
					{/* </form> */}
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
		changeTableData,
		getCurrentRow
  }
)(TablePopup));