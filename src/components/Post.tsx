import PostComment from "./PostComment"
import { comments,CommentType } from "../data/comments"
const Post = () => {
	return (
        <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">
    
          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/TunyaK.jpg"></img>
            <span className='font-semibold text-lg text-white'>Tunyakarn Kitchon 630610740</span>
          </div>
    
          {/* status message */}
          <p className='text-white'>Never gonna give you up. Never gonna let you down</p>
    
          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>100 คน</p>
          </div>
        </div>
        <div>
        {comments.map(x=> <PostComment username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies}></PostComment> )}
        </div>
    
    
            </div>
	)
}

export default Post