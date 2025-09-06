import React from "react";

/**
 * HeaderLinks component renders a list of navigation links.
 *
 * @param {Object[]} links - Array of link objects to display.
 * @param {string} links[].url - The URL for the link.
 * @param {string} links[].label - The display text for the link.
 *
 * @example
 * <HeaderLinks links={[{ url: '/about', label: 'About' }]} />
 */

const HeaderLinks = ({ links }) => {
  
  const linkItems = links.map((link, index) => (
    <div className={index !== links.length - 1 ? 'mr-12' : ''}>
      <p className="mb-0">
        <a href={link.url}>{link.label}</a>
      </p>
    </div>
  ));
  
  return (
    <div className="last_header flex flex-row gap-8 place-content-center py-4">
      {linkItems}
    </div>
  );
};

export default HeaderLinks;

