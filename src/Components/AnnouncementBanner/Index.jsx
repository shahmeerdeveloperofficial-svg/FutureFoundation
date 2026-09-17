import "./AnnouncementBanner.css";

export const AnnouncementBanner = () => {
  const announcements = [
    { text: "Admissions Open 2026-2027", highlight: true },
    { text: "Future Foundation School & College", strong: true },
    { text: "Play Group to F.Sc.", highlight: true },
    { text: "Apply Now for Quality Education!", strong: false },
  ];

  const renderGroup = (key) => (
    <div className="announcement_group" key={key} aria-hidden={key !== "primary"}>
      {announcements.map((item, idx) => (
        <span
          key={idx}
          className={`announcement_text ${
            item.highlight
              ? "announcement_text_red"
              : item.strong
              ? "announcement_text_blue announcement_text_bold"
              : "announcement_text_blue"
          }`}
        >
          {item.strong ? <strong>{item.text}</strong> : item.text}
          <span className="announcement_separator">|</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="announcement_banner" role="region" aria-label="Announcements">
      <div className="announcement_marquee">
        {renderGroup("primary")}
        {renderGroup("dup1")}
        {renderGroup("dup2")}
        {renderGroup("dup3")}
      </div>
    </div>
  );
};

