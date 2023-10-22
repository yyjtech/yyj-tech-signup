import cn from "classnames"
import React from "react"

const ChannelStewardCard = ({ children, className, ...props }) => {
    const steward = props.steward
    const channels = props.steward.channels
    console.log(channels)

  return (
    <>
     <div className="card steward-card">
        <strong><h3 id={steward.name}>{steward.name}</h3></strong>
        <p className="text-gray-600 text-sm"><em>{steward.bio}</em></p>

        <div className="steward-card__contents mt-4">

            <div className="steward-card__image">
                <img src={steward.imageURL} alt="" />
            </div>

            <div className="steward-card__details">

                <p><strong>Username:</strong> @{steward.username}</p>
                <p><strong>Member since:</strong> {steward.joinYear}</p>

                <h4>Channels</h4>
                <ul className="text-gray-800">
                    {channels.map((channel,idx) => 
                        <li>#{channel}</li>
                    )}
                </ul>

            </div>

        </div>
    </div>
    </>
    
  )
}

export default ChannelStewardCard
