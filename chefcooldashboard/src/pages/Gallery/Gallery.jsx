import { useEffect, useState } from 'react';
import { SocialBadge } from '../Jobs/Jobs';
import { facebookblack, instablack, linkedinblack, youtubeblack } from '../../assets/assets';

// Mock data for gallery images
const mockGalleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', title: 'Gourmet Dish', alt: 'Beautiful plated dish' },
  { id: 2, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400', title: 'Culinary Art', alt: 'Food preparation' },
  { id: 3, url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400', title: 'Fresh Salad', alt: 'Healthy salad bowl' },
  { id: 4, url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', title: 'Pizza Perfection', alt: 'Delicious pizza' },
  { id: 5, url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400', title: 'Pancakes', alt: 'Stack of pancakes' },
  { id: 6, url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400', title: 'Breakfast Bowl', alt: 'Healthy breakfast' },
  { id: 7, url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', title: 'Burger Delight', alt: 'Gourmet burger' },
  { id: 8, url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400', title: 'Pasta Dish', alt: 'Italian pasta' },
  { id: 9, url: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400', title: 'Coffee Art', alt: 'Latte art' },
  { id: 10, url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400', title: 'Dessert Time', alt: 'Sweet dessert' },
  { id: 11, url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', title: 'Sushi Platter', alt: 'Japanese sushi' },
  { id: 12, url: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400', title: 'Cooking Process', alt: 'Chef cooking' },
  { id: 13, url: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400', title: 'Avocado Toast', alt: 'Healthy toast' },
  { id: 14, url: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400', title: 'Smoothie Bowl', alt: 'Colorful smoothie' },
  { id: 15, url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', title: 'Ramen Bowl', alt: 'Asian ramen' },
  { id: 16, url: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400', title: 'Taco Tuesday', alt: 'Mexican tacos' },
  { id: 17, url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400', title: 'Cooking Action', alt: 'Chef at work' },
  { id: 18, url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400', title: 'Healthy Greens', alt: 'Green salad' },
  { id: 19, url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400', title: 'Brunch Time', alt: 'Brunch spread' },
  { id: 20, url: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400', title: 'Baking Love', alt: 'Fresh baked goods' },
  { id: 21, url: 'https://images.unsplash.com/photo-1585238341710-4a099b127255?w=400', title: 'Steak Dinner', alt: 'Grilled steak' },
  { id: 22, url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400', title: 'Ice Cream', alt: 'Sweet ice cream' },
  { id: 23, url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400', title: 'Sandwich Art', alt: 'Gourmet sandwich' },
  { id: 24, url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400', title: 'Burger Bar', alt: 'Burger and fries' },
  { id: 25, url: 'https://images.unsplash.com/photo-1558736618-3171d2454aae?w=400', title: 'Eggs Benedict', alt: 'Classic breakfast' },
  { id: 26, url: 'https://images.unsplash.com/photo-1547928576-47e3be63c3d6?w=400', title: 'Fresh Juice', alt: 'Healthy drinks' },
  { id: 27, url: 'https://images.unsplash.com/photo-1599974861368-1047e2d9e36e?w=400', title: 'Chef Special', alt: 'Signature dish' },
  { id: 28, url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400', title: 'Soup Bowl', alt: 'Warm soup' },
  { id: 29, url: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400', title: 'Cheese Board', alt: 'Artisan cheese' },
  { id: 30, url: 'https://images.unsplash.com/photo-1562007908-17c67e878c88?w=400', title: 'Wine Pairing', alt: 'Wine and food' },
  { id: 31, url: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400', title: 'Chocolate Cake', alt: 'Decadent dessert' },
  { id: 32, url: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400', title: 'Fruit Platter', alt: 'Fresh fruits' },
  { id: 33, url: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', title: 'Croissant', alt: 'French pastry' },
  { id: 34, url: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=400', title: 'Donuts', alt: 'Sweet donuts' },
  { id: 35, url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400', title: 'BBQ Ribs', alt: 'Grilled ribs' },
  { id: 36, url: 'https://images.unsplash.com/photo-1560717845-968905f2502c?w=400', title: 'Food Styling', alt: 'Professional plating' },
  { id: 37, url: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400', title: 'Curry Dish', alt: 'Spicy curry' },
  { id: 38, url: 'https://images.unsplash.com/photo-1543826173-e20f5e4e8e3e?w=400', title: 'Dim Sum', alt: 'Asian dumplings' },
  { id: 39, url: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=400', title: 'Lobster', alt: 'Seafood special' },
  { id: 40, url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', title: 'BBQ Party', alt: 'Grilled food' },
];

const Gallery = () => {
  const [allImages, setAllImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const IMAGES_PER_PAGE = 20;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // TODO: Replace with actual API call
        // const data = await apiService.getGalleryImages();
        
        // Using mock data for now
        const data = mockGalleryImages;
        
        setAllImages(data || []);
        // Load first 20 images
        setDisplayedImages((data || []).slice(0, IMAGES_PER_PAGE));
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        setAllImages([]);
        setDisplayedImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const loadMoreImages = () => {
    setLoadingMore(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = currentPage * IMAGES_PER_PAGE;
      const endIndex = startIndex + IMAGES_PER_PAGE;
      const newImages = allImages.slice(startIndex, endIndex);
      
      setDisplayedImages([...displayedImages, ...newImages]);
      setCurrentPage(nextPage);
      setLoadingMore(false);
    }, 500);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const hasMoreImages = displayedImages.length < allImages.length;

  return (
    <div className="min-h-screen py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        ) : displayedImages.length > 0 ? (
          <div className="relative">
            {/* Masonry Grid Layout */}
            <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-1">
              {displayedImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer rounded-xl overflow-hidden transition-all break-inside-avoid mb-1"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.url || image}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm">
                      View Full Size
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Blur Gradient Overlay */}
            {hasMoreImages && (
              <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-orange-50 via-orange-50/95 to-transparent pointer-events-none"></div>
            )}

            {/* Load More Button */}
            {hasMoreImages && (
              <div className="text-center mt-12 relative z-10">
                <button
                  onClick={loadMoreImages}
                  disabled={loadingMore}
                  className="px-10 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-base font-semibold rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  {loadingMore ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <span>Load More</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* All Images Loaded Message */}
            {!hasMoreImages && allImages.length > IMAGES_PER_PAGE && (
              <div className="text-center mt-12">
                <p className="text-gray-600 text-base font-medium">
                  🎉 You've reached the end! All {allImages.length} images loaded.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📸</div>
            <p className="text-gray-600 text-lg">No images available in the gallery yet.</p>
          </div>
        )}

        {/* Modal for full-size image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white bg-orange-500 hover:bg-orange-600 rounded-full p-3 transition-colors z-10"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.url || selectedImage}
                alt={selectedImage.alt || 'Full size image'}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
        
      </div>
      <div className="text-center mb-16">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to QuizCoffeeStudio, where your creative ideas come to life! My team and I offer comprehensive video editing services, including shooting, and I also provide courses designed to help you become a better video editor.
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8">
          <SocialBadge label="Instagram">
            <img src={instablack} alt="" />
          </SocialBadge>

          <SocialBadge label="Facebook">
           <img src={facebookblack} alt="" />
          </SocialBadge>

          <SocialBadge label="Youtube">
           <img src={youtubeblack} alt="" />
          </SocialBadge>

          <SocialBadge label="Linkedin">
           <img src={linkedinblack} alt="" />
          </SocialBadge>
        </div>
    </div>
  );
};

export default Gallery;