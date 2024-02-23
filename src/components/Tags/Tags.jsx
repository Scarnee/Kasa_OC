import React, { useState, useEffect } from "react";

import "./tags.css";

function Tags({ tagList }) {
    let [tags, setTags] = useState([]);

    // Creating list of tags
    useEffect(() => {
        setTags(tagList);
    }, []);

    return (
        <ul className="tagsList">
            {/* Mapping on tags list */}
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </ul>
    );
}

export default Tags;
