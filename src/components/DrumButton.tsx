type DrumButtonProps = {
	children?: JSX.Element | string;
	onClick: () => void;
};
function DrumButton({ children ,onClick }: DrumButtonProps) {
	return (
		<button onClick={onClick} className="bg-gray-100 font-bold shadow-2xl rounded-md border-black h-20 w-20 flex justify-center items-center text-xl border-2 ">
			{children}
		</button>
	);
}

export default DrumButton;
