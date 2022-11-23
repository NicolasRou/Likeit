import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Social() {
  return (
    <div className="w-1/6 flex gap-2.5 justify-end">
      <div>
        <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "30px" }} />
      </div>
      <div>
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "30px" }} />
      </div>
    </div>
  );
}

export default Social;
                                                                                                                                                