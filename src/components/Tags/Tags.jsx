import React, { useState, useEffect } from "react";
import './tags.css'

function Tags({tagList}) {
    let [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(tagList);
    }, []);

    return (
        <ul className="tagsList">
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
    );
}

export default Tags;
