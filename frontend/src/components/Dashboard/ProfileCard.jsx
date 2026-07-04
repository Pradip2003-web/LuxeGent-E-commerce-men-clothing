import { useState } from "react";
import { Dropdown, Image } from "react-bootstrap";
import founderImg from "../../assets/images/founder.png";
import { useNavigate } from "react-router-dom";

function ProfileCard() {
  const [profileImage, setProfileImage] = useState(founderImg);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/adminLogin");
  };

  return (
    <div
      className="d-flex justify-content-end align-items-center bg-white border-bottom px-3 py-2"
      style={{ height: "60px" }}
    >
      <input
        type="file"
        id="admin-photo-upload"
        accept="image/*"
        className="d-none"
        onChange={handleImageChange}
      />

      <Dropdown align="end">
        <Dropdown.Toggle
          as="div"
          className="d-flex align-items-center bg-transparent border-0 p-0"
          style={{ cursor: "pointer" }}
        >
          <div className="position-relative me-2">
            <Image
              src={profileImage}
              alt="Profile"
              roundedCircle
              width={40}
              height={40}
              className="border"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="text-start d-none d-sm-block">
            <h6
              className="fw-bold mb-0 text-danger"
              style={{ fontSize: "0.85rem" }}
            >
              Julian Vance
            </h6>

            <small className="text-muted">Admin</small>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="shadow border-0 p-3 text-center rounded-4"
          style={{ minWidth: "220px" }}
        >
          <div className="text-muted small mb-2">admin@gmail.com</div>

          <Dropdown.Divider />

          <label
            htmlFor="admin-photo-upload"
            className="dropdown-item rounded-pill"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-camera me-2"></i>
            Change Photo
          </label>

            <Dropdown.Divider />

          <Dropdown.Item className="text-danger" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default ProfileCard;
