function CardSkeleton() {
	return (
		<div className="relative text-white font-delaGothicOne flex flex-col min-w-72 h-[500px] p-10 bg-gray-700 rounded-xl justify-center items-center gap-6 animate-pulse">
			<div className="w-full h-8 bg-gray-500 rounded-lg"></div>
			<div className="w-full h-1/2 bg-gray-500 rounded-lg"></div>
			<div className="w-full h-8 bg-gray-500 rounded-lg"></div>
		</div>
	);
}

export default CardSkeleton;
