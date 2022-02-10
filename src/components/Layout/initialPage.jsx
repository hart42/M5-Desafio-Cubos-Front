import '../../assets/components/initialPage.css';

function InitialPage(left, right, title, actions, textWithLink) {
  return (
    <div className="body">
      <div className="form-div">
        <form className="form">
          <div className="form-group-left">{left}</div>
          <div className="form-group-right">
            <div className="form-group-right-title">{title}</div>
            <div className="form-group-right-content">{right}</div>
            <div className="form-group-actions">{actions}</div>
            <div className="sing-in">
              <div>{textWithLink}</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default InitialPage;
