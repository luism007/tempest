import React from "react"

export const Card: React.FC<{key?: any, title: string, subtitles?: any[], description?: string, image?: string}> = (props) => {
    return <div key = {props?.key} className="card-wrapper">
        <h2>{props.title}</h2>
        {props?.subtitles && props?.subtitles.map((subtitle) => <h3> { subtitle } </h3>)}
        <p>{props.description}</p>
    </div>
}