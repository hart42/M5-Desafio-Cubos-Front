import React from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const style = {
  info: {
    float: 'right'
  }
};

export default class CustomRulesForm extends React.Component {
  constructor(props) {
    super(props);

    // custom rule will have name 'isPasswordMatch'
    if (!ValidatorForm.hasValidationRule('isPasswordMatch')) {
      ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        const { formData } = this.state;
        if (value !== formData.password) {
          return false;
        }
        return true;
      });
    }

    this.state = {
      formData: {
        password: '',
        repeatPassword: ''
      },
      submitted: false
    };
  }

  componentWillUnmount() {
    if (ValidatorForm.hasValidationRule('isPasswordMatch')) {
      ValidatorForm.removeValidationRule('isPasswordMatch');
    }
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    if (event.target.name === 'password') {
      this.form.isFormValid(false);
    }
    this.setState({ formData });
  };

  render() {
    const { formData } = this.state;
    return (
      <ValidatorForm ref={(r) => (this.form = r)} onSubmit={this.handleSubmit}>
        <div style={style.info}>
          {ValidatorForm.hasValidationRule('isPasswordMatch') ? true : false}
        </div>
        <TextValidator
          label="Password"
          onChange={this.handleChange}
          name="password"
          type="password"
          validators={['required']}
          errorMessages={['this field is required']}
          value={formData.password}
        />
        <br />
        <TextValidator
          label="Repeat password"
          onChange={this.handleChange}
          name="repeatPassword"
          type="password"
          validators={['isPasswordMatch', 'required']}
          errorMessages={['password mismatch', 'this field is required']}
          value={formData.repeatPassword}
        />
      </ValidatorForm>
    );
  }
}
