import React from "react";

export default function TruncText(props) {
    const content = props.children;
    const charNumber = props.charNumber || 400
    return (

        content.substring(0, charNumber) + (content.length > charNumber ? ' ...' : '')

    )
}
