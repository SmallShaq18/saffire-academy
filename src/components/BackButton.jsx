import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {

    const navigate = useNavigate()
    
    return (
        <div>
        <button onClick={() => navigate(-1)} className="text-white d-md btn btn-md btn-outline-light"
            style={{position: "absolute", top: "15%"}}>
        ← Back
      </button>
        </div>
    )}
