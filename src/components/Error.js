import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import image from "../assets/error-image.webp";

export default function Error() {
    return (
        <div className="error">
            <img src={image} alt="error" />
            <Link to="/">
                <Button variant="contained">
                    Go to home
                </Button>
            </Link>
        </div>
    )
}
