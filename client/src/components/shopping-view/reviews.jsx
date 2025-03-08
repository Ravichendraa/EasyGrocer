import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReviews, updateReview } from '@/store/shop/review-slice';
import StarRatingComponent from '../common/star-rating'; // Import the StarRatingComponent
import { Dialog } from '../ui/dialog';
import { Button } from '../ui/button';

function ShoppingReviews() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { userReviews, isLoading, error } = useSelector((state) => state.shopReview);
  const [editReview, setEditReview] = useState(null);
  const [newRating, setNewRating] = useState(0);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (user) {
      console.log("Fetching reviews for user ID:", user.id); // Log the user ID
      dispatch(fetchUserReviews(user.id));
    }
  }, [dispatch, user]);

  const handleEditClick = (review) => {
    setEditReview(review);
    setNewRating(review.reviewValue);
    setNewMessage(review.reviewMessage);
  };

  const handleSaveClick = () => {
    dispatch(updateReview({ ...editReview, reviewValue: newRating, reviewMessage: newMessage })).then(() => {
      dispatch(fetchUserReviews(user.id)); // Rerender the total rating after updating
    });
    setEditReview(null);
  };

  if (isLoading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p>Error fetching reviews: {error}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Reviews</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userReviews && userReviews.length > 0 ? (
              userReviews.map((review) => (
                <tr key={review._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          src={review.productId.image || '/images/placeholder.png'}
                          alt={review.productId.title || 'Product Image'}
                          className="object-cover w-full h-full rounded"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{review.productId.title || 'Product'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StarRatingComponent rating={review.reviewValue} handleRatingChange={null} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{review.reviewMessage}</div>
                    <div className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button onClick={() => handleEditClick(review)}>Edit Review</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  You haven't written any reviews yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editReview && (
        <Dialog open={true} onOpenChange={() => setEditReview(null)}>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Edit Review</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <StarRatingComponent rating={newRating} handleRatingChange={setNewRating} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Review</label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setEditReview(null)} className="mr-2">Cancel</Button>
              <Button onClick={handleSaveClick}>Save</Button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default ShoppingReviews;