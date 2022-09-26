import { StylesConfig } from 'react-select';

export const desktopSelectStyle: StylesConfig = {
  container: (provided, state) => ({
    ...provided,
    width: '100%',
    marginTop: 8,
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    backgroundColor: '#124B5280',
    borderRadius: 5,
    borderWidth: 0,
    padding: '4px 16px',
    fontSize: 14,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#075E6C80',
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    width: '100%',
    padding: 0,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#FFFFFF66',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    color: '#FFFFFF66',
    backgroundColor: '#124B52',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: '#FFFFFF66',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    visibility: 'hidden',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 0,
    color: '#FFFFFF66',
  }),
  menu: (provided, state) => ({
    ...provided,
    fontSize: 14,
    color: '#FFFFFF66',
    backgroundColor: '#124B52',
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    zIndex: 10,
    fontSize: 14,
    color: '#FFFFFF66',
    backgroundColor: '#124B52',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#075E6C',
    },
  }),
};

export const mobileSelectStyle: StylesConfig = {
  container: (provided, state) => ({
    ...provided,
    width: '100%',
    marginTop: 8,
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 0,
    padding: '4px 16px',
    fontSize: 14,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    width: '100%',
    padding: 0,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#FFFFFF66',
    textAlign: 'center',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    color: '#FFFFFF66',
    backgroundColor: 'transparent',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: '#FFFFFF66',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    visibility: 'hidden',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 0,
    color: '#FFFFFF66',
  }),
  menu: (provided, state) => ({
    ...provided,
    fontSize: 14,
    color: '#FFFFFF66',
    backgroundColor: '#124B52',
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    zIndex: 10,
    fontSize: 14,
    color: '#FFFFFF66',
    backgroundColor: '#124B52',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#075E6C',
    },
  }),
};

export const influenceStatusSelectStyle: StylesConfig = {
  container: (provided, state) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    backgroundColor: '#243034',
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#CCCCCC80',
    padding: '4px 8px',
    fontSize: 12,
    minHeight: 20,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#075E6C80',
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    width: '100%',
    padding: 0,
    margin: 0,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#FFFFFF80',
    margin: 0,
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#FFFFFF80',
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 0,
    color: '#FFFFFF80',
    height: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  menu: (provided, state) => ({
    ...provided,
    fontSize: 12,
    color: '#FFFFFF80',
    backgroundColor: '#243034',
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    zIndex: 10,
    fontSize: 12,
    color: '#FFFFFF80',
    backgroundColor: '#243034',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#075E6C',
    },
  }),
};

export const influencesSortSelectStyle: StylesConfig = {
  container: (provided, state) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    backgroundColor: '#04434D',
    borderRadius: 3,
    borderWidth: 0,
    padding: '4px 8px',
    fontSize: 12,
    minHeight: 20,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#075E6C80',
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    width: '100%',
    padding: 0,
    margin: 0,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#FFFFFF64',
    margin: 0,
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#FFFFFF64',
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 0,
    color: '#10E98C',
    height: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  menu: (provided, state) => ({
    ...provided,
    fontSize: 12,
    color: '#FFFFFF64',
    backgroundColor: '#04434D',
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    zIndex: 10,
    fontSize: 12,
    color: '#FFFFFF64',
    backgroundColor: '#04434D',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#075E6C',
    },
  }),
};
