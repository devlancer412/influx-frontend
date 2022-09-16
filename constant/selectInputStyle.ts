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
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: 14,
    color: '#FFFFFF66',
    backgroundColor: '#124B52',
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
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: 14,
    color: '#FFFFFF66',
    backgroundColor: '#124B52',
  }),
};
