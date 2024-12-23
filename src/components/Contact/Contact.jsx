import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      <div className={styles.contactContent}>
        <div className={styles.icons}>
          <i className="fas fa-user"></i>
          <i className="fas fa-phone"></i>
        </div>
        <div className={styles.nameAndNumber}>
          <span className={styles.name}>{name}</span>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
