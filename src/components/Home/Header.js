import React from "react";

export function Header( {items} ) {
    return <div>
        {items.map((item) => (
            <span onclick="location.href='{item.url}';">{item.name}</span>)
        )}
        </div>;
}