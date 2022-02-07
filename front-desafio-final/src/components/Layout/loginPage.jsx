import '../../assets/components/loginPage.css';

function LoginPage(left, right, title, actions, textWithLink) {
  return (
    <div className="body">
      <div className="form-div">
        <form className="form">
          <div className="form-group-left">{left}</div>
          <div className="form-group-right">
            <div>{title}</div>
            {right}
            <div className="form-group-actions">{actions}</div>
            <div className="sing-in">
              <span>{textWithLink}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
