import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Field } from "react-final-form";
import TextField from "../login/textField";
import Button from '@material-ui/core/Button';
import InputRange from 'react-input-range';
import Select from 'react-select';

import {countries, industries } from './data';

import { changeTableData } from '../../redux/actions/popupActions/popupActions';

import './popup.css';
import 'react-input-range/lib/css/index.css'

const SelectAdapter = ({ input, ...rest }) => (
  <Select {...input} {...rest} searchable />
)

class TablePopup extends Component {

	_onChoiceCountry = (values) =>{
		console.log(values);
	}

	_onSubmit = (values) =>{
		console.log(values);
	}

  render(){

		const { tableCurrentRow, tableData } = this.props;
		console.log(tableCurrentRow, tableData);
		
    return(

			<div className={'show-popup'}>
				<div className={'popup-wrapper'}>
					<Form
						onSubmit={this._onSubmit}
						initialValues={tableCurrentRow}
						render = { ({handleSubmit}) => {
							return(
									<form className='form-for-popup' onSubmit={handleSubmit}>
										<div className='edit-fields'>
											<div className='fields-container'>
												
												<div className= 'input-field-container-for-popup'>
													<label className='label-for-fileld'>Last Name</label>
													<div className='field-wrapper'>
														<Field
															name="LastName"
															component={TextField}
															type="text"
															label="Last Name"
														/>
													</div>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label className='label-for-fileld'>First Name</label>
													<div className='field-wrapper'>
														<Field
															name="FirstName"
															component={TextField}
															type="text"
															label="First Name"
														/>
													</div>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label className='label-for-fileld'>Email</label>
													<div className='field-wrapper'>
														<Field
															name="Email"
															component={TextField}
															type="text"
															label="Email"
														/>
													</div>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label className='label-for-fileld'>Phone</label>
													<div className='field-wrapper'>
														<Field
															name="Phone"
															component={TextField}
															type="text"
															label="Phone"
														/>
													</div>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label className='label-for-fileld'>Company</label>
													<div className='field-wrapper'>
														<Field
															name="Company"
															component={TextField}
															type="text"
															label="Company"
														/>
													</div>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label className='label-for-fileld'>Country</label>
													<div className='field-wrapper'>
														<Field 
															name="Country" 
															component={SelectAdapter} 
															options={countries}
															onChange={this._onChoiceCountry}
														/>
													</div>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label className='label-for-fileld'>Gender</label>
													<div className='field-gender-wrapper'>
															<label className='label-for-gender-field'>
																	<Field
																		name="Stooge"
																		component="input"
																		type="radio"
																		value="female"
																	/>{' '}
																	Female
															</label>
															<label className='label-for-gender-field'>
																	<Field
																		name="Stooge"
																		component="input"
																		type="radio"
																		value="male"
																	/>{' '}
																	Male
															</label>
															<label className='label-for-gender-field'>
																	<Field
																		name="Stooge"
																		component="input"
																		type="radio"
																		value="other"
																	/>{' '}
																	Other
															</label>
													</div>
												</div>
											</div>
											
											<div className='fields-container'>
												<div className='input-field-container-for-popup'>
													<label className='label-for-fileld'>Industries</label>
													<div className='field-wrapper'>
														<Field 
															name="Industry" 
															component={SelectAdapter} 
															options={industries}
															onChange={this._onChoiceCountry}
														/>
													</div>
												</div>
												<div className='input-field-container-for-popup'>
													<label className='label-for-fileld'>Win chance</label>
													<div className='field-wrapper'>
														<InputRange
															name="WinChance"
															onChange={() =>{return 1}}
															maxValue={100}
															minValue={0} 
															value={ Number(tableCurrentRow.WinChance) }
															/>
													</div>
												</div>
												<div className='input-field-container-for-popup'>
													<label className='label-for-fileld'>Status</label>
													<div className='field-wrapper'>
														<Field 
															name="Employed" 
															component="input" 
															type="checkbox"
															value
														/>
														<label>is active</label>
													</div>
												</div>
											</div>	
											
										</div>
										<div className='buttons-wrapper'>
											<div className='buttons-container'>
												<Button
													className = 'submit-button'
													type="submit"
													variant="contained"
													color="primary">
														Close
												</Button>
												<Button
													className = 'submit-button'
													type="submit"
													variant="contained"
													color="primary">
													Save
												</Button>
											</div>
										</div>
									</form>
							)
						}}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tableData: state.tableReducer.tableData,
		tableCurrentRow: state.tableReducer.tableCurrentRow
	}
}

export default connect(
  mapStateToProps,
  {
		changeTableData
  }
)(TablePopup);