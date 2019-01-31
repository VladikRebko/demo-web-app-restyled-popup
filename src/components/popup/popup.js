import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Field } from "react-final-form";
import TextField from "../login/textField";
import Button from '@material-ui/core/Button';
import InputRange from 'react-input-range';
import Select from 'react-select';
import { withRouter } from "react-router-dom";

import {countries, industries, currency } from './data';

import { changeTableData } from '../../redux/actions/popupActions/popupActions';

import './popup.css';
import 'react-input-range/lib/css/index.css'

class TablePopup extends Component {

	_getTableDataRow = () => {

		const { tableData, idOfTableRow } = this.props;

		const tableCurrentRow = tableData.find(element => {
			return Number(element.ID) === Number(idOfTableRow);
	 });

	 return tableCurrentRow;
	};

	_getDataForField = (nameOfData) =>{

		return this._getTableDataRow()[nameOfData];
	};

	state = {
		valueOfWinChance: this._getDataForField("WinChance"),
		selectedCountry: {
			label:this._getDataForField("Country")
		},
		selectedIndustry: {
			label: this._getDataForField("Industry")
		},
		selectedCurrency: {
			label: this._getDataForField("Currency")
		}
	};

	_handleChangeCountry = (selectedCountry) => {
		this.setState( () =>{ return{selectedCountry} });
	};

	_handleChangeIndustry = (selectedIndustry) => {
    this.setState(() =>{ return{selectedIndustry}});
	};
	
	_handleChangeCurrency = (selectedCurrency) => {
		this.setState( () =>{ return{selectedCurrency} });
	};

	_onWinChanceChange = (value) => {
		this.setState({
			valueOfWinChance: value
 });
	};

	_onSubmit = (values) =>{
		const { history } = this.props;
		const { tableData, changeTableData, ntableData } = this.props;


		console.log(ntableData);

		if( values.IsActive ){
			values.IsActive = "TRUE";
		}
		else values.IsActive = "FALSE";

		values.WinChance = this.state.valueOfWinChance + '';
		values.Country = this.state.selectedCountry.label;
		values.Industry = this.state.selectedIndustry.label;		
		values.Currency = this.state.selectedCurrency.label;

		const newTableData = tableData.map(element => element['ID'] === values['ID']
			? values
			: element
		);

		changeTableData(newTableData);
		history.replace(`/grid`);
	};

  render(){
		const { history } = this.props;

		const { 
			selectedCountry, 
			selectedIndustry, 
			selectedCurrency 
		} = this.state;

		const tableCurrentRow = this._getTableDataRow();

		const { 
			LastName, 
			FirstName, 
			Email, 
			Phone, 
			Company, 
			Country, 
			Gender, 
			Industry, 
			WinChance, 
			Amount, 
			Currency
		} = tableCurrentRow;
 
		if( tableCurrentRow.IsActive === "TRUE" ){
			tableCurrentRow.IsActive = true;
		}
		else tableCurrentRow.IsActive = false;
		
    return(

			<div className={'show-popup'}>
				<div className={'popup-wrapper'}>
					<form className='form-for-popup' onSubmit={ () => {console.log('cool')} }>
						<div className='edit-fields'>
							<div className='fields-container'>
								
							<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Last Name</label>
									<div className='field-wrapper'>
											{/* <Field
											name="LastName"
											component={TextField}
											type="text"
											label="Last Name" 
										/>*/}

									<input 
										type='text'
										name="LastName"
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
										name="FirstName"
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
										name="Email"
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
										name="Phone"
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
										name="Company"
										placeholder="Company"
										autoComplete="off"
										defaultValue={Company}
									/>

									</div>
								</div>

								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Country</label>
									<div className='field-wrapper'>
										{/* <Field 
											name= "Country"
											defaultInputValue= {tableCurrentRow.Country}
											onChange= {this._handleChangeCountry}
											component={Select} 
											options={countries}
											value= {selectedCountry}
										/> */}

										<select className="select-country">
											<option>Пункт 1</option>
											<option>Пункт 2</option>
										</select>
									</div>
								</div>

								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Gender</label>
									<div className='field-gender-wrapper'>
											<label className='label-for-gender-field'>
													{/* <Field
														name="Gender"
														component="input"
														type="radio"
														value="Female"
													/> */}
													<input type="radio" name="Gender" value="Female" />
													{' '}
													Female

											</label>
											<label className='label-for-gender-field'>
													{/* <Field
														name="Gender"
														component="input"
														type="radio"
														value="Male"
													/> */}
													<input type="radio" name="Gender" value="Male" />
													{' '}
													Male

											</label>
											<label className='label-for-gender-field'>
													{/* <Field
														name="Gender"
														component="input"
														type="radio"
														value="Other"
													/> */}
													<input type="radio" name="Gender" value="Other" />
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
										{/* <Field 
											name="Industry"
											component={Select} 
											onChange= {this._handleChangeIndustry}
											defaultInputValue= {tableCurrentRow.Industry[0]}
											options={industries}
											value = {selectedIndustry}
										/> */}

										<select className="select-country">
											<option>Пункт 1</option>
											<option>Пункт 2</option>
										</select>
									</div>
								</div>
								<div className='input-field-container-for-popup'>
									<label className='label-for-fileld'>Win chance</label>
									<div className='field-wrapper'>
										{/* <InputRange
											name="WinChance"
											onChange={ valueOfWinChance => this.setState({ valueOfWinChance }) }
											maxValue={100}
											minValue={0} 	
											value={this.state.valueOfWinChance}
											/> */}

									<input 
										type="range" 
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
										{/* <Field 
											name= "IsActive" 
											component="input" 
											type="checkbox"
										/> */}
										<input 
											type="checkbox"
											name="IsActive"
											defaultValue={tableCurrentRow.IsActive}
										/>
										<label>is active</label>
									</div>
								</div>
								<div className= 'input-field-container-for-popup'>
									<label className='label-for-fileld'>Amount</label>
									<div className='field-wrapper'>
										<div className= "amount-wrapper">
											{/* <Field
												name="Amount"
												component={TextField}
												type="text"
												label="Amount"
											/>
											<Field 
												name= "Currency"
												defaultInputValue= {tableCurrentRow.Currency}
												onChange= {this._handleChangeCurrency}
												component={Select} 
												options={currency}
												value= {selectedCurrency}  */}
												<input
													type="text"
													name="Amount"
													placeholder="Amount"
													autoComplete="off"
													defaultValue={Amount}
											/>
											<select className="select-country" defaultValue={tableCurrentRow.Currency}>
												<option>Пункт 1</option>
												<option>Пункт 2</option>
											</select>
										</div>
									</div>
								</div>
							</div>	
						</div>
						<div className='buttons-wrapper'>
							<div className='buttons-container'>
								<Button
									color="secondary"
									size="large"
									variant="outlined">
										Close
								</Button>
								<Button
									type="submit"
									size="large"
									variant="outlined"
									color="primary">
									Save
								</Button>
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
		idOfTableRow: state.tableReducer.idOfTableRow
	}
}

export default withRouter(connect(
  mapStateToProps,
  {
		changeTableData
  }
)(TablePopup));