import React from "react";
export const List: React.FC<{data: React.JSX.Element[]}> = (props) => {
    return (
        props.data.map((d) => d)
    )
}