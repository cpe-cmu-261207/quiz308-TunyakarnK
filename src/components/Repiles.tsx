import { comments,CommentType } from "../data/comments"
const Repiles = ({username,userImagePath,commentText,likeNum,replies}:CommentType) => {
	return (
		<div className="">

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/puppy.jpg"></img>
            <div className="bg-gray-500 rounded-lg p-2">
              <p className="font-semibold text-white">{replies}</p>
              <p className='text-white'>เม้นค้าบ</p>
            </div>
          </div>
          </div>
	)
}

export default Repiles