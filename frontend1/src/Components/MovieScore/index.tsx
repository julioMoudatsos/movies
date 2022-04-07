import React from 'react'
import { MovieStars } from '../MovieStars'

export const MovieScore = () => {
  const score =9;
  const count = 3;
  return (
    <div className="dsmovie-score-container">
    <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <MovieStars />
    <p className="dsmovie-score-count">{count} avaliações</p>
</div>
  )
}
