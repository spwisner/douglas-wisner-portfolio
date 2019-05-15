import React from 'react'

const Youtube = ({id}) => (
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
)

export default Youtube