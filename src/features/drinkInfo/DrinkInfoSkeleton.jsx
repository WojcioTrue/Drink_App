import "../../styles/drink_info_skeleton.css";

const DrinkInfoSkeleton = () => {
  return (
    <div className="skeleton-info">
      <div className="skeleton-info__img-container">
        <div className="skeleton-info__img"></div>
      </div>

      <div className="skeleton-info__description">
        <div className="skeleton-info-header4"></div>
        <div className="skeleton-info-add-button"></div>
        <div className="skeleton-separator"></div>
        <div className="skeleton-info-header3"></div>
        <div className="skeleton-info-paragraph"></div>
        <div className="skeleton-info-paragraph"></div>
        <div className="skeleton-separator"></div>
        <div className="skeleton-info-header3"></div>
        <div className="skeleton-info-paragraph"></div>
        <div className="skeleton-separator"></div>
        <div className="skeleton-info-header3"></div>
        <div className="skeleton-info-paragraph"></div>
      </div>
    </div>
  );
};

export default DrinkInfoSkeleton;
