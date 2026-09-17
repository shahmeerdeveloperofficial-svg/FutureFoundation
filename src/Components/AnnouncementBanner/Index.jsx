import "./AnnouncementBanner.css";

export const AnnouncementBanner = () => {
  return (
    <div className="announcement_banner">
      <div className="announcement_marquee">
        <div className="announcement_group">
          <span className="announcement_text announcement_text_red">
            Admissions Open 2026-2027 |
          </span>
          <span className="announcement_text announcement_text_blue">
            <strong>Future Foundation School & College</strong>
          </span>
          <span className="announcement_text announcement_text_red">
            {" "} | Play Group to F.Sc. |
          </span>
          <span className="announcement_text announcement_text_blue">
            Apply Now for Quality Education!
          </span>
        </div>
        <div className="announcement_group" aria-hidden="true">
          <span className="announcement_text announcement_text_red">
            Admissions Open 2026-2027 |
          </span>
          <span className="announcement_text announcement_text_blue">
            <strong>Future Foundation School & College</strong>
          </span>
          <span className="announcement_text announcement_text_red">
            {" "} | Play Group to F.Sc. |
          </span>
          <span className="announcement_text announcement_text_blue">
            Apply Now for Quality Education!
          </span>
        </div>
      </div>
    </div>
  );
};
