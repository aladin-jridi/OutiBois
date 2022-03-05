import React from "react";
import "./machineCard.css";
import { Image } from "cloudinary-react";

const MachineCard = ({ machine, display, setdisplay }) => {
	return (
		<div className={display} id='machine-card-back'>
			<img
				src='https://media.discordapp.net/attachments/902991650727538769/949095826062446632/240_F_93260478_CMUPLbmtSVKDsyPxJXZydSgteg4bTQaV-removebg-preview.png'
				alt=''
				className='close-machien-card-icon'
				onClick={() => setdisplay("machine-card-none")}
			/>
			<div className='machine-card'>
				<Image
					cloudName='outibois'
					public_id={machine.image[0]}
					className='machine-card-image'
				/>
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
