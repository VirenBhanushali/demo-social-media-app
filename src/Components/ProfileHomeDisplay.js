import { useSelector } from "react-redux";
import classes from "./ProfileHomeDisplay.module.css";

function ProfileHomeDisplay() {
  const usernameEmail = useSelector((val) => val.userSlice.email);
  const fName = useSelector((val) => val.userSlice.firstName);
  const lName = useSelector((val) => val.userSlice.lastName);
  console.log(fName);

  return (
    <div className={classes.profileHomeContainer}>
      <div className={classes.profile}>
        <div className={classes.profilePic}>
          <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"></img>
        </div>
        <div className={classes.profileInfo}>
          <div className={classes.UserName}>{usernameEmail}</div>
          <p className={classes.name}>
            {fName} {lName}
          </p>
        </div>
      </div>
      <div className={classes.switchButton}>
        <button className={classes.swicthBtnHome}> Switch</button>
      </div>
      <div className={classes.links}>
        <div>About</div>
        <div>Help</div>
        <div>Privacy</div>
      </div>
    </div>
  );
}

export default ProfileHomeDisplay;
