import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../App.css'

     const newsArticle =(heading,subtitle)=>(
        <div className='flex'>
          <div>
            <FiberManualRecordIcon/>
          </div>
          <div className="border-b flex-1 pb-2 mt-2 hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer">
              <h3 className="text-sm font-medium text-black cursor-pointer">
                {heading}
              </h3>
              <p className="text-xs text-gray-500">
                {subtitle}
              </p>
            </div>
            </div>
      )

export default function TrendingNow() {
  return (
    <div className="max-w-sm p-4 bg-white !mt-0 widget rounded-sm border">
      <div>
        <h2 className="text-lg font-semibold mb-2">Trending Now</h2>
        <p className="text-gray-500 text-sm mb-4">curated by LinkedIn News</p>
        <div className="space-y-3">
            {newsArticle("DBS Bank India appoints two...","time: 1h ago")}
            {newsArticle('AI takes over google...','time: 2h ago')}
            {newsArticle('New Js Framework...','time: 2h ago')}
            {newsArticle('Hiring shifts to skills...','time: 4h ago')}
            {newsArticle('Gold prices fall by 10%','time: 1d ago')}
        </div>
      </div>
    </div>
  );
}
