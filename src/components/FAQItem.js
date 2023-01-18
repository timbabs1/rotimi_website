import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import classes from "./css/FAQItem.module.css";

function FAQItem({ item, onExpandAll }) {
  const [status, setStatus] = useState(false);

  function onClickHandler() {
    setStatus(!status);
  }

  return (
    <div onClick={onClickHandler} className={classes.container}>
      {status === false ? (
        <div className={classes.item}>
          <FiChevronRight className={classes.chevron} />
          <p className={classes.question}>{item.question}</p>
        </div>
      ) : (
        <div>
          <div className={classes.itemActive}>
            <FiChevronDown className={classes.chevron} />
            <p className={classes.question}>{item.question}</p>
          </div>
          {item.answer.length === 3 ? (
            item.answer.map((item) => <p className={classes.answer}>{item}</p>)
          ) : (
            <p className={classes.answer}>{item.answer}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FAQItem;
