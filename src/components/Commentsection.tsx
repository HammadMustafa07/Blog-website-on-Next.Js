'use client'

import { useState } from "react";

const Commentsection = () => {
   const [comment, setComment] = useState("");
   const [comments, setComments] = useState<string[]>([]);

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (comment.trim()) {
         setComments([comment, ...comments]);
         setComment("");
      }
   };
   return (
      <div className="h-[400px] max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
         <h2 className="text-2xl font-bold mb-4">Comment Section</h2>

         <form onSubmit={handleSubmit} className="mb-4">
            <textarea
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               className="w-full p-3 border-gray-300 rounded-md focus:outline-none
            focus:ring-2 focus:ring-black"
               placeholder="Write a comment..."
            />
            <button
               type="submit"
               className="mt-2 w-full bg-blue-900 text-white rounded-md hover:bg-black
             focus:outline-none active:bg-gray-400"
            >
               Submit Comment
            </button>
         </form>

         <div>
            <h3 className="text-xl font-semibold mb-2">Comments:</h3>
            <div className="space-y-4">
               {comments.length > 0 ? (
                  comments.map((comment, index) => (
                     <div key={index} className="p-4 bg-gray-100 rounded-lg">
                        <p>{comment}</p>
                     </div>
                  ))
               ) : (
                  <p>No Comments yet. Be the first one to comment!</p>
               )}
            </div>
         </div>
      </div>
          
    )
};

export default Commentsection;