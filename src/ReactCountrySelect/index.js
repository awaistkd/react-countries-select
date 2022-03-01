import React from "react";
import { countries } from "./countries";
import Select, { components } from "react-select";
import { CountryFlag, DropDownIconContainer, OptionContainer, OptionText, SelectedValueContainer } from "./styles";

const MyOption = (props) => {
    const { innerProps, innerRef } = props;

    return (
        <OptionContainer ref={innerRef} {...innerProps}>
            <CountryFlag src={props.data.label.icon} alt="" />
            <OptionText>{props.data.label.name}</OptionText>
        </OptionContainer>
    );
};

const ValueContainer = ({ children, ...props }) => {
    const { getValue, hasValue } = props;
    if (!hasValue) {
        return (
            <components.ValueContainer {...props}>
                {children}
            </components.ValueContainer>
        );
    }

    const option = getValue()[0];

    return (
        <components.ValueContainer {...props}>
            <SelectedValueContainer>
                <CountryFlag src={option.label.icon} alt="" />
                <OptionText>{option.label.name}</OptionText>
            </SelectedValueContainer>
        </components.ValueContainer>
    );
};

const Seprator = () => {
    return <></>
}

const DropDownIcon = (props) => (
    <DropDownIconContainer>
        <svg
            width={12}
            height={8}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m1 1.5 5 5 5-5"
                stroke="#667085"
                strokeWidth={1.667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </DropDownIconContainer>
)

const ReactCountrySelect = () => {

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            width: '100%',
            height: '44px',
            borderRadius: '8px',
            border: '1px solid #D0D5DD',
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
            background: '#FFFFFF'
        })
    };

    const countryOptions = [];

    for (const [key, value] of Object.entries(countries)) {
        countryOptions.push({
            value: key,
            label: {
                name: value,
                icon: require(`./flags/${key}.svg`)
            }
        });
    }

    return <Select 
        options={countryOptions}
        getOptionLabel={ x => x.label.name}
        getOptionValue={ x => x.value}
        styles={customStyles}
        onChange={ (option) => { console.log(option) } }
        components={{
            Option: MyOption,
            IndicatorSeparator: Seprator,
            ValueContainer,
            DropdownIndicator: DropDownIcon
        }}
    />
};

export default ReactCountrySelect;
