import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Field } from "react-final-form";
import TextField from "../login/textField";
import Button from '@material-ui/core/Button';
import InputRange from 'react-input-range';

import { changeTableData } from '../../redux/actions/tableActions/tableActions.js';

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
		const tableRowData = this._getTableElement();
    // isOpen && console.log(this.getTableElement());

    return(

			<div className={'show-popup'}>
				<div className={'popup-wrapper'}>
					<Form
						onSubmit={this._onSubmit}
						initialValues={this._getTableElement()}
						render = {({handleSubmit}) => {
							return(
								<div className='popup-content'>
									<form className='form-for-popup' onSubmit={handleSubmit}>
										<div className='edit-fields'>
											<div className='fields-container'>
												
												<div className= 'input-field-container-for-popup'>
													<label>Last Name</label>
													<Field
														name="lastName"
														component={TextField}
														type="text"
														label="Last Name"
													/>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label>First Name</label>
													<Field
														name="firstName"
														component={TextField}
														type="text"
														label="First Name"
													/>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label>Email</label>
													<Field
														name="email"
														component={TextField}
														type="text"
														label="Email"
													/>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label>Phone</label>
													<Field
														name="phone"
														component={TextField}
														type="text"
														label="Phone"
													/>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label>Company</label>
													<Field
														name="company"
														component={TextField}
														type="text"
														label="Company"
													/>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label>Country</label>
													<Field className = 'input-field' name="country" component="select">
														<option />
														<option value="#ff0000">Belarus</option>
														<option value="#00ff00">Russia</option>
														<option value="#0000ff">USA</option>
													</Field>
												</div>

												<div className= 'input-field-container-for-popup'>
													<label>Gender</label>
													<div>
														<label>
															<Field
																name="stooge"
																component="input"
																type="radio"
																value="larry"
															/>{' '}
															Female
														</label>
														<label>
															<Field
																name="stooge"
																component="input"
																type="radio"
																value="moe"
															/>{' '}
															Male
														</label>
														<label>
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
													<label>Toppings</label>
													<Field name="toppings" component="select" multiple>
														<option value="chicken">Accounting</option>
														<option value="ham">Airlines</option>
														<option value="mushrooms">Aviation</option>
														<option value="cheese">Alternative Medicine</option>
														<option value="tuna">Alternative Dispute Resolution</option>
													</Field>
												</div>
												<div className='input-field-container-for-popup'>
													<label>Win chance</label>
													<InputRange
														maxValue={100}
														minValue={0} />
												</div>
												<div className='input-field-container-for-popup'>
													<label>Status</label>
													<Field name="employed" component="input" type="checkbox" />
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