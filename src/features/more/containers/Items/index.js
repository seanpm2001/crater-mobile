import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import * as ItemsAction from '../../actions';
import { Items } from '../../components/Items';
import { ITEM_SEARCH } from '../../constants';
import { getItemUnits } from '@/features/settings/actions';

const mapStateToProps = state => {
    const {
        more: { items, loading },
        global: { currency, locale },
        settings: {
            units,
            loading: { itemUnitsLoading }
        }
    } = state;

    return {
        items,
        loading: loading.itemsLoading,
        locale,
        currency,
        units,
        itemUnitsLoading,
        formValues: getFormValues(ITEM_SEARCH)(state) || {}
    };
};

const mapDispatchToProps = {
    getItems: ItemsAction.getItems,
    getItemUnits: getItemUnits
};
//  Redux Forms
const ItemsSearchReduxForm = reduxForm({
    form: ITEM_SEARCH
})(Items);

//  connect
const ItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsSearchReduxForm);

ItemsContainer.navigationOptions = () => ({
    header: null
});

export default ItemsContainer;
