import React from "react";
const ProjectTabs = ({ SiteId, SiteTitle, SiteTarget, SiteAria }) => {
  return (
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id={SiteId}
        data-bs-toggle="pill"
        data-bs-target={SiteTarget}
        type="button"
        role="tab"
        aria-controls={SiteAria}
        aria-selected="true"
      >
        {SiteTitle}
      </button>
    </li>
  );
};

export default ProjectTabs;
