import React, { useState } from "react";
import "./machineCard.css";
import { Image } from "cloudinary-react";

const MachineCard = ({ machine, display, setdisplay }) => {
	const [currentPic, setcurrentPic] = useState(0);
	return (
		<div className={display} id='machine-card-back'>
			<img
				src='https://media.discordapp.net/attachments/902991650727538769/949095826062446632/240_F_93260478_CMUPLbmtSVKDsyPxJXZydSgteg4bTQaV-removebg-preview.png'
				alt=''
				className='close-machien-card-icon'
				onClick={() => setdisplay("machine-card-none")}
			/>
			<div className='machine-card'>
				<div className='carrouselle-card'>
					<div className='arrow-box'>
						<img
							src='https://cdn.iconscout.com/icon/premium/png-128-thumb/chevron-force-left-1667913-2039436.png'
							srcset='https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-force-left-1667913-2039436.png 1x, https://cdn.iconscout.com/icon/premium/png-128-thumb/chevron-force-left-1667913-2039436.png 2x'
							alt='Chevron Force Left Icon'
							loading='lazy'
							className='arrow-icon left-arrow'
							onClick={() => {
								if (currentPic > 0)
									setcurrentPic(currentPic - 1);
							}}
						/>
					</div>
					<Image
						cloudName='outibois'
						public_id={machine.image[currentPic]}
						className='machine-card-image'
					/>
					<div className='arrow-box'>
						<img
							src='https://cdn.iconscout.com/icon/premium/png-128-thumb/chevron-force-right-1667912-2039435.png'
							srcset='https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-force-right-1667912-2039435.png 1x, https://cdn.iconscout.com/icon/premium/png-128-thumb/chevron-force-right-1667912-2039435.png 2x'
							alt='Chevron Force Right Icon'
							loading='lazy'
							className='arrow-icon right-arrow'
							onClick={() => {
								if (currentPic < machine.image.length - 1)
									setcurrentPic(currentPic + 1);
							}}
						/>
					</div>
				</div>
				<div className='details'>
					<div className='machine-card-name'>{machine.name}</div>
					<div className='machine-card-discription'>
						{machine.discription.split(".").map((line, i) => (
							<p key={i}>{line}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MachineCard;
