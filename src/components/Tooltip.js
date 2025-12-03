import React, { useState } from 'react'

const Tooltip = ({text, children}) => {
    const [display, setdisplay] = useState(false)

    return (
        <div className='tooltip'
            onMouseEnter={() => setdisplay(true)}
            onMouseLeave={() => setdisplay(false)}
        >

        {children}

            {display && <div className='tooltiptext'>{text}</div>}
        </div>
    )
}

export default Tooltip