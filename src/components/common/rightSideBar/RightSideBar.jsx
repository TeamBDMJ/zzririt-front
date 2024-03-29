import Ad from './Ad';
import SearchKeywordRow from '../../features/popularSearchKeyword/SearchKeywordRow';

function RightSideBar() {
  const popularSearchKeywordData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div key="RightSideBar" className="sticky top-4 space-y-4">
      <div className="p-4 rounded">
        <div className="mt-2 space-y-2">
          {/*<div className="flex items-center justify-between p-2 rounded">*/}
          <div className="pl-3 text-2xl min-h-60">인기 글 순위</div>
          <div>(추후 추가 예정)</div>
          {/*</div>*/}
          {/*<div>*/}
          {/*  {popularSearchKeywordData &&*/}
          {/*    popularSearchKeywordData.map((data, index) => (*/}
          {/*      <SearchKeywordRow data={data} index={index + 1} />*/}
          {/*    ))}*/}
          {/*</div>*/}
        </div>
      </div>
      <Ad />
    </div>
  );
}

export default RightSideBar;
