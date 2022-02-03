import React, { useCallback, useEffect, useState } from 'react'

import { Checkbox, FormControlLabel, Slider } from '@mui/material'
import { Filters as FiltersType } from '../../features/reviews/types'
import { Channel } from '../../constants'

import styles from './Filters.module.css'
import { useSelector } from 'react-redux'
import { selectFilters } from '../../features/reviews/selectors'

interface FiltersProps {
  onFiltersChange(filters: FiltersType): void
}

function valuetext(value: number) {
  return `${value}`
}

export const Filters: React.FC<FiltersProps> = React.memo(
  ({ onFiltersChange }) => {
    const filters = useSelector(selectFilters)
    const [score, setScore] = useState<FiltersType['score']>(filters.score)
    const [channels, setChannels] = useState<FiltersType['channels']>(
      filters.channels
    )

    const handleScoreChange = useCallback(
      (event: React.SyntheticEvent | Event, value: number | Array<number>) => {
        setScore(Array.isArray(value) ? value[0] : value)
      },
      []
    )

    const handleChannelChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target
        if (checked) {
          setChannels([...channels, name as Channel])
        } else {
          setChannels(channels.filter((channel: Channel) => channel !== name))
        }
      },
      [channels]
    )

    useEffect(() => {
      onFiltersChange({ channels, score })
    }, [score, channels, onFiltersChange])

    return (
      <div className={styles.filters}>
        <div className={styles.score}>
          <p>Minimum score</p>
          <Slider
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            onChangeCommitted={handleScoreChange}
            step={0.1}
            marks
            min={3}
            max={5}
          />
        </div>
        <div className={styles.channels}>
          <p className={styles.label}>Channels</p>
          {Object.keys(Channel).map((item) => (
            <FormControlLabel
              key={item}
              label={item}
              control={
                <Checkbox
                  name={item}
                  onChange={handleChannelChange}
                  defaultChecked={true}
                />
              }
            />
          ))}
        </div>
      </div>
    )
  }
)
