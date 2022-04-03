import { forwardRef, useEffect } from 'react'
import { SelectField } from '@redwoodjs/forms'
import { useCountry } from 'src/components/UI/Form/Fields/CountryContext'
import countries from 'src/utils/countries'

type CountrySelectProps = {
  name: string
  defaultValue: string
}

const CountrySelect = forwardRef<HTMLSelectElement, CountrySelectProps>(
  (props, ref) => {
    const { name, defaultValue, ...rest } = props
    const { country, setCountry } = useCountry()

    useEffect(() => {
      if (defaultValue) setCountry(defaultValue)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCountry(e.target.value)
    }

    return (
      <SelectField
        name={name}
        onChange={onChange}
        defaultValue={country}
        ref={ref}
        {...rest}
      >
        <option value="">-- Select --</option>

        {countries.map((option, i) => (
          <option key={i} value={option.name}>
            {option.name}
          </option>
        ))}
      </SelectField>
    )
  }
)

export default CountrySelect
