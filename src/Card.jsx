import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function Card({ card }) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                        {card.plan}
                    </h5>
                    <h6 className="card-price text-center">
                        ${card.price}
                        <span className="card-price text-center">/month</span>
                    </h6>
                    <hr />
                    <ul className="list-unstyled mt-3 mb-4">
                        {card.features.map((feature, index) => {
                            return (
                                <li key={index}>
                                    {feature.enable ? (
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} /> {feature.name}
                                        </span>
                                    ) : (
                                        <span>
                                            <FontAwesomeIcon icon={faXmark} />  {feature.name}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        type="button"
                        className={`w-100 btn btn-lg ${card.plan == "FREE" && "btn-primary"
                            } ${card.plan == "PLUS" && "btn-primary"}
             ${card.plan == "PRO" && "btn-primary"}`}
                    >
                        BUTTON
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;