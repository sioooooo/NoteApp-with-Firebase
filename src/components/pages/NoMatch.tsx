import { Link } from "react-router-dom";
import { memo, FC } from "react";

export const NoMatch: FC = memo(() => {
  return (
    <div>
      <p>このページは存在しません</p>
      <Link to="/">ホームに戻る</Link>
    </div>
  );
});
