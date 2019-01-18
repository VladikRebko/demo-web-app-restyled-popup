import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Field } from "react-final-form";
import TextField from "../login/textField";
import Button from '@material-ui/core/Button';
import InputRange from 'react-input-range';
import Select from 'react-select';

import {countries, industries } from './data';

import { changeTableData } from '../../redux/actions/tableActions/tableActions.js';

import './popup.css';
import 'react-input-range/lib/css/index.css'

const SelectAdapter = ({ input, ...rest }) => (
  <Select {...input} {...rest} searchable />
)

class TablePopup extends Component {
	
	_getTableElement = () => {
    const { tableRowId, tableData } = this.props;

    return tableData.find(element => {
        return Number(element.ID) === Number(tableRowId);
    });
	};

	_onChoiceCountry = (values) =>{
		console.log(values);
	}

  render(){
		const tableRowData = this._getTableElement();
    // isOpen && console.log(this.getTableElement());

    return(

			<div className={'show-popup'}>
				<div className={'popup-wrapper'}>
					<Form
						onSubmit={this._onSubmit}
						initialValues={this._getTableElement()}
						render = { ({handleSubmit}) => {
							return(
								<div className='popup-content'>
									<form className='form-for-popup' onSubmit={handleSubmit}>
										<div className='edit-fields'>
											<div className='fields-container'>
												
												<div className= 'input-field-container-for-popup'>
													<label className='label-for-fileld'>Last Name</label>
													<div className='field-wrapper'>
														<Field
															name="lastName"
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
															name="firstName"
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
															name="email"
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
															name="phone"
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
															name="company"
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
															name="country" 
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
																		name="stooge"
																		component="input"
																		type="radio"
																		value="larry"
																	/>{' '}
																	Female
															</label>
															<label className='label-for-gender-field'>
																	<Field
																		name="stooge"
																		component="input"
																		type="radio"
																		value="moe"
																	/>{' '}
																	Male
															</label>
															<label className='label-for-gender-field'>
																	<Field
																		name="stooge"
																		component="input"
																		type="radio"
																		value="curly"
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
															name="industry" 
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
															maxValue={100}
															minValue={0} />
													</div>
												</div>
												<div className='input-field-container-for-popup'>
													<label className='label-for-fileld'>Status</label>
													<div className='field-wrapper'>
														<Field name="employed" component="input" type="checkbox" />
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
								</div>
							)
						}}
					/>
				</div>
			</div>
		);
	}
}

export default connect(
  (state) => ({
    tableRowId: state.tableReducer.tableRowId,
    tableData: state.tableReducer.tableData
  }),
  {
    changeTableData
  }
)(TablePopup);