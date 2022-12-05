import React, { useState } from "react";
import { AllCards } from './mock';
import {
  Cards,
  Card
} from './styles';


export function CardsItems() {
  const [flip, setFlip] = useState(-1)
  const [color, setColor] = useState(false)

  const handleClick = (i) => {
    setColor(!color)
    setFlip(i)
  }

  return (
    <Cards>
      {AllCards.map((item, i) => {
        return (
          <Card
            key={item.id}
            onClick={() => handleClick(i)}
            className={flip == i && !color ? 'blackBk' : 'greyBk'}
          >
            <div>
              <div className={flip == i && !color ? 'none' : 'title'}>{item.title}</div>
              <div className={flip == i && !color ? 'description' : 'none'}>{item.description}</div>
            </div>
          </Card>
        )
      })}
    </Cards>
  )
} 