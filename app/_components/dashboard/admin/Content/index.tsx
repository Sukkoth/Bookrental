import BookStatus from "./BookStatus";
import EarningSummary from "./EarningSummary";

function Content() {
  return (
    <div>
      {/* book status */}
      <BookStatus />
      {/* earning summary */}
      <EarningSummary />
    </div>
  );
}

export default Content;
