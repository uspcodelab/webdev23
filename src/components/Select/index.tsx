import { StyledWrapper, StyledOptions } from './styled';

interface SelectProps<T extends number | string> {
  options: {
    label: string;
    value: T;
  }[];
  selectedValue?: T;
  onChange: (value: T) => void;
}

const Select = <T extends number | string>({
  options,
  onChange,
  selectedValue
}: SelectProps<T>) => (
  <StyledWrapper>
    {options.map(({ label, value }) => (
      <StyledOptions
        selected={selectedValue === value}
        onClick={() => onChange(value)}
        key={value}
      >
        {label}
      </StyledOptions>
    ))}
  </StyledWrapper>
);

export default Select;
