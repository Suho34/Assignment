function User() {
  return (
    <div className="account-settings">
      <h2 className="account-title">Account Settings</h2>
      <div className="account-info">
        <img src="profile.jpg" alt="Profile Picture" className="profile-pic" />
        <div className="account-details">
          <h3 className="account-name">Marry Doe</h3>
          <p className="account-email">Marry@Gmail.com</p>
        </div>
      </div>
      <p className="account-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default User;
