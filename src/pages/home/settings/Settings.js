import Sidebar from "../../../components/sidebar/Sidebar";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPic">
            <img src="assets/two.jpg" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPicIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="saalu" className="settingsInput" />
          <label>Email</label>
          <input
            type="text"
            placeholder="saalu@example.com"
            className="settingsInput"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="settingsInput"
          />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
