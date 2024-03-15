"use client"
import React from 'react'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/text-reveal-card'

const SliderShow = () => {
  return (
    <div className="flex items-center justify-center  rounded-2xl w-full my-2">
      <TextRevealCard
        text="Hover me"
        revealText="I know you like it "
      >
        <TextRevealCardTitle>
          Check this new trick
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  )
}

export default SliderShow