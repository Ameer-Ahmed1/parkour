import React from "react";

import { useCallback, useState, useEffect } from "react";
import parkImg from "../../images/parking.png";
import closeImg from "../../images/close.png";
import rating from "../../images/rating.png";

export default function Modal({
  name,
  onClose,
  isOpen,
  number,
  distance,
  price,
}) {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={handleClose}>
          <img src={closeImg} alt="close img" />
        </button>
        <div className="modal__image_container">
          <img className="modal__image" src={parkImg} alt="parking image" />
        </div>
        <div className="modal__wrapper">
          <div className="modal__title">Parking Spot</div>
          <div className="modal__name">Name: {name}</div>
          <div className="modal__number">phone number: {number}</div>
          <div className="modal__price">xxx$ /per hour</div>
          <div className="modal__distance">distance: xx km</div>
          <div className="modal__rating">
            <img src={rating} alt="rating image" />
          </div>
        </div>
        <div className="modal__buttons">
          {/* <div className="modal__check">
          <button className="modal__check_btn">Check Availability</button>
        </div> */}
          <div className="modal__shcedule">
            <button className="modal__schedule_btn">Shedule now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
