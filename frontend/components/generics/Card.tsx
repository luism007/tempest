import React from "react"

export const Card: React.FC<{title: string, subtitles?: any[], description?: string, image?: string, onClick?: (e: any)=> void }> = (props) => {
    return <div className="card-wrapper" onClick={props?.onClick}>
        <h2>{props.title}</h2>
        {props?.subtitles && props?.subtitles.map((subtitle) => <h3> { subtitle } </h3>)}
        <p>{props.description}</p>
    </div>
}