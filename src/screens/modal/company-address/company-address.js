import React, {Component} from 'react';
import {Field, initialize} from 'redux-form';
import t from 'locales/use-translation';
import {IProps, IStates} from './company-address-type.d';
import {COMPANY_ADDRESS_FORM} from 'stores/company/types';
import {
  BaseButton,
  ModalLayout,
  BaseInput,
  BaseButtonGroup
} from '@/components';

export default class CompanyAddress extends Component<IProps, IStates> {
  constructor(props) {
    super(props);
    this.state = {isFetchingInitialData: true};
  }

  componentDidMount(): void {
    this.loadData();
  }

  loadData = () => {
    const {dispatch, selectedCompany} = this.props;
    dispatch(initialize(COMPANY_ADDRESS_FORM, selectedCompany?.address));
    this.setState({isFetchingInitialData: false});
  };

  onSave = values => {
    const {dispatch} = this.props;
    const params = {...values, address: values};
    // dispatch(updateCompany(params));
  };

  render() {
    const {handleSubmit, isSaving} = this.props;
    const {isFetchingInitialData} = this.state;

    const bottomAction = (
      <BaseButtonGroup>
        <BaseButton
          loading={isSaving}
          disabled={isFetchingInitialData}
          onPress={handleSubmit(this.onSave)}
        >
          {t('button.save')}
        </BaseButton>
      </BaseButtonGroup>
    );

    return (
      <ModalLayout
        title={t('modal.company_address')}
        sub-title={t('modal.sales_tax_heading')}
        bottomAction={bottomAction}
        loadingProps={{is: isFetchingInitialData}}
      >
        <Field
          name="address_street_1"
          component={BaseInput}
          hint={t('settings.company.address')}
          height={60}
          placeholder={t('settings.company.street_1')}
          inputProps={{multiline: true}}
          isRequired
        />

        <Field
          name="address_street_2"
          component={BaseInput}
          height={60}
          placeholder={t('settings.company.street_2')}
          inputProps={{multiline: true}}
          containerStyle={{marginTop: -15}}
        />

        <Field
          name="city"
          component={BaseInput}
          hint={t('customers.address.city')}
          isRequired
        />

        <Field
          name="state"
          component={BaseInput}
          hint={t('customers.address.state')}
          isRequired
        />

        <Field
          name="zip"
          component={BaseInput}
          hint={t('settings.company.zip_code')}
          isRequired
        />
      </ModalLayout>
    );
  }
}
