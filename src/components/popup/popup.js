import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Field } from "react-final-form";
import TextField from "../login/textField";
import Button from '@material-ui/core/Button';
import InputRange from 'react-input-range';

import { changeTableData } from '../../redux/actions/tableActions/tableActions.js';
import { hidePopup } from '../../redux/actions/popupActions/popupActions.js';

import './popup.css';
import 'react-input-range/lib/css/index.css'

class TablePopup extends Component {
	
	_getTableElement = () => {
    const { tableRowId, tableData } = this.props;

    return tableData.find(element => {
        return Number(element.ID) === Number(tableRowId);
    });
  };

  render(){
    const { isPopupOpen } = this.props;
		const tableRowData = this._getTableElement();
    // isOpen && console.log(this.getTableElement());

    return(
    	
			<div className={'popup'}>
       {(
				isPopupOpen &&
					<div className={'show-popup'}>
						<div className={'popup-wrapper'}>
							<Form
								onSubmit={this._onSubmit}
								initialValues={this._getTableElement()}
								render = {(({handleSubmit}) => {
									return(
										<div className='popup-content'>
											<form className='form-for-popup' onSubmit={handleSubmit}>
												<div className='edit-fields'>
													<div className='fields-container'>
														<div className= 'input-field-container'>
															<label className='left-labels'>Last Name</label>
															<Field
																className = 'input-field'
																name="lastName"
																component={TextField}
																type="text"
																label="Last Name"
															/>
														</div>
														<div className= 'input-field-container'>
															<label>First Name</label>
															<Field
																className = 'input-field'
																name="firstName"
																component={TextField}
																type="text"
																label="First Name"
															/>
														</div>
														<div className= 'input-field-container'>
															<label>Email</label>
															<Field
																className = 'input-field'
																name="email"
																component={TextField}
																type="text"
																label="Email"
															/>
														</div>
														<div className= 'input-field-container'>
															<label>Phone</label>
															<Field
																className = 'input-field'
																name="phone"
																component={TextField}
																type="text"
																label="Phone"
															/>
														</div>
														<div className= 'input-field-container'>
															<label>Company</label>
															<Field
																className = 'input-field'
																name="company"
																component={TextField}
																type="text"
																label="Company"
															/>
														</div>
														<div className= 'input-field-container'>
															<label>Country</label>
															<Field className = 'input-field' name="country" component="select">
																<option />
																<option value="#ff0000">Belarus</option>
																<option value="#00ff00">Russia</option>
																<option value="#0000ff">USA</option>
															</Field>
														</div>
														<div className= 'input-field-container'>
															<label>Gender</label>
															<div className='input-field gender-checkboxes'>
																<label>
																	<Field
																		className = 'input-field'
																		name="stooge"
																		component="input"
																		type="radio"
																		value="larry"
																	/>{' '}
																	Female
																</label>
																<label>
																	<Field
																		className = 'input-field'
																		name="stooge"
																		component="input"
																		type="radio"
																		value="moe"
																	/>{' '}
																	Male
																</label>
																<label>
																	<Field
																		className = 'input-field'
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
														<div className= 'input-field-container-for-right-side-toppings'>
															<label className='toppings-label'>Toppings</label>
															<Field className = 'input-field' name="toppings" component="select" multiple>
																<option value="chicken">Accounting</option>
																<option value="ham">Airlines</option>
																<option value="mushrooms">Aviation</option>
																<option value="cheese">Alternative Medicine</option>
																<option value="tuna">Alternative Dispute Resolution</option>
															</Field>
														</div>
														<div className= 'input-field-container-for-right-side-win-chance'>
															<label className='win-chance-label'>Win chance</label>
															<InputRange
																className = 'input-field'
																maxValue={100}
																minValue={0} />
														</div>
														<div className= 'input-field-container-for-right-side-status'>
															<label className='status-label'>Status</label>
															<Field className='checkbox' name="employed" component="input" type="checkbox" />
														</div>
													</div>	
												</div>
												<div className='buttons'>
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
										</form>
									</div>)
							})}/>
						</div>
					</div>
      	)}
  		</div>
		);
	}
}

export default connect(
    (state) => ({
        isPopupOpen: state.popupReducer.isPopupOpen,
        tableRowId: state.popupReducer.tableRowId,
        tableData: state.tableReducer.tableData
    }),
    {
        changeTableData,
        hidePopup
    }
)(TablePopup);