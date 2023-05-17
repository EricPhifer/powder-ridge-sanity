import React, { useCallback } from 'react';
import {StringInputProps, set, unset} from 'sanity'

const formatMoney = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export default function FormatMoney(props: StringInputProps) {
const {onChange, value = 'number', elementProps } = props
const handleChange = useCallback(
  (event: React.ChangeEvent<HTMLInputElement>) => onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()),[onChange]
)
  return (
    <div>
      <h2>
        In US Dollars - {value ? formatMoney(value / 100) : null}
      </h2>
      <p>Enter the amount, with cents and no decimal. It will auto convert above.</p>
      <input
        {...elementProps}
        value={value}
        onChange={handleChange}
        type='number'
      />
    </div>
  );
}

FormatMoney.displayName = 'FormatMoney';

// maybe remove?
FormatMoney.focus = function () {
  this._inputElement.focus();
};
