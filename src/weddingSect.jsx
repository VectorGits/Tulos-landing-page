import React from 'react';

const WeddingSect = () => {
	return(
		<>
		<div className="relative mx-5 my-8 rounded-lg overflow-hidden">
		<img src="/marriage-groomXbride1.jpeg" alt="Wedding" className="w-full object-cover h-80" /> {/* Replace with your image path */}
		<div className="bottom-0 left-0 right-0 bg-white bg-opacity-75 text-center py-6">
			<h2 className="text-2xl font-bold">WEAR TO WEDDING</h2>
			<p className="mt-2">A stunning array of looks to keep the bridegroom, bride and guests smartly dressed for the occasion</p>
			<button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded-full">See Details</button>
		</div>
		</div>
		</>
	)
}

export default WeddingSect;
