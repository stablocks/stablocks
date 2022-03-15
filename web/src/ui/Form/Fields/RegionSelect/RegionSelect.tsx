import { forwardRef, useEffect } from 'react'
import { SelectField } from '@redwoodjs/forms'
import { useCountry } from 'src/ui/Form/Fields/CountryContext'
import countries from 'src/utils/countries'

type RegionSelectProps = {
  name: string
  defaultValue: string
}

const RegionSelect = forwardRef<HTMLSelectElement, RegionSelectProps>(
  (props, ref) => {
    const { name, defaultValue, ...rest } = props
    const { country } = useCountry()

    const regions = countries.find((option) => option.name === country)?.regions

    return (
      <SelectField
        name={name}
        defaultValue={defaultValue}
        disabled={!regions ? true : false}
        ref={ref}
        {...rest}
      >
        {regions && regions.length > 0 && (
          <>
            <option>-- Select --</option>

            {regions.map((option, i) => (
              <option key={i} value={option.name}>
                {option.name}
              </option>
            ))}
          </>
        )}
      </SelectField>
    )
  }
)

export default RegionSelect
