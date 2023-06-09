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
  isPublic,
}) {
  const [showModal, setShowModal] = useState(isOpen);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setClicked(true);
  }, [clicked]);

  const mark_reserved = useCallback(() => {
    handleClose();
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);
  return (
    showModal && (
      <div className="modal">
        <div className="modal__container">
          <div className="modal__content">
            <button className="modal__close" onClick={handleClose}>
              <img src={closeImg} alt="close img" />
            </button>
            <div className="modal__image_container">
              <img className="modal__image" src={parkImg} alt="parking image" />
            </div>
            <div className="modal__wrapper">
              <div className="modal__title">
                {isPublic ? "public" : "Parking Spot"}
              </div>
              {/* {isPublic && (
                <>
                  <div className="modal__price">{price}$/per hour</div>
                  <div>Available</div>
                </>
              )} */}
              {/* {!isPublic && ( */}
              <>
                <div className="modal__name">Name: {name}</div>
                <div className="modal__number">phone number: {number}</div>
                <div className="modal__price">{price}$/per hour</div>
                <div className="modal__distance">distance: {distance}km</div>
                <div className="modal__rating">
                  <img src={rating} alt="rating image" />
                </div>
              </>
              {/* )} */}
            </div>
          </div>
          <div className="modal__buttons">
            {/* <div className="modal__check">
          <button className="modal__check_btn">Check Availability</button>
        </div> */}
            {/* {isPublic && (
              <>
                <button onClick={mark_reserved} className="modal__schedule_btn">
                  Reserve Now
                </button>
              </>
            )} */}
            {/* {!isPublic && ( */}
            <>
              <div className="modal__shcedule">
                <div className="modal__hour_wrapper">
                  <div className="modal__hour">08:00</div>
                  <div className="modal__hour">09:00</div>
                </div>
                <div className="modal__hour_wrapper">
                  <div
                    onClick={setClicked}
                    className={`modal__hour ${clicked && "modal__hour_green"}`}
                  >
                    10:00
                  </div>
                  <div className="modal__hour">11:00</div>
                </div>
                <div className="modal__hour_wrapper">
                  <div onClick={setClicked} className="modal__hour">
                    15:00
                  </div>
                  <div className="modal__hour">17:00</div>
                </div>
                <div className="modal__hour_wrapper">
                  <div className="modal__hour">18:00</div>
                  <div className="modal__hour">19:00</div>
                </div>

                <div className="modal__hour_wrapper">
                  <div className="modal__hour modal__hour_silver">20:00</div>
                  <div className="modal__hour modal__hour_silver">21:00</div>
                </div>

                <button onClick={mark_reserved} className="modal__schedule_btn">
                  Reserve Now
                </button>
              </div>
            </>
            {/* )} */}
          </div>
        </div>
      </div>
    )
  );
}
