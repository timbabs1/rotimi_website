import { useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import classes from './css/FAQItem.module.css'
import { v4 as uuidv4 } from 'uuid'

function FAQItem({ item, onExpandAll }) {
    const [status, setStatus] = useState(false)

    function onClickHandler() {
        setStatus(!status)
    }

    return (
        <div onClick={onClickHandler} className={classes.container}>
            <>
                <div className={status === false ? classes.item : classes.itemActive}>
                    {status === false ? <FiChevronRight className={classes.chevron} /> : <FiChevronDown className={classes.chevron} />}
                    <p className={classes.question}>{item.question}</p>
                </div>
                {item.answer.length === 3 ? (
                    <div className={classes.answer}>
                        {item.answer.map(item => (
                            <p
                                key={`paragraph ${item}`}
                                style={{
                                    visibility: status === false ? 'hidden' : 'visible',
                                    transition: 'opacity 0.5s linear',
                                    opacity: status === false ? 0 : 1,
                                    position: 'relative',
                                    height: status === false ? 0 : '100%',
                                }}
                                className={classes.answer}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                ) : (
                    <p
                        style={{
                            visibility: status === false ? 'hidden' : 'visible',
                            transition: 'opacity 0.5s linear',
                            opacity: status === false ? 0 : 1,
                            position: 'relative',
                            height: status === false ? 0 : '100%',
                        }}
                        className={classes.answer}
                    >
                        {item.answer}
                    </p>
                )}
            </>
        </div>
    )
}

export default FAQItem
