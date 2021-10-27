import * as types from './types.js';

const initialState = {
  languages: [],
  timezones: [],
  dateFormats: [],
  fiscalYears: [],
  currencies: [],
  companies: [],
  isSaving: false,
  isDeleting: false
};

export default function companyReducer(state = initialState, action) {
  const {payload, type} = action;

  switch (type) {
    case types.SPINNER:
      return {...state, [payload.name]: payload.value};

    case types.FETCH_CURRENCIES_SUCCESS:
      return {...state, currencies: payload};

    case types.FETCH_LANGUAGES_SUCCESS:
      return {...state, languages: payload};

    case types.FETCH_TIMEZONES_SUCCESS:
      return {...state, timezones: payload};

    case types.FETCH_DATE_FORMATS_SUCCESS:
      return {...state, dateFormats: payload};

    case types.FETCH_FISCAL_YEARS_SUCCESS:
      return {...state, fiscalYears: payload};

    case types.FETCH_COMPANIES_SUCCESS:
      return {...state, companies: payload};

    case types.ADD_COMPANY_SUCCESS:
      return {
        ...state,
        companies: [...[payload], ...state.companies]
      };

    case types.UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        companies: state.companies.map(company =>
          company.id === payload.id ? payload : company
        )
      };

    case types.REMOVE_COMPANY_SUCCESS:
      return {
        ...state,
        companies: state.companies.filter(({id}) => id !== payload)
      };

    default:
      return state;
  }
}
