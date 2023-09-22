import React, { useState } from "react";
import config from "../config";
export const usePost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [result, setResult] = useState({});
    // const token = localStorage.getItem("token");

    const fetchPost = async (path, data) => {
        console.log("🚀 ~ file: post.js:13 ~ fetchPost ~ API_URL:", config.API_URL)
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(config.API_URL + path, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (!res.ok) setIsError(true);
                return res.json();
            })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
            });
        setResult(response);
        return response;
    };

    return { isLoading, isError, fetchPost, result };
};
