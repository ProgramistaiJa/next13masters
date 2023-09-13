"use client";

import { useState } from "react";

export const ProductCounter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="flex">
			<button
				className="border border-slate-200 px-4"
				onClick={() => setCount((count) => count - 1)}
			>
				-
			</button>
			<input readOnly value={count} className="border border-slate-200" />
			<button
				className="border border-slate-200 px-4"
				onClick={() => setCount((count) => count + 1)}
			>
				+
			</button>
		</div>
	);
};
